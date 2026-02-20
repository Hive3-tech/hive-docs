import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { CalendarClock, ChevronLeft, ChevronRight, Globe, Hotel, ListChecks } from "lucide-react";
import { Link } from "react-router";

export function EventsGuidePage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "metaverse", label: "Metaverse model" },
    { id: "lifecycle", label: "Lifecycle" },
    { id: "types", label: "Event types" },
    { id: "access", label: "Enrollment and management" },
    { id: "routes", label: "Route map" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Platform Features / <span className="text-foreground">Events Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Events Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Create, publish, and manage IRL or metaverse events from the same event workflow.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <Callout type="info" title="Tier requirement">
              Event creation and event dashboard workflows require Honey Bee or above.
            </Callout>
            <p className="text-muted-foreground mt-4">
              Hive3 event flow is built around a multi-step form and includes both access control and optional reward settings.
              Community flows can launch the same create screen using shared entity state from dashboard actions.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <CalendarClock className="w-4 h-4 text-[#6B01B6]" />
                  Publish stages
                </div>
                <p className="text-sm text-muted-foreground">
                  Fill metadata, pick an event type, configure access, optionally attach rewards, then publish.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-[#6B01B6]" />
                  Lifecycle thinking
                </div>
                <p className="text-sm text-muted-foreground">
                  Lifecycle is commonly: create → manage enrollments → run/live event → attendance and follow-up actions.
                </p>
              </div>
            </div>
          </section>

          <section id="metaverse">
            <h2 className="text-2xl font-semibold mb-4">Metaverse model</h2>
            <div className="space-y-6">
              <Step number={1} title="Swarm access">
                Swarm communities share a metaverse world with other Swarms.
              </Step>
              <Step number={2} title="Royal customization">
                Royal Hive members can use custom-world branding for higher isolation.
              </Step>
              <Step number={3} title="Rental model">
                Metaverse spaces are available as hourly rental slots for event schedules.
              </Step>
            </div>
            <Callout type="warning" title="Metaverse event limits">
              Max 35 participants for metaverse events. For larger sessions: <InlineCode>Need more seats? Contact us for larger metaverse parties!</InlineCode>
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#6B01B6]" />
                  Event URL behavior
                </div>
                <p className="text-sm text-muted-foreground">
                  IRL requires a user-supplied event link; metaverse mode generates event URL automatically.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Hotel className="w-4 h-4 text-[#6B01B6]" />
                  Capacity behavior
                </div>
                <p className="text-sm text-muted-foreground">
                  Metaverse participant cap is enforced in form validation and reflected in event capacity fields.
                </p>
              </div>
            </div>
          </section>

          <section id="lifecycle">
            <h2 className="text-2xl font-semibold mb-4">Event lifecycle</h2>
            <p className="text-muted-foreground mb-4">
              For all event workflows, lifecycle management is typically:
            </p>
            <div className="space-y-6">
              <Step number={1} title="Create">
                Start with <InlineCode>/create/event</InlineCode>, complete the 5-step form.
              </Step>
              <Step number={2} title="Manage enrollments">
                Use enrollment management for pending approvals and status updates.
              </Step>
              <Step number={3} title="Run">
                Manage event state and attendance from event detail and attendee views.
              </Step>
            </div>
            <Callout type="success" title="Community launch">
              Community dashboards open the same create page with <InlineCode>state: {`{ communityId }`}</InlineCode>.
            </Callout>
          </section>

          <section id="types">
            <h2 className="text-2xl font-semibold mb-4">Event type specifics</h2>
            <p className="text-muted-foreground mb-4">
              Type selection changes field behavior and operational expectations:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">IRL</div>
                <p className="text-sm text-muted-foreground">Require <InlineCode>Event Link</InlineCode> to external room or venue URL.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">Metaverse</div>
                <p className="text-sm text-muted-foreground">
                  Auto-generates event URL with participant cap validation and ticketing options.
                </p>
              </div>
            </div>
          </section>

          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Enrollment and management</h2>
            <p className="text-muted-foreground mb-4">
              Access can be direct/auto-enroll or application-based, depending on your event access configuration.
            </p>
            <div className="space-y-6">
              <Step number={1} title="Auto enroll">
                Immediate approvals when open flow is configured.
              </Step>
              <Step number={2} title="Apply first">
                Manual review workflow for approval-based events.
              </Step>
              <Step number={3} title="Post-publish controls">
                Edit and enrollment routes are available from owner actions while event remains managed.
              </Step>
            </div>
          </section>

          <section id="routes">
            <h2 className="text-2xl font-semibold mb-4">Route map</h2>
            <CodeBlock
              language="text"
              code={`/create/event
/event/{id}
/event/{id}/edit
/event/{id}/enrollments`}
            />
            <p className="text-sm text-muted-foreground mt-4">
              Community launch flow also uses state context from <InlineCode>/community/{`{id}`}/dashboard</InlineCode> actions.
            </p>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/quests-and-tasks"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Quests & Tasks
          </Link>
          <Link
            to="/courses-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Courses Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
