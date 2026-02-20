# Shared Components

## Layout Components

- `doc-layout.tsx` - Top-level layout: top nav + left sidebar + content slot
- `top-nav.tsx` - Header with logo, search, theme toggle
- `left-sidebar.tsx` - Collapsible navigation sidebar (sections with items)
- `right-sidebar.tsx` - Per-page table of contents (scrollspy based on tocItems)
- `footer.tsx` - Site footer
- `back-to-top.tsx` - Scroll-to-top button

## Doc Primitives (`doc-components.tsx`)

- `CodeBlock` - Syntax-highlighted code with copy button. Props: `code`, `language`
- `Callout` - Info/warning/success/error callout box. Props: `type`, `title`, `children`
- `Step` - Numbered step with title and description. Props: `number`, `title`, `children`
- `InlineCode` - Inline code span with brand styling. Props: `children`

## UI Library (`ui/`)

shadcn/Radix components — do not manually edit. Use as-is from imports.
