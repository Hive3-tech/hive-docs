import { Link } from "react-router";
import { ExternalLink, Home, X } from "lucide-react";
import { APP_URL, sectionHref, sections } from "@/app/site";
import { DocIcon } from "@/lib/icons";
import { cn } from "@/lib/cn";
import { Logo } from "./TopBar";
import { navActive, navIdle, navItem, SectionNav } from "./SectionNav";

type SidebarProps = { pathname: string; currentSectionId: string | null; variant: "desktop" | "mobile"; onNavigate?: () => void; onClose?: () => void };

/** Floating glass sidebar (w-72, rounded-r-[22px]) in the shape of the app's own sidebar. */
export function Sidebar({ pathname, currentSectionId, variant, onNavigate, onClose }: SidebarProps) {
  const section = sections.find((s) => s.id === currentSectionId);
  const isHome = pathname === "/";
  return (
    <div
      className={cn(
        "relative flex h-full flex-col",
        variant === "desktop" ? "surface-glass surface-blur overflow-hidden rounded-r-[22px] border border-l-0" : "surface-solid border-r",
      )}
    >
      {variant === "mobile" ? (
        <div className="flex items-center justify-between border-b border-sidebar-border px-3 py-2.5">
          <Logo />
          <button type="button" onClick={onClose} aria-label="Close navigation" className="flex size-9 items-center justify-center rounded-xl hover:bg-accent">
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}

      <div className="border-b border-sidebar-border px-3 py-2.5">
        <div className="flex items-center justify-between gap-0.5">
          <Link
            to="/"
            onClick={onNavigate}
            aria-label="Docs home"
            title="Docs home"
            data-plain
            className={cn("flex size-9 min-w-0 shrink-0 items-center justify-center rounded-xl border border-sidebar-border/80 transition-all", isHome ? `${navActive} border-transparent` : "bg-sidebar-accent/35 hover:bg-sidebar-accent")}
          >
            <Home className="size-[18px]" aria-hidden="true" />
          </Link>
          {sections.map((s) => (
            <Link
              key={s.id}
              to={sectionHref(s)}
              onClick={onNavigate}
              aria-label={s.label}
              title={s.label}
              data-plain
              className={cn(
                "flex size-9 min-w-0 shrink-0 items-center justify-center rounded-xl border border-sidebar-border/80 transition-all",
                s.id === currentSectionId ? `${navActive} border-transparent` : "bg-sidebar-accent/35 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <DocIcon name={s.icon} className="size-[18px]" />
            </Link>
          ))}
        </div>
      </div>

      <nav aria-label={section ? section.label : "Documentation sections"} className="flex-1 space-y-1 overflow-y-auto p-2">
        {section ? (
          <>
            <p className="px-3.5 pb-1.5 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{section.label}</p>
            <SectionNav pages={section.pages} pathname={pathname} onNavigate={onNavigate} />
          </>
        ) : (
          sections.map((s) => (
            <Link key={s.id} to={sectionHref(s)} onClick={onNavigate} data-plain className={cn(navItem, "items-start", navIdle)}>
              <DocIcon name={s.icon} className="mt-0.5 size-5 shrink-0" />
              <span className="min-w-0">
                <span className="block">{s.label}</span>
                <span className="mt-0.5 block text-xs font-normal leading-snug text-muted-foreground">{s.summary}</span>
              </span>
            </Link>
          ))
        )}
      </nav>

      <div className="border-t border-sidebar-border p-2">
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-plain className={cn(navItem, navIdle)}>
          <ExternalLink className="size-5" aria-hidden="true" />
          <span className="flex-1">Open Hive3</span>
        </a>
      </div>
    </div>
  );
}
