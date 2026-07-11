import { CodeBlock } from "../components/doc-components";
import { RequestExampleTabs } from "./api-example-tabs";
import type { ApiEndpoint } from "./api-endpoint-types";

const methodStyles: Record<ApiEndpoint["method"], string> = {
  GET: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  POST: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300",
  PATCH: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  DELETE: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300",
};

export function ApiEndpointCard(endpoint: ApiEndpoint) {
  const { method, path, scopes, description, params, request, response } = endpoint;
  return (
    <article className="rounded-lg border border-border bg-card p-5 space-y-5">
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${methodStyles[method]}`}>
            {method}
          </span>
          <code className="text-sm break-all">{path}</code>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {scopes.length ? scopes.map((scope) => (
            <code key={scope} className="rounded bg-muted px-2 py-1 text-xs">{scope}</code>
          )) : <span className="text-xs text-muted-foreground">No scope required (any valid key)</span>}
        </div>
      </div>

      {params?.length ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border">
            <thead><tr className="text-left border-b border-border">
              <th className="p-2">Field</th><th className="p-2">Type</th><th className="p-2">Required</th><th className="p-2">Description</th>
            </tr></thead>
            <tbody>{params.map((param) => (
              <tr key={param.name} className="border-b border-border last:border-0">
                <td className="p-2 align-top font-mono text-xs">{param.name}</td>
                <td className="p-2 align-top">{param.type}</td>
                <td className="p-2 align-top">{param.required ? "Yes" : "No"}</td>
                <td className="p-2 align-top text-muted-foreground">{param.description}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      ) : null}

      {request ? <RequestExampleTabs endpoint={endpoint} /> : null}

      {response ? (
        <div className="space-y-2">
          <CodeBlock
            title={`Example response (${response.status})`}
            language="json"
            code={response.body}
          />
          {response.note ? (
            <p className="text-sm text-muted-foreground">{response.note}</p>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
