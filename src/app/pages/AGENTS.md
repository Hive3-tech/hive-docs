# Documentation Pages Agent Instructions

## Pattern
- Export a single page component per file in `src/app/pages`.
- Follow the app layout pattern from `hive-docs/AGENTS.md`.
- Import and render `RightSidebar` with `tocItems` for each page.
- Use doc primitives from `doc-components.tsx` (`CodeBlock`, `Callout`, `Step`, `InlineCode`, `Figure`).
- Include breadcrumb, gradient title, description, and section anchors.
- End every page with `<PagerNav />` (from `components/pager-nav.tsx`) instead of hand-written prev/next links; it derives neighbors from `orderedDocPages`.
- Ensure section `id` values exactly match `tocItems` labels.

## Components
- `CodeBlock` accepts an optional `title` prop for a filename/label bar (e.g. `title="Terminal"`).
- `Figure` renders a rounded, bordered screenshot with an optional caption; pass `darkSrc` for a dark-theme variant. Assets live at `public/imgs/<page-slug>/<section>-{light,dark}.png`.

## File Organization
- Flat structure: one page file per route. Nested URL paths (e.g. `/cli/quickstart`) still use flat filenames (`cli-quickstart.tsx`).
- Prefer keeping page content inside the page file until it approaches the soft line budget.
- Soft warning at 300 lines, hard error at 350 lines (excluding blank/comment-only lines); split before hard cap.
- Heavy tabular content (CLI command tables, API endpoint definitions) lives in a sibling `*-data.ts` module rendered by the page; data modules are exempt from the line budget.
- If a split is needed beyond data extraction, keep helper components local to the page module first.
- Keep route filenames in kebab-case matching route segments.

## Content Rules
- Write for end users by default; keep developer-only docs in the CLI and API Reference sections.
- Document real Hive3 behavior and feature sets, not placeholder SDK snippets. Never invent behavior — verify claims against the app/CLI/API source before writing them.
- Call out tier requirements where they apply (Worker Bee, Honey Bee, Swarm, Royal Hive) in a `Callout`.
- Use `Figure` for media; only include screenshots that exist under `public/imgs/`.
