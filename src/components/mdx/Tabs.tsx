import { Children, isValidElement, useEffect, useId, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const STORAGE_KEY = "docs-tab";
const listeners = new Set<(label: string) => void>();

/** A tab becomes visible only through <Tabs>; this wrapper just carries its panel content. */
export function Tab({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

function Panel({ index, active, id, children }: { index: number; active: boolean; id: string; children: ReactNode }) {
  return (
    <div role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={!active}>
      {children}
    </div>
  );
}

/** Language switcher for multi-language examples. The choice is remembered across tab groups and pages. */
export function Tabs({ labels, children }: { labels: string[]; children: ReactNode }) {
  const id = useId();
  const [active, setActive] = useState(0);
  const panels = Children.toArray(children).filter(isValidElement);

  useEffect(() => {
    const apply = (label: string) => {
      const index = labels.indexOf(label);
      if (index >= 0) setActive(index);
    };
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) apply(stored);
    } catch {
      // Storage may be blocked; the default tab stays selected.
    }
    listeners.add(apply);
    return () => void listeners.delete(apply);
  }, [labels]);

  const select = (index: number) => {
    setActive(index);
    try {
      localStorage.setItem(STORAGE_KEY, labels[index]);
    } catch {
      // Ignore blocked storage.
    }
    listeners.forEach((listener) => listener(labels[index]));
  };

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const last = labels.length - 1;
    const next = event.key === "ArrowRight" ? (index === last ? 0 : index + 1) : event.key === "ArrowLeft" ? (index === 0 ? last : index - 1) : -1;
    if (next < 0) return;
    event.preventDefault();
    select(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div className="my-6">
      <div role="tablist" className="mb-[-1px] flex gap-1 overflow-x-auto px-1">
        {labels.map((label, index) => (
          <button
            key={label}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              "relative whitespace-nowrap rounded-t-xl border border-b-0 px-4 py-2 text-sm font-medium transition-colors",
              index === active
                ? "border-border bg-[var(--code-bg)] text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="docs-tab-panels rounded-2xl rounded-tl-none border border-border bg-[var(--code-bg)] p-2 [&_.code-block]:my-0 [&_.code-block]:rounded-xl [&_.code-block]:shadow-none">
        {panels.map((panel, index) => (
          <Panel key={index} index={index} active={index === active} id={id}>
            {panel}
          </Panel>
        ))}
      </div>
    </div>
  );
}
