// Renders every route to static HTML after the client and SSR builds:
//   dist/<path>/index.html, dist/404.html, dist/sitemap.xml, dist/robots.txt
// Run via `npm run build`; needs dist/ (client build) and dist-ssr/ (vite build --ssr).
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { root, SITE_URL } from "./lib/content.mjs";

const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");
const template = readFileSync(join(dist, "index.html"), "utf8");
const { render, routeList } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);

const escapeHtml = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const SITE_NAME = "Hive3 Docs";

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
  ].join("\n    ");
}

async function renderPage(url) {
  const { html, head, canonical } = await render(url);
  return template.replace("<!--app-head-->", headTags(head, canonical)).replace("<!--app-html-->", html);
}

function write(file, contents) {
  mkdirSync(join(file, ".."), { recursive: true });
  writeFileSync(file, contents);
}

for (const { path } of routeList) {
  write(path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html"), await renderPage(path));
}
// Unknown URLs are served this page (with a 404 status) by public/_redirects.
write(join(dist, "404.html"), await renderPage("/404"));

const urls = routeList.filter((r) => !r.hidden).map((r) => `${SITE_URL}${r.path === "/" ? "" : r.path}`);
write(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`,
);
write(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${routeList.length} pages, 404.html, sitemap.xml and robots.txt`);
