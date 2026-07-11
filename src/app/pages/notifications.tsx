import { Callout } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function NotificationsPage() {
  const tocItems = [
    { id: 'feed', label: 'Notification feed' },
    { id: 'actions', label: 'Read, follow, or delete' },
    { id: 'mutes', label: 'Mute notifications' },
    { id: 'rewards', label: 'Rewards and credentials' },
    { id: 'tickets', label: 'Tickets' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Notifications</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Notifications</h1>
        <p className="text-lg text-muted-foreground mb-12">Review activity, follow updates back to their source, and open your rewards and ticket history.</p>
        <div className="space-y-12">
          <section id="feed">
            <h2 className="text-2xl font-semibold mb-4">Notification feed</h2>
            <p className="text-muted-foreground">Open Notifications to see your latest activity. Filter the feed by All, Unread, or Read. Newer results load as you move through the feed, and the unread total stays synchronized with the rest of the app.</p>
          </section>
          <section id="actions">
            <h2 className="text-2xl font-semibold mb-4">Read, follow, or delete</h2>
            <p className="text-muted-foreground mb-4">Select a notification to mark it read and follow its deep link to the related person, community, resource, or workflow. Use Mark all as read when you have finished reviewing the feed.</p>
            <p className="text-muted-foreground">Use the trash action to delete one notification. Notification management also supports clearing the full list.</p>
          </section>
          <section id="mutes">
            <h2 className="text-2xl font-semibold mb-4">Mute notifications</h2>
            <p className="text-muted-foreground">Notification preferences can mute activity system-wide or within a person, community, or individual resource context. Use Settings for broad notification preferences and the mute control on supported conversations or resource cards for a narrower category.</p>
          </section>
          <section id="rewards">
            <h2 className="text-2xl font-semibold mb-4">Rewards and credentials</h2>
            <p className="text-muted-foreground">Choose Claim Rewards or Claim Credentials from the notification quick actions. The credentials panel collects rewards you are eligible to mint after activities such as events, courses, and quests.</p>
            <Callout type="info" title="Claiming requires a wallet">You can become eligible for a credential before connecting a wallet. A wallet is required when you claim and mint it.</Callout>
          </section>
          <section id="tickets">
            <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
            <p className="text-muted-foreground">Choose My Tickets to open your purchased ticket and access history. Cards show the resource, purchase date, amount paid, and refund status. Active tickets also provide the buyer-side refund request action.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
