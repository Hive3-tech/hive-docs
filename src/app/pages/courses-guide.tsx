import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function CoursesGuidePage() {
  const tocItems = [
    { id: 'discover', label: 'Find and join courses' },
    { id: 'learn', label: 'Work through lessons' },
    { id: 'create', label: 'Create a course' },
    { id: 'office-hours', label: 'Office hours' },
    { id: 'access', label: 'Access and rewards' },
    { id: 'manage', label: 'Manage learners' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Courses</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Courses</h1>
        <p className="text-lg text-muted-foreground mb-12">Join structured learning experiences or build a course with lessons, availability, access controls, and rewards.</p>
        <div className="space-y-12">
          <section id="discover">
            <h2 className="text-2xl font-semibold mb-4">Find and join courses</h2>
            <p className="text-muted-foreground mb-4">Search All Courses by title or description and filter by Beginner, Intermediate, or Advanced. My Courses groups courses you applied to, enrolled in, created, or completed.</p>
            <p className="text-muted-foreground">Enroll Now confirms access on an auto-enroll course. Apply to Enroll sends an application when approval is required. A pending application can be canceled; an enrolled learner can leave the course.</p>
          </section>
          <section id="learn">
            <h2 className="text-2xl font-semibold mb-4">Work through lessons</h2>
            <p className="text-muted-foreground">Open each lesson and move through its sections. Lessons can combine rich text, document attachments, and video from a YouTube or Vimeo URL or a direct upload. Mark a lesson complete to record progress and continue to the next lesson.</p>
          </section>
          <section id="create">
            <h2 className="text-2xl font-semibold mb-4">Create a course</h2>
            <Callout type="info" title="Honey Bee+">Creating a personal course requires a Honey Bee, Swarm, or Royal Hive membership. Community managers can create courses for their community.</Callout>
            <div className="space-y-5 mt-6">
              <Step number={1} title="Basic Info">Add the title, descriptions, hero banner, difficulty, optional start and end dates, badges, and—on community courses—instructors.</Step>
              <Step number={2} title="Office Hours">Set creator availability, timezone, and repeating schedule blocks.</Step>
              <Step number={3} title="Lessons">Create at least one lesson and organize its text, document, and video sections.</Step>
              <Step number={4} title="Course Access">Choose automatic enrollment or applications, then Public, Members only, or Subscription / ticket access.</Step>
              <Step number={5} title="Rewards">Optionally deploy and attach a completion credential.</Step>
            </div>
          </section>
          <section id="office-hours">
            <h2 className="text-2xl font-semibold mb-4">Office hours</h2>
            <p className="text-muted-foreground">Office Hours records creator-set availability shown on the course. Use the calendar or month view, select a timezone, and add one-time or recurring availability. It is part of the course experience, not a separate booking product.</p>
          </section>
          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Access and rewards</h2>
            <p className="text-muted-foreground mb-4">Public courses are open to everyone. Members-only courses limit access to members. Protected courses can require an active creator subscription, a one-time ticket, or either option; paid access requires the owner to connect PayPal.</p>
            <p className="text-muted-foreground">When a completion credential is attached, eligible learners can claim it from Notifications after finishing the course.</p>
          </section>
          <section id="manage">
            <h2 className="text-2xl font-semibold mb-4">Manage learners</h2>
            <p className="text-muted-foreground mb-4">The enrollment manager groups learners into All, Pending, Approved, and Denied. Approve or deny pending applications, revoke an approval, or approve a previously denied application.</p>
            <p className="text-muted-foreground">Course analytics shows total, in-progress, and completed learners, average progress, completion rate, lesson progress, and activity dates.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
