import { RightSidebar } from '../components/right-sidebar';
import { Callout, Step } from '../components/doc-components';
import {
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  GraduationCap,
  Lock,
  ShieldCheck,
  Ticket,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function CoursesGuidePage() {
  const tocItems = [
    { id: 'overview', label: 'What courses include' },
    { id: 'where-to-start', label: 'Where to start' },
    { id: 'create-flow', label: 'Create flow (6 steps)' },
    { id: 'lessons', label: 'Lessons and learner progress' },
    { id: 'access-and-monetization', label: 'Access and monetization' },
    { id: 'management-and-analytics', label: 'Management and analytics' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Hive3 Features / <span className="text-foreground">Courses Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Courses Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Build structured learning experiences with lesson sequencing, enrollment controls, and
          completion tracking.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What courses include</h2>
            <p className="text-muted-foreground mb-4">
              A Hive3 course combines course branding, lesson content, enrollment logic, and
              optional rewards in one creator workflow.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#6B01B6]" />
                  Structured learning path
                </div>
                <p className="text-sm text-muted-foreground">
                  Publish courses as ordered lesson experiences learners can complete section by
                  section.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Enrollment + progress controls
                </div>
                <p className="text-sm text-muted-foreground">
                  Configure direct enrollment or applications, then review learner progress and
                  completion.
                </p>
              </div>
            </div>
          </section>

          <section id="where-to-start">
            <h2 className="text-2xl font-semibold mb-4">Where to start</h2>
            <Callout type="info" title="Membership entry points">
              <ul className="list-disc list-inside space-y-1">
                <li>Profile dashboard course creation is a Honey Bee+ workflow.</li>
                <li>Community dashboard course creation is available in Swarm community workflows.</li>
              </ul>
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex gap-2 items-center">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Your Profile dashboard
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Use Courses in your creator workspace to start a new course and manage existing
                  courses.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex gap-2 items-center">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Community dashboard
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Use the Courses section to create community-owned courses and manage enrollment as
                  a community operator.
                </p>
              </div>
            </div>
          </section>

          <section id="create-flow">
            <h2 className="text-2xl font-semibold mb-4">Create flow (6 steps)</h2>
            <p className="text-muted-foreground mb-6">
              Course creation uses a 6-step guided flow:
            </p>
            <div className="space-y-6">
              <Step number={1} title="Basic Info">
                Add course thumbnail/banner, course title, short description, detailed description,
                badges (up to 5), and supporting attachment content.
                <br />
                In community creation, you can also add instructor profiles.
              </Step>
              <Step number={2} title="Course Details">
                Choose course type (Fully Online or IRL), then select difficulty (Beginner,
                Intermediate, or Advanced).
                <br />
                IRL setup includes class date, class time, and classroom URL.
              </Step>
              <Step number={3} title="Lessons">
                Build your lesson list. Each lesson supports a title, short description, full
                description, and optional attachments.
                <br />
                Inside each lesson you can add sections with section title, section content, and
                optional media/attachment content.
              </Step>
              <Step number={4} title="Course Access">
                Choose auto-enroll or apply-to-enroll, then optionally add subscription requirements
                and one-time ticket access.
              </Step>
              <Step number={5} title="Rewards">
                Optionally add a course credential reward for completion.
              </Step>
              <Step number={6} title="Review and publish">
                Review all details, lessons, access settings, and rewards before publishing.
              </Step>
            </div>
          </section>

          <section id="lessons">
            <h2 className="text-2xl font-semibold mb-4">Lessons and learner progress</h2>
            <p className="text-muted-foreground mb-4">
              Lessons are the center of the course experience and become interactive after learners
              are enrolled with access.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#6B01B6]" />
                  Lesson access behavior
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Lessons unlock when enrollment is approved and access requirements are met.</li>
                  <li>Pending learners can see status but cannot open lesson content yet.</li>
                  <li>Subscription/ticket-gated courses show an access-required state until unlocked.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#6B01B6]" />
                  Progress behavior
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Learners move through sections with previous/next controls.</li>
                  <li>After finishing lesson sections, they can mark the lesson as complete.</li>
                  <li>Course progress updates as completed lessons increase.</li>
                  <li>Completion modal helps learners continue to the next lesson.</li>
                </ul>
              </div>
            </div>
            <Callout type="info" title="Lesson requirement in creation">
              You need at least one lesson before continuing past the Lessons step.
            </Callout>
          </section>

          <section id="access-and-monetization">
            <h2 className="text-2xl font-semibold mb-4">Access and monetization</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Enrollment mode
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Auto-enroll: learner is enrolled immediately.</li>
                  <li>Apply to enroll: learner waits for approval.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CircleDollarSign className="w-4 h-4 text-[#6B01B6]" />
                  Subscription gate
                </p>
                <p className="text-sm text-muted-foreground">
                  Optionally require an active subscription before a learner can enroll.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-[#6B01B6]" />
                  One-time course ticket
                </p>
                <p className="text-sm text-muted-foreground">
                  Optionally enable one-time ticket pricing for course access.
                </p>
              </div>
            </div>
            <Callout type="info" title="PayPal requirement">
              PayPal must be connected to use subscription gates and one-time course tickets.
              <div className="mt-2">
                <Link to="/profile-paypal" className="underline">
                  Link Paypal account
                </Link>{' '}
                for profile-owned courses, or{' '}
                <Link to="/paypal-and-subscriptions" className="underline">
                  PayPal Integration
                </Link>{' '}
                for community-owned courses.
              </div>
            </Callout>
            <Callout type="success" title="Learner-facing states">
              Learners will see Enroll Now, Apply to Enroll, Application Pending, or Enrolled
              based on your settings and their status.
            </Callout>
          </section>

          <section id="management-and-analytics">
            <h2 className="text-2xl font-semibold mb-4">Management and analytics</h2>
            <p className="text-muted-foreground mb-4">
              After publishing, course owners can update the course and monitor learner outcomes.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#6B01B6]" />
                  Owner controls
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Edit course details and lessons from the course editor.</li>
                  <li>Manage enrollments with filters: All, Pending, Approved, and Denied.</li>
                  <li>Approve or deny applications for apply-based enrollment workflows.</li>
                  <li>Use delete/retire controls when you want to remove a course from active use.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#6B01B6]" />
                  Analytics
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Track total enrolled learners, in-progress learners, and completed learners.</li>
                  <li>View average progress and completion rate.</li>
                  <li>Filter analytics by all, in-progress, or completed learners.</li>
                  <li>Review per-learner completion and activity timing.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Course discovery and personal course views</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>All Courses supports search and level filters.</li>
                  <li>
                    My Courses is grouped into Applied, Enrolled, Created, and Completed sections.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/events-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Events Guide
          </Link>
          <Link
            to="/content-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Content Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
