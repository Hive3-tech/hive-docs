import { Callout, CodeBlock, InlineCode } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

const scopes = [
  ["account:read", "Read your account, profile, wallets, notifications, builders, and credential context."],
  ["account:write", "Update account and profile settings, builders, notifications, wallets, uploads, and NFT exposure."],
  ["posts:read", "Read posts and comments visible to you."],
  ["posts:write", "Create, update, archive, like, and comment where you have access."],
  ["resources:read", "Read visible events, courses, content, quests, jobs, and their workflows."],
  ["resources:write", "Create and manage resources and participate in their workflows where permitted."],
  ["communities:read", "Read community membership, application, member, and capability context."],
  ["communities:moderate", "Review applications, change member roles, and remove members when your live role permits."],
  ["communities:write", "Perform owner or admin community writes where your live role permits."],
];

const errors = [
  ["invalid_request", "400", "The body or query parameters are malformed."],
  ["missing_authorization", "401", "The Authorization header is absent."],
  ["malformed_authorization", "401", "The Authorization header is not a Bearer key."],
  ["invalid_api_key", "401", "The key is unknown, revoked, expired, or unavailable."],
  ["insufficient_scope", "403", "The key lacks a required scope."],
  ["forbidden", "403", "The key has the scope, but your current role or capability does not allow the action."],
  ["not_found", "404", "The resource does not exist or is not visible to you."],
  ["conflict", "409", "An idempotency or resource-state conflict occurred."],
  ["rate_limited", "429", "A rate limit was exceeded."],
  ["server_error", "500", "An unexpected server error occurred."],
];

export function ApiOverviewPage() {
  const tocItems = [
    { id: "getting-started", label: "Getting started" }, { id: "scopes", label: "Scopes" },
    { id: "pagination", label: "Pagination and idempotency" }, { id: "errors", label: "Errors" },
    { id: "rate-limits", label: "Rate limits" },
  ];
  return (
    <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
      <div className="text-sm text-muted-foreground mb-6">API Reference / <span className="text-foreground">API Overview</span></div>
      <h1 className="text-4xl font-bold mb-4 text-gradient">API Overview</h1>
      <p className="text-lg text-muted-foreground mb-12">Use Hive API v1 to act as your person account and within communities where you currently hold the required role.</p>
      <div className="space-y-12">
        <section id="getting-started"><h2 className="text-2xl font-semibold mb-4">Getting started</h2>
          <p className="mb-4">Send requests to <InlineCode>https://app.hive3.tech/api/v1</InlineCode> with a person-owned <InlineCode>hive_sk_</InlineCode> key. Community API keys are deprecated: community access derives from the key owner's live roles.</p>
          <CodeBlock title="Example request" language="bash" code={"curl 'https://app.hive3.tech/api/v1/me' \\\n  --header 'Authorization: Bearer hive_sk_...'"} />
          <Callout type="info" title="CLI authentication">The <InlineCode>/api/v1/cli/auth/start</InlineCode> and <InlineCode>/api/v1/cli/auth/poll</InlineCode> routes are used internally by <InlineCode>hive login</InlineCode>. They are not an integration surface.</Callout>
        </section>
        <section id="scopes"><h2 className="text-2xl font-semibold mb-4">Scopes</h2>
          <p className="mb-4">Scopes are necessary but not sufficient. Hive also checks ownership and your current community or manager role for each action.</p>
          <div className="overflow-x-auto"><table className="w-full text-sm border border-border"><thead><tr className="border-b text-left"><th className="p-3">Scope</th><th className="p-3">Allows</th></tr></thead><tbody>{scopes.map(([scope, meaning]) => <tr key={scope} className="border-b last:border-0"><td className="p-3 font-mono">{scope}</td><td className="p-3 text-muted-foreground">{meaning}</td></tr>)}</tbody></table></div>
        </section>
        <section id="pagination"><h2 className="text-2xl font-semibold mb-4">Pagination and idempotency</h2>
          <p className="mb-4">Resource lists accept <InlineCode>limit</InlineCode> (default 25, maximum 100) and an opaque <InlineCode>cursor</InlineCode>. Read <InlineCode>page.nextCursor</InlineCode> and <InlineCode>page.hasMore</InlineCode> from the response. Notifications use <InlineCode>limit</InlineCode>, <InlineCode>offset</InlineCode>, and <InlineCode>unreadOnly</InlineCode> instead.</p>
          <p>Send an <InlineCode>Idempotency-Key</InlineCode> header on resource-create requests so a safe retry does not create a duplicate.</p>
        </section>
        <section id="errors"><h2 className="text-2xl font-semibold mb-4">Errors</h2>
          <p className="mb-4">API v1 errors use the envelope below. Do not assume every response produced outside the API handler, such as an edge-proxy failure, has this shape.</p>
          <CodeBlock language="json" code={'{\n  "error": {\n    "code": "insufficient_scope",\n    "message": "API key does not include the required scope",\n    "requiredScopes": ["account:read"]\n  }\n}'} />
          <div className="overflow-x-auto mt-4"><table className="w-full text-sm border border-border"><thead><tr className="border-b text-left"><th className="p-3">Code</th><th className="p-3">HTTP</th><th className="p-3">Meaning</th></tr></thead><tbody>{errors.map(([code, status, meaning]) => <tr key={code} className="border-b last:border-0"><td className="p-3 font-mono">{code}</td><td className="p-3">{status}</td><td className="p-3 text-muted-foreground">{meaning}</td></tr>)}</tbody></table></div>
        </section>
        <section id="rate-limits"><h2 className="text-2xl font-semibold mb-4">Rate limits</h2>
          <p className="mb-3">Authenticated traffic is limited to 600 requests per person per minute, with an edge limit of 300 requests per IP per minute. A 429 response includes <InlineCode>Retry-After</InlineCode>.</p>
          <p>Daily creation quotas are: posts 100, comments 500, events 20, courses 10, content 50, quests 30, and jobs 20. Upload URL requests allow 10 per minute and 50 per day. Tighter per-operation quotas also apply, so this is not an exhaustive list.</p>
        </section>
      </div><PagerNav /></div><RightSidebar items={tocItems} /></div>
  );
}
