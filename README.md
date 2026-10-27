# Hive3 Docs

Source of docs.hive3.tech: MDX pages rendered with React, Vite and Tailwind, prerendered to static HTML and deployed on Netlify.

```bash
npm i
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run check      # frontmatter, links, nav consistency, line budget
npm run build      # tests + client build + SSR build + prerender into dist/
npx vite preview   # serve dist/ locally
```

## Writing a page

1. Add `src/content/<section>/<slug>.mdx` with `title` and `description` frontmatter.
2. List it in `src/content/nav.ts` (navigation order lives only there).
3. Use the built-in components (`Callout`, `Steps`, `Figure`, `Walkthrough`, `UI`, `Path`, `PlanBadge`, `PlanMatrix`, `CardGrid`, `Endpoint`, `Tabs`) without importing them.
4. Put images and videos under `public/media/…`.
5. Run `npm run check`.

`AGENTS.md` documents the components, media conventions and repository layout in detail.
