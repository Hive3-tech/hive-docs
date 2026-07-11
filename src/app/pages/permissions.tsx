import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function PermissionsPage() {
  const tocItems = [
    { id: 'roles', label: 'Roles and capabilities' },
    { id: 'assign', label: 'Assign a role' },
    { id: 'change', label: 'Change or remove a role' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Communities / <span className="text-foreground">Permissions</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Permissions</h1>
        <p className="text-lg text-muted-foreground mb-12">Give trusted members only the community authority they need.</p>
        <div className="space-y-12">
          <section id="roles">
            <h2 className="text-2xl font-semibold mb-4">Roles and capabilities</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-5"><h3 className="font-semibold">Owner</h3><p className="text-muted-foreground mt-1">Owns the community and retains the owner role. The owner appears in Permissions without role controls.</p></div>
              <div className="rounded-lg border border-border p-5"><h3 className="font-semibold">Admin</h3><p className="text-muted-foreground mt-1">Can manage community content, events, courses, members, applications, integrations, and Admin or Moderator assignments.</p></div>
              <div className="rounded-lg border border-border p-5"><h3 className="font-semibold">Moderator</h3><p className="text-muted-foreground mt-1">Can create, edit, and delete community posts. Moderators can also delete community-chat messages, but do not receive the full community management dashboard.</p></div>
            </div>
            <Callout type="info" title="Management access">The Permissions screen itself is available to the owner and admins. Moderator access is intentionally narrower.</Callout>
          </section>
          <section id="assign">
            <h2 className="text-2xl font-semibold mb-4">Assign a role</h2>
            <Step number={1} title="Choose New Permission">Open the assignment dialog from Permissions.</Step>
            <Step number={2} title="Find the person">Search for the person you want to help manage the community.</Step>
            <Step number={3} title="Select Admin or Moderator">Review the role description, choose one role, and confirm. Assigning a non-member also adds them as an accepted community member.</Step>
          </section>
          <section id="change">
            <h2 className="text-2xl font-semibold mb-4">Change or remove a role</h2>
            <p className="text-muted-foreground">Use the role selector beside an Admin or Moderator to switch their role. Choose Remove to return that person to the regular Member role; it does not remove their community membership.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
