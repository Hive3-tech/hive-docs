import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Rocket, Shield, Upload } from "lucide-react";
import { Link } from "react-router";

export function CreatingCommunityPage() {
  const tocItems = [
    { id: "prereqs", label: "Prerequisites" },
    { id: "open", label: "Open Create flow" },
    { id: "form", label: "Fill required fields" },
    { id: "media", label: "Upload logo and banner" },
    { id: "privacy-note", label: "Privacy is set in settings" },
    { id: "submit", label: "Submit and validate" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">Creating a Community</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Creating a Community
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Create your Swarm community with a handle, description, and branding. Privacy mode can be
          adjusted after creation from community settings.
        </p>

        <section id="prereqs" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Prerequisites</h2>
          <Callout type="warning" title="Who can create communities">
            You need Swarm tier. The app checks your plan and ownership count before allowing community creation.
          </Callout>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Must be signed in.</li>
            <li>Must have Swarm access.</li>
            <li>You can only own one community in this implementation.</li>
          </ul>
        </section>

        <section id="open" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Open the create flow</h2>
          <div className="space-y-6">
            <Step number={1} title="From your dashboard">
              Open <InlineCode>/profile/dashboard</InlineCode> and go to the Communities section.
            </Step>
            <Step number={2} title="Open create modal">
              Click <InlineCode>Create Community</InlineCode> in the My Communities view.
            </Step>
            <Step number={3} title="Direct route">
              You can also open <InlineCode>/create/community</InlineCode> directly.
            </Step>
          </div>

          <CodeBlock
            language="text"
            code={`/profile/dashboard
→ Communities tab
→ Create Community
or
/create/community`}
          />
        </section>

        <section id="form" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Fill required fields</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-2">Community name</h3>
              <p className="text-sm text-muted-foreground">
                Required. Also used in dashboard and profile cards.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-2">Community handle</h3>
              <p className="text-sm text-muted-foreground">
                Required and normalized to lowercase. Valid format: letters, numbers, and underscores.
                Minimum 3 characters, maximum 30.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-2">Short description</h3>
              <p className="text-sm text-muted-foreground">
                Optional one-line summary for cards and search.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-2">Full description</h3>
              <p className="text-sm text-muted-foreground">
                Optional long-form body for your community page.
              </p>
            </div>
          </div>
          <Callout type="info" title="Social links">
            You can add multiple social links (select platform + URL) as part of setup or later in settings.
          </Callout>
        </section>

        <section id="media" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Add logo and banner</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#6B01B6]" />
                Logo
              </div>
              <p className="text-sm text-muted-foreground">
                Optional upload is available in create flow. Later adjustments can be made in settings.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#6B01B6]" />
                Banner
              </div>
              <p className="text-sm text-muted-foreground">
                Optional hero image on create and shown in community header.
              </p>
            </div>
          </div>
        </section>

        <section id="privacy-note" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Set privacy type</h2>
          <Callout type="warning" title="Important distinction">
            Community privacy (Open, Private, Open+Subscription, Private+Subscription) is configured in
            <InlineCode>Community Settings</InlineCode>, not on create submit.
          </Callout>
          <p className="text-muted-foreground">
            Open and private modes are now selected after initial creation when you open
            <InlineCode>/community/:id/manage</InlineCode>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold">Open</div>
              <p className="text-sm text-muted-foreground mt-1">Anyone can join instantly.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold">Private</div>
              <p className="text-sm text-muted-foreground mt-1">Requires approval and can be paired with subscriptions.</p>
            </div>
          </div>
        </section>

        <section id="submit" className="space-y-4">
          <h2 className="text-2xl font-semibold">Submit and validate</h2>
          <div className="space-y-6">
            <Step number={1} title="Validation">
              The submit button enables when at least <InlineCode>name</InlineCode> and <InlineCode>handle</InlineCode> are set.
            </Step>
            <Step number={2} title="Create">
              Save to create the community and return to the new community page.
            </Step>
            <Step number={3} title="Post-create">
              Immediately open <InlineCode>Community Settings</InlineCode> to define access type and branding details.
            </Step>
          </div>
          <CodeBlock
            language="text"
            code={`/create/community
fill required fields
click Create Community
→ created community
/community/:id/dashboard`}
          />
          <Callout type="success" title="Expected result">
            A new community appears in <InlineCode>My Communities</InlineCode> with <InlineCode>Owner</InlineCode> role.
          </Callout>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/communities-overview"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Communities Overview
          </Link>
          <Link
            to="/community-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Community Settings
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
