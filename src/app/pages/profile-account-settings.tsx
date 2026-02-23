import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import {
  AtSign,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Camera,
  MailCheck,
  Shield,
  Sparkles,
  UserCircle,
} from 'lucide-react';
import { Link } from 'react-router';

export function ProfileAccountSettingsPage() {
  const tocItems = [
    { id: 'at-a-glance', label: 'What this page controls' },
    { id: 'profile-basics', label: 'Images and profile info' },
    { id: 'handle', label: 'Handle' },
    { id: 'email-verification', label: 'Email verification' },
    { id: 'badges', label: 'Badges explained' },
    { id: 'privacy-and-subscriptions', label: 'Privacy and subscriptions' },
    { id: 'save-and-next', label: 'Save and next' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Profile Settings</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Profile Settings
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Customize how your profile looks, how people access it, and how your subscription-based
          profile options behave.
        </p>

        <div className="space-y-12">
          <section id="at-a-glance">
            <h2 className="text-2xl font-semibold mb-4">What this page controls</h2>
            <p className="text-muted-foreground mb-4">
              Use this page when you want to update your identity, improve your profile quality, and
              set audience access rules.
            </p>
            <Callout type="info" title="Membership note">
              Privacy and subscription-gated profile modes are Honey Bee+ features (Honey Bee,
              Swarm, and Royal Hive).
            </Callout>
          </section>

          <section id="profile-basics">
            <h2 className="text-2xl font-semibold mb-4">Images and profile info</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Profile images</span>
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Upload or replace your profile picture.</li>
                  <li>Upload or replace your banner image.</li>
                  <li>Remove profile image if needed.</li>
                  <li>Use recommended image proportions for best results.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <UserCircle className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Profile details</span>
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Display name, short bio, and full bio.</li>
                  <li>Upload a PDF or markdown file to generate your full bio.</li>
                  <li>Location and social links.</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Update your profile sections, set your access and visibility preferences, then save
              your changes to apply updates.
            </p>
          </section>

          <section id="handle">
            <h2 className="text-2xl font-semibold mb-4">Handle</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <AtSign className="w-4 h-4 text-[#6B01B6]" />
                Your @username identity
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Your handle is your public @name on Hive3.</li>
                <li>Use Save Handle to apply a new handle after availability check.</li>
                <li>Use Cancel to revert to your current handle.</li>
              </ul>
            </div>
          </section>

          <section id="email-verification">
            <h2 className="text-2xl font-semibold mb-4">Email verification</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <MailCheck className="w-4 h-4 text-[#6B01B6]" />
                Verification status
              </p>
              <p className="text-sm text-muted-foreground">
                This section shows your current email verification status. At the moment, this page
                is a status indicator and does not include resend or re-verify actions.
              </p>
            </div>
          </section>

          <section id="badges">
            <h2 className="text-2xl font-semibold mb-4">Badges explained</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-[#6B01B6]" />
                What is a badge?
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                A badge is a quick identity label on your profile that helps others understand your
                focus, such as creator, designer, or entrepreneur.
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>You can select up to 5 badges.</li>
                <li>
                  Available categories include Developer, Designer, Creator, Artist, Writer,
                  Entrepreneur, Investor, and Other.
                </li>
                <li>
                  If you select Other, you can add a custom badge label (up to 24 characters).
                </li>
              </ul>
            </div>
          </section>

          <section id="privacy-and-subscriptions">
            <h2 className="text-2xl font-semibold mb-4">Privacy and subscriptions</h2>
            <div className="space-y-4">
              <Callout type="info" title="Profile access modes">
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Open: anyone can follow immediately.</li>
                  <li>Private: follow requests need approval.</li>
                  <li>Open + Subscription: paid plan required.</li>
                  <li>Private + Subscription: approval and paid plan required.</li>
                </ul>
              </Callout>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#6B01B6]" />
                  Additional visibility controls
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Show or hide collaborator count on your profile.</li>
                  <li>Set a custom follower count display, or leave empty for automatic count.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6B01B6]" />
                  Subscription-gated profile access
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Subscription access modes are only available when you have at least one active
                  subscription plan in your PayPal setup, and you must choose that plan before
                  saving.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <Link to="/profile-paypal" className="text-[#6B01B6] hover:underline">
                    Hive3 PayPal setup guide
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="save-and-next">
            <h2 className="text-2xl font-semibold mb-4">Save and next</h2>
            <Callout type="success" title="Before you leave this page">
              Save all changes to apply your latest profile settings and privacy preferences.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/honey-bee-profile-dashboard-overview"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Profile Dashboard Overview
          </Link>
          <Link
            to="/account-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Account Settings
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
