import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, Link2, LinkIcon, ShieldCheck } from 'lucide-react';
import { RightSidebar } from '../components/right-sidebar';
import { Callout, InlineCode, Step } from '../components/doc-components';
import { OnboardingEndpointCards } from './onboarding-link-setup-endpoints';

export function OnboardingLinkSetupPage() {
  const tocItems = [
    { id: 'what-are', label: 'What are onboarding links' },
    { id: 'flow', label: 'How links work' },
    { id: 'welcome-page', label: 'Welcome page behavior' },
    { id: 'api', label: 'API endpoints' },
    { id: 'use-cases', label: 'Use cases' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Developer Reference / <span className="text-foreground">Onboard</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Onboard
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Generate prefilled onboarding links for your community integrations.
        </p>

        <section id="what-are" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">What are onboarding links</h2>
          <p className="text-muted-foreground">
            These links are for partner-integrated communities that want to prefill onboarding data
            and route users into a specific community context. The API creates a short-lived
            onboarding context and returns
            <InlineCode>welcome_url</InlineCode>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-[#6B01B6]" />
                Context-first onboarding
              </div>
              <p className="text-sm text-muted-foreground">
                The onboarding endpoint stores context only. It no longer accepts{' '}
                <InlineCode>email</InlineCode> and does not auto-link users.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                Scoped and safe
              </div>
              <p className="text-sm text-muted-foreground">
                Context is short-lived and bound to authenticated users, then consumed and consented
                on the Hive welcome/onboarding experience.
              </p>
            </div>
          </div>
        </section>

        <section id="flow" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="space-y-6">
            <Step number={1} title="Create onboarding context">
              Your backend calls <InlineCode>POST /api/v1/communities/onboard</InlineCode> and
              receives
              <InlineCode>welcome_url</InlineCode>.
            </Step>
            <Step number={2} title="Redirect to welcome URL">
              Send users to the returned welcome URL from your app, portal, or campaign flow.
            </Step>
            <Step number={3} title="Hive handles welcome + onboarding">
              Hive resolves the onboarding context, applies prefill data, and walks the user through
              welcome/onboarding.
            </Step>
            <Step number={4} title="User completes onboarding and consent">
              Membership join and consent prompts are handled in-app by Hive based on community
              access rules.
            </Step>
          </div>
          <Callout type="info" title="Membership and paywalls">
            For paywalled communities, include a valid <InlineCode>subscription_id</InlineCode> when
            creating onboarding context if you want immediate access assignment during onboarding.
          </Callout>
        </section>

        <section id="welcome-page" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Welcome page behavior</h2>
          <p className="text-muted-foreground">
            The welcome screen resolves community context and routes the user into onboarding or
            consent, depending on account state.
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Prefill values include display name, username, bios, and social links.</li>
            <li>
              Users who already completed onboarding can be routed directly to link
              consent/community.
            </li>
            <li>
              Declining consent keeps community membership state but blocks API-managed user profile
              updates.
            </li>
          </ul>
        </section>

        <section id="api" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">API endpoints</h2>
          <Callout type="info" title="Subscription plan validation">
            If <InlineCode>subscription_id</InlineCode> is provided, it must be active, owned by the
            same community, and PayPal-linked.
          </Callout>
          <OnboardingEndpointCards />
        </section>

        <section id="use-cases" className="space-y-4">
          <h2 className="text-2xl font-semibold">Use cases</h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">Existing user handoff</p>
                <p className="text-sm text-muted-foreground">
                  Send users from partner apps into Hive onboarding with deterministic prefill data.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">Onboarding campaigns</p>
                <p className="text-sm text-muted-foreground">
                  Drive traffic from email or product surfaces into a community-specific welcome
                  path.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">Partner integrations</p>
                <p className="text-sm text-muted-foreground">
                  Keep user-facing consent explicit while still enabling community-managed API
                  integrations.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">External embeds</p>
                <p className="text-sm text-muted-foreground">
                  Launch onboarding from embedded actions without rebuilding authentication or
                  consent UX.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/api-keys-and-integrations"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            API Keys
          </Link>
          <Link
            to="/api-managing-users"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Managing Users
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
