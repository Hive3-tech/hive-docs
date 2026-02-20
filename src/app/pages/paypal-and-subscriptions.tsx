import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, CreditCard, Ticket, Users } from "lucide-react";
import { Link } from "react-router";

export function PayPalAndSubscriptionsPage() {
  const tocItems = [
    { id: "open", label: "Open PayPal flow" },
    { id: "connect", label: "Connect account" },
    { id: "subscriptions", label: "Create plans and tickets" },
    { id: "gating", label: "Subscription gated access" },
    { id: "faq", label: "Common setup notes" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">PayPal & Subscriptions</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          PayPal & Subscriptions
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Configure community payments by connecting PayPal, creating subscriptions and optional tickets.
        </p>

        <section id="open" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Open the PayPal flow</h2>
          <p className="text-muted-foreground">
            Access from:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Community dashboard card <InlineCode>PayPal</InlineCode> (opens inline)</li>
            <li>
              Direct deep link: <InlineCode>/community/:id/dashboard?openPayPal=subscriptions</InlineCode> or
              <InlineCode>openPayPal=tickets</InlineCode>
            </li>
          </ul>
          <Callout type="info" title="Scope">
            This uses the same PayPal settings component as profile flow with community context.
          </Callout>
        </section>

        <section id="connect" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Connect a PayPal merchant account</h2>
          <div className="space-y-6">
            <Step number={1} title="Start onboarding">
              Connect with your PayPal email and complete permission flow.
            </Step>
            <Step number={2} title="Handle setup checks">
              Fix flagged merchant issues (payments receivable / email confirmation).
            </Step>
            <Step number={3} title="Return and refresh">
              Onboarding completion refreshes state and exposes plan management.
            </Step>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#6B01B6]" />
                Merchant status
              </div>
              <p className="text-sm text-muted-foreground">
                The page shows whether the community currently has a connected PayPal account.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#6B01B6]" />
                Disconnect
              </div>
              <p className="text-sm text-muted-foreground">
                Disconnect is available through a confirmation flow in the same page.
              </p>
            </div>
          </div>
        </section>

        <section id="subscriptions" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Set up subscriptions and tickets</h2>
          <p className="text-muted-foreground">
            After connection, create products/plans and enable subscriptions per community.
          </p>
          <div className="space-y-6">
            <Step number={1} title="Create subscription plan">
              Add title, description, amount, currency, and billing interval.
            </Step>
            <Step number={2} title="Toggle active status">
              Activate/deactivate plans to control what users can purchase.
            </Step>
            <Step number={3} title="Manage tickets">
              Optional tickets appear in ticket section for event/other gated flows.
            </Step>
          </div>
          <CodeBlock
            language="text"
            code={`open PayPal settings
create product + plan
configure interval/amount
save and activate
optionally create ticket products`}
          />
        </section>

        <section id="gating" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Subscription-gated community access</h2>
          <p className="text-muted-foreground">
            Open + Subscription and Private + Subscription access types in community settings require selecting
            a valid subscription plan id.
          </p>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <p className="font-semibold">Flow</p>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
              <li>Publish at least one active subscription plan.</li>
              <li>Open <InlineCode>/community/:id/manage</InlineCode>.</li>
              <li>Select access type <InlineCode>open-subscription</InlineCode> or <InlineCode>private-subscription</InlineCode>.</li>
              <li>Choose a plan in the subscription dropdown.</li>
            </ol>
          </div>
        </section>

        <section id="faq" className="space-y-4">
          <h2 className="text-2xl font-semibold">Common setup notes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Ticket className="w-4 h-4 text-[#6B01B6]" />
                Tickets
              </div>
              <p className="text-sm text-muted-foreground">
                Tickets are useful for one-off event access and can coexist with plans.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#6B01B6]" />
                Onboarding UX
              </div>
              <p className="text-sm text-muted-foreground">
                Returning users should verify merchant status after onboarding; stale state sometimes requires refresh.
              </p>
            </div>
          </div>
          <Callout type="success" title="Swarm scope">
            All subscription plans created here are community-owned and can be used in community gating and settings.
          </Callout>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/ai-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            AI Settings
          </Link>
          <Link
            to="/managing-members"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Managing Members
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
