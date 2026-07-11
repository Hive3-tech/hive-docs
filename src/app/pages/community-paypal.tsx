import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function CommunityPayPalPage() {
  const tocItems = [
    { id: 'connect', label: 'Connect community PayPal' },
    { id: 'subscriptions', label: 'Subscriptions and tickets' },
    { id: 'platform-purchases', label: 'Credits and metaverse time' },
    { id: 'refunds', label: 'Review refund requests' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Communities / <span className="text-foreground">Community PayPal &amp; Monetization</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Community PayPal &amp; Monetization</h1>
        <p className="text-lg text-muted-foreground mb-12">Connect the community's merchant account, sell access, and handle buyer refund requests.</p>
        <div className="space-y-12">
          <section id="connect">
            <h2 className="text-2xl font-semibold mb-4">Connect community PayPal</h2>
            <Callout type="warning" title="PayPal Business account required">Use a PayPal Business account that can receive payments and has a confirmed primary email.</Callout>
            <p className="text-muted-foreground mb-4">The community connection is owner-scoped and stored independently from your personal PayPal connection. The owner or a community admin manages it from the PayPal card on the community dashboard.</p>
            <Step number={1} title="Start onboarding">Open PayPal and follow the merchant onboarding redirect.</Step>
            <Step number={2} title="Return and refresh">After PayPal sends you back to Hive3, refresh the status. Resolve warnings if the account cannot receive payments or its primary email is unconfirmed.</Step>
            <Callout type="warning" title="Disconnecting changes access">Disconnecting deactivates active plans and removes community PayPal products. Subscription-gated community access falls back to the corresponding open or apply access mode.</Callout>
          </section>
          <section id="subscriptions">
            <h2 className="text-2xl font-semibold mb-4">Subscriptions and tickets</h2>
            <p className="text-muted-foreground mb-4">Create community subscription plans with a title, description, amount, currency, and monthly or yearly billing interval. Activate or deactivate plans, then select a plan in Community Settings or while configuring gated resources.</p>
            <p className="text-muted-foreground">Ticket products support events, courses, quests, and marketplace add-ons. Configure the amount, USD/EUR/GBP currency, and active status; tickets do not set the resource's participant capacity.</p>
          </section>
          <section id="platform-purchases">
            <h2 className="text-2xl font-semibold mb-4">Quest credits and metaverse time</h2>
            <p className="text-muted-foreground mb-4">Communities purchase quest-credit bundles from Hive3 before launching quests: a single credit lasts up to 7 days, while a four-credit bundle lasts up to 30 days.</p>
            <p className="text-muted-foreground">Metaverse top-ups add 60-minute packs to the community's available time and expire 30 days after purchase. These are platform purchases paid to Hive3, not sales through the community merchant account.</p>
          </section>
          <section id="refunds">
            <h2 className="text-2xl font-semibold mb-4">Review refund requests</h2>
            <Step number={1} title="Open the notification">A buyer's ticket refund request notifies the seller-side community managers.</Step>
            <Step number={2} title="Contact the requester">Use messaging when you need context before making a decision, and record an optional review note.</Step>
            <Step number={3} title="Approve or reject">Approval refunds the PayPal capture, marks the ticket refunded, and revokes active enrollment. Rejection keeps the ticket and sends the buyer your decision and note.</Step>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
