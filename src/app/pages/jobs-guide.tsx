import { RightSidebar } from '../components/right-sidebar';
import { Callout, Step } from '../components/doc-components';
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FileText,
  Lock,
  Search,
  Send,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function JobsGuidePage() {
  const tocItems = [
    { id: 'overview', label: 'What jobs include' },
    { id: 'where-to-start', label: 'Where to start' },
    { id: 'create-flow', label: 'Create flow (3 steps)' },
    { id: 'access', label: 'Access and subscription gate' },
    { id: 'applicant-experience', label: 'Applicant experience' },
    { id: 'application-management', label: 'Manage applications' },
    { id: 'discovery-and-management', label: 'Discovery and creator tools' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Hive3 Features / <span className="text-foreground">Jobs Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Jobs Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Publish opportunities, receive applications, and manage candidate decisions from one
          streamlined workflow.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What jobs include</h2>
            <p className="text-muted-foreground mb-4">
              Jobs on Hive3 support complete hiring workflows: publishing, gated access options,
              candidate applications, and review decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#6B01B6]" />
                  Full posting setup
                </div>
                <p className="text-sm text-muted-foreground">
                  Add branding, title, location, job type, description, optional pay range, and role
                  badges.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Built-in applicant handling
                </div>
                <p className="text-sm text-muted-foreground">
                  Applicants submit resumes and optional cover letters while owners approve or
                  reject from a dedicated applications view.
                </p>
              </div>
            </div>
          </section>

          <section id="where-to-start">
            <h2 className="text-2xl font-semibold mb-4">Where to start</h2>
            <Callout type="info" title="Membership entry points">
              <ul className="list-disc list-inside space-y-1">
                <li>Profile dashboard job creation is a Honey Bee+ workflow.</li>
                <li>Community dashboard job creation is available in Swarm community workflows.</li>
              </ul>
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#6B01B6]" />
                  Your Profile dashboard
                </div>
                <p className="text-sm text-muted-foreground">
                  Use Jobs in your profile workspace to create and manage creator-owned postings.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Community dashboard
                </div>
                <p className="text-sm text-muted-foreground">
                  Launch community-owned postings and review applications as part of community
                  operations.
                </p>
              </div>
            </div>
          </section>

          <section id="create-flow">
            <h2 className="text-2xl font-semibold mb-4">Create flow (3 steps)</h2>
            <div className="space-y-6">
              <Step number={1} title="Basic Info">
                Add employer logo and employer name, then set job title, location, job description,
                job type, optional badges, and optional pay range.
                <br />
                The description supports rich content and optional document attachment.
              </Step>
              <Step number={2} title="Job Access">
                Keep the job open to all Hive members, or require an active subscription to view and
                apply.
              </Step>
              <Step number={3} title="Review and publish">
                Confirm your posting details and publish.
              </Step>
            </div>
          </section>

          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Access and subscription gate</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Default access
                </p>
                <p className="text-sm text-muted-foreground">
                  Jobs are visible to all Hive members by default.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#6B01B6]" />
                  Subscription-only access
                </p>
                <p className="text-sm text-muted-foreground">
                  You can require one of your existing subscription tiers before members can view
                  and apply.
                </p>
              </div>
            </div>
            <Callout type="info" title="Subscription setup requirement">
              Subscription gating for jobs requires an active subscription product first.
              <div className="mt-2">
                <Link to="/profile-paypal" className="underline">
                  Link Paypal account
                </Link>{' '}
                for profile-owned subscriptions, or{' '}
                <Link to="/paypal-and-subscriptions" className="underline">
                  PayPal Integration
                </Link>{' '}
                for community-owned subscriptions.
              </div>
            </Callout>
          </section>

          <section id="applicant-experience">
            <h2 className="text-2xl font-semibold mb-4">Applicant experience</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Job detail pages show employer info, description, location, type, and tags.</li>
                <li>Applicants click Apply for Job to open a submission modal.</li>
                <li>Resume upload is required. Cover letter is optional.</li>
                <li>Applicants cannot submit duplicate applications for the same job.</li>
                <li>
                  If a subscription gate is enabled and access is missing, users see a locked view
                  with a subscription prompt.
                </li>
                <li>After applying, users see an Applied state on the job sidebar.</li>
              </ul>
            </div>
          </section>

          <section id="application-management">
            <h2 className="text-2xl font-semibold mb-4">Manage applications</h2>
            <p className="text-muted-foreground mb-4">
              Job owners can review every application from the Manage Applications workflow.
            </p>
            <div className="space-y-6">
              <Step number={1} title="Open applications">
                From a managed job, open the applications view to review candidate submissions.
              </Step>
              <Step number={2} title="Filter and review">
                Use status tabs to view All, Pending, Approved, or Rejected applications.
              </Step>
              <Step number={3} title="Approve or reject">
                For pending applicants, choose Approve or Reject directly from the list.
              </Step>
            </div>
            <Callout type="success" title="What you can review">
              Application rows include candidate profile details, resume file, optional cover letter
              file, and application timing.
            </Callout>
          </section>

          <section id="discovery-and-management">
            <h2 className="text-2xl font-semibold mb-4">Discovery and creator tools</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#6B01B6]" />
                  Job discovery
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>All Jobs supports title/company search.</li>
                  <li>Filters include job type and badge-style tags.</li>
                  <li>Job cards show posting age and quick job metadata.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#6B01B6]" />
                  My Jobs view
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>My Jobs groups postings into Applied and Created sections.</li>
                  <li>Creators can edit jobs, manage applications, and retire postings.</li>
                  <li>Creator dashboard cards also include notification mute controls per job.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#6B01B6]" />
                  Archived jobs
                </p>
                <p className="text-sm text-muted-foreground">
                  Retired job postings can appear with an Archived indicator so teams can preserve
                  context while ending active hiring.
                </p>
              </div>
            </div>
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
            to="/quests-and-tasks"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Task Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
