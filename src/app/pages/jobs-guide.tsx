import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function JobsGuidePage() {
  const tocItems = [
    { id: 'browse', label: 'Browse jobs' },
    { id: 'apply', label: 'Apply for a job' },
    { id: 'track', label: 'Track applications' },
    { id: 'post', label: 'Post a job' },
    { id: 'access', label: 'Control access' },
    { id: 'review', label: 'Review applications' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Jobs</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Jobs</h1>
        <p className="text-lg text-muted-foreground mb-12">Find opportunities, submit your application, or recruit through your profile or community.</p>
        <div className="space-y-12">
          <section id="browse">
            <h2 className="text-2xl font-semibold mb-4">Browse jobs</h2>
            <p className="text-muted-foreground">Search the Jobs directory by title or employer. Filter by employment type or badges such as Remote, Web3, or Senior. Each card summarizes the employer, location, job type, badges, and how recently it was posted.</p>
          </section>
          <section id="apply">
            <h2 className="text-2xl font-semibold mb-4">Apply for a job</h2>
            <p className="text-muted-foreground mb-4">Choose Apply for Job and attach a PDF resume; a resume is required and can be up to 25 MB. A cover letter is optional. After submission, the job shows an Applied state instead of another application button.</p>
            <Callout type="info" title="Reapplying">You cannot send a duplicate active application. If an employer rejects an application, Hive3 allows you to apply again.</Callout>
          </section>
          <section id="track">
            <h2 className="text-2xl font-semibold mb-4">Track applications</h2>
            <p className="text-muted-foreground">Open My Jobs to see jobs you applied to alongside jobs you created. Application decisions use pending review, approved, and rejected states.</p>
          </section>
          <section id="post">
            <h2 className="text-2xl font-semibold mb-4">Post a job</h2>
            <Callout type="info" title="Honey Bee+">Posting a personal job requires a Honey Bee, Swarm, or Royal Hive membership. Authorized managers can post in a community context.</Callout>
            <div className="space-y-5 mt-6">
              <Step number={1} title="Basic Info">Add the employer name and logo, job title, location, description or attachment, employment type, badges, and optional USD pay range.</Step>
              <Step number={2} title="Job Access">Choose Public, Members only, or Subscription access and review the live preview before publishing.</Step>
            </div>
          </section>
          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Control access</h2>
            <p className="text-muted-foreground">Public jobs are open to everyone. Members-only jobs limit the listing to members. Subscription-gated jobs require the selected active subscription; the owner must connect PayPal and create a subscription plan first. Without access, the description is obscured and applying is disabled.</p>
          </section>
          <section id="review">
            <h2 className="text-2xl font-semibold mb-4">Review applications</h2>
            <p className="text-muted-foreground mb-4">Open <code className="rounded bg-muted px-1.5 py-0.5">/job/:id/applications</code> from Manage Applications. The page summarizes total, pending, approved, and rejected applications and provides matching filters.</p>
            <p className="text-muted-foreground">Review an applicant’s profile, resume, optional cover letter, and application time. Approve or reject a pending application; the applicant then sees the updated decision status.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
