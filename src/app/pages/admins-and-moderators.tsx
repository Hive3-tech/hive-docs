import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import { AlertCircle, ChevronLeft, ChevronRight, Crown, Shield, Star, UserPlus } from 'lucide-react';
import { Link } from 'react-router';

export function AdminsAndModeratorsPage() {
  const tocItems = [
    { id: 'at-a-glance', label: 'What this page controls' },
    { id: 'role-levels', label: 'Role levels' },
    { id: 'add-permission', label: 'Add a new permission' },
    { id: 'manage-existing-roles', label: 'Manage existing roles' },
    { id: 'remove-role', label: 'Remove a role' },
    { id: 'helpful-notes', label: 'Helpful notes' },
    { id: 'save-and-next', label: 'Save and next' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities / <span className="text-foreground">Permissions</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Permissions
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Manage who helps run your community by assigning, updating, and removing role-based
          access.
        </p>

        <div className="space-y-12">
          <section id="at-a-glance">
            <h2 className="text-2xl font-semibold mb-4">What this page controls</h2>
            <p className="text-muted-foreground mb-4">
              Use this page to manage your community team with role-based permissions.
            </p>
            <Callout type="info" title="Access note">
              This page is intended for users who already have community management access.
            </Callout>
          </section>

          <section id="role-levels">
            <h2 className="text-2xl font-semibold mb-4">Role levels</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#6B01B6]" />
                  Owner
                </p>
                <p className="text-sm text-muted-foreground">
                  Full control of the community. Owner entries are visible in the list and are
                  read-only on this page.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#6B01B6]" />
                  Admin
                </p>
                <p className="text-sm text-muted-foreground">
                  Can manage community content, events, and courses, and can assign admin and
                  moderator roles. Admin access also includes sending direct messages on the
                  platform.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#6B01B6]" />
                  Moderator
                </p>
                <p className="text-sm text-muted-foreground">
                  Can create, edit, and remove community posts.
                </p>
              </div>
            </div>
            <Callout type="warning" title="Important">
              You can assign Admin and Moderator from this page. Owner is not assignable here.
            </Callout>
          </section>

          <section id="add-permission">
            <h2 className="text-2xl font-semibold mb-4">Add a new permission</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-[#6B01B6]" />
                New Permission flow
              </p>
              <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                <li>Click New Permission.</li>
                <li>Search by name or @handle and select the user.</li>
                <li>Choose Moderator or Admin.</li>
                <li>Click Assign Role to apply the role.</li>
              </ol>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              You can clear the selected user and pick someone else before assigning.
            </p>
          </section>

          <section id="manage-existing-roles">
            <h2 className="text-2xl font-semibold mb-4">Manage existing roles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Update role level</p>
                <p className="text-sm text-muted-foreground">
                  In Admin and Moderator sections, use the role dropdown to switch between Admin
                  and Moderator.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Role visibility</p>
                <p className="text-sm text-muted-foreground">
                  Role sections appear when there are members in that role, and each row shows when
                  that role was assigned.
                </p>
              </div>
            </div>
          </section>

          <section id="remove-role">
            <h2 className="text-2xl font-semibold mb-4">Remove a role</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Use Remove on an Admin or Moderator row to revoke that role.</li>
                <li>Owner rows cannot be removed from this page.</li>
                <li>Removing a role only removes role access, not the user account.</li>
              </ul>
            </div>
          </section>

          <section id="helpful-notes">
            <h2 className="text-2xl font-semibold mb-4">Helpful notes</h2>
            <div className="space-y-4">
              <Callout type="info" title="Role summary cards">
                The top cards show current counts for Owners, Admins, and Moderators.
              </Callout>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#6B01B6]" />
                  Common assignment messages
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>You cannot assign a role to yourself.</li>
                  <li>You cannot assign the same role the user already has.</li>
                  <li>If permissions fail to load, you may not have role-management access.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="save-and-next">
            <h2 className="text-2xl font-semibold mb-4">Save and next</h2>
            <Callout type="success" title="No Save button needed">
              Role actions apply right away when you assign, change, or remove a role.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/community-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Community Settings
          </Link>
          <Link
            to="/chat-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Chat Settings
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
