import { Callout, Step } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

export function ConnectPayPalPage() {
  const tocItems = [{ id: "prerequisites", label: "Before you connect" }, { id: "connect", label: "Connect PayPal" }, { id: "status", label: "Resolve account warnings" }, { id: "enabled", label: "What PayPal enables" }, { id: "plans", label: "Subscription plans" }, { id: "disconnect", label: "Disconnect" }];
  return <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
    <div className="text-sm text-muted-foreground mb-6">Your Profile / <span className="text-foreground">Connecting PayPal</span></div>
    <h1 className="text-4xl font-bold mb-4 text-gradient">Connecting PayPal</h1>
    <p className="text-lg text-muted-foreground mb-12">Connect your own merchant account to sell profile subscriptions and paid resources.</p>
    <div className="space-y-12">
      <section id="prerequisites"><h2 className="text-2xl font-semibold mb-4">Before you connect</h2><Callout type="warning" title="Honey Bee+ and PayPal Business required">You need a Honey Bee, Swarm, or Royal Hive membership and a PayPal Business account.</Callout></section>
      <section id="connect"><h2 className="text-2xl font-semibold mb-4">Connect PayPal</h2><div className="space-y-5"><Step number={1} title="Open your Profile Dashboard"><p className="text-muted-foreground">Choose the PayPal action to open your personal payment settings.</p></Step><Step number={2} title="Start merchant onboarding"><p className="text-muted-foreground">Select <strong>Connect PayPal Account</strong>. Hive3 opens PayPal’s merchant onboarding flow.</p></Step><Step number={3} title="Finish at PayPal"><p className="text-muted-foreground">Complete the PayPal steps. The callback returns through <strong>/paypal/callback</strong>, and Hive3 verifies the merchant connection.</p></Step><Step number={4} title="Refresh status"><p className="text-muted-foreground">If the page does not update immediately, use its status refresh after completing onboarding.</p></Step></div></section>
      <section id="status"><h2 className="text-2xl font-semibold mb-4">Resolve account warnings</h2><p className="text-muted-foreground">Connected does not always mean ready to sell. If PayPal reports that your account cannot receive payments, finish the requested merchant setup. If the primary email is unconfirmed, confirm it in your PayPal Business settings and refresh the Hive3 status.</p></section>
      <section id="enabled"><h2 className="text-2xl font-semibold mb-4">What PayPal enables</h2><p className="text-muted-foreground">A ready personal connection enables profile subscription plans and one-time tickets for your events and courses. Those plans can also be selected for subscriber-gated content and jobs.</p></section>
      <section id="plans"><h2 className="text-2xl font-semibold mb-4">Create and manage subscription plans</h2><p className="text-muted-foreground">Each plan has a title, description, amount, currency, and monthly or yearly billing interval. You can edit an existing plan or deactivate and reactivate it when you want to stop or resume new access.</p></section>
      <section id="disconnect"><h2 className="text-2xl font-semibold mb-4">Disconnect</h2><p className="text-muted-foreground">Use the disconnect action in PayPal settings and confirm the modal. After disconnecting, the personal merchant connection is no longer available for new Hive3 payment activity until you reconnect.</p></section>
    </div><PagerNav /></div><RightSidebar items={tocItems} /></div>;
}
