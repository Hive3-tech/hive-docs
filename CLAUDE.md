# Hive3 Documentation Site (docs.hive3.tech)

## Scope and Stack
- Static docs site: React 18, TypeScript (strict), Vite 6, Tailwind CSS v4 (CSS-first), React Router v7.
- Content is MDX (`src/content/**/*.mdx`). Every page is prerendered to static HTML at build time and hydrated on the client.
- The look mirrors the Hive3 app (app.hive3.tech): tokens, ambient backdrop and glass surfaces are ported from the app's `theme.css`.

## Commands
- `npm i` install. `npm run dev` dev server (full reload when MDX or `nav.ts` changes).
- `npm run typecheck` tsc strict. `npm run check` content/budget checks (see below). `npm test` font-privacy test.
- `npm run build` = tests, client build, SSR build, then `scripts/prerender.mjs` (writes `dist/<path>/index.html`, `sitemap.xml`, `robots.txt`).
- `npx vite preview` serves `dist/` like Netlify (prerendered pages; any other route gets the `/index.html` SPA fallback with 200).
- `npm run redirects` regenerates `public/_redirects` from `src/content/redirects.ts`.

## Adding or changing a page
1. Create `src/content/<section>/<slug>.mdx` (URL `/<section>/<slug>`; `src/content/index.mdx` is `/`; a section's `index.mdx` is `/<section>`).
2. Add the slug and nav title to the section in `src/content/nav.ts`. This file alone defines navigation, order, and prev/next. Pages may set `group: "Label"`; consecutive pages with the same group render as one collapsible sidebar group (the group holding the current page is open). A nav entry without a file is hidden; a file without a nav entry fails `npm run check` (files starting with `_` are scratch pages: routed, never listed).
3. Frontmatter (required): `title`, `description` (one sentence). Optional: `plan: honey|swarm|royal` (chip next to the title), `accent: events|courses|content|jobs|quests|addons|credentials|community|developer|default` (hero gradient; defaults to the section's accent in `nav.ts`).
4. Do not write an H1; the layout renders `title`. Start with an intro paragraph. `##` headings become "On this page" (ids are slugified heading text); use `###` for sub-steps.
5. Link internally with absolute doc paths (`/create/create-an-event#some-heading`). `npm run check` verifies the page and the anchor.
6. Moving or removing a published URL: add it to `src/content/redirects.ts`, run `npm run redirects`.

## MDX components (global, no import needed)
`Callout` (`type` note|tip|warning|plan), `Steps`/`Step` (`title`), `Figure` (`src`, `alt`, `caption?`, `darkSrc?`; click to zoom), `Walkthrough` (`src`, `poster`, `title`, `chapters=[{at, label}]`; muted autoplay when 50% visible, honors reduced motion), `PlanBadge` (`tier`, `plus?`), `PlanMatrix` (`group?`; data in `src/content/plans.ts`), `CardGrid`/`LinkCard` (`href`, `title`, `icon` = lucide name in kebab-case, `accent`), `UI` (exact on-screen label), `Path` (`items`), `Endpoint` (`method`, `path`, `scopes`), `Tabs` (`labels`) + `Tab`, fenced code (` ```bash title="…" `, highlighted at build time, copy button). Implementations live in `src/components/mdx/`; register new ones in `src/components/mdx/index.ts` and in the lists in `scripts/check.mjs`.

## Media
- Screenshots: `public/media/<section>/<slug>/<name>.webp`. `Figure` width/height are read from the image header at build time (`scripts/remark-media-size.mjs`) so layout never shifts; walkthrough videos are 16:10 boxes. The first screenshot or poster near the top of a page is preloaded with high priority by the prerenderer. Walkthroughs: `public/media/walkthroughs/<slug>.mp4` plus `<slug>.poster.webp`. Missing files only warn in `npm run check`.

## Performance rules
- Code is highlighted at build time (Shiki in the MDX pipeline); never add a runtime highlighter to the client.
- Page content is one lazy chunk per page (`virtual:docs-pages`); the main bundle only carries navigation data.
- The search index is a separate hashed JSON asset (`assets/search-index-*.json`) fetched on first ⌘K, not bundled JS.
- Header logos are small WebP files in `src/assets/` (displayed at 108×36, stored at 3×).

## Repository layout
- `src/content/` MDX pages, `nav.ts`, `redirects.ts`, `plans.ts`.
- `src/app/` routes (`routes.tsx`, generated from the content manifest), `site.ts` (manifest helpers), `theme.tsx`, `layout/` (top bar, sidebar, hero, TOC, pager, search dialog).
- `src/components/mdx/` MDX components. `src/lib/` helpers (`accents.ts` gradients, `icons.tsx`, `search-options.ts`).
- `src/entry-client.tsx` hydrates; `src/entry-server.tsx` renders for the prerenderer.
- `scripts/` build tooling: `vite-docs-plugin.mjs` (virtual modules: manifest, search index, icons), `lib/content.mjs` (MDX scanning), `prerender.mjs`, `check.mjs`, `gen-redirects.mjs`.
- `src/styles/` `theme.css` (tokens, surfaces), `prose.css`, `code.css`, `fonts.css` (self-hosted DM Sans; no Google font requests).

## Deployment
- Static SPA deploy on Netlify; Netlify publishes `dist/`.
- Netlify redirect fallback must send all routes to `/index.html` (status 200). `netlify.toml` and `public/_redirects` must both reflect SPA routing behavior: `_redirects` holds the 301s for old URLs followed by `/* /index.html 200` (generated by `npm run redirects`), and `netlify.toml` declares the same catch-all.
- Prerendered files are served before the fallback. A page records the path it was rendered for (`docs-prerendered-path` meta); the client hydrates only when that matches the URL, otherwise it renders fresh, so fallback routes show the right page or the not-found page (noindex).

## Conventions
- Strict TypeScript, no `any`. Alias `@/` is `src/`.
- Line budget per file (blank and comment lines ignored): soft 300, hard 350, enforced by `npm run check`. Split by responsibility instead of weakening it.
- Surfaces use the app's classes: `surface-glass` (cards), `surface-blur` (floating bars only), `surface-solid` (popovers, dialogs), `surface-plate`. Cards are `rounded-2xl`, buttons `rounded-xl`, badges `rounded-full`.
- Never write secrets or internal implementation names in docs. Product name is "Hive3".
