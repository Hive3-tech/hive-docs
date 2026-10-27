import { useEffect, useRef, useState } from "react";
import { Check, Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { useTheme, type Theme } from "@/app/theme";
import { cn } from "@/lib/cn";

const options: { value: Theme; label: string; Icon: LucideIcon }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Sun className="size-[18px] dark:hidden" aria-hidden="true" />
        <Moon className="hidden size-[18px] dark:block" aria-hidden="true" />
      </button>
      {open ? (
        <div role="menu" className="surface-solid absolute right-0 top-11 z-50 w-40 rounded-xl border p-1">
          {options.map(({ value, label, Icon }) => (
            <button
              key={value}
              type="button"
              role="menuitemradio"
              aria-checked={theme === value}
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                theme === value && "text-primary",
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              <span className="flex-1 text-left">{label}</span>
              {theme === value ? <Check className="size-4" aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
