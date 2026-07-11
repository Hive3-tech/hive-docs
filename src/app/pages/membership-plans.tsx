import { Link } from "react-router";
import { Callout } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

const plans = [
  { name: "Worker Bee", price: "Free", features: ["Join communities", "Attend events and take courses", "Read content and create posts", "Chat and reply to direct messages"] },
  { name: "Honey Bee", price: "$75/month", features: ["Everything in Worker Bee", "Initiate direct messages", "Create content, courses, events, jobs, credentials, and community tasks", "Connect personal PayPal", "Launch a personal AI assistant"] },
  { name: "Swarm", price: "$250/month", features: ["Everything in Honey Bee", "Create and manage one community", "Request a metaverse world for that community"] },
  { name: "Royal Hive", price: "$550/month", features: ["Everything in Swarm", "Custom Metaverse World", "Priority Support", "Advanced Analytics", "White Label Options"] },
] as const;

export function MembershipPlansPage() {
  const tocItems = [{ id: "compare", label: "Compare plans" }, { id: "royal", label: "Royal Hive inclusions" }, { id: "subscriptions", label: "Membership vs subscriptions" }];
  return <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
    <div className="text-sm text-muted-foreground mb-6">Getting Started / <span className="text-foreground">Membership Plans</span></div>
    <h1 className="text-4xl font-bold mb-4 text-gradient">Membership Plans</h1>
    <p className="text-lg text-muted-foreground mb-12">Choose the platform membership that matches how you participate, create, or manage a community.</p>
    <div className="space-y-12">
      <section id="compare"><h2 className="text-2xl font-semibold mb-4">Compare plans</h2>
        <Callout type="info" title="Prices as of July 2026">Prices can change. Confirm current pricing at <a className="underline" href="https://app.hive3.tech/pricing">app.hive3.tech/pricing</a>.</Callout>
        <div className="grid md:grid-cols-2 gap-4 mt-6">{plans.map(plan => <div key={plan.name} className="rounded-lg border border-border bg-card p-5"><div className="flex items-baseline justify-between gap-4"><h3 className="text-xl font-semibold">{plan.name}</h3><span className="font-medium text-primary">{plan.price}</span></div><ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-2">{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div>)}</div>
      </section>
      <section id="royal"><h2 className="text-2xl font-semibold mb-4">Royal Hive inclusions</h2><p className="text-muted-foreground">The pricing page presents Custom Metaverse World, Priority Support, Advanced Analytics, and White Label Options as Royal Hive plan inclusions. In-app feature gates otherwise treat Royal Hive like Swarm; these inclusions are not documented here as separate enforced gates.</p></section>
      <section id="subscriptions"><h2 className="text-2xl font-semibold mb-4">Platform membership vs creator subscriptions</h2><p className="text-muted-foreground">Your Hive3 membership controls platform capabilities. A creator-defined PayPal subscription is a separate purchase that can unlock a person’s, community’s, or resource’s subscriber access. Buying one does not upgrade your Hive3 membership.</p><p className="mt-4 text-muted-foreground">Honey Bee and above can learn about creator payments in <Link to="/connect-paypal" className="text-primary hover:underline">Connecting PayPal</Link>.</p></section>
    </div><PagerNav /></div><RightSidebar items={tocItems} /></div>;
}
