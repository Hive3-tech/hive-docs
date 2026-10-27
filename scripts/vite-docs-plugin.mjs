// Vite plugin: turns src/content into three virtual modules.
//   virtual:docs-manifest  nav sections + page metadata + heading lists (only pages whose file exists)
//   virtual:docs-search    serialized MiniSearch index (loaded lazily on first Cmd+K)
//   virtual:docs-icons     the lucide icons actually referenced by nav.ts and MDX `icon="..."` props
import MiniSearch from "minisearch";
import * as lucide from "lucide-react";
import { contentDir, loadPages, navSections, pageMeta } from "./lib/content.mjs";
import { searchIndexOptions } from "../src/lib/search-options.ts";

const IDS = ["virtual:docs-manifest", "virtual:docs-search", "virtual:docs-icons"];
const resolved = (id) => `\0${id}`;

export const toPascal = (kebab) =>
  kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

function buildManifest({ pages, scratch }) {
  const metaOf = (page) => ({
    path: page.path,
    file: page.file,
    sectionId: page.sectionId,
    navTitle: page.navTitle,
    ...pageMeta(page),
    headings: page.headings.filter((h) => h.depth === 2).map(({ text, id }) => ({ text, id })),
    hidden: Boolean(page.hidden),
  });
  const sections = navSections
    .map((section) => ({
      id: section.id,
      label: section.label,
      icon: section.icon,
      accent: section.accent,
      summary: section.summary,
      pages: pages.filter((p) => p.sectionId === section.id).map((p) => ({ slug: p.slug, title: p.navTitle, path: p.path })),
    }))
    .filter((section) => section.pages.length > 0);
  return {
    sections,
    home: pages.find((p) => p.sectionId === null)?.path ?? null,
    pages: [...pages, ...scratch].map(metaOf),
  };
}

function buildSearch({ pages }) {
  const index = new MiniSearch(searchIndexOptions);
  const docs = [];
  for (const page of pages) {
    const { title, description } = pageMeta(page);
    page.sections.forEach((section, i) => {
      const text = i === 0 ? `${description} ${section.text}`.trim() : section.text;
      if (!text && !section.heading) return;
      docs.push({
        id: `${page.path}#${section.anchor}`,
        title,
        heading: section.heading,
        path: page.path,
        anchor: section.anchor,
        snippet: text.slice(0, 220),
        text,
      });
    });
  }
  index.addAll(docs);
  return JSON.stringify(index);
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
  const generate = (id) => {
    const data = loadPages();
    if (id === "virtual:docs-manifest") return `export default ${JSON.stringify(buildManifest(data))};`;
    if (id === "virtual:docs-search") return `export default ${JSON.stringify(buildSearch(data))};`;
    return buildIcons(data);
  };
  const invalidate = () => {
    if (!server) return;
    for (const id of IDS) {
      const mod = server.moduleGraph.getModuleById(resolved(id));
      if (mod) server.moduleGraph.invalidateModule(mod);
    }
    server.ws.send({ type: "full-reload" });
  };

  return {
    name: "hive3-docs-content",
    resolveId: (id) => (IDS.includes(id) ? resolved(id) : null),
    load(id) {
      const virtualId = IDS.find((candidate) => resolved(candidate) === id);
      return virtualId ? generate(virtualId) : null;
    },
    configureServer(devServer) {
      server = devServer;
      devServer.watcher.add(contentDir);
      for (const event of ["add", "unlink", "change"]) {
        devServer.watcher.on(event, (file) => {
          if (file.startsWith(contentDir) && (file.endsWith(".mdx") || file.endsWith("nav.ts"))) invalidate();
        });
      }
    },
  };
}
