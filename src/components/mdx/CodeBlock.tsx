import { useRef, useState, type ComponentProps } from "react";
import { Check, Copy } from "lucide-react";

type PreProps = ComponentProps<"pre"> & { "data-language"?: string; "data-title"?: string };

/** Fenced code block: Shiki-highlighted <pre> with a header (title or language) and a copy button. */
export function CodeBlock({ children, "data-language": language, "data-title": title, ...props }: PreProps) {
  const pre = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const label = title ?? (language && language !== "text" ? language : "");

  const copy = async () => {
    const text = pre.current?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard access can be denied; the text remains selectable.
    }
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="truncate font-mono">{label}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {copied ? <Check className="size-3.5 text-success" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre ref={pre} {...props}>
        {children}
      </pre>
    </div>
  );
}
