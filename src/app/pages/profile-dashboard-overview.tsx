import { RightSidebar } from "../components/right-sidebar";
import { CodeBlock, Callout, InlineCode, Step } from "../components/doc-components";
import { Calendar, Briefcase, ChevronLeft, ChevronRight, FileText, GraduationCap } from "lucide-react";
import { Link } from "react-router";

export function ProfileDashboardOverviewPage() {
  const tocItems = [
    { id: "overview", label: "Dashboard overview" },
    { id: "quick-actions", label: "Quick actions" },
    { id: "content-stream", label: "Content stream" },
    { id: "honey-tiers", label: "Tier requirements" },
    { id: "navigation", label: "Recommended next steps" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Honey Bee (Profile) / <span className="text-foreground">Profile Dashboard Overview</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Profile Dashboard Overview
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          This is the Honey Bee home for profile-level workflows: profile editing, content publishing,
          community linking, and monetization tools.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What you see on entry</h2>
            <p className="text-muted-foreground mb-4">
              Open <InlineCode>/profile/dashboard</InlineCode> to load the full creator dashboard.
              It shows:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Your total community, collaborator, and content stats.</li>
              <li>Quick action cards for profile, account, PayPal, AI, communities, and collaborators.</li>
              <li>
                A content accordion for Events, Courses, Content, and Jobs, plus action buttons for each item.
              </li>
              <li>Manage links for each section:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Event pages and enrollment management</li>
                  <li>Course analytics and lessons</li>
                  <li>Job application tracking</li>
                </ul>
              </li>
            </ul>

            <div className="mt-6">
              <Callout type="info" title="Who can access">
                The dashboard is available for all signed-in users, but the creator workflow cards are locked
                for non-Honey users via in-context upgrade gating.
              </Callout>
            </div>
          </section>

          <section id="quick-actions">
            <h2 className="text-2xl font-semibold mb-4">Quick actions (recommended first click)</h2>
            <div className="space-y-6">
              <Step number={1} title="Profile Settings">
                Open <InlineCode>/profile/settings</InlineCode> for avatar/banner, profile metadata,
                social links, handle, and privacy settings.
              </Step>
              <Step number={2} title="Account Settings">
                Open <InlineCode>/settings</InlineCode> to manage subscription plan, theme preference,
                and notification settings.
              </Step>
              <Step number={3} title="PayPal">
                Open <InlineCode>/profile/dashboard?openPayPal=subscriptions</InlineCode> for subscription and ticket setup.
              </Step>
              <Step number={4} title="AI Assistant">
                Open <Link to="/ai-settings" className="text-[#6B01B6] hover:underline">/ai-settings</Link> to configure your personal AI assistant.
              </Step>
              <Step number={5} title="Communities / Collaborators">
                Use the communities and collaborators cards to open those management views.
              </Step>
            </div>
          </section>

          <section id="content-stream">
            <h2 className="text-2xl font-semibold mb-4">Content sections: Events, Courses, Content, Jobs</h2>
            <p className="text-muted-foreground mb-6">
              These are the four core creator sections in the dashboard.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#6B01B6]" />
                  Events
                </h3>
                <p className="text-sm text-muted-foreground">
                  Create or edit events, manage enrollment, and monitor upcoming item status.
                </p>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#6B01B6]" />
                  Courses
                </h3>
                <p className="text-sm text-muted-foreground">
                  Build lessons, publish course content, and view analytics per course.
                </p>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#6B01B6]" />
                  Content
                </h3>
                <p className="text-sm text-muted-foreground">
                  Publish profile-level posts and content with optional paid access controls.
                </p>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#6B01B6]" />
                  Jobs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Post jobs and review applicants from the applications table.
                </p>
              </div>
            </div>

            <Callout type="success" title="Direct routes from dashboard cards">
              <ul className="space-y-1 text-sm">
                <li><span className="font-semibold">Events:</span> /profile/view-all/events</li>
                <li><span className="font-semibold">Courses:</span> /profile/view-all/courses</li>
                <li><span className="font-semibold">Content:</span> /profile/view-all/content</li>
                <li><span className="font-semibold">Jobs:</span> /profile/view-all/jobs</li>
              </ul>
            </Callout>
          </section>

          <section id="honey-tiers">
            <h2 className="text-2xl font-semibold mb-4">Honey Bee requirements and locked states</h2>
            <p className="text-muted-foreground mb-4">
              In the implementation, creator workflows are wrapped in <InlineCode>TierGatedSection</InlineCode> with{" "}
              <InlineCode>requiredTier="honey"</InlineCode>. Non-Honey users see locked UI states with upgrade prompts.
            </p>

            <CodeBlock
              language="ts"
              code={`<TierGatedSection
  requiredTier="honey"
  upgradeMessage="Upgrade to Honey Bee subscription to create and manage events, courses, content, jobs, and quests"
>
  {/* ... creator workflow cards and sections ... */}
</TierGatedSection>`}
            />
          </section>

          <section id="navigation">
            <h2 className="text-2xl font-semibold mb-4">Navigation inside dashboard pages</h2>
            <p className="text-muted-foreground mb-6">
              After opening each dedicated page, use the previous/next navigation to move through:
              <span className="ml-2">Profile</span> and <span className="ml-2">Content</span> workflows in this section.
            </p>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Use these entry points:
              </p>
              <CodeBlock
                language="bash"
                code={`/profile/dashboard
/profile-and-account-settings
/creating-events
/creating-courses
/creating-content
/creating-jobs`}
              />
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/membership-tiers"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Membership Tiers
          </Link>
          <Link
            to="/profile-and-account-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Profile & Account Settings
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
