import { Link } from "react-router";
import { Callout } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

export function AccountSettingsPage() {
  const tocItems = [{ id: "display", label: "Display and notifications" }, { id: "identity", label: "Login and verification" }, { id: "connections", label: "Linked communities" }, { id: "subscriptions", label: "Subscriptions" }, { id: "developer", label: "Developer credentials" }, { id: "account", label: "Export or delete" }];
  return <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
    <div className="text-sm text-muted-foreground mb-6">Your Profile / <span className="text-foreground">Account Settings</span></div>
    <h1 className="text-4xl font-bold mb-4 text-gradient">Account Settings</h1>
    <p className="text-lg text-muted-foreground mb-12">Manage account-wide preferences, connected identities, purchases, and lifecycle controls.</p>
    <div className="space-y-12">
      <section id="display"><h2 className="text-2xl font-semibold mb-4">Display and notifications</h2><p className="text-muted-foreground">Choose Light, Dark, or System theme. The Display card also lets you mute system notifications. For category mutes, read <Link to="/notifications" className="text-primary hover:underline">Notifications</Link>.</p></section>
      <section id="identity"><h2 className="text-2xl font-semibold mb-4">Linked login accounts and email</h2><p className="text-muted-foreground">The Account Summary shows your login methods. Linked social providers are marked <strong>Linked</strong>; available providers that are not linked offer a Connect action. The Account Trust area shows your email-verification state and starts verification when needed.</p></section>
      <section id="connections"><h2 className="text-2xl font-semibold mb-4">Linked communities</h2><p className="text-muted-foreground">Review communities previously linked to your account through consent. You can disconnect a listed community after confirming the action. Current API and CLI community access still depends on your personal credentials and live community role.</p></section>
      <section id="subscriptions"><h2 className="text-2xl font-semibold mb-4">Membership and purchased subscriptions</h2><p className="text-muted-foreground">The subscription card shows your Hive3 membership and links to plan choices. Select <strong>Manage Subscriptions</strong> to open <strong>/settings/subscriptions</strong> for purchased people and community subscriptions.</p></section>
      <section id="developer"><h2 className="text-2xl font-semibold mb-4">Developer credentials</h2><p className="text-muted-foreground">The Developer Credentials card is where you manage personal API keys. Read <Link to="/api/keys" className="text-primary hover:underline">API Keys</Link> before creating or revoking one.</p></section>
      <section id="account"><h2 className="text-2xl font-semibold mb-4">Export or delete your account</h2><p className="text-muted-foreground mb-4">Select <strong>Export Data</strong> to request and download an account export. Account deletion requires typing <strong>DELETE</strong>, signs you out, and starts a seven-day cancellation window.</p><Callout type="warning" title="Deletion can be stopped during the grace period">Log in within seven days and select <strong>Stop deletion</strong> to cancel the request.</Callout></section>
    </div><PagerNav /></div><RightSidebar items={tocItems} /></div>;
}
