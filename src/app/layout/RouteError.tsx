import { isRouteErrorResponse, useRouteError } from "react-router";

export function RouteError() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : "Something went wrong while loading this page.";
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{message}</p>
      <a href="/" className="mt-6 inline-block rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground">
        Reload the docs
      </a>
    </div>
  );
}
