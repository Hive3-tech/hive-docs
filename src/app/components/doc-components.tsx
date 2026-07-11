import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const normalizeLanguage = (value: string) => {
    const normalized = value.toLowerCase().trim();

    if (["curl", "bash", "sh", "shell", "zsh", "console", "terminal"].includes(normalized)) {
      return "bash";
    }

    if (["fetch", "node", "nodejs", "js"].includes(normalized)) {
      return "javascript";
    }

    if (normalized === "http") {
      return "bash";
    }

    return normalized || "bash";
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const normalizedLanguage = normalizeLanguage(language);

  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="p-2 bg-muted hover:bg-accent rounded-lg transition-colors opacity-100 xl:opacity-0 xl:group-hover:opacity-100"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <div className="bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto">
        {title && (
          <div className="text-xs font-medium text-gray-300 border-b border-gray-700 pb-2 mb-2">
            {title}
          </div>
        )}
        <div className="text-xs text-gray-400 mb-2">{language}</div>
        <div className="overflow-x-auto rounded-b-lg">
          <SyntaxHighlighter
            language={normalizedLanguage}
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: "0.75rem 1rem",
              background: "#1e1e1e",
              borderRadius: 0,
              fontSize: "0.875rem",
              lineHeight: "1.5rem",
            }}
            codeTagProps={{
              style: {
                fontFamily: "Monaco, Menlo, 'Ubuntu Mono', Consolas, 'source-code-pro', monospace",
              },
            }}
            showLineNumbers={false}
            wrapLines
            wrapLongLines
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

interface FigureProps {
  src: string;
  darkSrc?: string;
  alt: string;
  caption?: string;
}

export function Figure({ src, darkSrc, alt, caption }: FigureProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeSrc = mounted && darkSrc && resolvedTheme === "dark" ? darkSrc : src;

  return (
    <figure className="my-6">
      <img src={activeSrc} alt={alt} className="w-full rounded-xl border border-border" />
      {caption && (
        <figcaption className="text-sm text-muted-foreground mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface CalloutProps {
  type: "info" | "warning" | "success" | "error";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type, title, children }: CalloutProps) {
  const styles = {
    info: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100",
    warning: "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100",
    success: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100",
    error: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100",
  };

  return (
    <div className={`border-l-4 p-4 rounded-r-lg ${styles[type]}`}>
      {title && <div className="font-semibold mb-1">{title}</div>}
      <div className="text-sm">{children}</div>
    </div>
  );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono text-primary">
      {children}
    </code>
  );
}

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold mb-2">{title}</h4>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
