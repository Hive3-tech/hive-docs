import type { ComponentType } from "react";
import { Navigate, type RouteObject } from "react-router";
import type { MDXComponents } from "mdx/types";
import { DocLayout } from "./layout/DocLayout";
import { DocPage } from "./layout/DocPage";
import { NotFound } from "./layout/NotFound";
import { RouteError } from "./layout/RouteError";
import { pages, sectionHref, sections } from "./site";

type MdxModule = { default: ComponentType<{ components?: MDXComponents }> };

// One lazy chunk per MDX file. Pages whose file is missing never reach the manifest, so they have no route.
const loaders = import.meta.glob<MdxModule>("/src/content/**/*.mdx");

const pageRoutes: RouteObject[] = pages.flatMap((page): RouteObject[] => {
  const load = loaders[`/src/content/${page.file}`];
  if (!load) return [];
  const lazy: RouteObject["lazy"] = async () => {
    const mod = await load();
    return { Component: () => <DocPage page={page} Content={mod.default} /> };
  };
  return page.path === "/" ? [{ index: true, lazy }] : [{ path: page.path.slice(1), lazy }];
});

// Section roots that have no index page send people to the section's first page.
const sectionRoots: RouteObject[] = sections
  .filter((s) => !pages.some((p) => p.path === `/${s.id}`))
  .map((s) => ({ path: s.id, element: <Navigate to={sectionHref(s)} replace /> }));

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: DocLayout,
    errorElement: <RouteError />,
    children: [...pageRoutes, ...sectionRoots, { path: "*", Component: NotFound }],
  },
];
