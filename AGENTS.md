# Hive3 Documentation Site

## Scope and Stack
- React + TypeScript + Vite documentation site for the Hive3 platform.
- React Router v7 with `createBrowserRouter`.
- Tailwind CSS v4 using CSS-first config.
- Radix/shadcn UI components in `src/app/components/ui`.

## Build and Development
- Install dependencies with `npm i`.
- Run dev server with `npm run dev`.
- Build for production with `npm run build`.

## Deployment
- Static SPA deploy on Netlify.
- Netlify redirect fallback must send all routes to `/index.html`.
- `netlify.toml` and `public/_redirects` should both reflect SPA routing behavior.

## Repository Layout
- `src/app/routes.tsx` contains all route definitions.
- `src/app/components/doc-layout.tsx` orchestrates global layout.
- `src/app/components/left-sidebar.tsx` and `right-sidebar.tsx` drive navigation.
- `src/app/components/doc-components.tsx` hosts doc primitives (`CodeBlock`, `Callout`, `Step`, `InlineCode`).
- `src/app/pages/` contains each documentation page component.
- `src/styles/` contains global and design styles.

## TypeScript
- `tsconfig.json` is required for LSP and path aliases.
- Use alias import: `@/` → `src/`.
- Keep `strict: true` and resolve imports with explicit paths.
- Prefer explicit types and consistent exports.

## Line Budget Guardrail
- Soft warning threshold: 300 lines per file (blank lines and comment-only lines ignored).
- Hard error threshold: 350 lines per file (blank lines and comment-only lines ignored).
- When a file approaches 300 lines, split by responsibility (layout, content blocks, helpers) rather than weakening lint rules.

## Conventions
- Keep generated/content-specific placeholders labeled as temporary until replaced with real Hive3 feature details.
- Use `Callout`, `Step`, `InlineCode`, and `CodeBlock` primitives from doc components.
- Match section IDs to right sidebar TOC entries to preserve scrollspy behavior.
