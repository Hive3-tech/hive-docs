import { RightSidebar } from '../components/right-sidebar';
import { Callout, Step } from '../components/doc-components';
import {
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Globe,
  ShieldCheck,
  Ticket,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function EventsGuidePage() {
  const tocItems = [
    { id: 'overview', label: 'What events include' },
    { id: 'where-to-start', label: 'Where to start' },
    { id: 'create-flow', label: 'Create flow (5 steps)' },
    { id: 'types-and-capacity', label: 'Event type and capacity' },
    { id: 'access-and-monetization', label: 'Access and monetization' },
    { id: 'attendee-experience', label: 'Attendee experience' },
    { id: 'manage-events', label: 'Manage existing events' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Hive3 Features / <span className="text-foreground">Events Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Events Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Plan, publish, and run events from one workflow, whether you host from your profile or
          from a community.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What events include</h2>
            <p className="text-muted-foreground mb-4">
              Events in Hive3 are built for full lifecycle management: setup, RSVP or applications,
              access control, attendance, and post-publish updates.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <CalendarClock className="w-4 h-4 text-[#6B01B6]" />
                  One workflow
                </div>
                <p className="text-sm text-muted-foreground">
                  Use the same 5-step builder to create a personal event or a community event.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  RSVP + access controls
                </div>
                <p className="text-sm text-muted-foreground">
                  Decide whether people RSVP instantly or apply first, then add subscription or
                  ticket requirements if needed.
                </p>
              </div>
            </div>
            <Callout type="info" title="Good to know">
              New tickets and subscriptions are available when PayPal is connected, and rewards are
              optional when you want attendance credentials.
            </Callout>
          </section>

          <section id="where-to-start">
            <h2 className="text-2xl font-semibold mb-4">Where to start</h2>
            <p className="text-muted-foreground mb-4">
              You can start event creation from two places, both using the same form:
            </p>
            <Callout type="info" title="Membership entry points">
              <ul className="list-disc list-inside space-y-1">
                <li>Profile dashboard event creation is a Honey Bee+ workflow.</li>
                <li>Community dashboard event creation is available in Swarm community workflows.</li>
              </ul>
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Your Profile dashboard
                </div>
                <p className="text-sm text-muted-foreground">
                  Use your Events section to launch new events and manage your created event list.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Community dashboard
                </div>
                <p className="text-sm text-muted-foreground">
                  Use the Events section to create events tied to your community and manage community
                  enrollment.
                </p>
              </div>
            </div>
          </section>

          <section id="create-flow">
            <h2 className="text-2xl font-semibold mb-4">Create flow (5 steps)</h2>
            <div className="space-y-6">
              <Step number={1} title="Basic Info">
                Add event thumbnail/banner, event title, short description, detailed description,
                badges (up to 5), timezone, and start/end date and time.
              </Step>
              <Step number={2} title="Event Type">
                Choose IRL or Metaverse, set your event link behavior, and set participant capacity.
              </Step>
              <Step number={3} title="Event Access">
                Choose enrollment mode (auto-enroll or apply), add optional subscription
                requirements, and optionally enable a one-time event ticket.
              </Step>
              <Step number={4} title="Rewards">
                Optionally add a credential reward for attendance or completion. This step is
                optional.
              </Step>
              <Step number={5} title="Review">
                Confirm details before publishing. You can still return and edit after publishing.
              </Step>
            </div>
          </section>

          <section id="types-and-capacity">
            <h2 className="text-2xl font-semibold mb-4">Event type and capacity</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <CalendarClock className="w-4 h-4 text-[#6B01B6]" />
                  IRL event
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Requires an event link (venue map, Zoom link, Discord link, and similar).</li>
                  <li>Can use unlimited participants or a fixed participant cap.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#6B01B6]" />
                  Metaverse event
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Event URL is generated automatically.</li>
                  <li>Capacity is required and currently capped at 35 participants.</li>
                </ul>
              </div>
            </div>
            <Callout type="warning" title="Metaverse capacity limit">
              Metaverse events currently support up to 35 participants by default. Need more than
              35 seats? Contact support to request expanded capacity.
            </Callout>
          </section>

          <section id="access-and-monetization">
            <h2 className="text-2xl font-semibold mb-4">Access and monetization</h2>
            <p className="text-muted-foreground mb-4">
              You can combine enrollment rules and payment requirements for each event.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Enrollment mode
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Auto-enroll: people RSVP immediately.</li>
                  <li>Apply for entry: people wait for approval.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CircleDollarSign className="w-4 h-4 text-[#6B01B6]" />
                  Subscription gate
                </p>
                <p className="text-sm text-muted-foreground">
                  Require one of your existing subscriptions to RSVP. This is optional.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-[#6B01B6]" />
                  One-time ticket
                </p>
                <p className="text-sm text-muted-foreground">
                  Optional paid ticket with amount, currency, quantity, and status controls.
                </p>
              </div>
            </div>
            <Callout type="info" title="PayPal requirement for tickets and subscriptions">
              Connect PayPal first to enable one-time tickets and subscription gating. Use{' '}
              <Link to="/profile-paypal" className="underline">
                Link Paypal account
              </Link>{' '}
              for profile events, or{' '}
              <Link to="/paypal-and-subscriptions" className="underline">
                PayPal Integration
              </Link>{' '}
              for community events.
            </Callout>
          </section>

          <section id="attendee-experience">
            <h2 className="text-2xl font-semibold mb-4">Attendee experience</h2>
            <p className="text-muted-foreground mb-4">
              On the event page, attendees see status, schedule, organizer details, and the correct
              RSVP action based on your setup.
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Event status is shown as Upcoming, Live Now, or Completed.</li>
                <li>RSVP flow changes based on auto-enroll or approval-based mode.</li>
                <li>If access is gated, attendees are prompted to subscribe or buy a ticket.</li>
                <li>When event is live and attendee is accepted, they can click Enter Event.</li>
                <li>Attendance can be recorded before entry when rewards are enabled.</li>
                <li>About section supports rich text and PDF attachments.</li>
              </ul>
            </div>
          </section>

          <section id="manage-events">
            <h2 className="text-2xl font-semibold mb-4">Manage existing events</h2>
            <p className="text-muted-foreground mb-4">
              After publishing, you can keep events updated and moderate access from your dashboard
              tools.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Events list tools</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Search events by title or description.</li>
                  <li>Filter by All, IRL, Metaverse, Finished, Upcoming, or Live.</li>
                  <li>My Events groups by Live, RSVP&apos;d, Created, and Completed.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Creator controls</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Edit event details and access settings.</li>
                  <li>Manage enrollments by All, Pending, Approved, and Denied.</li>
                  <li>Approve or deny applications for apply-based events.</li>
                  <li>Use Delete to retire an event and remove it from active workflows.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/managing-members"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Members
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
