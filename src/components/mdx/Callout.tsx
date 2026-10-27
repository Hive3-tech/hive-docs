import type { ReactNode } from "react";
import { CircleAlert, Crown, Info, Lightbulb, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type CalloutType = "note" | "tip" | "warning" | "plan";

const variants: Record<CalloutType, { label: string; Icon: LucideIcon; box: string; icon: string }> = {
  note: {
    label: "Note",
    Icon: Info,
    box: "border-blue-500/25 bg-blue-500/[0.07]",
    icon: "bg-blue-500/15 text-blue-600 dark:text-blue-300",
  },
  tip: {
    label: "Tip",
    Icon: Lightbulb,
    box: "border-emerald-500/25 bg-emerald-500/[0.07]",
    icon: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  },
  warning: {
    label: "Warning",
    Icon: CircleAlert,
    box: "border-amber-500/35 bg-amber-400/[0.10]",
    icon: "bg-amber-500/20 text-amber-600 dark:text-amber-300",
  },
  plan: {
    label: "Paid plan",
    Icon: Crown,
    box: "border-violet-500/30 bg-gradient-to-br from-violet-500/[0.09] to-amber-400/[0.09]",
    icon: "bg-gradient-to-br from-violet-500 to-amber-500 text-white",
  },
};

export function Callout({ type = "note", children }: { type?: CalloutType; children: ReactNode }) {
  const { label, Icon, box, icon } = variants[type];
  return (
    <aside role="note" className={cn("my-6 flex gap-3.5 rounded-2xl border p-4 sm:p-5", box)}>
      <span className={cn("mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg", icon)}>
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1 text-[0.95rem] leading-relaxed [&>p]:my-0 [&>p+p]:mt-2 [&>p]:text-[0.95rem] [&>p]:leading-relaxed [&>ul]:mb-0 [&>ul]:mt-2">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</p>
        {children}
      </div>
    </aside>
  );
}
