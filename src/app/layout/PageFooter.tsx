import { Link } from "react-router";
import { APP_URL } from "@/app/site";

export function PageFooter() {
  return (
    <footer className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
      <span>© {new Date().getFullYear()} Hive3</span>
      <span className="flex flex-wrap items-center gap-x-5 gap-y-1">
        <Link to="/account/help" className="hover:text-foreground">
          Help and feedback
        </Link>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
          app.hive3.tech
        </a>
      </span>
    </footer>
  );
}
