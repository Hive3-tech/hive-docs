import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode } from "../components/doc-components";
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  Megaphone,
  Settings,
  Shield,
  UserCircle,
} from "lucide-react";
import { Link } from "react-router";

export function ProfileAccountSettingsPage() {
  const tocItems = [
    { id: "profile-update", label: "Profile update flow" },
    { id: "privacy", label: "Privacy & visibility" },
    { id: "account-controls", label: "Account controls" },
    { id: "honey-tier", label: "Honey Bee requirements" },
    { id: "next", label: "Next steps" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Honey Bee (Profile) / <span className="text-foreground">Profile & Account Settings</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Profile & Account Settings
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Manage your public profile, social identity fields, and account-level preferences.
        </p>

        <div className="space-y-12">
          <section id="profile-update">
            <h2 className="text-2xl font-semibold mb-4">Profile update flow</h2>
            <p className="text-muted-foreground mb-4">
              Open from the dashboard via <InlineCode>/profile/dashboard</InlineCode> →{" "}
              <InlineCode>/profile/settings</InlineCode>.
              The page includes:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Media & identity</span>
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Upload profile picture</li>
                  <li>Upload banner image</li>
                  <li>Edit display name</li>
                  <li>Short bio + full profile bio</li>
                  <li>Set your public handle</li>
                  <li>Add social links</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <UserCircle className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Profile details</span>
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Location field</li>
                  <li>Bio rich text and attachments</li>
                  <li>Badge list and display options</li>
                  <li>Email verification status indicator</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <Step number={1} title="Edit values in the Profile Settings form">
                Update profile fields and click Save.
              </Step>
              <Step number={2} title="Validate and persist">
                Updates are saved through the profile mutation and reflected after refresh.
              </Step>
              <Step number={3} title="Return">
                On success, users are returned to the profile page.
              </Step>
            </div>
          </section>

          <section id="privacy">
            <h2 className="text-2xl font-semibold mb-4">Privacy & visibility</h2>
            <p className="text-muted-foreground mb-4">
              Privacy settings are also managed in <InlineCode>/profile/settings</InlineCode> and are
              feature-gated for Honey Bee users.
            </p>

            <div className="space-y-4">
              <Callout type="info" title="Profile access modes">
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><InlineCode>open</InlineCode> – anyone can follow immediately.</li>
                  <li><InlineCode>private</InlineCode> – follow requests need approval.</li>
                  <li><InlineCode>open-subscription</InlineCode> – follows require paid plan.</li>
                  <li><InlineCode>private-subscription</InlineCode> – approval + plan required.</li>
                </ul>
              </Callout>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#6B01B6]" />
                  Additional profile visibility controls
                </p>
                <p className="text-sm text-muted-foreground">
                  You can also toggle collaborator count display and set custom follower count override.
                </p>
              </div>
            </div>
          </section>

          <section id="account-controls">
            <h2 className="text-2xl font-semibold mb-4">Account settings</h2>
            <p className="text-muted-foreground mb-4">
              Open <InlineCode>/settings</InlineCode> from the dashboard or profile settings for:
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>Subscription plan summary and upgrade link.</li>
              <li>Theme and display preferences.</li>
              <li>System notification controls.</li>
            </ul>
            <Callout type="success" title="Authentication note">
              If your account was created through OAuth, password changes are handled through that provider
              flow. The in-app account page currently focuses on app-level preferences and plan management.
            </Callout>
          </section>

          <section id="honey-tier">
            <h2 className="text-2xl font-semibold mb-4">Honey Bee requirements</h2>
            <p className="text-muted-foreground mb-4">
              Some profile privacy controls are displayed behind <InlineCode>TierGatedSection</InlineCode> for
              <InlineCode>requiredTier=&quot;honey&quot;</InlineCode>.
            </p>
            <p className="text-muted-foreground">
              If your subscription is below Honey Bee, the UI prompts an upgrade rather than blocking the whole
              profile page experience.
            </p>
          </section>

          <section id="next">
            <h2 className="text-2xl font-semibold mb-4">Next steps</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/creating-events"
                className="rounded-lg border border-border bg-card p-4 hover:border-[#6B01B6] hover:bg-accent transition-colors"
              >
                <div className="font-semibold flex items-center gap-2">
                  <Megaphone className="w-4 h-4" />
                  Creating Events
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn how to publish profile-level events and handle enrollment.
                </p>
              </Link>
              <Link
                to="/paypal-integration"
                className="rounded-lg border border-border bg-card p-4 hover:border-[#6B01B6] hover:bg-accent transition-colors"
              >
                <div className="font-semibold flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  PayPal Integration
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Configure payouts, products, and subscriptions.
                </p>
              </Link>
            </div>
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
            to="/creating-events"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Creating Events
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );

}
