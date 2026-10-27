import type { ComponentType } from "react";
import type { MDXComponents } from "mdx/types";
import type { ManifestPage } from "virtual:docs-manifest";
import { mdxComponents } from "@/components/mdx";
import type { Tier } from "@/content/plans";
import { accentFor, sections } from "@/app/site";
import { Hero } from "./Hero";
import { Pager } from "./Pager";
import { Toc } from "./Toc";
import { useHead } from "./useHead";
import { PageFooter } from "./PageFooter";

type Content = ComponentType<{ components?: MDXComponents }>;

export function DocPage({ page, Content }: { page: ManifestPage; Content: Content }) {
  useHead({ title: page.title, description: page.description, path: page.path, noindex: page.hidden });
  const section = sections.find((s) => s.id === page.sectionId);
  const eyebrow = section && page.path !== `/${section.id}` ? { label: section.label, href: section.pages[0]?.path ?? "/" } : undefined;
  return (
    <div className="px-4 pb-16 pt-6 sm:px-8 lg:px-10 lg:pt-8">
      <div className="mx-auto flex max-w-[72rem] items-start gap-12">
        <div className="min-w-0 max-w-3xl flex-1">
          <Hero title={page.title} description={page.description} plan={page.plan as Tier | undefined} accent={accentFor(page)} eyebrow={eyebrow} />
          <article className="docs-prose mt-10">
            <Content components={mdxComponents} />
          </article>
          {page.hidden ? null : <Pager path={page.path} />}
          <PageFooter />
        </div>
        <Toc items={page.headings} />
      </div>
    </div>
  );
}
