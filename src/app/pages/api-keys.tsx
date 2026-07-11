import { Link } from "react-router";
import { Callout, InlineCode, Step } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

const dashboardScopes = ["account:read", "posts:read", "posts:write", "resources:read", "resources:write", "communities:read", "communities:moderate", "communities:write"];

export function ApiKeysPage() {
  const tocItems = [{ id: "create", label: "Create a key" }, { id: "scopes", label: "Dashboard scopes" }, { id: "manage", label: "Manage keys" }, { id: "cli", label: "Use the CLI" }];
  return (
    <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
      <div className="text-sm text-muted-foreground mb-6">API Reference / <span className="text-foreground">API Keys</span></div>
      <h1 className="text-4xl font-bold mb-4 text-gradient">API Keys</h1>
      <p className="text-lg text-muted-foreground mb-12">Create and manage person-owned credentials for API clients, or approve a key through the Hive CLI login flow.</p>
      <div className="space-y-12">
        <section id="create"><h2 className="text-2xl font-semibold mb-4">Create a key</h2>
          <div className="space-y-5"><Step number={1} title="Open Developer Credentials"><p>In the Hive app, open Settings and find the Developer Credentials card.</p></Step>
          <Step number={2} title="Choose a label and scopes"><p>Give the credential a recognizable label and select only the access it needs. The defaults are <InlineCode>account:read</InlineCode>, <InlineCode>posts:read</InlineCode>, <InlineCode>resources:read</InlineCode>, and <InlineCode>communities:read</InlineCode>.</p></Step>
          <Step number={3} title="Create and copy"><p>Select <strong>Create API Key</strong>, then copy the secret immediately.</p></Step></div>
          <Callout type="warning" title="The secret is shown once">The key clears from the screen automatically and cannot be shown again. Store it in a secret manager and never commit it to source control.</Callout>
        </section>
        <section id="scopes"><h2 className="text-2xl font-semibold mb-4">Dashboard scopes</h2>
          <p className="mb-4">The dashboard offers the following checkboxes. Community permissions are still checked against your live role for every request.</p>
          <div className="grid sm:grid-cols-2 gap-2">{dashboardScopes.map((scope) => <code key={scope} className="rounded border border-border bg-muted px-3 py-2 text-sm">{scope}</code>)}</div>
        </section>
        <section id="manage"><h2 className="text-2xl font-semibold mb-4">Manage keys</h2>
          <p className="mb-3">You can keep up to 25 active keys. The card lists each credential's label, prefix, scopes, creation date, last-used date, and expiration when present.</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground"><li><strong className="text-foreground">Rotate</strong> revokes the old secret and reveals a replacement once.</li><li><strong className="text-foreground">Revoke</strong> disables one key immediately.</li><li><strong className="text-foreground">Revoke all</strong> disables every active key after confirmation.</li></ul>
        </section>
        <section id="cli"><h2 className="text-2xl font-semibold mb-4">Get a key through the CLI</h2>
          <p><InlineCode>hive login</InlineCode> opens a browser approval flow and stores the approved person-owned key locally. See <Link className="text-primary hover:underline" to="/cli/authentication">Authentication &amp; Configuration</Link> for access modes, exact scopes, and credential storage.</p>
        </section>
      </div><PagerNav /></div><RightSidebar items={tocItems} /></div>
  );
}
