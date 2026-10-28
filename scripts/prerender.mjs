// Renders every route to static HTML after the client and SSR builds:
//   dist/<path>/index.html, dist/sitemap.xml, dist/robots.txt
// Unknown URLs reach the client through the SPA fallback (/* -> /index.html 200), so each page records the path it was
// rendered for; the client only hydrates when that matches the URL and renders fresh otherwise.
// Run via `npm run build`; needs dist/ (client build) and dist-ssr/ (vite build --ssr).
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { canonicalUrl, loadPages, root, SITE_URL } from "./lib/content.mjs";

const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");
const template = readFileSync(join(dist, "index.html"), "utf8");
const { render, routeList } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);

const escapeHtml = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const SITE_NAME = "Hive3 Docs";

// The first screenshot or walkthrough poster near the top of a page is usually its LCP element: preload it with high priority
// so it is not starved by scripts and fonts on slow connections.
const MAX_LINE_FOR_PRELOAD = 40;
const firstMedia = new Map();
const { pages: contentPages, scratch } = loadPages();
for (const page of [...contentPages, ...scratch]) {
  const media = page.components.find((c) => (c.name === "Walkthrough" || c.name === "Figure") && c.line <= MAX_LINE_FOR_PRELOAD);
  const url = media?.attrs.poster ?? media?.attrs.src;
  if (url?.startsWith("/") && !url.endsWith(".mp4")) firstMedia.set(page.path, url);
}

function headTags({ title, description, path, noindex }, canonical) {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const image = `${SITE_URL}/og-image.png`;
  return [
    `<title>${escapeHtml(fullTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="${noindex ? "noindex" : "index,follow"}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...(firstMedia.has(path) ? [`<link rel="preload" as="image" href="${firstMedia.get(path)}" fetchpriority="high" />`] : []),
  ].join("\n    ");
}

async function renderPage(url) {
  const { html, head, canonical } = await render(url);
  const marker = `<meta name="docs-prerendered-path" content="${escapeHtml(url)}" />`;
  return template.replace("<!--app-head-->", `${headTags(head, canonical)}\n    ${marker}`).replace("<!--app-html-->", html);
}

function write(file, contents) {
  mkdirSync(join(file, ".."), { recursive: true });
  writeFileSync(file, contents);
}

for (const { path } of routeList) {
  write(path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html"), await renderPage(path));
}

const urls = routeList.filter((r) => !r.hidden).map((r) => canonicalUrl(r.path));
write(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`,
);
write(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${routeList.length} pages, sitemap.xml and robots.txt`);
