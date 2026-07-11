import { Link } from 'react-router';
import { Callout } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

const dashboardLinks = [
  ['/community-profile-builder', 'Community Builder', 'Shape the public overview and invitation welcome page.'],
  ['/members-and-applications', 'Members', 'Find members and review pending applications.'],
  ['/permissions', 'Permissions', 'Assign and maintain admin and moderator roles.'],
  ['/chat-and-integrations', 'Chat Settings', 'Connect Discord or Telegram and manage community chat.'],
  ['/community-paypal', 'PayPal', 'Manage payments, subscriptions, and ticket products.'],
  ['/community-ai-assistant', 'AI', 'Launch and train the community assistant.'],
  ['/honey-marketplace', 'Add Ons', 'Browse and activate marketplace extras.'],
] as const;

const resourceLinks = [
  ['/events-guide', 'Events', 'Edit events and manage enrollments.'],
  ['/courses-guide', 'Courses', 'Edit courses and manage enrollments.'],
  ['/content-guide', 'Content', 'Maintain the community content library.'],
  ['/jobs-guide', 'Jobs', 'Edit listings and review applications.'],
  ['/quests-guide', 'Quests', 'Launch quests and review enrollments.'],
  ['/quests-guide', 'Tasks', 'Manage community tasks from the dashboard.'],
] as const;

export function CommunitiesOverviewPage() {
  const tocItems = [
    { id: 'dashboard', label: 'Dashboard map' },
    { id: 'resources', label: 'Resource managers' },
    { id: 'profile-consent', label: 'Profile link consent' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities / <span className="text-foreground">Community Dashboard Overview</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">
          Community Dashboard Overview
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Run your public presence, people, integrations, payments, and published resources from one workspace.
        </p>

        <div className="space-y-12">
          <section id="dashboard">
            <h2 className="text-2xl font-semibold mb-4">Dashboard map</h2>
            <p className="text-muted-foreground mb-6">
              Open your community dashboard and choose the area you need. Community Builder covers the public profile overview and welcome-page layouts; the other cards open focused management tools.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {dashboardLinks.map(([to, title, description]) => (
                <Link key={title} to={to} className="rounded-xl border border-border p-5 hover:border-primary transition-colors">
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section id="resources">
            <h2 className="text-2xl font-semibold mb-4">Resource managers</h2>
            <p className="text-muted-foreground mb-6">
              The dashboard has separate managers for six community resource categories. Use them to open an item for editing and, where supported, review enrollments or applications.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {resourceLinks.map(([to, title, description]) => (
                <Link key={title} to={to} className="rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{description}</p>
                </Link>
              ))}
            </div>
            <Callout type="info" title="Quest credits">
              A community needs quest credits before it can create a quest. The dashboard opens the purchase flow when none are available.
            </Callout>
          </section>

          <section id="profile-consent">
            <h2 className="text-2xl font-semibold mb-4">Profile link consent</h2>
            <p className="text-muted-foreground mb-4">
              Some community invitations can open a consent page at <code>/community/:slug/link</code>. After you sign in and join, choose <strong>Allow</strong> or <strong>Decline</strong> to decide whether that community may manage profile fields such as your display name and username.
            </p>
            <p className="text-muted-foreground">
              The page shows the community identity and your current enabled or disabled status. You can return through the community experience to change the choice later.
            </p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
