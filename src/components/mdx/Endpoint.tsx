import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const methodStyles: Record<Method, string> = {
  GET: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  POST: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  PUT: "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  PATCH: "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  DELETE: "bg-rose-500/15 text-rose-700 dark:text-rose-300",
};

export const endpointId = (method: string, path: string) =>
  `${method}-${path}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** One API operation: method, path, required scopes, then free-form documentation as children. */
export function Endpoint({ method, path, scopes, children }: { method: Method; path: string; scopes?: string[]; children?: ReactNode }) {
  return (
    <section id={endpointId(method, path)} className="surface-glass my-8 scroll-mt-24 overflow-hidden rounded-2xl border">
      <header className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-border/70 bg-background/40 px-4 py-3 dark:bg-white/[0.03]">
        <span className={cn("rounded-lg px-2.5 py-1 font-mono text-xs font-bold tracking-wide", methodStyles[method])}>{method}</span>
        <code className="min-w-0 flex-1 break-all bg-transparent p-0 font-mono text-sm font-medium text-foreground dark:text-foreground">{path}</code>
        {scopes && scopes.length > 0 ? (
          <span className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-muted-foreground">Scope</span>
            {scopes.map((scope) => (
              <code key={scope} className="rounded-full border border-border bg-background/70 px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground dark:bg-white/5 dark:text-muted-foreground">
                {scope}
              </code>
            ))}
          </span>
        ) : null}
      </header>
      <div className="docs-endpoint-body px-4 pb-1 pt-4 sm:px-5 [&>.code-block]:shadow-none [&>.table-wrap]:shadow-none">{children}</div>
    </section>
  );
}
