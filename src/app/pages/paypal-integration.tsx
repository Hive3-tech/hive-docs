import { RightSidebar } from "../components/right-sidebar";
import { Callout, CodeBlock, Step, InlineCode } from "../components/doc-components";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Loader2,
  RefreshCw,
  Wallet,
} from "lucide-react";
import { Link } from "react-router";

export function PayPalIntegrationPage() {
  const tocItems = [
    { id: "intro", label: "How it works" },
    { id: "start", label: "Open PayPal setup" },
    { id: "onboarding", label: "Embedded mini-browser flow" },
    { id: "manage", label: "Manage products and tickets" },
    { id: "troubleshooting", label: "Troubleshooting" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">PayPal Integration</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          PayPal Integration
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Connect your PayPal merchant account to offer subscriptions, tickets, and paid content.
        </p>

        <div className="space-y-12">
          <section id="intro">
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <Callout type="info" title="Requires Honey Bee">
              Accessing PayPal from profile dashboard is gated to Honey Bee tier. Non-Honey users are directed to upgrade.
            </Callout>
            <p className="text-muted-foreground mt-4">
              PayPal configuration is opened by clicking the PayPal card in <InlineCode>/profile/dashboard</InlineCode>. You can also force open via
              <InlineCode> /profile/dashboard?openPayPal=subscriptions</InlineCode> or
              <InlineCode> /profile/dashboard?openPayPal=tickets</InlineCode> in a deep-linked path.
            </p>
          </section>

          <section id="start">
            <h2 className="text-2xl font-semibold mb-4">Open PayPal setup</h2>
            <Step number={1} title="Open settings">
              From dashboard, open PayPal and load <InlineCode>PayPalSettingsPage</InlineCode>.
            </Step>
            <Step number={2} title="Connect account">
              If not connected, click <InlineCode>Connect PayPal Account</InlineCode>.
            </Step>
            <Step number={3} title="Authorize permissions">
              PayPal popup asks for email verification, permissions, and payment acceptance.
            </Step>
            <Step number={4} title="Verify return">
              The callback verifies merchant status and returns to dashboard context.
            </Step>
          </section>

          <section id="onboarding">
            <h2 className="text-2xl font-semibold mb-4">Embedded mini-browser flow</h2>
            <p className="text-muted-foreground mb-4">
              The integration uses PayPal Embedded Partner SDK with <InlineCode>displayMode=minibrowser</InlineCode>.
            </p>

            <CodeBlock
              language="text"
              code={`1) CreatePayPalReferral -> returns actionUrl
2) Append displayMode=minibrowser
3) window.PAYPAL?.apps?.Signup?.MiniBrowser.init({ url })
4) Fallback to popup if SDK is not available
5) On completion: PayPal writes "paypal_onboarding_complete" to localStorage`}
            />

            <Callout type="success" title="Cross-window handshake">
              The system also writes completion metadata and reads it on the current page via storage events or callback route:
              <InlineCode>/paypal/callback</InlineCode>, then returns to the stored return path.
            </Callout>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <Wallet className="w-4 h-4 text-[#6B01B6]" />
                  Primary callback routes
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside">
                  <li><InlineCode>/paypal/callback</InlineCode></li>
                  <li><InlineCode>/subscription/success</InlineCode></li>
                  <li><InlineCode>/subscription/cancel</InlineCode></li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <RefreshCw className="w-4 h-4 text-[#6B01B6]" />
                  Re-auth fallback
                </div>
                <p className="text-sm text-muted-foreground">
                  If popup is blocked, enable popups for your site and retry. The UI surfaces a clear error message.
                </p>
              </div>
            </div>
          </section>

          <section id="manage">
            <h2 className="text-2xl font-semibold mb-4">Manage products, plans, and tickets</h2>
            <p className="text-muted-foreground mb-4">
              After successful connection, you can create or update subscription plans and ticket products from the dashboard panel.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold">Subscription plans</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Define title, description, price, currency, and billing interval.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold">Tickets</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Create event/course-related tickets and manage entity linkage and status.
                </p>
              </div>
            </div>
            <Callout type="warning" title="Disconnecting">
              You can disconnect in the same settings page; this immediately removes merchant status and payment flow context.
            </Callout>
          </section>

          <section id="troubleshooting">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting checklist</h2>
            <p className="text-muted-foreground mb-4">
              If onboarding does not complete, verify:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>PayPal popup is not blocked.</li>
              <li>Primary PayPal email is confirmed.</li>
              <li>Merchant has <InlineCode>payments_receivable</InlineCode> enabled.</li>
              <li>Return path and localStorage are not blocked in browser mode.</li>
            </ul>
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                If status remains loading, reopen dashboard or run through SDK init again.
              </div>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/creating-jobs"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Creating Jobs
          </Link>
          <Link
            to="/ai-assistant-setup"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            AI Assistant Setup
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
