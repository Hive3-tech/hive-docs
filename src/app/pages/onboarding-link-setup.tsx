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
            These links are for partner-integrated communities that want to create or match Hive3
            users, prefill profile data, and route them into a specific community welcome flow. The
            API returns a session-capable <InlineCode>welcome_url</InlineCode>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-[#6B01B6]" />
                Account-aware onboarding
              </div>
              <p className="text-sm text-muted-foreground">
                The onboarding endpoint requires <InlineCode>email</InlineCode>. Existing emails
                reuse the current Hive3 account, while new emails create a Hive3 user and skip the
                normal 7-step onboarding flow.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                Scoped and safe
              </div>
              <p className="text-sm text-muted-foreground">
                Welcome tokens are one-time use, community context is short-lived, and profile-link
                consent is still handled in the Hive welcome experience.
              </p>
            </div>
          </div>
        </section>

        <section id="flow" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="space-y-6">
            <Step number={1} title="Create or match the Hive user">
              Your backend calls <InlineCode>POST /api/v1/communities/onboard</InlineCode> with an
              email address. Hive either reuses the existing user or creates a new one, then
              returns <InlineCode>welcome_url</InlineCode>, <InlineCode>user_id</InlineCode>, and{' '}
              <InlineCode>username</InlineCode>.
            </Step>
            <Step number={2} title="Redirect to welcome URL">
              Send users to the returned welcome URL from your app, portal, or campaign flow.
            </Step>
            <Step number={3} title="Hive handles login + welcome">
              Hive resolves the one-time welcome token, signs the user in, and routes them to the
              right welcome/join experience for that community.
            </Step>
            <Step number={4} title="User completes join, apply, or consent">
              Membership state, access prompts, subscription requirements, and profile-link consent
              are handled in-app by Hive based on the community&apos;s access rules.
            </Step>
          </div>
          <Callout type="info" title="New users skip the normal onboarding wizard">
            API-created community users are marked onboarding-complete immediately, so they do not
            go through the standard 7-step Hive setup flow before reaching the community welcome
            page.
          </Callout>
        </section>

        <section id="welcome-page" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Welcome page behavior</h2>
          <p className="text-muted-foreground">
            The welcome screen resolves community context and shows the same public community
            welcome page that visitors reach from shared links and QR codes.
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Prefill values include display name, username, bios, and social links.</li>
            <li>Communities can curate this page with spotlight content, subscriptions, and selected events, courses, quests, and jobs.</li>
            <li>Users with existing Hive accounts can be signed in directly from the welcome link.</li>
            <li>Declining profile-link consent keeps account access separate from API-managed profile updates.</li>
          </ul>
          <Callout type="info" title="Membership and paywalls">
            For paywalled communities, include a valid <InlineCode>subscription_id</InlineCode> when
            creating onboarding context if you want an API-assigned subscription attached during the
            onboarding flow.
          </Callout>
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
                  Send users from partner apps into Hive with deterministic prefill data while
                  reusing their existing Hive account when the email already exists.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">Onboarding campaigns</p>
                <p className="text-sm text-muted-foreground">
                  Drive traffic from email or product surfaces into a community-specific welcome
                  page that is already branded and curated for conversion.
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
