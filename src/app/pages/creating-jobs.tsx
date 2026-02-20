import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode } from "../components/doc-components";
import { Briefcase, ChevronLeft, ChevronRight, ClipboardCheck, MapPin, TrendingUp } from "lucide-react";
import { Link } from "react-router";

export function CreatingJobsPage() {
  const tocItems = [
    { id: "start", label: "Start a job posting" },
    { id: "wizard", label: "Wizard steps" },
    { id: "applications", label: "Applicant workflows" },
    { id: "manage", label: "Manage after publish" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Honey Bee (Profile) / <span className="text-foreground">Creating Jobs</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Creating Jobs
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Post job opportunities and review applicant responses from your dashboard.
        </p>

        <div className="space-y-12">
          <section id="start">
            <h2 className="text-2xl font-semibold mb-4">Start a job posting</h2>
            <Callout type="info" title="Tier requirement">
              Job creation is a Honey Bee workflow. Non-Honey users are prompted to upgrade when they try to create jobs.
            </Callout>
            <div className="mt-4">
              <Callout type="info" title="Where to start">
                Open <InlineCode>/profile/view-all/jobs</InlineCode> and choose <InlineCode>New job</InlineCode>, or navigate directly to{" "}
                <InlineCode>/create/job</InlineCode>.
              </Callout>
            </div>
            <p className="text-muted-foreground mt-4">
              This route is also used by communities when opening <InlineCode>/community/:communityId/create/job</InlineCode>.
            </p>
          </section>

          <section id="wizard">
            <h2 className="text-2xl font-semibold mb-4">Job creation wizard</h2>
            <div className="space-y-6">
              <Step number={1} title="Employer and role details">
                Add title, description, employment type, employer profile and location.
              </Step>
              <Step number={2} title="Access and pay settings">
                Set compensation, visibility, and optional subscription gating.
              </Step>
              <Step number={3} title="Review and publish">
                Confirm role details and publish. The job becomes visible in the Jobs stream.
              </Step>
            </div>
          </section>

          <section id="applications">
            <h2 className="text-2xl font-semibold mb-4">Applicant workflows</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-[#6B01B6]" />
                  Applicants
                </div>
                <p className="text-sm text-muted-foreground">
                  For each job, open applications page and review submissions.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <ClipboardCheck className="w-4 h-4 text-[#6B01B6]" />
                  Internal updates
                </div>
                <p className="text-sm text-muted-foreground">
                  Update role status from open/closed by editing the job item and changing state fields.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#6B01B6]" />
                  Location
                </div>
                <p className="text-sm text-muted-foreground">
                  Include city, remote status, and compensation ranges in the job card for better candidate matching.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#6B01B6]" />
                  Lifecycle
                </div>
                <p className="text-sm text-muted-foreground">
                  Jobs can be updated post-publish and then reviewed from the same job detail and dashboard list.
                </p>
              </div>
            </div>
          </section>

          <section id="manage">
            <h2 className="text-2xl font-semibold mb-4">Manage after publish</h2>
            <Callout type="success" title="Routing references">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><InlineCode>/job/{`{id}`}/edit</InlineCode> to make corrections.</li>
                <li><InlineCode>/job/{`{id}`}/applications</InlineCode> to review candidates.</li>
                <li><InlineCode>/profile/view-all/jobs</InlineCode> to find and manage all role posts.</li>
              </ul>
            </Callout>
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
            to="/paypal-integration"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            PayPal Integration
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
