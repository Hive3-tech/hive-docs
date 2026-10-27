// `npm run check`: content and budget checks that tsc cannot do.
//   errors  -> exit code 1   warnings -> printed only (use --strict to promote missing pages to errors)
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { pathToFileURL } from "node:url";
import * as lucide from "lucide-react";
import { contentDir, countCodeLines, loadPages, root, scanPages } from "./lib/content.mjs";
import { toPascal } from "./vite-docs-plugin.mjs";
import { redirectsFile } from "./gen-redirects.mjs";
import { agentSetupFile } from "./gen-agent-setup.mjs";

const strict = process.argv.includes("--strict");
const errors = [];
const warnings = [];
const err = (where, message) => errors.push(`${where}  ${message}`);
const warn = (where, message) => warnings.push(`${where}  ${message}`);

const PLANS = ["honey", "swarm", "royal"];
const ACCENTS = ["events", "courses", "content", "jobs", "quests", "addons", "credentials", "community", "developer", "default"];
const TIERS = ["worker", "honey", "swarm", "royal"];
const enums = {
  Callout: { type: ["note", "tip", "warning", "plan"] },
  PlanBadge: { tier: TIERS },
  LinkCard: { accent: ACCENTS },
  Endpoint: { method: ["GET", "POST", "PUT", "PATCH", "DELETE"] },
};
const required = {
  Figure: ["src", "alt"],
  Walkthrough: ["src", "title"],
  LinkCard: ["href", "title"],
  Step: ["title"],
  Endpoint: ["method", "path"],
};

// ---- 1. Line budget -------------------------------------------------------------
function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", "dist", "dist-ssr", ".git"].includes(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}
for (const dir of ["src", "scripts"]) {
  for (const file of walk(join(root, dir))) {
    if (!/\.(ts|tsx|css|mjs|mdx)$/.test(file) || file.endsWith(".d.ts")) continue;
    const lines = countCodeLines(readFileSync(file, "utf8"));
    const rel = relative(root, file).split(sep).join("/");
    if (lines > 350) err(rel, `${lines} lines exceeds the hard limit of 350`);
    else if (lines > 300) warn(rel, `${lines} lines exceeds the soft limit of 300`);
  }
}

// ---- 2. Nav <-> files -----------------------------------------------------------
const { pages, scratch, orphans, missing } = loadPages();
for (const file of orphans) err(`src/content/${file}`, "has no entry in src/content/nav.ts");
for (const page of missing) (strict ? err : warn)(`src/content/${page.file}`, "is listed in nav.ts but the file does not exist (hidden from the site)");
for (const page of scratch) warn(`src/content/${page.file}`, "scratch page (underscore prefix): routed but not listed; delete before shipping");

const slugs = scanPages().pages;
const known = new Map(slugs.map((p) => [p.path, p]));
const headingIds = new Map(pages.map((p) => [p.path, new Set(p.headings.map((h) => h.id))]));

// ---- 3. Component names -----------------------------------------------------------
const indexSource = readFileSync(join(root, "src/components/mdx/index.ts"), "utf8");
const componentNames = new Set([...indexSource.matchAll(/^\s+([A-Z]\w*),?$/gm)].map((m) => m[1]));

// ---- 4. Per-page checks -----------------------------------------------------------
function checkLink(where, from, url) {
  if (/^(https?:|mailto:|tel:)/.test(url)) return;
  const [rawPath, hash] = url.split("#");
  const path = rawPath === "" ? from.path : rawPath.replace(/\/$/, "") || "/";
  if (rawPath !== "" && !path.startsWith("/")) return err(where, `relative link "${url}": use an absolute doc path like /create/create-an-event`);
  if (/\.[a-z0-9]+$/i.test(path)) {
    if (!existsSync(join(root, "public", path))) warn(where, `linked file ${path} is not in public/`);
    return;
  }
  const target = known.get(path);
  if (!target) return err(where, `link to ${url}: no such page in nav.ts`);
  if (!target.exists) return warn(where, `link to ${url}: page is not written yet`);
  if (hash && !headingIds.get(path)?.has(hash) && !/^(get|post|put|patch|delete)-/.test(hash)) err(where, `link to ${url}: no heading with id "${hash}"`);
}

for (const page of [...pages, ...scratch]) {
  const file = `src/content/${page.file}`;
  const fm = page.frontmatter;
  if (page.frontmatterError) err(file, `invalid YAML frontmatter: ${page.frontmatterError}`);
  for (const key of ["title", "description"]) {
    if (typeof fm[key] !== "string" || fm[key].trim() === "") err(file, `frontmatter "${key}" is required`);
  }
  if (fm.plan !== undefined && !PLANS.includes(fm.plan)) err(file, `frontmatter plan "${fm.plan}" must be one of ${PLANS.join(", ")}`);
  if (fm.accent !== undefined && !ACCENTS.includes(fm.accent)) err(file, `frontmatter accent "${fm.accent}" must be one of ${ACCENTS.join(", ")}`);
  if (page.h1Count > 0) err(file, "body contains an H1; the layout renders the frontmatter title");
  if (page.headings.some((h) => h.depth === 2) === false && page.sections.map((s) => s.text).join(" ").length > 1500) warn(file, "long page without any ## headings (no 'On this page')");

  for (const { url, line } of page.links) checkLink(`${file}:${line}`, page, url);
  for (const { url, line } of page.media) {
    if (url.startsWith("/") && !existsSync(join(root, "public", url))) warn(`${file}:${line}`, `missing media ${url}`);
  }
  for (const icon of page.icons) if (!(toPascal(icon) in lucide)) err(file, `unknown lucide icon "${icon}"`);
  for (const { name, attrs, line } of page.components) {
    const where = `${file}:${line}`;
    if (/^[A-Z]/.test(name) && !componentNames.has(name)) err(where, `<${name}> is not a docs component`);
    for (const key of required[name] ?? []) if (!attrs[key]) err(where, `<${name}> requires "${key}"`);
    for (const [key, allowed] of Object.entries(enums[name] ?? {})) {
      if (attrs[key] && !allowed.includes(attrs[key])) err(where, `<${name} ${key}="${attrs[key]}"> must be one of ${allowed.join(", ")}`);
    }
  }
}

// ---- 5. plans.ts hrefs, redirects ---------------------------------------------------
const plansFile = join(contentDir, "plans.ts");
if (existsSync(plansFile)) {
  readFileSync(plansFile, "utf8").split("\n").forEach((text, i) => {
    for (const m of text.matchAll(/href:\s*"([^"]+)"/g)) checkLink(`src/content/plans.ts:${i + 1}`, { path: "/" }, m[1]);
  });
}
const { legacyRedirects, sectionRootRedirects } = await import(pathToFileURL(join(contentDir, "redirects.ts")).href);
for (const [from, to] of [...Object.entries(legacyRedirects), ...Object.entries(sectionRootRedirects)]) {
  if (!known.has(to)) err("src/content/redirects.ts", `${from} -> ${to}: target is not in nav.ts`);
}
const redirectsPath = join(root, "public/_redirects");
if (!existsSync(redirectsPath) || readFileSync(redirectsPath, "utf8") !== redirectsFile()) err("public/_redirects", "is out of date; run `npm run redirects`");

// ---- 6. Wording rules ----------------------------------------------------------------------
// Internal staff tooling must not appear in public docs ("Staff Members" is a real UI label and stays allowed).
const FORBIDDEN = /team tools|team staff|staff permission|\/team\//i;
// The CLI's name is `hive3`. A bare `hive` command is allowed only in the one alias note ("`hive` also works ...").
const BARE_HIVE = /(?<![\w/.@$-])hive(?![\w-])/;
const ALIAS_NOTE = /`hive` also works/;
for (const file of walk(contentDir)) {
  if (!/\.(mdx|ts)$/.test(file)) continue;
  const rel = relative(root, file).split(sep).join("/");
  const developerPage = rel.startsWith("src/content/developers/");
  readFileSync(file, "utf8").split("\n").forEach((text, i) => {
    if (FORBIDDEN.test(text)) err(`${rel}:${i + 1}`, "mentions internal staff tooling; remove it from public docs");
    if (developerPage && BARE_HIVE.test(text) && !ALIAS_NOTE.test(text)) err(`${rel}:${i + 1}`, "bare `hive` command; the CLI is called `hive3` (only the alias note may say `hive`)");
  });
}
const agentSetupPath = join(root, "public/agent-setup.md");
if (!existsSync(agentSetupPath) || readFileSync(agentSetupPath, "utf8") !== agentSetupFile()) err("public/agent-setup.md", "is out of date; run `npm run agent-setup`");

// ---- report ---------------------------------------------------------------------------
for (const line of warnings) console.log(`warn   ${line}`);
for (const line of errors) console.log(`error  ${line}`);
console.log(`\n${pages.length} pages checked, ${missing.length} listed but not written; ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length > 0 ? 1 : 0);
