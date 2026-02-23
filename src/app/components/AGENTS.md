# Shared Documentation Components

## Layout Components
- `doc-layout.tsx`: top-level layout wrapper with top nav, sidebars, and footer.
- `top-nav.tsx`: brand/search/theme controls.
- `left-sidebar.tsx`: collapsible route navigation.
- `right-sidebar.tsx`: per-page table of contents using page `tocItems`.
- `footer.tsx`: site footer.
- `back-to-top.tsx`: page scroll helper.

## Doc Primitives
- `doc-components.tsx`: use these for all standard documentation blocks.
  - `CodeBlock({ code, language })`
  - `Callout({ type, title, children })`
  - `Step({ number, title, children })`
  - `InlineCode({ children })`

## UI Library
- Use existing `shadcn`/Radix components under `ui/` as dependencies.
- Prefer composition over editing library internals.
- Keep import paths consistent with existing project patterns.

## Line Budget Guardrail
- Soft warning at 300 lines, hard error at 350 lines (excluding blank/comment-only lines).
- If a component file grows past 300 lines, extract focused subcomponents or utilities.
