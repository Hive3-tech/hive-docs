import { renderToString } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import { ThemeProvider } from "./app/theme";
import pageLoaders from "virtual:docs-pages";
import { routes } from "./app/routes";
import { canonicalUrl } from "./app/site";
import type { PageMeta } from "./app/types";
import { type HeadMeta } from "./app/layout/useHead";

const handler = createStaticHandler(routes);

export type RenderResult = { html: string; head: HeadMeta; canonical: string };

/** Prerender one URL. Returns the app HTML plus the data the build script needs for <head>. */
export async function render(url: string): Promise<RenderResult> {
  const context = await handler.query(new Request(`http://docs.local${url}`));
  if (context instanceof Response) throw new Error(`Route ${url} redirected (${context.status}); it cannot be prerendered`);
  const router = createStaticRouter(handler.dataRoutes, context);
  const html = renderToString(
    <ThemeProvider>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </ThemeProvider>,
  );
  const handle = context.matches[context.matches.length - 1]?.route.handle as { meta?: PageMeta } | undefined;
  const page = handle?.meta;
  const head: HeadMeta = page
    ? { title: page.title, description: page.description, path: page.path, noindex: page.hidden }
    : { title: "Page not found", description: "This page does not exist in the Hive3 docs.", path: "/404", noindex: true };
  return { html, head, canonical: canonicalUrl(head.path) };
}

/** Every page the build script must prerender; `hidden` pages are rendered but kept out of the sitemap. */
export const routeList: { path: string; hidden: boolean }[] = Object.keys(pageLoaders).map((path) => ({ path, hidden: path.startsWith("/_") }));
