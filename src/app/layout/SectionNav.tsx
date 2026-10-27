import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/app/types";
import { cn } from "@/lib/cn";

export const navItem = "relative flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[0.9rem] font-medium leading-snug transition-all";
export const navActive = "bg-sidebar-primary text-sidebar-primary-foreground shadow-md";
export const navIdle = "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";

type Block = { group?: string; items: NavItem[] };

/** Consecutive pages that share a `group` in nav.ts become one block; ungrouped pages stay as single plain links. */
export function toBlocks(pages: NavItem[]): Block[] {
  const blocks: Block[] = [];
  for (const page of pages) {
    const last = blocks[blocks.length - 1];
    if (page.group && last?.group === page.group) last.items.push(page);
    else blocks.push({ group: page.group, items: [page] });
  }
  return blocks;
}

function PageLink({ page, pathname, onNavigate, nested }: { page: NavItem; pathname: string; onNavigate?: () => void; nested?: boolean }) {
  const active = page.path === pathname;
  return (
    <Link
      to={page.path}
      onClick={onNavigate}
      data-plain
      aria-current={active ? "page" : undefined}
      className={cn(navItem, nested && "py-2 pl-5 text-[0.85rem]", active ? navActive : navIdle)}
    >
      {page.title}
    </Link>
  );
}

function Group({ block, pathname, onNavigate }: { block: Block; pathname: string; onNavigate?: () => void }) {
  const containsCurrent = block.items.some((p) => p.path === pathname);
  const [open, setOpen] = useState(containsCurrent);
  const id = `nav-group-${block.group?.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  // Landing on a page inside a collapsed group (search, pager, link) expands it.
  useEffect(() => {
    if (containsCurrent) setOpen(true);
  }, [containsCurrent]);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <span>{block.group}</span>
        <ChevronDown className={cn("size-4 transition-transform", open ? "rotate-0" : "-rotate-90")} aria-hidden="true" />
      </button>
      {open ? (
        <div id={id} className="mt-0.5 space-y-0.5 border-l border-sidebar-border/70 pb-1 ml-5">
          {block.items.map((page) => (
            <PageLink key={page.path} page={page} pathname={pathname} onNavigate={onNavigate} nested />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SectionNav({ pages, pathname, onNavigate }: { pages: NavItem[]; pathname: string; onNavigate?: () => void }) {
  return (
    <>
      {toBlocks(pages).map((block) =>
        block.group ? (
          <Group key={block.group} block={block} pathname={pathname} onNavigate={onNavigate} />
        ) : (
          <PageLink key={block.items[0].path} page={block.items[0]} pathname={pathname} onNavigate={onNavigate} />
        ),
      )}
    </>
  );
}
