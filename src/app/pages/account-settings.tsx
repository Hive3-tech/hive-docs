import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Palette,
  SlidersHorizontal,
} from 'lucide-react';
import { Link } from 'react-router';

export function AccountSettingsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'membership-plan', label: 'Membership plan' },
    { id: 'display', label: 'Display settings' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'subscriptions', label: 'Subscriptions area' },
    { id: 'next', label: 'Next step' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Account Settings</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Account Settings
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Manage your plan status and app preferences in one place.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">
              Open this page from the dashboard using the{' '}
              <span className="font-medium">Account Settings</span> action card. This page focuses
              on account-level controls, not profile content fields.
            </p>
          </section>

          <section id="membership-plan">
            <h2 className="text-2xl font-semibold mb-4">Membership plan</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#6B01B6]" />
                Hive3 Subscription Plan
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>See your current plan tier (Worker Bee, Honey Bee, Swarm, or Royal Hive).</li>
                <li>View plan status such as Free or Active.</li>
                <li>Use the upgrade button to open pricing and change plans.</li>
              </ul>
            </div>
            <Callout type="info" title="Plan changes">
              Your account page is where you check current membership status before unlocking more
              advanced profile and creator features.
            </Callout>
          </section>

          <section id="display">
            <h2 className="text-2xl font-semibold mb-4">Display settings</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#6B01B6]" />
                Theme preference
              </p>
              <p className="text-sm text-muted-foreground">
                Choose your viewing preference with Light, Dark, or System mode.
              </p>
            </div>
          </section>

          <section id="notifications">
            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#6B01B6]" />
                System notification toggle
              </p>
              <p className="text-sm text-muted-foreground">
                Turn system notifications on or off from the main notifications switch.
              </p>
            </div>
          </section>

          <section id="subscriptions">
            <h2 className="text-2xl font-semibold mb-4">Subscriptions area</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#6B01B6]" />
                Community & People Subscriptions
              </p>
              <p className="text-sm text-muted-foreground">
                This section is where Hive3 surfaces subscription-management entry points connected
                to communities and people.
              </p>
            </div>
          </section>

          <section id="next"></section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/profile-and-account-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Profile Settings
          </Link>
          <Link
            to="/profile-paypal"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Link Paypal account
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
