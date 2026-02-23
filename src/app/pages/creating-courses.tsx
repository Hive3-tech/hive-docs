import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode } from "../components/doc-components";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChartNoAxesColumn,
  PlayCircle,
} from "lucide-react";
import { Link } from "react-router";

export function CreatingCoursesPage() {
  const tocItems = [
    { id: "intro", label: "Before you start" },
    { id: "create-flow", label: "Course creation flow" },
    { id: "content", label: "Lessons and structure" },
    { id: "analytics", label: "Publish and manage" },
    { id: "links", label: "Useful routes" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Creating Courses</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Creating Courses
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Build structured learning experiences with multi-step creation and lesson management.
        </p>

        <div className="space-y-12">
          <section id="intro">
            <h2 className="text-2xl font-semibold mb-4">Before you start</h2>
            <Callout type="info" title="Honey Bee requirement">
              Course creation is a Honey Bee+ action and appears as a gated section for lower tiers.
            </Callout>
            <p className="text-muted-foreground mt-4">
              Access the creator form from dashboard:
            </p>
            <ol className="text-sm text-muted-foreground list-decimal list-inside mt-2 space-y-1">
              <li>Open <InlineCode>/profile/dashboard</InlineCode>.</li>
              <li>In the Courses card, click <InlineCode>New Course</InlineCode>.</li>
              <li>Complete all required steps and publish.</li>
            </ol>
          </section>

          <section id="create-flow">
            <h2 className="text-2xl font-semibold mb-4">Course creation flow</h2>
            <div className="space-y-6">
              <Step number={1} title="Basic info">
                Set course title, subtitle, visibility state, and cover media.
              </Step>
              <Step number={2} title="Course details">
                Configure difficulty, category, pricing, and learning goals.
              </Step>
              <Step number={3} title="Lessons">
                Add sections and lesson modules in sequence.
              </Step>
              <Step number={4} title="Access controls">
                Set who can join and whether credentials/rewards are required.
              </Step>
              <Step number={5} title="Rewards + publish">
                Configure rewards if needed, review, then create the course.
              </Step>
            </div>
          </section>

          <section id="content">
            <h2 className="text-2xl font-semibold mb-4">Lessons and structure</h2>
            <p className="text-muted-foreground mb-4">
              Lessons are grouped into a course and visible through the same profile dashboard card system used for events.
              New courses appear in the courses accordion and can be edited later.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <PlayCircle className="w-4 h-4 text-[#6B01B6]" />
                  Lessons
                </div>
                <p className="text-sm text-muted-foreground">
                  Add rich lessons by section and keep publication ordering consistent with your curriculum.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <ChartNoAxesColumn className="w-4 h-4 text-[#6B01B6]" />
                  Learning impact
                </div>
                <p className="text-sm text-muted-foreground">
                  You can use the analytics view to review interest and status after publishing.
                </p>
              </div>
            </div>
          </section>

          <section id="analytics">
            <h2 className="text-2xl font-semibold mb-4">Publish and manage</h2>
            <Callout type="success" title="Post-publish actions">
              After publishing:
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Open full course view at <InlineCode>/course/{`{id}`}</InlineCode>.</li>
                <li>Track engagement from <InlineCode>/course/{`{id}`}/analytics</InlineCode>.</li>
                <li>Open all your courses at <InlineCode>/profile/view-all/courses</InlineCode>.</li>
              </ul>
            </Callout>
          </section>

          <section id="links">
            <h2 className="text-2xl font-semibold mb-4">Useful routes</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><InlineCode> /create/course </InlineCode> – start a new course.</li>
                <li><InlineCode> /course/{`{id}`}/edit </InlineCode> – edit an existing course.</li>
                <li><InlineCode> /course/{`{id}`}/analytics </InlineCode> – review analytics.</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Use <Link to="/creating-content" className="text-[#6B01B6] hover:underline">Creating Content</Link> next
                if you need a lightweight publishing workflow.
              </p>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/creating-events"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Creating Events
          </Link>
          <Link
            to="/creating-content"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Creating Content
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
