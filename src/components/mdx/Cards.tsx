import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { Accent } from "@/content/nav";
import { accentStyle } from "@/lib/accents";
import { DocIcon } from "@/lib/icons";

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="not-prose my-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{children}</div>;
}

type LinkCardProps = { href: string; title: string; icon?: string; accent?: Accent; children?: ReactNode };

/** Hub-page card: an accent-gradient icon tile, a title, and a short description. */
export function LinkCard({ href, title, icon = "book-open", accent = "default", children }: LinkCardProps) {
  const external = /^https?:\/\//.test(href);
  const inner = (
    <>
      <span
        className="flex size-11 items-center justify-center rounded-xl text-white shadow-md"
        style={{ backgroundImage: "linear-gradient(135deg, var(--a1), var(--a2) 55%, var(--a3))" }}
      >
        <DocIcon name={icon} className="size-5" />
      </span>
      <span className="mt-4 flex items-center gap-1.5 text-base font-semibold leading-snug text-foreground">
        {title}
        <ArrowUpRight
          className="size-4 text-muted-foreground opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden="true"
        />
      </span>
      {children ? <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground [&>p]:m-0 [&>p]:text-sm [&>p]:leading-relaxed">{children}</span> : null}
    </>
  );
  const className = "surface-glass surface-interactive group flex flex-col rounded-2xl border p-5 hover:-translate-y-0.5";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" data-plain className={className} style={accentStyle(accent)}>
      {inner}
    </a>
  ) : (
    <Link to={href} data-plain className={className} style={accentStyle(accent)}>
      {inner}
    </Link>
  );
}
