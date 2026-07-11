import { Link } from "react-router";
import { Callout, CodeBlock } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

const scopes = [
  ["account:read", "Read your profile, account settings, wallets, and notifications."],
  ["account:write", "Change profile and account settings, uploads, wallets, and notifications."],
  ["posts:read", "Read posts and comments."],
  ["posts:write", "Create or change posts, comments, and likes."],
  ["resources:read", "Read events, courses, content, quests, jobs, and their workflows."],
  ["resources:write", "Create or change resources and participate in their workflows."],
  ["communities:read", "Read community membership, applications, and members."],
  ["communities:moderate", "Review applications and moderate members when your live role permits it."],
  ["communities:write", "Change community membership, roles, and access when your live role permits it."],
];

export function CliAuthenticationPage() {
  const tocItems = [
    { id: "browser-approval", label: "Browser approval" },
    { id: "login-options", label: "Login options" },
    { id: "scopes", label: "Scopes" },
    { id: "logout", label: "Logout and revocation" },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Hive CLI / <span className="text-foreground">Authentication &amp; Configuration</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Authentication &amp; Configuration</h1>
        <p className="text-lg text-muted-foreground mb-12">Approve a person-owned API key in Hive3, control its scopes, and revoke it when you are done.</p>
        <div className="space-y-12">
          <section id="browser-approval"><h2 className="text-2xl font-semibold mb-4">Browser approval</h2>
            <p className="text-muted-foreground mb-4"><code>hive login</code> opens the <code>/cli/authorize</code> page and prints its URL and a short code. Sign in, enter and confirm the code, review the requested access, and approve or deny it. The CLI polls for the result for 10 minutes by default.</p>
            <Callout type="info" title="Person-owned access">The saved key belongs to your account. Community permissions are checked from your current owner, admin, or moderator roles each time you act.</Callout>
          </section>
          <section id="login-options"><h2 className="text-2xl font-semibold mb-4">Login options</h2>
            <CodeBlock language="bash" code={`hive login [--access read|full] [--scope <scope>] [--label <label>] \\
  [--no-open] [--timeout-ms <milliseconds>] [--api-url <url>] [--app-url <url>]`} />
            <div className="overflow-x-auto mt-5"><table className="w-full text-sm"><thead><tr className="border-b"><th className="text-left py-3 pr-4">Option</th><th className="text-left py-3">Meaning</th></tr></thead><tbody>
              <tr className="border-b"><td className="py-3 pr-4 font-mono">--access read|full</td><td>Request the Read Only or Full Access bundle.</td></tr>
              <tr className="border-b"><td className="py-3 pr-4 font-mono">--scope &lt;scope&gt;</td><td>Request an exact scope; repeat the option for more than one. It cannot be combined with <code>--access</code>.</td></tr>
              <tr className="border-b"><td className="py-3 pr-4 font-mono">--label &lt;label&gt;</td><td>Set the credential label. The default is “Hive CLI”.</td></tr>
              <tr className="border-b"><td className="py-3 pr-4 font-mono">--no-open</td><td>Do not open a browser automatically; the CLI still prints the approval URL and code.</td></tr>
              <tr className="border-b"><td className="py-3 pr-4 font-mono">--timeout-ms &lt;ms&gt;</td><td>Change the positive polling timeout in milliseconds.</td></tr>
              <tr><td className="py-3 pr-4 font-mono">--api-url / --app-url</td><td>Override the public API base URL or browser app URL for this login.</td></tr>
            </tbody></table></div>
          </section>
          <section id="scopes"><h2 className="text-2xl font-semibold mb-4">Scopes</h2><p className="text-muted-foreground mb-4">Scopes limit what the key may request. Community operations also require a matching live role.</p>
            <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b"><th className="text-left py-3 pr-4">Scope</th><th className="text-left py-3">Allows</th></tr></thead><tbody>{scopes.map(([scope, meaning]) => <tr className="border-b" key={scope}><td className="py-3 pr-4 font-mono">{scope}</td><td className="py-3">{meaning}</td></tr>)}</tbody></table></div>
          </section>
          <section id="logout"><h2 className="text-2xl font-semibold mb-4">Logout and revocation</h2>
            <CodeBlock code="hive logout" language="bash" />
            <p className="text-muted-foreground mt-4">Logout attempts to revoke the current key server-side with <code>DELETE /account/keys/current</code>, then always removes the local config—even if revocation fails. You can also revoke a key manually in app Settings → Developer Credentials. See <Link className="text-primary hover:underline" to="/api/keys">API Keys</Link> for key management.</p>
          </section>
        </div><PagerNav />
      </div><RightSidebar items={tocItems} />
    </div>
  );
}
