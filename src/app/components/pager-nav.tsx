import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { orderedDocPages } from "../doc-navigation";

export function PagerNav() {
  const { pathname } = useLocation();
  const index = orderedDocPages.findIndex((page) => page.path === pathname);

  if (index === -1) return null;

  const previous = index > 0 ? orderedDocPages[index - 1] : undefined;
  const next = index < orderedDocPages.length - 1 ? orderedDocPages[index + 1] : undefined;

  if (!previous && !next) return null;

  return (
    <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
      {previous ? (
        <Link
          to={previous.path}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          {previous.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={next.path}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          {next.title}
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
