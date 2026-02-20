import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, CodeBlock, InlineCode } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Link2, LinkIcon, Mail, UserRound, Globe } from "lucide-react";
import { Link } from "react-router";

const endpointCards = [
  {
    method: "POST",
    path: "/api/v1/communities/onboard",
    title: "Create onboarding link",
    description:
      "Generate a welcome URL for a specific community. The response includes `redirect_url` with a signed token.",
    payload: `{
  "email": "user@example.com",
  "username": "optional_username",
  "displayName": "Optional display name",
  "profileImageURL": "https://cdn.example.com/avatar.png",
  "bannerImageURL": "https://cdn.example.com/banner.png"
}`,
    response: `{
  "user_id": "uuid",
  "handle": "community_handle",
  "redirect_url": "https://app.hive3.com/community/community_handle/welcome?token=..."
}`,
  },
  {
    method: "POST",
    path: "/user/community-welcome/consume",
    title: "Consume token",
    description: "Called by the app after user authentication to attach member access.",
    payload: `{
  "token": "..."
}`,
    response: "204 No Content",
  },
  {
    method: "GET",
    path: "/user/communities/{communityId}/api-keys",
    title: "List onboarding keys",
    description: "Used by the dashboard UI to show current key state before creating onboarding flows.",
    payload: "none",
    response: `[ { "id": "...", "name": "...", "keyPrefix": "hive_abcd", "createdAt": "..." } ]`,
  },
];

function EndpointCard({
  method,
  path,
  title,
  description,
  payload,
  response,
}: (typeof endpointCards)[number]) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 px-2.5 py-0.5 text-xs font-semibold">
          {method}
        </span>
        <p className="font-mono text-sm">{path}</p>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Request</p>
        <CodeBlock language="json" code={payload} />
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Response</p>
        <CodeBlock language="json" code={response} />
      </div>
    </div>
  );
}

export function OnboardingLinkSetupPage() {
  const tocItems = [
    { id: "what-are", label: "What are onboarding links" },
    { id: "flow", label: "How links work" },
    { id: "url", label: "URL format" },
    { id: "welcome-page", label: "Welcome page behavior" },
    { id: "auth-flow", label: "Auth flow" },
    { id: "api", label: "API endpoints" },
    { id: "use-cases", label: "Use cases" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Developer Reference / <span className="text-foreground">Onboarding Link Setup</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Onboarding Link Setup
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Build shareable invite URLs that deliver users into a community with context-aware onboarding.
        </p>

        <section id="what-are" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">What are onboarding links</h2>
          <p className="text-muted-foreground">
            An onboarding link is a shareable URL that carries a signed token from the backend. It points users to a
            community welcome page and can be clicked without requiring an existing Hive3 session.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-[#6B01B6]" />
                Shareable
              </div>
              <p className="text-sm text-muted-foreground">
                Use in landing pages, marketing campaigns, partner portals, or QR campaigns.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6B01B6]" />
                Single use token
              </div>
              <p className="text-sm text-muted-foreground">
                Tokens are one-time and short-lived; replay is intentionally prevented.
              </p>
            </div>
          </div>
        </section>

        <section id="flow" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="space-y-6">
            <Step number={1} title="Generate tokenized URL">
              Your backend posts user details to the onboarding API and receives a <InlineCode>redirect_url</InlineCode>.
            </Step>
            <Step number={2} title="Share the URL">
              Distribute as campaign links, embedded CTAs, partner pages, or user invites.
            </Step>
            <Step number={3} title="User opens link">
              The user lands on a public community page that previews the community context and asks for sign-in if needed.
            </Step>
            <Step number={4} title="Consume token">
              After login, the app sends the token to confirm membership and redirects the user into the community.
            </Step>
          </div>
        </section>

        <section id="url" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">URL format</h2>
          <Callout type="info" title="Community welcome URL">
            <InlineCode>/community/{`{slug}`}/welcome?token={`{welcomeToken}`}</InlineCode>
          </Callout>
          <p className="text-muted-foreground">
            The route includes the community handle, so one community can receive many campaign links with independent tokens.
          </p>
        </section>

        <section id="welcome-page" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Welcome page behavior</h2>
          <p className="text-muted-foreground">
            The page is designed to give users trust before joining:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Hero image, logo, community name, and short description.</li>
            <li>Recent posts summary.</li>
            <li>Active quests section.</li>
            <li>Upcoming events section.</li>
            <li>Available courses section.</li>
            <li>Open jobs section.</li>
            <li>Content section.</li>
          </ul>
        </section>

        <section id="auth-flow" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Auth flow</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#6B01B6]" />
                Logged-in users
              </div>
              <p className="text-sm text-muted-foreground">
                The page shows <InlineCode>Go to Community</InlineCode> once the user is already authenticated, and token consumption runs
                automatically.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <UserRound className="w-4 h-4 text-[#6B01B6]" />
                Logged-out users
              </div>
              <p className="text-sm text-muted-foreground">
                The page prompts Google OAuth with <InlineCode>Continue with Google</InlineCode> before onboarding.
              </p>
            </div>
          </div>
        </section>

        <section id="api" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">API endpoints</h2>
          <div className="space-y-4">
            {endpointCards.map((endpoint) => (
              <EndpointCard key={endpoint.path + endpoint.method} {...endpoint} />
            ))}
          </div>
        </section>

        <section id="use-cases" className="space-y-4">
          <h2 className="text-2xl font-semibold">Use cases</h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">Onboarding campaigns</p>
                <p className="text-sm text-muted-foreground">
                  Feed click-to-join URLs from newsletters or campaign CTAs directly into your funnel.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">Partner integrations</p>
                <p className="text-sm text-muted-foreground">
                  Allow partners to create accounts and route users directly to your onboarding flow.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">External embeds</p>
                <p className="text-sm text-muted-foreground">
                  Embed links in external sites and QR campaigns where direct Hive3 navigation is not ideal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/authentication"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Authentication
          </Link>
          <Link
            to="/video-tutorials"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Video Tutorials
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
