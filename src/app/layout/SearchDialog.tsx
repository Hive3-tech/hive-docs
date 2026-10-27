import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import MiniSearch from "minisearch";
import { CornerDownLeft, FileText, Hash, Search } from "lucide-react";
import indexJson from "virtual:docs-search";
import { Modal } from "@/components/Modal";
import { searchIndexOptions, searchQueryOptions } from "@/lib/search-options";
import { sections } from "@/app/site";
import { cn } from "@/lib/cn";

type Hit = { id: string; title: string; heading: string; path: string; anchor: string; snippet: string; terms: string[] };

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function highlight(text: string, terms: string[]): ReactNode {
  const words = [...new Set(terms)].filter(Boolean).map(escapeRegExp);
  if (words.length === 0) return text;
  const parts = text.split(new RegExp(`(${words.join("|")})`, "gi"));
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="rounded-sm bg-primary/15 px-0.5 text-foreground">
        {part}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/** Cmd+K palette. The serialized index lives in this lazily loaded chunk, so it is only fetched on first open. */
export default function SearchDialog({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const list = useRef<HTMLUListElement>(null);
  const engine = useMemo(() => MiniSearch.loadJSON(indexJson, searchIndexOptions), []);

  const hits = useMemo<Hit[]>(() => {
    const q = query.trim();
    if (q.length === 0) {
      return sections.flatMap((s) => s.pages.slice(0, 1).map((p) => ({ id: p.path, title: p.title, heading: "", path: p.path, anchor: "", snippet: s.label, terms: [] })));
    }
    return engine.search(q, searchQueryOptions as Parameters<MiniSearch["search"]>[1]).slice(0, 20) as unknown as Hit[];
  }, [engine, query]);

  useEffect(() => setActive(0), [query]);
  useEffect(() => {
    list.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const open = (hit: Hit) => {
    onClose();
    navigate(hit.anchor ? `${hit.path}#${hit.anchor}` : hit.path);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, hits.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter" && hits[active]) {
      event.preventDefault();
      open(hits[active]);
    }
  };

  return (
    <Modal
      label="Search docs"
      onClose={onClose}
      className="surface-solid m-0 mx-auto mt-[10vh] max-h-[76dvh] w-[min(42rem,calc(100vw-1.5rem))] max-w-none overflow-hidden rounded-2xl border p-0 text-foreground backdrop:bg-black/40 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 border-b border-border px-4">
        <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded="true"
          aria-controls="search-results"
          aria-activedescendant={hits[active] ? `search-hit-${active}` : undefined}
          aria-label="Search docs"
          placeholder="Search the docs…"
          className="h-14 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
        />
        <kbd className="rounded-md border border-border px-1.5 py-px text-[11px] font-medium text-muted-foreground">Esc</kbd>
      </div>
      <ul ref={list} id="search-results" role="listbox" className="m-0 max-h-[calc(76dvh-4.5rem)] list-none overflow-y-auto p-2">
        {query.trim() && hits.length === 0 ? <li className="px-4 py-10 text-center text-sm text-muted-foreground">No results for “{query.trim()}”.</li> : null}
        {!query.trim() ? <li className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Start here</li> : null}
        {hits.map((hit, index) => (
          <li key={hit.id} id={`search-hit-${index}`} role="option" aria-selected={index === active} data-index={index} className="m-0 p-0">
            <button
              type="button"
              onClick={() => open(hit)}
              onMouseMove={() => setActive(index)}
              className={cn("flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left", index === active ? "bg-accent text-accent-foreground" : "text-foreground")}
            >
              {hit.heading ? <Hash className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" /> : <FileText className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />}
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">
                  {hit.heading ? (
                    <>
                      <span className="font-medium text-muted-foreground">{hit.title} › </span>
                      {highlight(hit.heading, hit.terms)}
                    </>
                  ) : (
                    highlight(hit.title, hit.terms)
                  )}
                </span>
                {hit.snippet ? <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">{highlight(hit.snippet, hit.terms)}</span> : null}
              </span>
              {index === active ? <CornerDownLeft className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" /> : null}
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
