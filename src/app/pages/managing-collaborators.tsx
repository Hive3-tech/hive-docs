import { RightSidebar } from "../components/right-sidebar";
import { Callout, InlineCode, Step } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Search, UserCheck, UserMinus } from "lucide-react";
import { Link } from "react-router";

export function ManagingCollaboratorsPage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "search", label: "Search and metrics" },
    { id: "pending", label: "Pending applications" },
    { id: "manage", label: "Review and act" },
    { id: "tips", label: "Common admin tips" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Managing Collaborators</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Managing Collaborators
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Review followers, filter pending follower applications, and approve or deny collaborator requests.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-4">
              Open <InlineCode>/profile/dashboard</InlineCode> and choose the <InlineCode>Collaborators</InlineCode> action card.
              This is available as a dashboard view where followers and application state are grouped into two modes.
            </p>
            <Callout type="info" title="Where this runs">
              Collaborator management uses a dedicated dashboard view and does not use a separate top-level route in normal
              profile navigation.
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 font-semibold">
                  <UserCheck className="w-4 h-4 text-[#6B01B6]" />
                  Followers list mode
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Show all accepted collaborators with search and mutual-follow indicators.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 font-semibold">
                  <UserMinus className="w-4 h-4 text-[#6B01B6]" />
                  Pending applications mode
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Toggle pending view to review incoming collaboration requests and act on each one.
                </p>
              </div>
            </div>
          </section>

          <section id="search">
            <h2 className="text-2xl font-semibold mb-4">Search and metrics</h2>
            <div className="space-y-6">
              <Step number={1} title="Search collaborators">
                Use the search bar to find by name, username, title, or email in the collaborators list.
              </Step>
              <Step number={2} title="Review totals">
                Track the total collaborator count and mutual follow count in the summary cards.
              </Step>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Search className="w-4 h-4 text-[#6B01B6] mt-0.5" />
                This workflow is most useful after you build a follower base from profile interactions.
              </div>
            </div>
          </section>

          <section id="pending">
            <h2 className="text-2xl font-semibold mb-4">Pending applications</h2>
            <p className="text-muted-foreground mb-4">
              Click <InlineCode>Pending</InlineCode> in the collaborators toolbar to switch the list view.
            </p>
            <Callout type="warning" title="Pending actions">
              Each pending item shows identity fields and application date. Approve or deny updates immediately.
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">Approve</div>
                <p className="text-sm text-muted-foreground">
                  Adds the requester as a collaborator and allows them access according to the profile owner&apos;s policy.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">Deny</div>
                <p className="text-sm text-muted-foreground">
                  Removes the pending request so it no longer appears in the collaborator queue.
                </p>
              </div>
            </div>
          </section>

          <section id="manage">
            <h2 className="text-2xl font-semibold mb-4">Review and act quickly</h2>
            <div className="space-y-6">
              <Step number={1} title="Open the collaborators list">
                Go from the dashboard to the collaborators tab and scan the pending count badge.
              </Step>
              <Step number={2} title="Handle each request">
                Open a request and choose <InlineCode>Approve</InlineCode> or <InlineCode>Deny</InlineCode>.
              </Step>
              <Step number={3} title="Return to content workflows">
                After actioning collaborators, return to Events, Courses, Content, or Jobs creation pages to continue creator work.
              </Step>
            </div>
          </section>

          <section id="tips">
            <h2 className="text-2xl font-semibold mb-4">Common admin tips</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-2">
                <li>Keep profile metadata up to date so collaborators can identify who is applying.</li>
                <li>
                  Process pending applications promptly to avoid stale requests and improve onboarding conversion.
                </li>
                <li>
                  Use search filters to isolate high-priority collaborators for large networks.
                </li>
              </ul>
            </div>
            <Callout type="success" title="Feature visibility note">
              Collaborator management appears alongside creator dashboard controls. If you do not see collaborators, refresh
              and verify your signed-in session.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/ai-assistant-setup"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            AI Assistant Setup
          </Link>
          <Link
            to="/communities-overview"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Communities Overview
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
