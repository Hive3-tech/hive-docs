import { useId, useRef, useState } from "react";
import { Bot, Check, ChevronDown, Copy } from "lucide-react";
import { agentSetupPrompt } from "@/content/agent-setup";
import { cn } from "@/lib/cn";

/** Copy through a hidden textarea when the async Clipboard API is missing or refused (plain http, older browsers). */
function legacyCopy(text: string): boolean {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.setAttribute("aria-hidden", "true");
  area.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
  document.body.appendChild(area);
  area.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    area.remove();
  }
}

async function copyText(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Permission denied or insecure context: fall through to the legacy path.
    }
  }
  return legacyCopy(text);
}

type CopyState = "idle" | "copied" | "failed";

/** Banner for developer pages: one click copies a ready-made prompt that sets up the CLI and skill through a coding agent. */
export function AgentSetup() {
  const panelId = useId();
  const timer = useRef<number>();
  const [state, setState] = useState<CopyState>("idle");
  const [open, setOpen] = useState(false);

  const copy = async () => {
    const ok = await copyText(agentSetupPrompt);
    setState(ok ? "copied" : "failed");
    if (!ok) setOpen(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2200);
  };

  return (
    <section
      data-agent-setup=""
      aria-labelledby={`${panelId}-title`}
      className="surface-glass not-prose relative my-6 first:mt-0 overflow-hidden rounded-2xl border border-violet-500/30 p-4 sm:p-5"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.12] to-amber-400/[0.12]" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-amber-500 text-white shadow-md">
          <Bot className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id={`${panelId}-title`} className="m-0 text-base font-semibold leading-snug text-foreground">
            Set up with your AI agent
          </h2>
          <p className="mb-0 mt-1 text-sm leading-relaxed text-muted-foreground">
            Copy this prompt into Claude Code, Codex, Cursor or ChatGPT. It installs the Hive3 CLI and skill and signs you in.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={copy}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {state === "copied" ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {state === "copied" ? "Copied" : "Copy agent setup"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View prompt
            <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
          </button>
        </div>
      </div>
      <p role="status" aria-live="polite" className={cn("relative m-0 text-sm", state === "idle" ? "sr-only" : "mt-3 text-muted-foreground")}>
        {state === "copied" ? "Prompt copied to the clipboard." : state === "failed" ? "Copying was blocked. Select the prompt below and copy it by hand." : ""}
      </p>
      <div id={panelId} hidden={!open} className="relative mt-4">
        <div className="code-block m-0">
          <div className="code-block-header">
            <span className="truncate font-mono">Prompt for your agent</span>
            <a href="/agent-setup.md" data-plain className="rounded-lg px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              agent-setup.md
            </a>
          </div>
          <pre tabIndex={0} aria-label="Agent setup prompt" className="max-h-[28rem] overflow-y-auto whitespace-pre-wrap break-words">
            {agentSetupPrompt}
          </pre>
        </div>
      </div>
    </section>
  );
}
