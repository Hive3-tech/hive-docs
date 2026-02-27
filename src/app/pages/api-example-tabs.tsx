import { useState } from "react";
import { CodeBlock } from "../components/doc-components";

export type APIExampleId = "curl" | "fetch" | "node" | "python" | "go" | "java";

export type APIExample = {
  id: APIExampleId;
  label: string;
  language: string;
  code: string;
};

export function APIExampleTabs({ examples }: { examples: APIExample[] }) {
  const [active, setActive] = useState<APIExampleId>(examples[0]?.id ?? "curl");
  const current = examples.find((example) => example.id === active) ?? examples[0];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {examples.map((example) => (
          <button
            key={example.id}
            type="button"
            onClick={() => setActive(example.id)}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              active === example.id
                ? "bg-[#6B01B6] text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {example.label}
          </button>
        ))}
      </div>
      {current ? <CodeBlock language={current.language} code={current.code} /> : null}
    </div>
  );
}
