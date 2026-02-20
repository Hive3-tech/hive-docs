import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Camera, Eye, Lock, Shield, Users } from "lucide-react";
import { Link } from "react-router";

export function CommunitySettingsPage() {
  const tocItems = [
    { id: "access", label: "Open settings" },
    { id: "images", label: "Images" },
    { id: "content", label: "Core info" },
    { id: "handle", label: "Community handle" },
    { id: "guidelines", label: "Guidelines" },
    { id: "privacy", label: "Privacy model" },
    { id: "badges", label: "Badges" },
    { id: "save", label: "Save and return" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">Community Settings</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Community Settings
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Configure identity, policies, and onboarding gates from one screen reached by dashboard action
          <InlineCode>Community Settings</InlineCode>.
        </p>

        <section id="access" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Open settings</h2>
          <p className="text-muted-foreground">
            Route path: <InlineCode>/community/:id/manage</InlineCode>, opened by the dashboard Community Settings
            card on <InlineCode>/community/:id/dashboard</InlineCode>.
          </p>
          <Callout type="info" title="Save behavior">
            The page updates metadata and access controls in sequence; if a save fails, a toast message appears with the error.
          </Callout>
        </section>

        <section id="images" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Images</h2>
          <div className="space-y-6">
            <Step number={1} title="Community logo">
              Upload a square logo with <InlineCode>400x400</InlineCode> recommended.
            </Step>
            <Step number={2} title="Banner / hero">
              Upload a landscape banner with <InlineCode>1200x400</InlineCode> recommended. This appears at the top of the profile.
            </Step>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#6B01B6]" />
                Remove and replace
              </div>
              <p className="text-sm text-muted-foreground">
                Logo can be removed after upload. New uploads replace the existing asset.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#6B01B6]" />
                Upload status
              </div>
              <p className="text-sm text-muted-foreground">
                Buttons show loading state while upload is in progress; required dimensions are recommendations, not hard validation.
              </p>
            </div>
          </div>
        </section>

        <section id="content" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Core information fields</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">Community name</p>
              <p className="text-sm text-muted-foreground mt-2">Update branding title shown everywhere.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">Short description</p>
              <p className="text-sm text-muted-foreground mt-2">Quick community summary used in cards.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">About / full description</p>
              <p className="text-sm text-muted-foreground mt-2">Rich text field with media upload support.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">Location</p>
              <p className="text-sm text-muted-foreground mt-2">Optional freeform text for display.</p>
            </div>
          </div>
        </section>

        <section id="handle" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Community handle</h2>
          <p className="text-muted-foreground">
            Open the handle control and click to edit. Handles must be lowercase with letters, numbers, hyphens, or underscores.
          </p>
          <Callout type="warning" title="Validation">
            Handle is a required value when saving; empty handle blocks save.
          </Callout>
          <CodeBlock
            language="text"
            code={`click community handle row
edit value
allowed pattern: /[a-z0-9_-]/
save settings`}
          />
        </section>

        <section id="guidelines" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Guidelines</h2>
          <div className="space-y-6">
            <Step number={1} title="Add guideline">
              Click <InlineCode>Add Guideline</InlineCode>, then enter title and description.
            </Step>
            <Step number={2} title="Respect limit">
              Maximum of 10 guidelines can be added.
            </Step>
            <Step number={3} title="Clean up">
              Remove outdated rules with row-level delete action.
            </Step>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">
              If the guideline list is empty, the section opens in an empty helper state and accepts the first add action.
            </p>
          </div>
        </section>

        <section id="privacy" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Privacy model</h2>
          <p className="text-muted-foreground mb-4">
            Community access supports four modes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Open</div>
              <p className="text-sm text-muted-foreground">Anyone can join instantly.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Private</div>
              <p className="text-sm text-muted-foreground">Require approval to join.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Open + Subscription</div>
              <p className="text-sm text-muted-foreground">Subscription required; only available if plans exist.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Private + Subscription</div>
              <p className="text-sm text-muted-foreground">Approval + subscription required.</p>
            </div>
          </div>
          <Callout type="info" title="Subscription gating rule">
            For both subscription modes, a <InlineCode>subscriptionId</InlineCode> must be selected before save.
          </Callout>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#6B01B6]" />
                Show member count
              </div>
              <p className="text-sm text-muted-foreground">
                Toggle to show/hide member count on card displays.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#6B01B6]" />
                Custom member count
              </div>
              <p className="text-sm text-muted-foreground">
                Optionally override actual count with a numeric value.
              </p>
            </div>
          </div>
        </section>

        <section id="badges" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Badges</h2>
          <p className="text-muted-foreground">
            Add up to 5 badges by toggling existing presets or entering custom values.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#6B01B6]" />
                Max 5
              </div>
              <p className="text-sm text-muted-foreground">
                The add action is disabled when 5 badges already exist.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Remove badges</div>
              <p className="text-sm text-muted-foreground">
                Remove any existing badge at any time with the row action.
              </p>
            </div>
          </div>
        </section>

        <section id="save" className="space-y-4">
          <h2 className="text-2xl font-semibold">Save and return</h2>
          <Callout type="success" title="Expected flow">
            Click Save to persist settings and return to your community page.
          </Callout>
          <div className="space-y-6">
            <Step number={1} title="Review values">
              Confirm names, descriptions, access type, subscription, and visibility settings.
            </Step>
            <Step number={2} title="Save and return">
              On success you are navigated back to <InlineCode>/community/:id</InlineCode>.
            </Step>
          </div>
          <CodeBlock
            language="text"
            code={`/community/:id/manage
edit fields
select access type
save`}
          />
        </section>

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
            Admins & Moderators
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
