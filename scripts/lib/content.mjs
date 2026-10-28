// Shared content tooling: reads nav.ts, finds and parses every MDX page.
// Used by the Vite plugin (manifest, search, icons), check.mjs and prerender.mjs.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import { parse as parseYaml } from "yaml";
import GithubSlugger from "github-slugger";

export const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
export const contentDir = join(root, "src/content");
export const SITE_URL = "https://docs.hive3.tech";
/** Same rule as `canonicalUrl` in src/app/site.ts: Netlify serves `<path>/index.html` at `<path>/`. */
export const canonicalUrl = (path) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.replace(/\/+$/, "")}/`);

const nav = await import(pathToFileURL(join(contentDir, "nav.ts")).href);
export const { navSections, homePage, pagePath } = nav;

const parser = unified().use(remarkParse).use(remarkFrontmatter, ["yaml"]).use(remarkGfm).use(remarkMdx);

const TEXT_ATTRS = new Set(["title", "alt", "caption", "label", "path", "method", "description"]);

function* walkFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkFiles(full);
    else yield full;
  }
}

/** All .mdx files below src/content, as posix paths relative to src/content. */
export function listMdxFiles() {
  if (!existsSync(contentDir)) return [];
  return [...walkFiles(contentDir)]
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => relative(contentDir, f).split(sep).join("/"))
    .sort();
}

function attrString(node, name) {
  const attr = node.attributes?.find((a) => a.type === "mdxJsxAttribute" && a.name === name);
  return typeof attr?.value === "string" ? attr.value : undefined;
}

function expressionStrings(node) {
  const out = [];
  for (const attr of node.attributes ?? []) {
    if (attr.type !== "mdxJsxAttribute" || typeof attr.value === "string" || !attr.value) continue;
    for (const m of attr.value.value.matchAll(/(["'`])((?:\\.|(?!\1).)*)\1/g)) out.push(m[2]);
  }
  return out;
}

/** Plain text of a mdast node, including labels carried in JSX attributes. */
export function nodeText(node) {
  if (node.type === "text" || node.type === "inlineCode") return node.value;
  // Code blocks are mostly repeated boilerplate: index only the opening lines (the command or request line).
  if (node.type === "code") return node.value.split("\n").slice(0, 2).join(" ").slice(0, 160);
  const parts = [];
  if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
    for (const attr of node.attributes ?? []) {
      if (attr.type === "mdxJsxAttribute" && TEXT_ATTRS.has(attr.name) && typeof attr.value === "string") parts.push(attr.value);
    }
    if (node.name === "Path" || node.name === "Tabs") parts.push(...expressionStrings(node));
  }
  if (node.type === "mdxFlowExpression" || node.type === "mdxTextExpression" || node.type === "mdxjsEsm") return "";
  for (const child of node.children ?? []) parts.push(nodeText(child));
  return parts.join(node.type === "paragraph" || node.type === "heading" || node.type === "inlineCode" ? "" : " ");
}

function headingText(node) {
  return (node.children ?? []).map((c) => (c.type === "text" || c.type === "inlineCode" ? c.value : headingText(c))).join("");
}

function countCodeLines(source) {
  let inBlockComment = false;
  let n = 0;
  for (const raw of source.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (inBlockComment) {
      if (line.includes("*/")) inBlockComment = false;
      continue;
    }
    if (line.startsWith("/*") || line.startsWith("{/*")) {
      if (!line.includes("*/")) inBlockComment = true;
      continue;
    }
    if (line.startsWith("//") || line.startsWith("<!--")) continue;
    n += 1;
  }
  return n;
}

export { countCodeLines };

/** Parse one MDX source: frontmatter, headings, search sections, links, media, icons. */
export function parseMdx(source) {
  const tree = parser.parse(source);
  let frontmatter = {};
  let frontmatterError;
  const headings = [];
  const links = [];
  const media = [];
  const icons = new Set();
  const components = [];
  let h1Count = 0;
  const sections = [];
  const slugger = new GithubSlugger();
  let current = { heading: "", anchor: "", chunks: [] };
  sections.push(current);

  const collectRefs = (node) => {
    const line = node.position?.start.line;
    if (node.type === "link" && typeof node.url === "string") links.push({ url: node.url, line });
    if (node.type === "image" && typeof node.url === "string") media.push({ url: node.url, line });
    if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
      if (node.name) {
        const attrs = {};
        for (const attr of node.attributes ?? []) {
          if (attr.type === "mdxJsxAttribute") attrs[attr.name] = typeof attr.value === "string" ? attr.value : null;
        }
        components.push({ name: node.name, attrs, line: node.position?.start.line });
      }
      const href = attrString(node, "href");
      if (href) links.push({ url: href, line });
      for (const name of ["src", "darkSrc", "poster"]) {
        const v = attrString(node, name);
        if (v) media.push({ url: v, line });
      }
      const icon = attrString(node, "icon");
      if (icon) icons.add(icon);
    }
    for (const child of node.children ?? []) collectRefs(child);
  };

  for (const node of tree.children) {
    if (node.type === "yaml") {
      try {
        frontmatter = parseYaml(node.value) ?? {};
      } catch (error) {
        frontmatterError = String(error);
      }
      continue;
    }
    collectRefs(node);
    if (node.type === "heading" && (node.depth === 2 || node.depth === 3)) {
      const text = headingText(node);
      const id = slugger.slug(text);
      headings.push({ depth: node.depth, text, id });
      current = { heading: text, anchor: id, chunks: [] };
      sections.push(current);
      continue;
    }
    if (node.type === "heading") {
      if (node.depth === 1) h1Count += 1;
      slugger.slug(headingText(node));
    }
    current.chunks.push(nodeText(node));
  }

  return {
    frontmatter,
    frontmatterError,
    headings,
    links,
    media,
    components,
    h1Count,
    icons: [...icons],
    sections: sections
      .map((s) => ({ heading: s.heading, anchor: s.anchor, text: s.chunks.join(" ").replace(/\s+/g, " ").trim() }))
      .filter((s) => s.text || s.heading),
  };
}

/** Enumerate pages declared in nav.ts and the state of their files. */
export function scanPages() {
  const files = new Set(listMdxFiles());
  const entries = [{ section: null, page: homePage, file: "index.mdx" }];
  for (const section of navSections) {
    for (const page of section.pages) entries.push({ section, page, file: `${section.id}/${page.slug}.mdx` });
  }
  const pages = entries.map(({ section, page, file }) => ({
    file,
    sectionId: section?.id ?? null,
    sectionLabel: section?.label ?? null,
    slug: page.slug,
    navTitle: page.title,
    group: page.group,
    path: pagePath(section?.id ?? null, page.slug),
    accent: section?.accent ?? "default",
    exists: files.has(file),
  }));
  const declared = new Set(entries.map((e) => e.file));
  const orphans = [...files].filter((f) => !declared.has(f) && !f.split("/").pop().startsWith("_"));
  const hidden = [...files].filter((f) => f.split("/").pop().startsWith("_"));
  return { pages, orphans, hidden };
}

/** Existing, parsed pages plus any `_`-prefixed scratch pages (routed, never listed). */
export function loadPages() {
  const { pages, orphans, hidden } = scanPages();
  const out = [];
  for (const page of pages) {
    if (!page.exists) continue;
    out.push({ ...page, ...parseMdx(readFileSync(join(contentDir, page.file), "utf8")) });
  }
  const scratch = hidden.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const parsed = parseMdx(readFileSync(join(contentDir, file), "utf8"));
    return { file, sectionId: null, sectionLabel: null, slug, navTitle: slug, path: `/${slug.replace(/\/index$/, "")}`, accent: "default", exists: true, hidden: true, ...parsed };
  });
  return { pages: out, scratch, orphans, missing: pages.filter((p) => !p.exists) };
}

export function pageMeta(page) {
  const fm = page.frontmatter ?? {};
  return {
    title: String(fm.title ?? page.navTitle),
    description: String(fm.description ?? ""),
    plan: fm.plan,
    accent: fm.accent ?? page.accent,
  };
}
