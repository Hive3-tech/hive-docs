import { ChevronLeft, RefreshCw } from "lucide-react";
import {
  isRouteErrorResponse,
  useLocation,
  useRouteError,
  Link,
} from "react-router";
import { RightSidebar } from "../components/right-sidebar";

const navigationItems = [{ id: "retry", label: "Retry" }];

function getErrorMessage(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return {
      title: `${error.status} — ${error.statusText}`,
      description: error.data || "Unable to render the requested documentation page.",
    };
  }

  if (error instanceof Error) {
    return { title: "Unexpected error", description: error.message };
  }

  return {
    title: "Unexpected error",
    description: "An unknown error occurred while loading this page.",
  };
}

export function DocsRouteErrorBoundary() {
  const error = useRouteError();
  const location = useLocation();
  const { title, description } = getErrorMessage(error);

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-primary font-semibold mb-3">{title}</p>
          <h1 className="text-4xl font-bold mb-4">We hit a docs error</h1>
          <p className="text-muted-foreground mb-8">
            We couldn&apos;t render <span className="font-semibold text-foreground">{location.pathname}</span>{" "}
            because of an internal issue.
          </p>
          <div className="rounded-lg border border-border bg-card/50 p-4 mb-8 text-left">
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-95 transition-opacity"
          >
            <RefreshCw className="w-4 h-4" />
            Reload page
          </button>
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ChevronLeft className="w-4 h-4" />
              Go back to docs home
            </Link>
          </div>
        </div>
      </div>
      <RightSidebar items={navigationItems} />
    </div>
  );
}
