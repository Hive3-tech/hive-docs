import { Link } from "react-router";
import type { Accent } from "@/content/nav";
import { accentStyle } from "@/lib/accents";
import { PlanBadge } from "@/components/mdx/PlanBadge";
import type { Tier } from "@/content/plans";

type HeroProps = { title: string; description: string; plan?: Tier; accent: Accent; eyebrow?: { label: string; href: string } };

/** Page header: glass card with an accent-gradient edge and glow, taken from the app's create-flow gradients. */
export function Hero({ title, description, plan, accent, eyebrow }: HeroProps) {
  return (
    <header className="surface-glass relative overflow-hidden rounded-3xl border px-6 pb-7 pt-8 sm:px-9 sm:pb-9 sm:pt-10" style={accentStyle(accent)}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundImage: "linear-gradient(90deg, var(--a1), var(--a2) 55%, var(--a3))" }} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 size-[22rem] rounded-full opacity-30 blur-3xl dark:opacity-25"
        style={{ backgroundImage: "radial-gradient(circle, var(--a2), var(--a3) 45%, transparent 72%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 size-72 rounded-full opacity-15 blur-3xl"
        style={{ backgroundImage: "radial-gradient(circle, var(--a1), transparent 70%)" }}
      />
      <div className="relative">
        {eyebrow ? (
          <Link to={eyebrow.href} data-plain className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground">
            <span className="size-2 rounded-full" style={{ backgroundImage: "linear-gradient(135deg, var(--a1), var(--a3))" }} />
            {eyebrow.label}
          </Link>
        ) : null}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h1 className="text-[2rem] font-bold leading-[1.12] tracking-tight sm:text-[2.75rem]">{title}</h1>
          {plan ? <PlanBadge tier={plan} className="px-3 py-1 text-sm" /> : null}
        </div>
        {description ? <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p> : null}
      </div>
    </header>
  );
}
