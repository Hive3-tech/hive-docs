# Documentation Pages

Each file exports a single page component used in `routes.tsx`.

## Pattern

- Follow the page component pattern from the root `CLAUDE.md`
- Each page imports `RightSidebar` and passes `tocItems` for table-of-contents
- Use `doc-components.tsx` primitives: `CodeBlock`, `Callout`, `Step`, `InlineCode`, `Figure`
- Include breadcrumb, gradient title, description, and content sections
- End every page with `<PagerNav />` (from `components/pager-nav.tsx`) instead of hand-written prev/next links
- Section `id` attributes must match `tocItems` entries

## Components

- `CodeBlock` accepts an optional `title` prop for a filename/label bar (e.g. `title="Terminal"`)
- `Figure` renders a rounded, bordered screenshot with an optional caption; pass `darkSrc` for a dark-theme variant. Assets live at `public/imgs/<page-slug>/<section>-{light,dark}.png`

## File Organization

- Flat file structure — one file per page (e.g., `communities-overview.tsx`); nested URL paths (e.g. `/cli/quickstart`) still use flat filenames (`cli-quickstart.tsx`)
- Soft warning at 300 lines, hard error at 350 lines (ignore blank/comment-only lines)
- Heavy tabular content (CLI command tables, API endpoint definitions) lives in a sibling `*-data.ts` module rendered by the page; data modules are exempt from the line budget
- If a page section grows complex beyond data extraction, split into local sub-components before hitting the hard cap
- Page filenames use kebab-case matching their route path

## Content Guidelines

- Write for Hive3 platform users, not developers (except CLI and API Reference sections)
- Reference actual platform features — no placeholder SDK or fake API examples. Never invent behavior; verify claims against source before writing them
- Mention tier requirements (Worker Bee, Honey Bee, Swarm, Royal Hive) where applicable, in a `Callout`
- Use `Figure` for media; only include screenshots that exist under `public/imgs/`
