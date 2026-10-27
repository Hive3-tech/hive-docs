declare module "virtual:docs-manifest" {
  import type { NavSectionData } from "@/app/types";

  const manifest: { sections: NavSectionData[]; home: { path: string; title: string } | null };
  export default manifest;
}

declare module "virtual:docs-pages" {
  import type { PageModule } from "@/app/types";

  const loaders: Record<string, () => Promise<PageModule>>;
  export default loaders;
}

declare module "virtual:docs-search" {
  /** URL of the serialized search index (a separate JSON asset). */
  const url: string;
  export default url;
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
