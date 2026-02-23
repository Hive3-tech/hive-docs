# Documentation Pages Agent Instructions

## Pattern
- Export a single page component per file in `src/app/pages`.
- Follow the app layout pattern from `hive-docs/AGENTS.md`.
- Import and render `RightSidebar` with `tocItems` for each page.
- Use doc primitives from `doc-components.tsx` (`CodeBlock`, `Callout`, `Step`, `InlineCode`).
- Include breadcrumb, gradient title, description, section anchors, and previous/next navigation.
- Ensure section `id` values exactly match `tocItems` labels.

## File Organization
- Flat structure: one page file per route.
- Prefer keeping page content inside the page file until it approaches the soft line budget.
- Soft warning at 300 lines, hard error at 350 lines (excluding blank/comment-only lines); split before hard cap.
- If split is needed, keep helper components local to the page module first.
- Keep route filenames in kebab-case matching route segments.

## Content Rules
- Write for end users by default; keep developer-only docs separate in Developer Reference section.
- Document real Hive3 behavior and feature sets, not placeholder SDK snippets.
- Call out tier requirements where they apply (Worker Bee, Honey Bee, Swarm, Royal Hive).
- Use placeholders for media only when approved temporary content is acceptable.
