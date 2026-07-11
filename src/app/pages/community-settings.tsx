import { Callout } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function CommunitySettingsPage() {
  const tocItems = [
    { id: 'identity', label: 'Identity and branding' },
    { id: 'access', label: 'Visibility and access' },
    { id: 'subscriptions', label: 'Subscription access' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Communities / <span className="text-foreground">Community Settings</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Community Settings</h1>
        <p className="text-lg text-muted-foreground mb-12">Keep the community identity current and control how people become members.</p>
        <div className="space-y-12">
          <section id="identity">
            <h2 className="text-2xl font-semibold mb-4">Identity and branding</h2>
            <p className="text-muted-foreground mb-4">Update the logo, cover image, name, handle, description, About text, location, social links, badges, guidelines, and an attached document or PDF.</p>
            <p className="text-muted-foreground">The handle editor checks availability. Save the settings after reviewing image previews and public-facing text.</p>
          </section>
          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Visibility and access</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Open</h3><p className="text-sm text-muted-foreground">Anyone can join instantly.</p></div>
              <div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Apply</h3><p className="text-sm text-muted-foreground">Require approval before a person joins.</p></div>
              <div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Open + subscription</h3><p className="text-sm text-muted-foreground">Require a selected subscription to join.</p></div>
              <div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Apply + subscription</h3><p className="text-sm text-muted-foreground">Require both approval and a selected subscription.</p></div>
            </div>
            <p className="text-muted-foreground mt-4">You can also show or hide the member count and optionally display a custom count instead of the current total.</p>
          </section>
          <section id="subscriptions">
            <h2 className="text-2xl font-semibold mb-4">Subscription access</h2>
            <p className="text-muted-foreground mb-4">Subscription-gated choices stay unavailable until the community has a subscription plan. Once a plan exists, select which plan grants access.</p>
            <Callout type="info" title="Manage plans separately">Create and maintain plans in <strong>Community PayPal &amp; Monetization</strong>, then return here to select one for membership access.</Callout>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
