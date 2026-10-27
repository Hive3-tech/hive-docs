import { tiers, type Tier } from "@/content/plans";
import { cn } from "@/lib/cn";

const styles: Record<Tier, string> = {
  worker: "bg-secondary text-secondary-foreground",
  honey: "bg-amber-400/20 text-amber-700 ring-1 ring-inset ring-amber-500/30 dark:text-amber-300",
  swarm: "bg-violet-500/15 text-violet-700 ring-1 ring-inset ring-violet-500/30 dark:text-violet-300",
  royal: "bg-gradient-to-r from-violet-600 to-amber-500 text-white shadow-sm",
};

/** Inline plan chip. With `plus` (default) the label reads "Honey Bee+": that plan or higher. */
export function PlanBadge({ tier, plus = true, className }: { tier: Tier; plus?: boolean; className?: string }) {
  const name = tiers.find((t) => t.id === tier)?.name ?? tier;
  const label = plus && (tier === "honey" || tier === "swarm") ? `${name}+` : name;
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center whitespace-nowrap rounded-full px-2.5 py-0.5 align-middle text-xs font-semibold",
        styles[tier],
        className,
      )}
    >
      {label}
    </span>
  );
}
