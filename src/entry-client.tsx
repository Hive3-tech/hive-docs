import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, matchRoutes } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from "./app/theme";
import { routes } from "./app/routes";
import "./styles/index.css";

async function main() {
  // The page's lazy route module must be loaded before hydration so the first render matches the prerendered HTML.
  const lazyMatches = matchRoutes(routes, window.location)?.filter((match) => match.route.lazy) ?? [];
  await Promise.all(
    lazyMatches.map(async (match) => {
      const lazy = match.route.lazy;
      if (typeof lazy !== "function") return;
      Object.assign(match.route, { ...(await lazy()), lazy: undefined });
    }),
  );
  const router = createBrowserRouter(routes);
  const app = (
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
  const root = document.getElementById("root")!;
  // The dev server serves an empty shell; production pages are prerendered and hydrate.
  if (root.firstElementChild) hydrateRoot(root, app);
  else createRoot(root).render(app);
}

void main();
