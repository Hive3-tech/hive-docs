import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { neighbours } from "@/app/site";

const card = "surface-glass surface-interactive group flex flex-1 flex-col gap-1 rounded-2xl border p-4 hover:-translate-y-0.5";

export function Pager({ path }: { path: string }) {
  const { prev, next } = neighbours(path);
  if (!prev && !next) return null;
  return (
    <nav aria-label="Previous and next page" className="mt-16 flex flex-col gap-4 sm:flex-row">
      {prev ? (
        <Link to={prev.path} data-plain className={card}>
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            Previous
          </span>
          <span className="font-semibold text-foreground">{prev.title}</span>
        </Link>
      ) : (
        <span className="hidden flex-1 sm:block" />
      )}
      {next ? (
        <Link to={next.path} data-plain className={`${card} sm:items-end sm:text-right`}>
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            Next
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
          <span className="font-semibold text-foreground">{next.title}</span>
        </Link>
      ) : (
        <span className="hidden flex-1 sm:block" />
      )}
    </nav>
  );
}
