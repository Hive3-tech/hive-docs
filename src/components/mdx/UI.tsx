import { Fragment, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";

const pill =
  "inline-flex items-center whitespace-nowrap rounded-md border border-border bg-background/70 px-1.5 py-px align-baseline text-[0.875em] font-medium leading-snug text-foreground shadow-[0_1px_0_rgb(0_0_0/0.04)] dark:bg-white/5";

/** An exact on-screen label: a button, tab, or menu item. */
export function UI({ children }: { children: ReactNode }) {
  return <span className={pill}>{children}</span>;
}

/** A click path through the interface. */
export function Path({ items }: { items: string[] }) {
  return (
    <span className="my-3 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-[0.95rem]" aria-label={items.join(", then ")}>
      {items.map((item, index) => (
        <Fragment key={`${index}-${item}`}>
          {index > 0 ? <ChevronRight className="size-3.5 text-muted-foreground" aria-hidden="true" /> : null}
          <span className={pill}>{item}</span>
        </Fragment>
      ))}
    </span>
  );
}
