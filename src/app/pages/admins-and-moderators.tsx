import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, AlertCircle, KeyRound, UserCheck } from "lucide-react";
import { Link } from "react-router";

export function AdminsAndModeratorsPage() {
  const tocItems = [
    { id: "overview", label: "Role model" },
    { id: "assign", label: "Assign roles" },
    { id: "change", label: "Promote and demote" },
    { id: "search", label: "Search dialog" },
    { id: "remove", label: "Remove role" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">Admins & Moderators</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Admins & Moderators
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Configure who can administer and moderate a community from role-specific permission controls.
        </p>

        <section id="overview" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Role model</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead className="bg-card">
                <tr>
                  <th className="text-left p-3 text-sm font-semibold">Role</th>
                  <th className="text-left p-3 text-sm font-semibold">Responsibilities</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-border">
                  <td className="p-3">Owner</td>
                  <td className="p-3 text-muted-foreground">Full control of the community and ownership context.</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Admin</td>
                  <td className="p-3 text-muted-foreground">
                    Manage community content, settings, and assign admin/moderator roles.
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Moderator</td>
                  <td className="p-3 text-muted-foreground">
                    Moderate content and member actions under admin policy.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Callout type="info" title="Owner row behavior">
            Owner entries are shown in the list and are not editable in-place to avoid accidental privilege downgrades.
          </Callout>
        </section>

        <section id="assign" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Assign roles</h2>
          <div className="space-y-6">
            <Step number={1} title="Open role assignment">
              Click <InlineCode>New Permission</InlineCode> in the permissions view.
            </Step>
            <Step number={2} title="Search by account">
              Select a user from the search input.
            </Step>
            <Step number={3} title="Choose role">
              Select <InlineCode>Admin</InlineCode> or <InlineCode>Moderator</InlineCode>, then submit.
            </Step>
          </div>
          <CodeBlock
            language="text"
            code={`click New Permission
search user
choose admin or moderator
Assign Role`}
          />
          <Callout type="warning" title="Search is live">
            Results are pulled from global user search; only selected users receive role assignment.
          </Callout>
        </section>

        <section id="change" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Promote and demote</h2>
          <p className="text-muted-foreground">
            Existing members listed in Admin/Moderator sections can be moved between roles with the role select control.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#6B01B6]" />
                Upgrade
              </div>
              <p className="text-sm text-muted-foreground">
                Change a <InlineCode>Moderator</InlineCode> to <InlineCode>Admin</InlineCode>.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#6B01B6]" />
                Demote
              </div>
              <p className="text-sm text-muted-foreground">
                Change an <InlineCode>Admin</InlineCode> to <InlineCode>Moderator</InlineCode>.
              </p>
            </div>
          </div>
        </section>

        <section id="search" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Search dialog details</h2>
          <p className="text-muted-foreground">
            The assignment dialog uses a searchable typeahead and returns a selected profile card.
            The modal shows selected user and role description before save.
          </p>
          <Callout type="info" title="Clear user flow">
            You can clear a selection and restart the assignment without closing the dialog.
          </Callout>
        </section>

        <section id="remove" className="space-y-4">
          <h2 className="text-2xl font-semibold">Remove role</h2>
          <div className="space-y-6">
            <Step number={1} title="Select member row">
              Open the row action for an admin/moderator.
            </Step>
            <Step number={2} title="Remove">
              Click <InlineCode>Remove</InlineCode>. This removes role assignment from the community.
            </Step>
          </div>
          <Callout type="error" title="Keep security in mind">
            Removing a role revokes management privileges but does not delete the community.
          </Callout>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4 text-[#6B01B6]" />
            Use owner-only actions for high-risk users.
          </div>
          <CodeBlock
            language="text"
            code={`admin panel
open admin row
click Remove
confirm mutation`}
          />
        </section>

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
