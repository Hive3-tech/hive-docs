import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Search, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router";

export function ManagingMembersPage() {
  const tocItems = [
    { id: "open", label: "Open members page" },
    { id: "filters", label: "Search and filter" },
    { id: "applications", label: "Pending applications" },
    { id: "remove", label: "Remove and actions" },
    { id: "tips", label: "Management tips" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">Managing Members</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Managing Members
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Review active members, evaluate pending applications, and remove users from a community context.
        </p>

        <section id="open" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Open members management</h2>
          <p className="text-muted-foreground">
            Open from <InlineCode>/community/:id/members</InlineCode>, accessible via dashboard card <InlineCode>Members</InlineCode>.
          </p>
          <Callout type="info" title="Two views">
            The page has a member list mode and a pending application mode toggle.
          </Callout>
        </section>

        <section id="filters" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Search, role filters, and quick actions</h2>
          <div className="space-y-6">
            <Step number={1} title="Search">
              Use search bar for member name or <InlineCode>@handle</InlineCode>.
            </Step>
            <Step number={2} title="Filter by role">
              Filter list by role to isolate Owners, Admins, Moderators, or Members.
            </Step>
            <Step number={3} title="Toggle application mode">
              Turn on <InlineCode>Pending</InlineCode> to see pending join requests instead of existing members.
            </Step>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Search className="w-4 h-4 text-[#6B01B6]" />
                Search and role filter
              </div>
              <p className="text-sm text-muted-foreground">
                Search is case-insensitive and updates list instantly.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Application pending badge</div>
              <p className="text-sm text-muted-foreground">
                The header action shows pending count and allows one-step switch to applications.
              </p>
            </div>
          </div>
        </section>

        <section id="applications" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Pending applications</h2>
          <div className="space-y-6">
            <Step number={1} title="Review applicant cards">
              Open pending mode and inspect each card for name, contact, and date.
            </Step>
            <Step number={2} title="Approve">
              Approve grants access according to current community rules and updates list state.
            </Step>
            <Step number={3} title="Deny">
              Deny closes request and removes pending item from queue.
            </Step>
          </div>
          <Callout type="warning" title="Application state">
            Approve/deny actions call dedicated approve/deny mutations and update list state on success.
          </Callout>
          <CodeBlock
            language="text"
            code={`/community/:id/members
toggle Pending applications
approve | deny`}
          />
        </section>

        <section id="remove" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Remove members and other row actions</h2>
          <p className="text-muted-foreground">
            In member list rows, use the action menu to send message/change role or remove member.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Remove from menu</div>
              <p className="text-sm text-muted-foreground">
                Use dropdown action for member deletion from current community.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Role-aware controls</div>
              <p className="text-sm text-muted-foreground">
                Role changes for non-membership actions are handled under permissions pages.
              </p>
            </div>
          </div>
        </section>

        <section id="tips" className="space-y-4">
          <h2 className="text-2xl font-semibold">Management tips</h2>
          <div className="rounded-lg border border-border bg-card p-4">
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Review pending applications quickly after opening a community.</li>
              <li>Use filters before removing or contacting users at high scale.</li>
              <li>Keep subscription/gated communities in private mode until onboarding is stable.</li>
            </ul>
          </div>
          <Callout type="success" title="Cross-reference">
            Member counts and role assignments are managed on <Link to="/community-settings" className="text-[#6B01B6] hover:underline">Community Settings</Link> and
            <Link to="/admins-and-moderators" className="text-[#6B01B6] hover:underline ml-1"> Admins & Moderators</Link>.
          </Callout>
          <Callout type="info" title="Access control note">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Remove operations are visible to users with admin-level management privileges.
            </span>
          </Callout>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/paypal-and-subscriptions"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            PayPal & Subscriptions
          </Link>
          <Link
            to="/quests-and-tasks"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Quests & Tasks
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
