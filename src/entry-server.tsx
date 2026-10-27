import { renderToString } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import { ThemeProvider } from "./app/theme";
import { routes } from "./app/routes";
import { getPage, pages, SITE_URL } from "./app/site";
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
  const page = getPage(url);
  const head: HeadMeta = page
    ? { title: page.title, description: page.description, path: page.path, noindex: page.hidden }
    : { title: "Page not found", description: "This page does not exist in the Hive3 docs.", path: "/404", noindex: true };
  return { html, head, canonical: `${SITE_URL}${head.path === "/" ? "" : head.path}` };
}

/** Every page the build script must prerender; `hidden` pages are rendered but kept out of the sitemap. */
export const routeList: { path: string; hidden: boolean }[] = pages.map((page) => ({ path: page.path, hidden: page.hidden }));
