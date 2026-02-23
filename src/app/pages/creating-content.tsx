import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode } from "../components/doc-components";
import { ChevronLeft, ChevronRight, FileText, PlusCircle, Search } from "lucide-react";
import { Link } from "react-router";

export function CreatingContentPage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "form", label: "Create form flow" },
    { id: "publishing", label: "Publishing and visibility" },
    { id: "after", label: "After publish" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Creating Content</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Creating Content
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Publish short-form creator content quickly with optional attachments and optional paid access.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-4">
              Use <InlineCode>/create/content</InlineCode> for profile content publishing.
              The create flow is simpler than course/job events and optimized for short-form posts and media.
            </p>
            <Callout type="info" title="Feature access">
              Content creation for profile owners is available for Honey Bee and higher.
            </Callout>
          </section>

          <section id="form">
            <h2 className="text-2xl font-semibold mb-4">Create form flow</h2>
            <div className="space-y-6">
              <Step number={1} title="Basic info">
                Add title, headline, full description, images and attachment links.
              </Step>
              <Step number={2} title="Access settings">
                Select visibility and optional subscription gating for the content item.
              </Step>
              <Step number={3} title="Review & publish">
                Confirm metadata and publish to get a content record in your dashboard.
              </Step>
            </div>
          </section>

          <section id="publishing">
            <h2 className="text-2xl font-semibold mb-4">Publishing and visibility</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-[#6B01B6]" />
                  Content metadata
                </div>
                <p className="text-sm text-muted-foreground">
                  Use sections, badges, and attachments to improve discoverability and context.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-[#6B01B6]" />
                  Searchability
                </div>
                <p className="text-sm text-muted-foreground">
                  Tags/sections and descriptive headlines improve filtering in profile and public view.
                </p>
              </div>
            </div>

            <Callout type="warning" title="Editing restrictions">
              There is no dedicated bulk content editor here. Use the content item page for detail-level updates.
            </Callout>
          </section>

          <section id="after">
            <h2 className="text-2xl font-semibold mb-4">After publish</h2>
            <p className="text-muted-foreground mb-4">
              Manage all your content items from:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><InlineCode>/profile/view-all/content</InlineCode> (complete list)</li>
              <li><InlineCode>/content/{`{id}`}</InlineCode> (single item detail)</li>
              <li><InlineCode>/content/{`{id}`}/edit</InlineCode> (inline edit)</li>
            </ul>
            <div className="rounded-lg border border-border bg-card p-4 mt-4">
              <div className="font-semibold mb-2">Need creator workflows next?</div>
              <p className="text-sm text-muted-foreground">
                Continue to job publishing to set up hiring and collaborator-led applications.
              </p>
              <Link
                to="/creating-jobs"
                className="inline-flex items-center gap-2 text-[#6B01B6] hover:underline mt-3"
              >
                <PlusCircle className="w-4 h-4" />
                Creating Jobs
              </Link>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/creating-courses"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Creating Courses
          </Link>
          <Link
            to="/creating-jobs"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Creating Jobs
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
