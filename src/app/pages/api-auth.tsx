import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Key, ShieldCheck, RefreshCw, AlertTriangle } from "lucide-react";
import { Link } from "react-router";

export function AuthenticationPage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "get-key", label: "Get an API Key" },
    { id: "use-key", label: "Use the key" },
    { id: "security", label: "Security" },
    { id: "error-handling", label: "Error handling" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Developer Reference / <span className="text-foreground">Authentication</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Authentication
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Authenticate API requests using community-scoped API keys.
        </p>

        <section id="overview" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-muted-foreground">
            For programmatic onboarding and integration flows, the developer API uses an API key passed in the
            <InlineCode>Authorization</InlineCode> header. Current authentication support is limited to this single
            method.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Key className="w-4 h-4 text-[#6B01B6]" />
                Single auth mode
              </div>
              <p className="text-sm text-muted-foreground">
                No SDKs or OAuth flows are documented here because this surface currently validates API keys.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                Key scope
              </div>
              <p className="text-sm text-muted-foreground">
                Each key is bound to one community and used for operations on that community context.
              </p>
            </div>
          </div>
        </section>

        <section id="get-key" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">How to get an API key</h2>
          <p className="text-muted-foreground">
            API keys are managed per community and available for Swarm/Royal Hive communities.
          </p>

          <div className="space-y-6">
            <Step number={1} title="Open community settings">
              In the community dashboard, go to <InlineCode>API Keys</InlineCode>.
            </Step>
            <Step number={2} title="Create or manage keys">
              Use the dashboard controls to create, rotate, or revoke keys.
            </Step>
            <Step number={3} title="Copy immediately">
              The full key is shown once on creation. Copy it immediately and store it in a secure secret store.
            </Step>
          </div>

          <Callout type="warning" title="Visibility note">
            The dashboard stores and displays only the key prefix after creation. You cannot retrieve the secret again.
          </Callout>
        </section>

        <section id="use-key" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">How to use your key</h2>
          <p className="text-muted-foreground">
            Include the key as a bearer token in <InlineCode>Authorization</InlineCode> for every public API request.
          </p>

          <CodeBlock
            language="http"
            code={`curl -X POST \\
  https://api.hive3.com/api/v1/communities/onboard \\
  -H "Authorization: Bearer hive_..." \\
  -H "Content-Type: application/json" \\
  -d '{
  "email": "user@example.com",
  "username": "optional_username",
  "displayName": "Optional Name",
  "profileImageURL": "https://.../avatar.png",
  "bannerImageURL": "https://.../banner.png"
}'`}
          />
          <Callout type="info" title="Format check">
            Use the exact token prefix format returned by the dashboard. API keys are not JWTs.
          </Callout>
        </section>

        <section id="security" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Security best practices</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#6B01B6]" />
                Never in client bundles
              </div>
              <p className="text-sm text-muted-foreground">
                API keys should remain server-side only. Never embed in frontend environments.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#6B01B6]" />
                Rotate regularly
              </div>
              <p className="text-sm text-muted-foreground">
                Rotate keys during key rotation and when team membership changes.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground">
            Keep key scopes minimal and watch for unexpected request spikes. Remove unused keys once integrations are retired.
          </p>
        </section>

        <section id="error-handling" className="space-y-4">
          <h2 className="text-2xl font-semibold">Common auth failures</h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-1">401 Unauthorized</h3>
              <p className="text-sm text-muted-foreground">Missing <InlineCode>Authorization</InlineCode> header, wrong format, or invalid key.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-1">403 Forbidden</h3>
              <p className="text-sm text-muted-foreground">Key exists but community does not allow API-key integrations for the request.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-1">429 Too Many Requests</h3>
              <p className="text-sm text-muted-foreground">Rate limit reached; implement backoff and retry logic for production traffic.
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/api-overview"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            API Overview
          </Link>
          <Link
            to="/onboarding-link-setup"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Onboarding Link Setup
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
