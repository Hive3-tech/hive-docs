import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, CodeBlock, InlineCode } from "../components/doc-components";
import { Calendar, ChevronLeft, ChevronRight, Globe, Rocket } from "lucide-react";
import { Link } from "react-router";

export function CreatingEventsPage() {
  const tocItems = [
    { id: "requirements", label: "Requirements" },
    { id: "start", label: "Start an event" },
    { id: "event-steps", label: "Create form steps" },
    { id: "advanced", label: "Metaverse and community notes" },
    { id: "manage", label: "After publish" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Creating Events</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Creating Events
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Publish schedule-driven events from your profile with optional rewards, access control, and enrollment.
        </p>

        <div className="space-y-12">
          <section id="requirements">
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <Callout type="info" title="Tier requirement">
              This is a Honey Bee+ feature. If not upgraded, the UI shows an upgrade modal instead of the create form.
            </Callout>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#6B01B6]" />
                  Access
                </div>
                <p className="text-sm text-muted-foreground">
                  You must be signed in and have Honey Bee or higher membership.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <Rocket className="w-4 h-4 text-[#6B01B6]" />
                  Entry point
                </div>
                <p className="text-sm text-muted-foreground">
                  From dashboard click <InlineCode>Events → New event</InlineCode> or open <InlineCode>/create/event</InlineCode>.
                </p>
              </div>
            </div>
          </section>

          <section id="start">
            <h2 className="text-2xl font-semibold mb-4">Start an event</h2>
            <p className="text-muted-foreground mb-4">
              Use the event form to configure metadata, schedule, media, and access. The UI uses a multi-step shell and
              requires valid input before you can continue.
            </p>

            <CodeBlock
              language="text"
              code={`/profile/dashboard
click Events → New Event
navigate('/create/event')`}
            />
            <div className="mt-4 text-sm text-muted-foreground">
              Existing events can be edited at <InlineCode>/event/:id/edit</InlineCode>. Enrollment is managed at
              <InlineCode> /event/:id/enrollments</InlineCode>.
            </div>
          </section>

          <section id="event-steps">
            <h2 className="text-2xl font-semibold mb-4">Event creation steps</h2>
            <div className="space-y-6">
              <Step number={1} title="Basic info">
                Add title, media, schedule, and description in the first form step.
              </Step>
              <Step number={2} title="Event type & visibility">
                Pick public/private or paid model fields and choose event type details.
              </Step>
              <Step number={3} title="Access controls">
                Configure who can view/enroll and optional credential/entry requirements.
              </Step>
              <Step number={4} title="Rewards">
                Configure optional reward setup for attendees.
              </Step>
              <Step number={5} title="Review and publish">
                Verify all fields and publish. Events appear in your dashboard within the Events section.
              </Step>
            </div>
          </section>

          <section id="advanced">
            <h2 className="text-2xl font-semibold mb-4">Metaverse note for Swarm communities</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-muted-foreground">
                  Event creation in profile is available at Honey Bee. Swarm-level communities also unlock shared
                  metaverse world features for events handled in community contexts.
                </p>
              </div>
              <Callout type="success" title="Community-specific event path">
                For community event pages, the same edit and enrollment routes are used; you can open them from
                community dashboards and existing community views.
              </Callout>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4 text-[#6B01B6]" />
                In community mode, Swarm members may get broader world access for events than profile-only flows.
              </div>
            </div>
          </section>

          <section id="manage">
            <h2 className="text-2xl font-semibold mb-4">Managing events after creation</h2>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-2">
              <li>
                Open <InlineCode>/profile/view-all/events</InlineCode> to switch to the full event list.
              </li>
              <li>
                Edit existing items with <InlineCode>/event/{`{id}`}/edit</InlineCode>.
              </li>
              <li>
                Review participants with <InlineCode>/event/{`{id}`}/enrollments</InlineCode>.
              </li>
            </ul>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/profile-and-account-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Profile & Account Settings
          </Link>
          <Link
            to="/creating-courses"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Creating Courses
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
