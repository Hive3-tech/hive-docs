import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type TocItem = { id: string; text: string };

/** "On this page": the page's `##` headings with scrollspy. */
export function Toc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const update = () => {
      let current = items[0]?.id ?? "";
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = items[items.length - 1]?.id ?? current;
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  if (items.length < 2) return null;
  return (
    <nav aria-label="On this page" className="sticky top-24 hidden max-h-[calc(100dvh-8rem)] w-56 shrink-0 overflow-y-auto xl:block">
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p>
      <ul className="m-0 list-none space-y-0.5 border-l border-border p-0">
        {items.map((item) => (
          <li key={item.id} className="m-0 p-0">
            <a
              href={`#${item.id}`}
              aria-current={item.id === active ? "location" : undefined}
              className={cn(
                "-ml-px block border-l-2 py-1.5 pl-3 pr-2 text-[0.8125rem] leading-snug transition-colors",
                item.id === active ? "border-primary font-semibold text-primary" : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
