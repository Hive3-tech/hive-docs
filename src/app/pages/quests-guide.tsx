import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Users, Wallet } from "lucide-react";
import { Link } from "react-router";

export function QuestsGuidePage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "requirements", label: "Access rules" },
    { id: "creation", label: "Create flow" },
    { id: "lifecycle", label: "Lifecycle management" },
    { id: "routes", label: "Route map" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Platform Features / <span className="text-foreground">Quests Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Quests Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Build objective-based campaigns and manage quest completion from one dashboard flow.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <Callout type="info" title="Community requirement">
              Quest creation and management are community-oriented and require Swarm-tier access.
            </Callout>
            <p className="text-muted-foreground mt-4">
              Quests are configured through a multi-step wizard with objectives, objective scope, visibility,
              and optional credential rewards.
            </p>
          </section>

          <section id="requirements">
            <h2 className="text-2xl font-semibold mb-4">Access rules</h2>
            <p className="text-muted-foreground mb-4">
              Quests require a community context to initialize.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-[#6B01B6]" />
                  Scope
                </div>
                <p className="text-sm text-muted-foreground">
                  `create/quest` currently expects community-bound context; standalone creation without context is blocked.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Who can create
                </div>
                <p className="text-sm text-muted-foreground">
                  Swarm managers and community owners/admins are intended for quest creation and management flows.
                </p>
              </div>
            </div>
          </section>

          <section id="creation">
            <h2 className="text-2xl font-semibold mb-4">Create flow</h2>
            <p className="text-muted-foreground mb-4">
              Quest configuration typically follows five steps:
            </p>
            <div className="space-y-6">
              <Step number={1} title="Basic Info">
                Name, short copy, description, and objective scope.
              </Step>
              <Step number={2} title="Quest Builder">
                Add completion conditions and reward-linked actions.
              </Step>
              <Step number={3} title="Credential">
                Configure whether the quest issues a credential reward.
              </Step>
              <Step number={4} title="Visibility and Access">
                Choose public/protected/private and access gates.
              </Step>
              <Step number={5} title="Review">
                Final review before publish.
              </Step>
            </div>
            <Callout type="warning" title="From community dashboard">
              Open from community dashboards with <InlineCode>/create/quest</InlineCode> and state context.
            </Callout>
          </section>

          <section id="lifecycle">
            <h2 className="text-2xl font-semibold mb-4">Lifecycle management</h2>
            <p className="text-muted-foreground mb-4">
              After publishing, use dedicated routes for edit and enrollment operations.
            </p>
            <div className="space-y-6">
              <Step number={1} title="Monitor progress">
                Navigate to <InlineCode>/quest/{`{id}`}</InlineCode> for public/participant-facing details.
              </Step>
              <Step number={2} title="Manage enrollments">
                Open <InlineCode>/quest/{`{id}`}/enrollments</InlineCode> for review and approvals.
              </Step>
              <Step number={3} title="Update quest">
                Reopen with <InlineCode>/quest/{`{id}`}/edit</InlineCode> for adjustments.
              </Step>
            </div>
          </section>

          <section id="routes">
            <h2 className="text-2xl font-semibold mb-4">Route map</h2>
            <CodeBlock
              language="text"
              code={`/create/quest
/quest/{id}
/quest/{id}/edit
/quest/{id}/enrollments`}
            />
            <p className="text-sm text-muted-foreground mt-4">
              Launch from community-level controls; post-management uses the same IDs for route targeting.
            </p>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/jobs-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Jobs Guide
          </Link>
          <Link
            to="/content-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Content Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
