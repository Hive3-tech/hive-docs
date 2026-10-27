declare module "virtual:docs-manifest" {
  import type { Accent } from "@/content/nav";

  export type ManifestPage = {
    path: string;
    file: string;
    sectionId: string | null;
    navTitle: string;
    title: string;
    description: string;
    plan?: "honey" | "swarm" | "royal";
    accent: Accent;
    headings: { text: string; id: string }[];
    hidden: boolean;
  };
  export type ManifestSection = {
    id: string;
    label: string;
    icon: string;
    accent: Accent;
    summary: string;
    pages: { slug: string; title: string; path: string }[];
  };
  const manifest: { sections: ManifestSection[]; home: string | null; pages: ManifestPage[] };
  export default manifest;
}

declare module "virtual:docs-search" {
  const index: string;
  export default index;
}

declare module "virtual:docs-icons" {
  import type { LucideIcon } from "lucide-react";
  const icons: Record<string, LucideIcon>;
  export default icons;
}

declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { MDXComponents } from "mdx/types";
  export const frontmatter: Record<string, unknown>;
  const MDXContent: ComponentType<{ components?: MDXComponents }>;
  export default MDXContent;
}
