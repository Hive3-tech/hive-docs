import { RightSidebar } from "../components/right-sidebar";
import { CodeBlock, Callout } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router";

const methodStyles = {
  GET: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300",
  POST: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  DELETE: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300",
};

type Method = keyof typeof methodStyles;

type Endpoint = {
  method: Method;
  path: string;
  title: string;
  description: string;
  details: string;
};

const endpoints: Endpoint[] = [
  {
    method: "POST",
    path: "/api/v1/communities/onboard",
    title: "Create onboarding link payload",
    description:
      "Generate a community-specific welcome redirect URL that includes a signed one-time token.",
    details:
      "Body requires `email` and accepts optional profile fields. Response contains `redirect_url` with tokenized `/community/{slug}/welcome?token=...` URL.",
  },
  {
    method: "POST",
    path: "/user/community-welcome/consume",
    title: "Consume welcome token",
    description: "Mark a token as used when a logged-in user follows the welcome link.",
    details:
      "This endpoint is called from the app after a successful login session to finalize membership.",
  },
  {
    method: "GET",
    path: "/user/communities/{communityId}/api-keys",
    title: "List community API keys",
    description: "Get existing community-scoped keys (prefixes only are returned in list responses).",
    details:
      "Used by the dashboard page and required before onboarding integrations can call `onboard` endpoint.",
  },
  {
    method: "POST",
    path: "/user/communities/{communityId}/api-keys",
    title: "Create API key",
    description: "Issue one active key per community (Swarm+ tier access required).",
    details: "One key is returned once with a full value. Save it immediately.",
  },
  {
    method: "POST",
    path: "/user/communities/{communityId}/api-keys/rotate",
    title: "Rotate key",
    description: "Generate a replacement key and revoke the active key in one operation.",
    details: "Use this to rotate leaked credentials with minimal downtime planning.",
  },
  {
    method: "DELETE",
    path: "/user/communities/{communityId}/api-keys/{keyId}",
    title: "Revoke key",
    description: "Permanently disable one key and any integrations that use it.",
    details: "Revokes are immediate and cannot be undone.",
  },
];

function EndpointCard({ method, path, title, description, details }: Endpoint) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-3 mb-3">
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${methodStyles[method]}`}>
          {method}
        </span>
        <p className="font-mono text-sm text-foreground">{path}</p>
      </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="text-sm mt-2">{details}</p>
    </div>
  );
}

export function ApiOverviewPage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "base-url", label: "Base URL and auth" },
    { id: "rate-limits", label: "Rate limits" },
    { id: "endpoints", label: "API endpoints" },
    { id: "what-build", label: "What to build first" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Developer Reference / <span className="text-foreground">API Overview</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          API Overview
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Use the developer API for onboarding links and trusted community integration flows.
        </p>

        <section id="overview" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">What this API covers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4 flex gap-3">
              <Users className="w-6 h-6 text-[#6B01B6] mt-1" />
              <div>
                <div className="font-semibold">Onboarding orchestration</div>
                <p className="text-sm text-muted-foreground">
                  Generate secure welcome links for external campaigns, partner portals, or sign-up funnels.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex gap-3">
              <Shield className="w-6 h-6 text-[#6B01B6] mt-1" />
              <div>
                <div className="font-semibold">Community API-key control</div>
                <p className="text-sm text-muted-foreground">
                  Manage key lifecycle for integrations: create, rotate, revoke, and list.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="base-url" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Base URL and authentication</h2>
          <p className="text-muted-foreground">
            The backend is mounted at <span className="font-mono text-sm">/api</span> and public onboarding endpoints sit under
            <span className="font-mono text-sm"> /api/v1</span>.
          </p>
          <CodeBlock
            language="bash"
            code={`curl -X POST \\
  https://api.hive3.com/api/v1/communities/onboard \\
  -H \"Authorization: Bearer hive_...\" \\
  -H \"Content-Type: application/json\"`}
          />
          <p className="text-muted-foreground">
            All developer API calls for onboarding features authenticate using a community API key in
            the <span className="font-mono text-sm">Authorization: Bearer</span> header.
          </p>
        </section>

        <section id="rate-limits" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Rate limits</h2>
          <Callout type="info" title="Current implementation default">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Public onboarding endpoints are currently limited to 100 requests/minute per API key.</span>
            </div>
          </Callout>
          <p className="text-muted-foreground">
            If your environment sets stricter limits, those settings take precedence.
          </p>
        </section>

        <section id="endpoints" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Endpoint inventory</h2>
          <div className="space-y-3">
            {endpoints.map((endpoint) => (
              <EndpointCard key={endpoint.path + endpoint.method} {...endpoint} />
            ))}
          </div>
        </section>

        <section id="what-build" className="space-y-4">
          <h2 className="text-2xl font-semibold">What to build first</h2>
          <Callout type="warning" title="Recommended sequence">
            <ol className="list-decimal list-inside space-y-1">
              <li>Issue a community API key from the dashboard.</li>
              <li>Build a backend service that calls <span className="font-mono text-sm">POST /api/v1/communities/onboard</span>.</li>
              <li>Send signed welcome links in your campaign flows.</li>
            </ol>
          </Callout>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/credentials-explained"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Credentials Explained
          </Link>
          <Link
            to="/authentication"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Authentication
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
