import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function MembersAndApplicationsPage() {
  const tocItems = [
    { id: 'members', label: 'Find members' },
    { id: 'applications', label: 'Review applications' },
    { id: 'manage', label: 'Manage a member' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Communities / <span className="text-foreground">Members &amp; Applications</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Members &amp; Applications</h1>
        <p className="text-lg text-muted-foreground mb-12">Find current members, decide pending applications, and take membership actions from one list.</p>
        <div className="space-y-12">
          <section id="members">
            <h2 className="text-2xl font-semibold mb-4">Find members</h2>
            <p className="text-muted-foreground">Search by name or handle and filter by Owner, Admin, Moderator, or Member. Rows show role, join date, subscription information, and status.</p>
          </section>
          <section id="applications">
            <h2 className="text-2xl font-semibold mb-4">Review applications</h2>
            <Step number={1} title="Open Pending">Use the Pending control to switch from members to waiting applications.</Step>
            <Step number={2} title="Review the applicant">Check the person and their application before deciding.</Step>
            <Step number={3} title="Approve or deny">Approval adds the person as an accepted member; denial closes the application. Hive3 notifies the applicant of the decision.</Step>
          </section>
          <section id="manage">
            <h2 className="text-2xl font-semibold mb-4">Manage a member</h2>
            <p className="text-muted-foreground mb-4">Open a member's action menu to send a message, go to Permissions to change their role, or remove them. Role changes are limited to Admin and Moderator assignments.</p>
            <Callout type="warning" title="Removal is deliberate">Removal requires typing <strong>remove this member</strong>. A member with active subscription access cannot be removed until that access ends, and the community owner cannot be removed.</Callout>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
