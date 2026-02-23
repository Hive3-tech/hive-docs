# Documentation Pages

Each file exports a single page component used in `routes.tsx`.

## Pattern

- Follow the page component pattern from the root `CLAUDE.md`
- Each page imports `RightSidebar` and passes `tocItems` for table-of-contents
- Use `doc-components.tsx` primitives: `CodeBlock`, `Callout`, `Step`, `InlineCode`
- Include breadcrumb, gradient title, description, content sections, and prev/next navigation
- Section `id` attributes must match `tocItems` entries

## File Organization

- Flat file structure — one file per page (e.g., `communities-overview.tsx`)
- Soft warning at 300 lines, hard error at 350 lines (ignore blank/comment-only lines)
- If a page section grows complex, split into local sub-components before hitting the hard cap
- Page filenames use kebab-case matching their route path

## Content Guidelines

- Write for Hive3 platform users, not developers (except Developer Reference section)
- Reference actual platform features — no placeholder SDK or fake API examples
- Mention tier requirements (Worker Bee, Honey Bee, Swarm, Royal Hive) where applicable
- Use screenshots or diagrams where helpful (placeholder images acceptable initially)
