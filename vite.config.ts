import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from "rehype-slug";
import rehypeShiki from "@shikijs/rehype";
import { existsSync, readFileSync } from "node:fs";
import type { Plugin } from "vite";
import { docsContent } from "./scripts/vite-docs-plugin.mjs";

// Code fences: highlighted at build time with a light and a dark theme (CSS variables,
// switched by the `.dark` class). Language and ```title="..."``` meta become data attributes.
const shikiOptions = {
  themes: { light: "github-light", dark: "github-dark" },
  defaultColor: false,
  defaultLanguage: "text",
  fallbackLanguage: "text",
  transformers: [
    {
      pre(node: { properties: Record<string, unknown> }) {
        const self = this as unknown as { options: { lang: string; meta?: { __raw?: string } } };
        node.properties["data-language"] = self.options.lang;
        const title = /title="([^"]+)"/.exec(self.options.meta?.__raw ?? "")?.[1];
        if (title) node.properties["data-title"] = title;
      },
    },
  ],
};

/** `vite preview` only: serve dist/<path>/index.html and the prerendered 404 page, the way Netlify does. */
function servePrerendered(): Plugin {
  return {
    name: "serve-prerendered",
    configurePreviewServer(server) {
      const dist = path.resolve(__dirname, "dist");
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url ?? "/", "http://preview.local").pathname;
        if (path.extname(url)) return next();
        const file = path.join(dist, url, "index.html");
        const found = existsSync(file);
        res.statusCode = found ? 200 : 404;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(readFileSync(found ? file : path.join(dist, "404.html")));
      });
    },
  };
}

export default defineConfig({
  plugins: [
    servePrerendered(),
    docsContent(),
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: "frontmatter" }], remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeShiki, shikiOptions]],
      }),
    },
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
