export type ApiMethod = "GET" | "POST" | "PATCH" | "DELETE";

export type ApiParameter = {
  name: string;
  type: string;
  required?: boolean;
  description: string;
};

export type ApiExampleRequest = {
  /** concrete path for examples, e.g. "/events/event-id"; defaults to endpoint.path */
  examplePath?: string;
  /** JSON body as a pretty-printed string */
  body?: string;
  /** value for an Idempotency-Key header, when the endpoint supports it */
  idempotencyKey?: string;
  /** example query string WITHOUT leading "?", e.g. "limit=25" */
  query?: string;
};

export type ApiExampleResponse = {
  status: number;
  body: string;
  note?: string;
};

export type ApiEndpoint = {
  method: ApiMethod;
  path: string;
  scopes: string[];
  description: string;
  params?: ApiParameter[];
  request?: ApiExampleRequest;
  response?: ApiExampleResponse;
};

const API_BASE_URL = "https://app.hive3.tech/api/v1";

function exampleUrl(endpoint: ApiEndpoint): string {
  const request = endpoint.request ?? {};
  const path = request.examplePath ?? endpoint.path;
  const query = request.query ? `?${request.query}` : "";
  return `${API_BASE_URL}${path}${query}`;
}

export function buildCurl(endpoint: ApiEndpoint): string {
  const request = endpoint.request ?? {};
  const lines = [
    `curl --request ${endpoint.method} '${exampleUrl(endpoint)}'`,
    `  --header 'Authorization: Bearer hive_sk_...'`,
  ];
  if (request.idempotencyKey) {
    lines.push(`  --header 'Idempotency-Key: ${request.idempotencyKey}'`);
  }
  if (request.body) {
    lines.push("  --header 'Content-Type: application/json'");
    lines.push(`  --data '${request.body}'`);
  }
  return lines.join(" \\\n");
}

export function buildPython(endpoint: ApiEndpoint): string {
  const request = endpoint.request ?? {};
  const headerLines = [`        "Authorization": "Bearer hive_sk_...",`];
  if (request.idempotencyKey) {
    headerLines.push(`        "Idempotency-Key": "${request.idempotencyKey}",`);
  }
  if (request.body) {
    headerLines.push(`        "Content-Type": "application/json",`);
  }
  const lines = [
    "import requests",
    "",
    "response = requests.request(",
    `    "${endpoint.method}",`,
    `    "${exampleUrl(endpoint)}",`,
    "    headers={",
    ...headerLines,
    "    },",
  ];
  if (request.body) {
    lines.push(`    data='''${request.body}''',`);
  }
  lines.push(")", "print(response.json())");
  return lines.join("\n");
}

export function buildFetch(endpoint: ApiEndpoint): string {
  const request = endpoint.request ?? {};
  const headerLines = [`    Authorization: "Bearer hive_sk_...",`];
  if (request.idempotencyKey) {
    headerLines.push(`    "Idempotency-Key": "${request.idempotencyKey}",`);
  }
  if (request.body) {
    headerLines.push(`    "Content-Type": "application/json",`);
  }
  const bodyIndented = request.body
    ? request.body.split("\n").join("\n  ")
    : undefined;
  const lines = [
    `const response = await fetch("${exampleUrl(endpoint)}", {`,
    `  method: "${endpoint.method}",`,
    "  headers: {",
    ...headerLines,
    "  },",
  ];
  if (bodyIndented) {
    lines.push(`  body: JSON.stringify(${bodyIndented}),`);
  }
  lines.push("});", "const data = await response.json();");
  return lines.join("\n");
}
