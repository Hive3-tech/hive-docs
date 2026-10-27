import { Link } from "react-router";
import { ArrowUpRight, Menu, Search } from "lucide-react";
import bannerDarkText from "@/assets/banner-dark-text.webp";
import bannerLightText from "@/assets/banner-light-text.webp";
import { APP_URL, sectionHref, sections } from "@/app/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "./ThemeToggle";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="Hive3 Docs home" data-plain className={cn("flex shrink-0 items-center gap-2.5", className)}>
      <img src={bannerDarkText} alt="Hive3" width={108} height={36} className="h-9 w-auto dark:hidden" />
      <img src={bannerLightText} alt="Hive3" width={108} height={36} className="hidden h-9 w-auto dark:block" />
      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">Docs</span>
    </Link>
  );
}

export function TopBar({ currentSectionId, onOpenMenu, onOpenSearch }: { currentSectionId: string | null; onOpenMenu: () => void; onOpenSearch: () => void }) {
  return (
    <header
      className="surface-blur sticky top-0 z-40 h-16 border-b border-white/40 dark:border-white/10"
      style={{ backgroundColor: "var(--topbar-bg)" }}
    >
      <div className="flex h-full items-center gap-3 px-4 lg:px-6">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open navigation"
          className="flex size-9 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-accent lg:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
        <Logo />
        <nav aria-label="Sections" className="ml-3 hidden items-center gap-0.5 min-[1400px]:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={sectionHref(section)}
              data-plain
              aria-current={section.id === currentSectionId ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-xl px-2.5 py-1.5 text-[13px] font-medium transition-colors",
                section.id === currentSectionId
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              {section.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1" />
        <button
          type="button"
          onClick={onOpenSearch}
          aria-label="Search docs"
          className="surface-glass flex h-9 items-center gap-2 rounded-xl border px-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:w-48 lg:w-56"
        >
          <Search className="size-4 shrink-0" aria-hidden="true" />
          <span className="hidden flex-1 text-left sm:inline">Search docs…</span>
          <kbd className="hidden rounded-md border border-border bg-background/70 px-1.5 py-px font-sans text-[11px] font-medium sm:inline dark:bg-white/5">⌘K</kbd>
        </button>
        <ThemeToggle />
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-9 items-center gap-1.5 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md active:scale-[0.98] sm:inline-flex"
        >
          Open Hive3
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
