// Vite plugin: turns src/content into three virtual modules.
//   virtual:docs-manifest  nav sections + page metadata + heading lists (only pages whose file exists)
//   virtual:docs-search    serialized MiniSearch index (loaded lazily on first Cmd+K)
//   virtual:docs-icons     the lucide icons actually referenced by nav.ts and MDX `icon="..."` props
import { createHash } from "node:crypto";
import { join } from "node:path";
import MiniSearch from "minisearch";
import * as lucide from "lucide-react";
import { contentDir, loadPages, navSections, pageMeta } from "./lib/content.mjs";
import { searchIndexOptions } from "../src/lib/search-options.ts";

const IDS = ["virtual:docs-manifest", "virtual:docs-pages", "virtual:docs-search", "virtual:docs-icons"];
const PAGE_PREFIX = "virtual:docs-page/";
const SEARCH_DEV_URL = "/__docs/search-index.json";
const resolved = (id) => `\0${id}`;
export const toPascal = (kebab) =>
  kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

const pageMetaOf = (page) => ({
  path: page.path,
  sectionId: page.sectionId,
  navTitle: page.navTitle,
  ...pageMeta(page),
  headings: page.headings.filter((h) => h.depth === 2).map(({ text, id }) => ({ text, id })),
  hidden: Boolean(page.hidden),
});

/** Navigation data only: small enough to ship in the main bundle. Page metadata travels with each page chunk. */
function buildManifest({ pages, scratch }) {
  const sections = navSections
    .map((section) => ({
      id: section.id,
      label: section.label,
      icon: section.icon,
      accent: section.accent,
      summary: section.summary,
      pages: pages.filter((p) => p.sectionId === section.id).map((p) => ({ slug: p.slug, title: p.navTitle, path: p.path, group: p.group })),
    }))
    .filter((section) => section.pages.length > 0);
  const home = pages.find((p) => p.sectionId === null);
  return { sections, home: home ? { path: home.path, title: home.navTitle } : null };
}

/** One lazy loader per page; each resolves a chunk with the MDX component and its metadata. */
function buildPageLoaders({ pages, scratch }) {
  const entries = [...pages, ...scratch].map((p) => `  ${JSON.stringify(p.path)}: () => import(${JSON.stringify(PAGE_PREFIX + p.file)}),`);
  return `export default {\n${entries.join("\n")}\n};\n`;
}

function buildPageModule(file, data) {
  const page = [...data.pages, ...data.scratch].find((p) => p.file === file);
  if (!page) return null;
  return `export { default } from ${JSON.stringify(join(contentDir, file))};\nexport const meta = ${JSON.stringify(pageMetaOf(page))};\n`;
}

function buildSearch({ pages }) {
  const index = new MiniSearch(searchIndexOptions);
  const table = [];
  const docs = [];
  pages.forEach((page) => {
    const { title, description } = pageMeta(page);
    const p = table.push({ path: page.path, title }) - 1;
    page.sections.forEach((section, i) => {
      const text = i === 0 ? `${description} ${section.text}`.trim() : section.text;
      if (!text && !section.heading) return;
      docs.push({ id: docs.length, title, heading: section.heading, text, p, a: section.anchor, h: section.heading, s: text.slice(0, 140) });
    });
  });
  index.addAll(docs);
  return JSON.stringify({ pages: table, index });
}

function buildIcons({ pages, scratch }) {
  const names = new Set(navSections.map((s) => s.icon));
  for (const page of [...pages, ...scratch]) page.icons.forEach((icon) => names.add(icon));
  const known = [...names].filter((name) => {
    const ok = toPascal(name) in lucide;
    if (!ok) console.warn(`[docs] Unknown lucide icon "${name}"`);
    return ok;
  });
  const imports = known.map((name) => toPascal(name)).join(", ");
  const entries = known.map((name) => `  ${JSON.stringify(name)}: ${toPascal(name)},`).join("\n");
  return `import { ${imports || "BookOpen"} } from "lucide-react";\nexport default {\n${entries}\n};\n`;
}

export function docsContent() {
  let server;
  let searchJson = "";
  const searchFor = (data) => {
    searchJson = buildSearch(data);
    return createHash("sha1").update(searchJson).digest("hex").slice(0, 8);
  };
  const invalidate = () => {
    if (!server) return;
    for (const mod of server.moduleGraph.idToModuleMap.values()) {
      if (mod.id?.startsWith("\0virtual:docs-") || mod.id?.startsWith(PAGE_PREFIX)) server.moduleGraph.invalidateModule(mod);
    }
    server.ws.send({ type: "full-reload" });
  };

  return {
    name: "hive3-docs-content",
    resolveId(id) {
      if (IDS.includes(id) || id.startsWith(PAGE_PREFIX)) return resolved(id);
      return null;
    },
    load(id, options) {
      if (!id.startsWith("\0")) return null;
      const virtualId = id.slice(1);
      const data = loadPages();
      if (virtualId.startsWith(PAGE_PREFIX)) return buildPageModule(virtualId.slice(PAGE_PREFIX.length), data);
      switch (virtualId) {
        case "virtual:docs-manifest":
          return `export default ${JSON.stringify(buildManifest(data))};`;
        case "virtual:docs-pages":
          return buildPageLoaders(data);
        case "virtual:docs-icons":
          return buildIcons(data);
        case "virtual:docs-search": {
          // The index is a separate JSON asset fetched on first Cmd+K, never inlined into JS.
          if (server) return `export default ${JSON.stringify(SEARCH_DEV_URL)};`;
          const hash = searchFor(data);
          const fileName = `assets/search-index-${hash}.json`;
          if (!options?.ssr) this.emitFile({ type: "asset", fileName, source: searchJson });
          return `export default ${JSON.stringify(`/${fileName}`)};`;
        }
        default:
          return null;
      }
    },
    configureServer(devServer) {
      server = devServer;
      devServer.watcher.add(contentDir);
      devServer.middlewares.use(SEARCH_DEV_URL, (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.end(buildSearch(loadPages()));
      });
      for (const event of ["add", "unlink", "change"]) {
        devServer.watcher.on(event, (file) => {
          if (file.startsWith(contentDir) && (file.endsWith(".mdx") || file.endsWith("nav.ts"))) invalidate();
        });
      }
    },
  };
}
