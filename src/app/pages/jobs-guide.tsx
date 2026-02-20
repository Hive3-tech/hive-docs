import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { Briefcase, ChevronLeft, ChevronRight, FileText, MessageSquare, Search } from "lucide-react";
import { Link } from "react-router";

export function JobsGuidePage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "creation", label: "Create job flow" },
    { id: "applications", label: "Application management" },
    { id: "access", label: "Who can post" },
    { id: "routes", label: "Route map" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Platform Features / <span className="text-foreground">Jobs Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Jobs Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Post opportunities, receive applications, and manage candidate review status from one flow.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">
              Jobs are used for posting roles from profile or community workflows.
              Jobs include details, compensation fields, role metadata, and optional subscription gating.
            </p>
            <Callout type="info" title="Tier requirement">
              Job creation requires Honey Bee+.
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#6B01B6]" />
                  Publish from profile
                </div>
                <p className="text-sm text-muted-foreground">
                  Use profile dashboard action <InlineCode>/create/job</InlineCode>.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#6B01B6]" />
                  Community launch
                </div>
                <p className="text-sm text-muted-foreground">
                  Communities can launch with <InlineCode>/community/{`{id}`}/create/job</InlineCode>.
                </p>
              </div>
            </div>
          </section>

          <section id="creation">
            <h2 className="text-2xl font-semibold mb-4">Create flow</h2>
            <p className="text-muted-foreground mb-4">
              The job flow is a 3-step wizard:
            </p>
            <div className="space-y-6">
              <Step number={1} title="Basic info">
                Add role title, summary, compensation, tags, and media.
              </Step>
              <Step number={2} title="Access and pay settings">
                Choose visibility, owner context, and optional subscription/ticket controls.
              </Step>
              <Step number={3} title="Review and publish">
                Confirm and submit to list the role.
              </Step>
            </div>
          </section>

          <section id="applications">
            <h2 className="text-2xl font-semibold mb-4">Application management</h2>
            <p className="text-muted-foreground mb-4">
              Owners review applications and maintain statuses.
            </p>
            <div className="space-y-6">
              <Step number={1} title="Open management route">
                Use <InlineCode>/job/{`{id}`}/applications</InlineCode> for approval decisions.
              </Step>
              <Step number={2} title="Filter review">
                Filter by pending, approved, and rejected states.
              </Step>
              <Step number={3} title="Respond">
                Accept or reject applicants from the same management view.
              </Step>
            </div>
          </section>

          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Who can post</h2>
            <p className="text-muted-foreground mb-4">
              Job creation is a Honey Bee feature. If your account is below this tier, the flow is unavailable.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#6B01B6]" />
                  Profile route
                </div>
                <p className="text-sm text-muted-foreground">
                  Post as an individual creator and manage using <InlineCode>/job/{`{id}`}/edit</InlineCode>.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#6B01B6]" />
                  Moderation flow
                </div>
                <p className="text-sm text-muted-foreground">
                  Community owners can launch from dashboard and review applications from the same owner interface.
                </p>
              </div>
            </div>
          </section>

          <section id="routes">
            <h2 className="text-2xl font-semibold mb-4">Route map</h2>
            <CodeBlock
              language="text"
              code={`/create/job
/community/{communityId}/create/job
/job/{id}
/job/{id}/edit
/job/{id}/applications`}
            />
            <Callout type="success" title="Management from dashboard">
              Community and profile list views route to job detail and application management with direct item context.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/courses-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Courses Guide
          </Link>
          <Link
            to="/quests-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Quests Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
