# Hive3 Documentation Site

React + Vite documentation site for the Hive3 platform. Figma-generated UI with manual content pages.

## Tech Stack

- Vite 6 + React 18 + TypeScript
- React Router v7 (createBrowserRouter)
- Tailwind CSS v4 (CSS-based config, no `tailwind.config.js`)
- Radix/shadcn UI components

## Build and Run

- `npm run dev` - Start local dev server
- `npm run build` - Vite production build

## Deployment

- Static SPA deployed to Netlify or Vercel
- Requires SPA redirect: all routes → `/index.html`

## Project Structure

- `src/app/routes.tsx` - All route definitions (single file, createBrowserRouter)
- `src/app/components/doc-layout.tsx` - Layout wrapper (top nav, left sidebar, content area)
- `src/app/components/left-sidebar.tsx` - Navigation sidebar with collapsible sections
- `src/app/components/right-sidebar.tsx` - Table of contents sidebar (per-page tocItems)
- `src/app/components/doc-components.tsx` - Reusable doc primitives: `CodeBlock`, `Callout`, `Step`, `InlineCode`
- `src/app/components/ui/` - shadcn/Radix UI component library (do not manually edit)
- `src/app/pages/` - Documentation page components
- `src/styles/` - Global CSS and theme

## Page Component Pattern

Every documentation page follows this structure:

```tsx
export function SomePage() {
  const tocItems = [
    { id: "section-id", label: "Section Label" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-5xl mx-auto px-4 py-12 xl:pr-80">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          Category / <span className="text-foreground">Page Title</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Page Title
        </h1>
        <p className="text-lg text-muted-foreground mb-12">Description</p>

        {/* Content sections with id matching tocItems */}
        <div className="space-y-12">
          <section id="section-id">...</section>
        </div>

        {/* Prev/Next navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link to="/prev">...</Link>
          <Link to="/next">...</Link>
        </div>
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
```

## Conventions

- Brand gradient: `from-[#6B01B6] to-[#512DA8]`
- Active sidebar highlight: `bg-[#6B01B6] text-white`
- Use `Callout` for tips, warnings, and important notes
- Use `Step` for numbered step-by-step instructions
- Use `CodeBlock` for code examples
- Use `InlineCode` for inline references
- Section IDs must match `tocItems` for right sidebar scrollspy
- Import icons from `lucide-react`
