import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Clapperboard, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function ContentGuidePage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "create-flow", label: "Creation steps" },
    { id: "editor", label: "Rich text editor" },
    { id: "requirements", label: "Who can create" },
    { id: "publishing", label: "Publishing controls" },
    { id: "routes", label: "Route map" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Platform Features / <span className="text-foreground">Content Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Content Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Publish posts as article or video-style content with rich editing and optional subscription gates.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <Callout type="info" title="Tier requirement">
              Content creation is available for Honey Bee+ accounts.
            </Callout>
            <p className="text-muted-foreground mt-4">
              Content acts as a lightweight publishing surface with support for media, markdown-style rich text sections,
              and optional subscription-based access.
            </p>
          </section>

          <section id="create-flow">
            <h2 className="text-2xl font-semibold mb-4">Creation steps</h2>
            <p className="text-muted-foreground mb-4">
              The create flow is a 3-step sequence:
            </p>
            <div className="space-y-6">
              <Step number={1} title="Basic Info">
                Add title, headline, full description, type selection, attachments, and images.
              </Step>
              <Step number={2} title="Content Access">
                Select visibility and subscription gate settings.
              </Step>
              <Step number={3} title="Review and publish">
                Confirm metadata and launch the content item.
              </Step>
            </div>
          </section>

          <section id="editor">
            <h2 className="text-2xl font-semibold mb-4">Rich text editor capabilities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-[#6B01B6]" />
                  Supported content types
                </div>
                <p className="text-sm text-muted-foreground">
                  Content supports Article and Video modes. Video mode requires a video URL to a supported provider.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6B01B6]" />
                  Rich description blocks
                </div>
                <p className="text-sm text-muted-foreground">
                  Descriptions support embedded media attachments and structured text authoring through the built-in editor.
                </p>
              </div>
            </div>
            <Callout type="success" title="Content behavior">
              Document-level uploads pass through shared upload endpoints and resolve to platform-hosted media.
            </Callout>
          </section>

          <section id="requirements">
            <h2 className="text-2xl font-semibold mb-4">Who can create</h2>
            <p className="text-muted-foreground mb-4">
              Honey Bee users can create content in profile context; communities can also create with community context.
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#6B01B6]" />
                Editability
              </div>
              <p className="text-sm text-muted-foreground">
                Use <InlineCode>/content/{`{id}`}/edit</InlineCode> for updates, or recreate a new item if needed.
              </p>
            </div>
          </section>

          <section id="publishing">
            <h2 className="text-2xl font-semibold mb-4">Publishing controls</h2>
            <div className="space-y-6">
              <Step number={1} title="Access gates">
                Choose none (public) or attach subscription ID for gated content.
              </Step>
              <Step number={2} title="List location">
                Published content appears in profile view-all and public content pages.
              </Step>
            </div>
          </section>

          <section id="routes">
            <h2 className="text-2xl font-semibold mb-4">Route map</h2>
            <CodeBlock
              language="text"
              code={`/create/content
/content/{id}
/content/{id}/edit
/profile/view-all/content`}
            />
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/quests-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Quests Guide
          </Link>
          <Link
            to="/credentials-and-nfts"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Credentials & NFTs
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
