import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { Calendar, ChevronLeft, ChevronRight, Trophy, Wrench } from "lucide-react";
import { Link } from "react-router";

export function QuestsAndTasksPage() {
  const tocItems = [
    { id: "quest-overview", label: "Quest management" },
    { id: "create", label: "Creating a quest" },
    { id: "enrollments", label: "Manage enrollments" },
    { id: "tasks", label: "Tasks section status" },
    { id: "links", label: "Related route map" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">Quests & Tasks</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Quests & Tasks
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Manage community quest lifecycle and review enrollments. Tasks support is currently stubbed from UI.
        </p>

        <section id="quest-overview" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Quest management in community</h2>
          <p className="text-muted-foreground">
            Community dashboard includes a Quest accordion and supports creating quests, editing them, deleting, and managing enrollments.
          </p>
          <Callout type="info" title="Dashboard location">
            Open from the community dashboard accordions under <InlineCode>Quests</InlineCode>.
          </Callout>
        </section>

        <section id="create" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Creating a quest</h2>
          <div className="space-y-6">
            <Step number={1} title="Launch create flow">
              In dashboard Quest section, click <InlineCode>New</InlineCode> to route to <InlineCode>/create/quest</InlineCode>.
            </Step>
            <Step number={2} title="Define objectives">
              Fill in title, descriptions, objectives, and objective media.
            </Step>
            <Step number={3} title="Set access">
              If needed, link subscription/ticket access in the quest access steps.
            </Step>
            <Step number={4} title="Save and publish">
              Save then share route and verify quest card in community list.
            </Step>
          </div>
        </section>

        <section id="enrollments" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Managing quest enrollments</h2>
          <p className="text-muted-foreground">
            Enrollment management is available on quest cards inside dashboard and quest detail pages.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#6B01B6]" />
                Enrollment review
              </div>
              <p className="text-sm text-muted-foreground">
                Open <InlineCode>/quest/:id/enrollments</InlineCode> to evaluate and review submissions.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#6B01B6]" />
                Community-level access
              </div>
              <p className="text-sm text-muted-foreground">
                Enrolled member behavior can be combined with community access controls and subscriptions.
              </p>
            </div>
          </div>
          <CodeBlock
            language="text"
            code={`/community/:id/dashboard → Quests → onManageEnrollment
/quest/:id/enrollments`}
          />
        </section>

        <section id="tasks" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Tasks feature status</h2>
          <Callout type="warning" title="Coming soon">
            Tasks are currently represented in dashboard with a placeholder item and are not a full management workflow yet.
          </Callout>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="font-semibold mb-2 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#6B01B6]" />
              Current behavior
            </div>
            <p className="text-sm text-muted-foreground">
              The UI displays <InlineCode>Tasks</InlineCode> in the accordion and shows a toast when attempting to add a new one.
            </p>
          </div>
        </section>

        <section id="links" className="space-y-4">
          <h2 className="text-2xl font-semibold">Related links</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Create a quest path</div>
              <p className="text-sm text-muted-foreground">
                Use <InlineCode>/create/quest</InlineCode> (state includes <InlineCode>communityId</InlineCode> when launched from community dashboard).
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Community profile path</div>
              <p className="text-sm text-muted-foreground">
                Replace <InlineCode>:id</InlineCode> with your community id at runtime, e.g. <InlineCode>/community/123</InlineCode>.
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/managing-members"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Managing Members
          </Link>
          <Link
            to="/api-keys-and-integrations"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            API Keys & Integrations
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
