import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, KeyRound, Lock, RefreshCw, ShieldCheck, Trash2 } from "lucide-react";
import { Link } from "react-router";

export function APIKeysAndIntegrationsPage() {
  const tocItems = [
    { id: "who", label: "Access & purpose" },
    { id: "create", label: "Create keys" },
    { id: "view", label: "Prefix and metadata" },
    { id: "rotate", label: "Rotate keys" },
    { id: "revoke", label: "Revoke keys" },
    { id: "security", label: "Integration usage" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">API Keys & Integrations</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          API Keys & Integrations
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Issue and manage community API keys used by onboarding links and external automation tooling.
        </p>

        <section id="who" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Access and purpose</h2>
          <Callout type="info" title="Tier">
            Page is shown for Swarm tier only; non-Swarm users see a locked state card.
          </Callout>
          <p className="text-muted-foreground">
            Use community API keys for:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Onboarding link generation for external systems.</li>
            <li>Community-level integrations that need trusted signed access.</li>
          </ul>
        </section>

        <section id="create" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Create API keys with custom names</h2>
          <div className="space-y-6">
            <Step number={1} title="Open modal">
              Click <InlineCode>Create key</InlineCode> on community key page.
            </Step>
            <Step number={2} title="Set name">
              Enter a descriptive name for lifecycle and ownership tracking.
            </Step>
            <Step number={3} title="Save full value">
              On create, copy/store the full key value immediately after generation.
            </Step>
          </div>
          <Callout type="warning" title="Usage note">
            Key rows render only a visible prefix. Store the full key once generated.
          </Callout>
          <CodeBlock
            language="text"
            code={`click Create key
enter name
create
copy and store secret value once`}
          />
        </section>

        <section id="view" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Prefix and metadata visibility</h2>
          <p className="text-muted-foreground">
            The table shows:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-[#6B01B6]" />
                Prefix
              </div>
              <p className="text-sm text-muted-foreground">
                List items show masked value with visible <InlineCode>keyPrefix</InlineCode> only.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Created and last used</div>
              <p className="text-sm text-muted-foreground">
                Created date and last-used timestamp are displayed for lifecycle decisions.
              </p>
            </div>
          </div>
        </section>

        <section id="rotate" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Rotate lifecycle</h2>
          <div className="space-y-6">
            <Step number={1} title="Review dependency">
              Rotation requires an existing active key and immediate reuse with minimal downtime.
            </Step>
            <Step number={2} title="Rotate">
              Confirm rotate action to create a new key and invalidate the previous key.
            </Step>
            <Step number={3} title="Store new key">
              Copy the newly returned full key and deploy to downstream systems.
            </Step>
          </div>
          <Callout type="warning" title="Security posture">
            Rotating immediately invalidates previous key usage and should be coordinated with all clients.
          </Callout>
        </section>

        <section id="revoke" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Revoke keys</h2>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="font-semibold mb-2 flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-[#6B01B6]" />
              One-way disable
            </div>
            <p className="text-sm text-muted-foreground">
              Revoke is permanent; integrations using this key stop immediately.
            </p>
          </div>
          <Callout type="error" title="Irreversible action">
            After confirm revoke, you must issue a new key for continued integration traffic.
          </Callout>
          <CodeBlock
            language="text"
            code={`open key row
choose Rotate or Revoke
confirm in dialog`}
          />
        </section>

        <section id="security" className="space-y-4">
          <h2 className="text-2xl font-semibold">Integration purpose and security</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                Onboarding links
              </div>
              <p className="text-sm text-muted-foreground">
                Expose keys only in trusted service calls for onboarding and link generation.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#6B01B6]" />
                Secret handling
              </div>
              <p className="text-sm text-muted-foreground">
                Rotate on suspected leak and immediately revoke old secrets.
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/quests-and-tasks"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Quests & Tasks
          </Link>
          <Link
            to="/events-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Events Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
