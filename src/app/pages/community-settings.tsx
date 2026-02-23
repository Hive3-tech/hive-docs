import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import {
  AtSign,
  BadgeCheck,
  Camera,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileText,
  Shield,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function CommunitySettingsPage() {
  const tocItems = [
    { id: 'at-a-glance', label: 'What this page controls' },
    { id: 'community-basics', label: 'Images and community info' },
    { id: 'handle', label: 'Community handle' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'badges', label: 'Badges explained' },
    { id: 'privacy-and-subscriptions', label: 'Privacy and subscriptions' },
    { id: 'save-and-next', label: 'Save and next' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities / <span className="text-foreground">Community Settings</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Community Settings
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Customize how your community looks, how people join, and how subscription-gated access
          behaves.
        </p>

        <div className="space-y-12">
          <section id="at-a-glance">
            <h2 className="text-2xl font-semibold mb-4">What this page controls</h2>
            <p className="text-muted-foreground mb-4">
              Use this page to update your community identity, member-facing policies, and access
              rules from one management view.
            </p>
            <Callout type="info" title="Access note">
              Community settings are intended for users with community management permissions
              (owner/admin context).
            </Callout>
          </section>

          <section id="community-basics">
            <h2 className="text-2xl font-semibold mb-4">Images and community info</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Community images</span>
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Upload or replace community logo.</li>
                  <li>Upload or replace banner image.</li>
                  <li>Remove logo if needed.</li>
                  <li>Recommended sizes: logo 400x400, banner 1200x400.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Community details</span>
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Community name and short description.</li>
                  <li>About section with rich text and document-based upload option.</li>
                  <li>Location and social links.</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Update community details, access settings, and visibility options before saving so all
              member-facing views stay aligned.
            </p>
          </section>

          <section id="handle">
            <h2 className="text-2xl font-semibold mb-4">Community handle</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <AtSign className="w-4 h-4 text-[#6B01B6]" />
                Your @community identity
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Your handle is your public @name for this community.</li>
                <li>Click the handle row to edit and set a new value.</li>
                <li>Only lowercase letters, numbers, hyphens, and underscores are allowed.</li>
                <li>Handle is required before saving.</li>
              </ul>
            </div>
          </section>

          <section id="guidelines">
            <h2 className="text-2xl font-semibold mb-4">Guidelines</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#6B01B6]" />
                Community rules and expectations
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Add guideline rows with title and description.</li>
                <li>You can add up to 10 guidelines.</li>
                <li>Remove outdated guidelines at any time.</li>
              </ul>
            </div>
          </section>

          <section id="badges">
            <h2 className="text-2xl font-semibold mb-4">Badges explained</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-[#6B01B6]" />
                What are community badges?
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Badges are quick labels that help members understand your community focus.
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>You can keep up to 5 badges active.</li>
                <li>Add from preset categories or create your own custom badge.</li>
                <li>Remove badges any time when your focus changes.</li>
              </ul>
            </div>
          </section>

          <section id="privacy-and-subscriptions">
            <h2 className="text-2xl font-semibold mb-4">Privacy and subscriptions</h2>
            <div className="space-y-4">
              <Callout type="info" title="Community access modes">
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Open: anyone can join instantly.</li>
                  <li>Private: join requests need approval.</li>
                  <li>Open + Subscription: paid plan required to join.</li>
                  <li>Private + Subscription: approval and paid plan required.</li>
                </ul>
              </Callout>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#6B01B6]" />
                  Subscription-gated join rules
                </p>
                <p className="text-sm text-muted-foreground">
                  Subscription-based modes require at least one offered subscription plan and a
                  selected plan before save.
                </p>
                <div className="mt-3 text-sm">
                  <Link to="/paypal-and-subscriptions" className="text-[#6B01B6] hover:underline">
                    Community PayPal Integration guide
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#6B01B6]" />
                  Member count display
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Show or hide member count on community cards.</li>
                  <li>Set a custom member count display, or leave empty for actual count.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="save-and-next">
            <h2 className="text-2xl font-semibold mb-4">Save and next</h2>
            <Callout type="success" title="Before you leave this page">
              Save all changes to apply your latest community settings and access preferences.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/creating-a-community"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Creating a Community
          </Link>
          <Link
            to="/admins-and-moderators"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Permissions
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
