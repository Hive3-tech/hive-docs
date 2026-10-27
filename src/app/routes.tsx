import { Navigate, type RouteObject } from "react-router";
import pageLoaders from "virtual:docs-pages";
import { DocLayout } from "./layout/DocLayout";
import { DocPage } from "./layout/DocPage";
import { NotFound } from "./layout/NotFound";
import { RouteError } from "./layout/RouteError";
import { sectionHref, sections } from "./site";

// One lazy chunk per page (MDX component + metadata). Pages whose file is missing have no loader, so no route.
const pageRoutes: RouteObject[] = Object.entries(pageLoaders).map(([path, load]) => {
  const lazy: RouteObject["lazy"] = async () => {
    const { default: Content, meta } = await load();
    return { Component: () => <DocPage meta={meta} Content={Content} />, handle: { meta } };
  };
  return path === "/" ? { index: true, lazy } : { path: path.slice(1), lazy };
});

// Section roots that have no index page send people to the section's first page.
const sectionRoots: RouteObject[] = sections
  .filter((s) => !(`/${s.id}` in pageLoaders))
  .map((s) => ({ path: s.id, element: <Navigate to={sectionHref(s)} replace /> }));

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: DocLayout,
    errorElement: <RouteError />,
    children: [...pageRoutes, ...sectionRoots, { path: "*", Component: NotFound }],
  },
];
