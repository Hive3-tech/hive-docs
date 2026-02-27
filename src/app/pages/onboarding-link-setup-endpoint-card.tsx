import { useState } from "react";
import { CodeBlock } from "../components/doc-components";

export type ExampleLanguage = "curl" | "fetch" | "node" | "python" | "go" | "java";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type EndpointParameter = {
  name: string;
  type: string;
  required: boolean;
  description: string;
  example: string;
};

export type EndpointExample = {
  id: ExampleLanguage;
  label: string;
  language: string;
  code: string;
};

export type EndpointResponseExample = {
  status: number;
  notes: string;
  language?: string;
  example: string;
};

export type EndpointCardData = {
  method: HttpMethod;
  path: string;
  title: string;
  description: string;
  authMode?: string;
  requestParameters: EndpointParameter[];
  requestExamples: EndpointExample[];
  responseExamples: EndpointResponseExample[];
};

export function EndpointCard({
  method,
  path,
  title,
  description,
  authMode,
  requestParameters,
  requestExamples,
  responseExamples,
}: EndpointCardData) {
  const [activeExample, setActiveExample] = useState<ExampleLanguage>(requestExamples[0]?.id ?? "curl");
  const currentExample = requestExamples.find((example) => example.id === activeExample) ?? requestExamples[0];

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 px-2.5 py-0.5 text-xs font-semibold">
          {method}
        </span>
        {authMode ? (
          <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300 px-2.5 py-0.5 text-xs font-semibold">
            {authMode}
          </span>
        ) : null}
        <p className="font-mono text-sm">{path}</p>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5">{description}</p>

      <section className="space-y-3 mb-6 border border-border rounded-lg p-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#6B01B6]" />
          <h4 className="font-semibold text-lg">Request parameters</h4>
        </div>
        {requestParameters.length === 0 ? (
          <p className="text-sm text-muted-foreground">No request parameters.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead>
                <tr className="text-left text-muted-foreground border-b border-border">
                  <th className="p-2 min-w-28">Field</th>
                  <th className="p-2 min-w-16">Type</th>
                  <th className="p-2 min-w-16">Required</th>
                  <th className="p-2 min-w-32">Description</th>
                  <th className="p-2 min-w-40">Example</th>
                </tr>
              </thead>
              <tbody>
                {requestParameters.map((parameter) => (
                  <tr key={parameter.name} className="border-b border-border last:border-b-0">
                    <td className="p-2 align-top font-mono text-xs">{parameter.name}</td>
                    <td className="p-2 align-top">{parameter.type}</td>
                    <td className="p-2 align-top">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
                          parameter.required
                            ? "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                            : "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300"
                        }`}
                      >
                        {parameter.required ? "Required" : "Optional"}
                      </span>
                    </td>
                    <td className="p-2 align-top text-muted-foreground">{parameter.description}</td>
                    <td className="p-2 align-top font-mono text-xs">{parameter.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="space-y-3 mb-6 border border-border rounded-lg p-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#6B01B6]" />
          <h4 className="font-semibold text-lg">Request examples</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {requestExamples.map((example) => (
            <button
              key={example.id}
              type="button"
              onClick={() => setActiveExample(example.id)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                activeExample === example.id
                  ? "bg-[#6B01B6] text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {example.label}
            </button>
          ))}
        </div>
        {currentExample ? (
          <>
            <p className="text-xs text-muted-foreground">{currentExample.label}</p>
            <CodeBlock language={currentExample.language} code={currentExample.code} />
          </>
        ) : null}
      </section>

      <section className="space-y-3 border border-border rounded-lg p-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#6B01B6]" />
          <h4 className="font-semibold text-lg">Response examples</h4>
        </div>
        {responseExamples.map((response) => (
          <div key={`${path}-${response.status}`}>
            <p className="text-xs text-muted-foreground mb-1">
              HTTP {response.status}: {response.notes}
            </p>
            <CodeBlock language={response.language ?? "json"} code={response.example} />
          </div>
        ))}
      </section>
    </div>
  );
}
