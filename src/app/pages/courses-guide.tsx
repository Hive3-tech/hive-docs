import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { BookOpen, ChevronLeft, ChevronRight, ListChecks, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

export function CoursesGuidePage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "requirements", label: "Requirements" },
    { id: "creation", label: "Creation flow" },
    { id: "lessons", label: "Lessons structure" },
    { id: "management", label: "Enrollment and controls" },
    { id: "analytics", label: "Analytics" },
    { id: "routes", label: "Route map" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Platform Features / <span className="text-foreground">Courses Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Courses Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Create structured learning products with lesson management, enrollment control, and post-publish visibility.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">
              Courses are full creator-owned education workflows. A published course contains metadata, lesson content,
              access rules, and optional credential rewards for completion signals.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">Learning path model</div>
                <p className="text-sm text-muted-foreground">
                  Courses are created as ordered content collections and surface in the creator dashboard and public
                  detail views.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">Owner controls</div>
                <p className="text-sm text-muted-foreground">
                  You can edit courses, gate access, review enrollments, and monitor learner progress.
                </p>
              </div>
            </div>
          </section>

          <section id="requirements">
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <Callout type="info" title="Tier requirement">
              Course creation requires Honey Bee or above.
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex gap-2 items-center">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Entry route
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Open course creation from <InlineCode>/create/course</InlineCode> in profile dashboard or from community
                  quick actions.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex gap-2 items-center">
                  <ListChecks className="w-4 h-4 text-[#6B01B6]" />
                  Includes steps
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  6-step flow with lessons, access, rewards, and review before publish.
                </p>
              </div>
            </div>
          </section>

          <section id="creation">
            <h2 className="text-2xl font-semibold mb-4">Creation flow</h2>
            <p className="text-muted-foreground mb-6">
              Core steps in the course creation wizard:
            </p>
            <div className="space-y-6">
              <Step number={1} title="Basic Info">
                Title, summary, cover image, and metadata.
              </Step>
              <Step number={2} title="Course Details">
                Difficulty, category, and content descriptors.
              </Step>
              <Step number={3} title="Lessons">
                Build lesson blocks and sequence content.
              </Step>
              <Step number={4} title="Course Access">
                Configure who can access and optional subscription/ticket gates.
              </Step>
              <Step number={5} title="Rewards">
                Add optional credential rewards for completion milestones.
              </Step>
              <Step number={6} title="Review and publish">
                Confirm settings, then publish the final course.
              </Step>
            </div>
          </section>

          <section id="lessons">
            <h2 className="text-2xl font-semibold mb-4">Lesson structure and progress</h2>
            <p className="text-muted-foreground mb-4">
              The lesson editor is owned by the course item itself and supports course-level sequencing before publish.
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#6B01B6]" />
                Typical owner workflow
              </div>
              <p className="text-sm text-muted-foreground">
                You can build lesson order first, then tune access settings and rewards. Enrollment status and completion
                percentages are then tracked for analytics and moderation.
              </p>
            </div>
          </section>

          <section id="management">
            <h2 className="text-2xl font-semibold mb-4">Enrollment and controls</h2>
            <p className="text-muted-foreground mb-4">
              After publish, owners can manage enrollments and apply updates:
            </p>
            <div className="space-y-6">
              <Step number={1} title="Manage applicants">
                Open <InlineCode>/course/{`{id}`}/enrollments</InlineCode> and manage approved/pending states.
              </Step>
              <Step number={2} title="Edit and republish">
                Use <InlineCode>/course/{`{id}`}/edit</InlineCode> to update details and access rules.
              </Step>
              <Callout type="success" title="Owner view">
                Course detail pages often expose direct manage actions for the current owner.
              </Callout>
            </div>
          </section>

          <section id="analytics">
            <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
            <p className="text-muted-foreground mb-4">
              Use the analytics route for learner status and completion insight after launch.
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Route</div>
              <p className="text-sm text-muted-foreground">
                <InlineCode>/course/{`{id}`}/analytics</InlineCode> shows enrolled count, in-progress, and completion rates.
              </p>
            </div>
          </section>

          <section id="routes">
            <h2 className="text-2xl font-semibold mb-4">Route map</h2>
            <CodeBlock
              language="text"
              code={`/create/course
/course/{id}
/course/{id}/edit
/course/{id}/enrollments
/course/{id}/analytics`}
            />
            <p className="text-sm text-muted-foreground mt-4">
              Community management and profile views also link to list and detail pages for quick access.
            </p>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/creating-content"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Creating Content
          </Link>
          <Link
            to="/jobs-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Jobs Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
