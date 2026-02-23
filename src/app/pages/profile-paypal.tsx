import { RightSidebar } from '../components/right-sidebar';
import { Callout, Step } from '../components/doc-components';
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Settings2,
  ShieldCheck,
  Ticket,
} from 'lucide-react';
import { Link } from 'react-router';

export function ProfilePayPalPage() {
  const tocItems = [
    { id: 'requirements', label: 'Before you start' },
    { id: 'readiness', label: 'Account readiness checklist' },
    { id: 'onboarding', label: 'PayPal onboarding flow' },
    { id: 'subscriptions', label: 'Manage subscriptions' },
    { id: 'add-subscription', label: 'Add a subscription' },
    { id: 'tickets', label: 'Tickets and one-time access' },
    { id: 'advanced', label: 'Advanced PayPal actions' },
    { id: 'troubleshooting', label: 'Troubleshooting' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Link Paypal account</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Link Paypal account
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Connect your PayPal business account to run Honey Bee subscriptions from your Hive3
          profile.
        </p>

        <div className="space-y-12">
          <section id="requirements">
            <h2 className="text-2xl font-semibold mb-4">Before you start</h2>
            <Callout type="info" title="Membership requirement">
              This setup is for Honey Bee subscriptions. The PayPal action in Profile Dashboard is
              available for Honey Bee+ memberships.
            </Callout>
            <div className="mt-4 rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#6B01B6]" />
                Business account required
              </p>
              <p className="text-sm text-muted-foreground">
                Use a PayPal Business account for profile monetization. If you do not have one yet,
                PayPal will prompt you to create it during onboarding.
              </p>
            </div>
            <Callout type="warning" title="Fees">
              Hive3 applies a 5% platform fee to subscription plans created in this flow. PayPal may
              also apply its own transaction fees based on your account and region.
            </Callout>
          </section>

          <section id="readiness">
            <h2 className="text-2xl font-semibold mb-4">Account readiness checklist</h2>
            <p className="text-muted-foreground mb-4">
              For a seamless setup, complete your PayPal account details before connecting:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Primary PayPal email is confirmed.</li>
              <li>Business profile details are complete, including address information.</li>
              <li>PayPal account setup is finished and ready to receive payments.</li>
            </ul>
          </section>

          <section id="onboarding">
            <h2 className="text-2xl font-semibold mb-4">PayPal onboarding flow</h2>
            <div className="space-y-4">
              <Step number={1} title="Open the PayPal action card">
                Go to Profile Dashboard and click the PayPal button.
              </Step>
              <Step number={2} title="Connect account">
                Click Connect PayPal Account to begin partner onboarding.
              </Step>
              <Step number={3} title="Create or sign in">
                If you do not have a business account yet, PayPal will guide you through creating
                one.
              </Step>
              <Step number={4} title="Finish onboarding and return">
                Complete PayPal prompts, then return to Hive3 and confirm the connection status.
              </Step>
            </div>
          </section>

          <section id="subscriptions">
            <h2 className="text-2xl font-semibold mb-4">Manage subscriptions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#6B01B6]" />
                  Create
                </p>
                <p className="text-sm text-muted-foreground">
                  Create subscription plans with title, description, amount, currency, and billing
                  interval.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Settings2 className="w-4 h-4 text-[#6B01B6]" />
                  Edit
                </p>
                <p className="text-sm text-muted-foreground">
                  Update existing plans when you need to refine naming, pricing, or frequency.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Deactivate
                </p>
                <p className="text-sm text-muted-foreground">
                  Deactivate plans you no longer want to offer. You can also reactivate when needed.
                </p>
              </div>
            </div>

            <div id="add-subscription" className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Add a subscription (step-by-step)</h3>
              <div className="space-y-4">
                <Step number={1} title="Link Paypal account">
                  Start from this page and complete the <span className="font-medium">Connect PayPal Account</span>{' '}
                  onboarding flow first.
                </Step>
                <Step number={2} title="Check account status">
                  Confirm your status shows <span className="font-medium">Payments Receivable: Yes</span> and{' '}
                  <span className="font-medium">Email Confirmed: Yes</span> before creating plans.
                </Step>
                <Step number={3} title="Open the create form">
                  In the <span className="font-medium">Subscriptions</span> section, click{' '}
                  <span className="font-medium">Create Subscription</span>.
                </Step>
                <Step number={4} title="Fill out subscription details">
                  Complete the form fields: title, description, amount, currency (USD/EUR/GBP), and billing interval
                  (monthly or yearly).
                </Step>
                <Step number={5} title="Create the plan">
                  Click <span className="font-medium">Create Subscription</span> and wait for setup to finish.
                </Step>
                <Step number={6} title="Confirm it is finished">
                  Your new plan appears in the subscriptions list with status and pricing. You can then use{' '}
                  <span className="font-medium">Edit</span>, <span className="font-medium">Activate/Deactivate</span>,
                  or <span className="font-medium">Delete</span> as needed.
                </Step>
              </div>
            </div>
          </section>

          <section id="tickets">
            <h2 className="text-2xl font-semibold mb-4">Tickets and one-time access</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Ticket className="w-4 h-4 text-[#6B01B6]" />
                Ticket management notes
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Tickets are visible in this PayPal page when they already exist.</li>
                <li>New tickets are created from event, course, or quest editor pages.</li>
                <li>
                  From this page, you can adjust ticket status (active/inactive), edit supported
                  fields, or delete.
                </li>
              </ul>
            </div>
          </section>

          <section id="advanced">
            <h2 className="text-2xl font-semibold mb-4">Advanced PayPal actions</h2>
            <Callout type="info" title="Use PayPal directly for advanced settings">
              For advanced PayPal operations, sign in to your PayPal account dashboard directly.
              Hive3 handles the in-app onboarding and subscription management flow.
            </Callout>
          </section>

          <section id="troubleshooting">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>If connection fails, confirm your PayPal email is verified.</li>
              <li>Make sure your business address and account profile are fully completed.</li>
              <li>
                If required, finish missing setup steps in PayPal and then reconnect from Hive3.
              </li>
            </ul>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/account-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Account Settings
          </Link>
          <Link
            to="/profile-ai"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Personal AI Assistant
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
