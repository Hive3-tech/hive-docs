import { Link } from 'react-router';
import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function EventsGuidePage() {
  const tocItems = [
    { id: 'find-events', label: 'Find an event' },
    { id: 'event-page', label: 'The event page' },
    { id: 'enrollment', label: 'RSVPs and applications' },
    { id: 'create', label: 'Create an event' },
    { id: 'scheduling', label: 'Schedule an event' },
    { id: 'access', label: 'Access, tickets, and rewards' },
    { id: 'manage', label: 'Manage an event' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Events</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Events</h1>
        <p className="text-lg text-muted-foreground mb-12">Discover events, reserve your place, or publish an in-person or metaverse experience.</p>

        <div className="space-y-12">
          <section id="find-events">
            <h2 className="text-2xl font-semibold mb-4">Find an event</h2>
            <p className="text-muted-foreground mb-4">Open Events to search titles and descriptions. Filter the directory by IRL, Metaverse, Upcoming, Live, or Finished. The My Events view groups events you created or joined.</p>
          </section>

          <section id="event-page">
            <h2 className="text-2xl font-semibold mb-4">The event page</h2>
            <p className="text-muted-foreground mb-4">An event page identifies its organizer and format, shows its description and schedule in your local time, and displays a reward credential when one is attached. Upcoming, live, completed, and archived states are shown on the page.</p>
            <Callout type="info" title="Capacity is separate from ticketing">Organizers can allow unlimited RSVPs or set a maximum participant count. This capacity applies whether access is free, subscription-gated, or ticketed.</Callout>
          </section>

          <section id="enrollment">
            <h2 className="text-2xl font-semibold mb-4">RSVPs and applications</h2>
            <p className="text-muted-foreground mb-4">With automatic enrollment, RSVP confirms your place immediately. With approval-based enrollment, Apply to Event sends a request to the organizer. You can cancel a pending application or a confirmed RSVP from the event page.</p>
            <p className="text-muted-foreground">When an accepted event is live, Enter Event records attendance before opening the event destination. An attendance credential may become claimable after that check-in.</p>
          </section>

          <section id="create">
            <h2 className="text-2xl font-semibold mb-4">Create an event</h2>
            <Callout type="info" title="Honey Bee+">Creating a personal event requires a Honey Bee, Swarm, or Royal Hive membership. Community managers can create events in their community context.</Callout>
            <div className="space-y-5 mt-6">
              <Step number={1} title="Basic Info">Add the event name, short description, full description or attachment, banner, and badges.</Step>
              <Step number={2} title="Event Type">Choose IRL or Metaverse. Add an event link for an IRL event, or select an available world for a metaverse event. Set a participant limit or, for IRL events, choose unlimited participants.</Step>
              <Step number={3} title="Scheduling">Select the event time in the calendar and confirm the timezone.</Step>
              <Step number={4} title="Event Access">Choose automatic RSVP or applications, then set Public, Members only, or Subscription / ticket access.</Step>
              <Step number={5} title="Rewards">Optionally deploy and attach an attendance credential.</Step>
            </div>
          </section>

          <section id="scheduling">
            <h2 className="text-2xl font-semibold mb-4">Schedule an event</h2>
            <p className="text-muted-foreground mb-4">The scheduler shows a seven-day week on desktop and one day on mobile. Drag across the grid to select time in 15-minute increments, then use the handles to resize the selection. A current-time marker helps orient the calendar.</p>
            <p className="text-muted-foreground mb-4">The timezone menu defaults to your resolved timezone. Hive3 converts the selected local date and time to UTC when the event is saved, and restores it in the selected timezone when you edit.</p>
            <Callout type="warning" title="Metaverse scheduling">Choose a world before scheduling. Existing reservations appear on the calendar, and an overlap is rejected with “That time is already booked.” The Scheduling step also shows your remaining metaverse minutes for the month and links to purchase more time when the event exceeds the balance.</Callout>
          </section>

          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Access, tickets, and rewards</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Public:</strong> anyone can view and RSVP or apply.</li>
              <li><strong className="text-foreground">Members only:</strong> access is limited to members or collaborators.</li>
              <li><strong className="text-foreground">Subscription / ticket:</strong> require an active subscription, a one-time ticket, or offer both.</li>
            </ul>
            <p className="text-muted-foreground mt-4">After PayPal is connected, a ticket can have an amount, USD/EUR/GBP currency, and active or inactive status. Buyers complete checkout with PayPal. Learn about the buyer flow in <Link className="text-primary hover:underline" to="/tickets-and-purchases">Tickets &amp; Purchases</Link>.</p>
          </section>

          <section id="manage">
            <h2 className="text-2xl font-semibold mb-4">Manage an event</h2>
            <p className="text-muted-foreground mb-4">Owners and authorized community managers can open Enrollments at <code className="rounded bg-muted px-1.5 py-0.5">/event/:id/enrollments</code>. Filter applicants by pending, approved, or denied status, then approve or deny pending applications.</p>
            <p className="text-muted-foreground">Edit Event reopens the same five-step builder with the saved schedule, access settings, ticket, and reward. World availability and metaverse-time checks run again when you save.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
