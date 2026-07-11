import { Callout } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function HoneyMarketplacePage() {
  const tocItems = [
    { id: 'about', label: 'What the marketplace offers' },
    { id: 'browse', label: 'Browse add-ons' },
    { id: 'access', label: 'Access types' },
    { id: 'activate', label: 'Activate an add-on' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Honey Marketplace</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Honey Marketplace</h1>
        <p className="text-lg text-muted-foreground mb-12">Discover coordinations: add-ons, integrations, and bundled services offered across Hive3.</p>
        <div className="space-y-12">
          <section id="about">
            <h2 className="text-2xl font-semibold mb-4">What the marketplace offers</h2>
            <p className="text-muted-foreground">Hive3 calls marketplace listings coordinations. Each listing describes an add-on or service, identifies its provider, and explains the access needed to enable it. Some add-ons can also make an attached credential claimable after activation.</p>
          </section>
          <section id="browse">
            <h2 className="text-2xl font-semibold mb-4">Browse add-ons</h2>
            <p className="text-muted-foreground">Open Honey Marketplace at <code className="rounded bg-muted px-1.5 py-0.5">/coordinations</code>. Search the catalog by name or description and use badge filters to narrow the results, then open a listing for details.</p>
            <Callout type="info" title="Catalog availability">Some catalog entries and the My Cart area are marked Coming Soon. Their purchase or ownership workflow is not yet available.</Callout>
          </section>
          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Access types</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Open:</strong> enable the available add-on directly.</li>
              <li><strong className="text-foreground">Members:</strong> access depends on membership in the listing’s community.</li>
              <li><strong className="text-foreground">Subscription:</strong> purchase the required recurring access.</li>
              <li><strong className="text-foreground">Ticket:</strong> buy one-time access through PayPal.</li>
            </ul>
          </section>
          <section id="activate">
            <h2 className="text-2xl font-semibold mb-4">Activate an add-on</h2>
            <p className="text-muted-foreground">Open the listing’s Access card. If the requirements are already satisfied, choose Enable Add-on. For paid listings, complete the displayed subscription or ticket purchase first. A persisted listing then shows its enabled date and renewal date when applicable.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
