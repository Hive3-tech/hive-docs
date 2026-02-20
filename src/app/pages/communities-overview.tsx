import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode } from "../components/doc-components";
import { ChevronLeft, ChevronRight, CheckCircle2, Lock, Shield, Users } from "lucide-react";
import { Link } from "react-router";

export function CommunitiesOverviewPage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "requirements", label: "Access and limits" },
    { id: "what-you-get", label: "Community feature map" },
    { id: "start-here", label: "Get started path" },
    { id: "next-steps", label: "Next actions" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">Communities Overview</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Communities Overview
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Swarm communities are where moderators and owners run paid or open membership spaces with
          unified settings, memberships, automations, and integrations.
        </p>

        <section id="overview" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">What a community includes</h2>
          <p className="text-muted-foreground">
            A community includes a home profile, moderation surface, membership controls, optional
            PayPal/subscription plans, AI configuration, and integration points for chat tooling.
            You can manage all of these from <InlineCode>/community/:id/dashboard</InlineCode>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#6B01B6]" />
                Member lifecycle
              </div>
              <p className="text-sm text-muted-foreground">
                Invite or view members, evaluate pending applications, and remove users when needed.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#6B01B6]" />
                Governance
              </div>
              <p className="text-sm text-muted-foreground">
                Assign moderators/admins, manage access settings, and control public/community metadata.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6B01B6]" />
                Monetization
              </div>
              <p className="text-sm text-muted-foreground">
                Attach PayPal, publish subscriptions, and gate access based on membership or approval flow.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#6B01B6]" />
                Integrations
              </div>
              <p className="text-sm text-muted-foreground">
                Enable community AI, create API keys, and synchronize chat with Discord/Telegram bots.
              </p>
            </div>
          </div>
        </section>

        <section id="requirements" className="mb-12 space-y-4">
          <h2 className="text-2xl font-semibold">Access and limits</h2>
          <Callout type="info" title="Swarm-only">
            Community docs and management controls are available only on the Swarm tier.
          </Callout>
          <div className="space-y-4">
            <Step number={1} title="Swarm membership required">
              You must be on Swarm to open <InlineCode>My Communities</InlineCode> and create a community.
            </Step>
            <Step number={2} title="Single owned community">
              A user can own one community at a time for this version. The UI disables creating a second one when
              <InlineCode>userAlreadyOwnsCommunity</InlineCode> is true.
            </Step>
          </div>
        </section>

        <section id="what-you-get" className="mb-12 space-y-4">
          <h2 className="text-2xl font-semibold">Community admin surface map</h2>
          <p className="text-muted-foreground">
            Each dashboard card maps to a dedicated settings page in these docs:
          </p>
          <div className="rounded-lg border border-border bg-card p-4">
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Community Settings → <Link to="/community-settings" className="text-[#6B01B6] hover:underline">/community-settings</Link></li>
              <li>Admins & Moderators → <Link to="/admins-and-moderators" className="text-[#6B01B6] hover:underline">/admins-and-moderators</Link></li>
              <li>Chat Settings → <Link to="/chat-settings" className="text-[#6B01B6] hover:underline">/chat-settings</Link></li>
              <li>PayPal & Subscriptions → <Link to="/paypal-and-subscriptions" className="text-[#6B01B6] hover:underline">/paypal-and-subscriptions</Link></li>
              <li>AI Settings → <Link to="/ai-settings" className="text-[#6B01B6] hover:underline">/ai-settings</Link></li>
              <li>Managing Members → <Link to="/managing-members" className="text-[#6B01B6] hover:underline">/managing-members</Link></li>
              <li>API Keys & Integrations → <Link to="/api-keys-and-integrations" className="text-[#6B01B6] hover:underline">/api-keys-and-integrations</Link></li>
            </ul>
          </div>
        </section>

        <section id="start-here" className="mb-12 space-y-4">
          <h2 className="text-2xl font-semibold">Get started flow</h2>
          <div className="space-y-4">
            <Step number={1} title="Create your community">
              Open profile dashboard communities area and create your first community.
            </Step>
            <Step number={2} title="Define access and branding">
              Open community settings and configure handle, visibility, images, description, and policies.
            </Step>
            <Step number={3} title="Configure integrations">
              Connect AI, chat, PayPal, and optional API keys before inviting your first members.
            </Step>
          </div>
        </section>

        <section id="next-steps" className="space-y-4">
          <h2 className="text-2xl font-semibold">Next actions</h2>
          <Callout type="success" title="Recommended order">
            Start with <InlineCode>Creating a Community</InlineCode>, then define policy in <InlineCode>Community Settings</InlineCode>,
            then set up moderation and integrations.
          </Callout>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/honey-bee-profile-dashboard-overview"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Profile Dashboard
          </Link>
          <Link
            to="/creating-a-community"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Creating a Community
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
