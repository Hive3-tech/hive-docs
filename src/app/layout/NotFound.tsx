import { Link } from "react-router";
import { Home } from "lucide-react";
import { accentStyle } from "@/lib/accents";
import { useHead } from "./useHead";

export function NotFound() {
  useHead({ title: "Page not found", description: "This page does not exist in the Hive3 docs.", path: "/404", noindex: true });
  return (
    <div className="px-4 py-16 sm:px-8">
      <div className="surface-glass relative mx-auto max-w-2xl overflow-hidden rounded-3xl border px-8 py-14 text-center" style={accentStyle("default")}>
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundImage: "linear-gradient(90deg, var(--a1), var(--a2) 55%, var(--a3))" }} />
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">We could not find that page. It may have moved, or the link may be mistyped.</p>
        <Link to="/" data-plain className="mt-8 inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary-hover">
          <Home className="size-4" aria-hidden="true" />
          Back to docs home
        </Link>
      </div>
    </div>
  );
}
