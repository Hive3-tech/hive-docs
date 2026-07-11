import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function TicketsAndPurchasesPage() {
  const tocItems = [
    { id: 'buy', label: 'Buy a ticket' },
    { id: 'find', label: 'Find your tickets' },
    { id: 'refunds', label: 'Request a refund' },
    { id: 'platform', label: 'Platform purchases' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Tickets &amp; Purchases</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Tickets &amp; Purchases</h1>
        <p className="text-lg text-muted-foreground mb-12">Buy one-time access from a Hive3 creator, review your ticket history, and request a refund.</p>
        <div className="space-y-12">
          <section id="buy">
            <h2 className="text-2xl font-semibold mb-4">Buy a ticket</h2>
            <div className="space-y-5">
              <Step number={1} title="Open the resource">Visit a ticketed event, course, quest, or marketplace add-on. The Access Required panel shows the ticket price and any subscription alternative.</Step>
              <Step number={2} title="Choose Buy Ticket">Hive3 opens a PayPal checkout for the creator or community selling access.</Step>
              <Step number={3} title="Approve the payment">Complete PayPal approval. After capture succeeds, Hive3 refreshes your access to the resource.</Step>
            </div>
            <Callout type="info" title="Creator purchase">A ticket is sold by the person or community that owns the resource. Its PayPal merchant is separate from Hive3 platform billing.</Callout>
          </section>
          <section id="find">
            <h2 className="text-2xl font-semibold mb-4">Find your tickets</h2>
            <p className="text-muted-foreground">Open Notifications, then choose My Tickets in the Tickets panel. Each entry shows the item, purchase date, amount paid, and its current refund state. Active, refund pending, refund rejected, and refunded states can appear.</p>
          </section>
          <section id="refunds">
            <h2 className="text-2xl font-semibold mb-4">Request a refund</h2>
            <p className="text-muted-foreground mb-4">Open the menu on an active ticket and choose Request refund. Hive3 submits the request to the seller and marks the ticket Refund pending while it is reviewed.</p>
            <p className="text-muted-foreground">The seller receives a notification, can message you, add an internal review note, and approve or reject the request. Your ticket panel updates to show the resulting status.</p>
          </section>
          <section id="platform">
            <h2 className="text-2xl font-semibold mb-4">Platform purchases are separate</h2>
            <p className="text-muted-foreground">Hive3 membership upgrades, community quest credits, and metaverse-time top-ups are platform purchases. They are separate from tickets and subscriptions sold by creator merchants, so they do not appear as creator tickets in My Tickets.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
