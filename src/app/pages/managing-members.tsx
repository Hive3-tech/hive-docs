import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Mail,
  Search,
  Shield,
  UserCheck,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function ManagingMembersPage() {
  const tocItems = [
    { id: 'at-a-glance', label: 'What this page controls' },
    { id: 'member-overview', label: 'Member overview cards' },
    { id: 'search-and-filter', label: 'Search and filter' },
    { id: 'pending-applications', label: 'Pending applications' },
    { id: 'member-list', label: 'Member list view' },
    { id: 'member-actions', label: 'Member row actions' },
    { id: 'save-and-next', label: 'Save and next' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities / <span className="text-foreground">Members</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Members
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Review your member roster, filter by role, and process pending join requests from one
          page.
        </p>

        <div className="space-y-12">
          <section id="at-a-glance">
            <h2 className="text-2xl font-semibold mb-4">What this page controls</h2>
            <p className="text-muted-foreground mb-4">
              The Members page gives you two main views: your current community members and your
              pending applications queue.
            </p>
            <Callout type="info" title="Access note">
              This page is part of community management and includes a quick Back to Dashboard
              button in the header.
            </Callout>
          </section>

          <section id="member-overview">
            <h2 className="text-2xl font-semibold mb-4">Member overview cards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Total Members
                </p>
                <p className="text-sm text-muted-foreground">
                  Shows how many members are currently in your community.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#6B01B6]" />
                  Active Members
                </p>
                <p className="text-sm text-muted-foreground">
                  Shows active member count from the current member list.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#6B01B6]" />
                  Staff Members
                </p>
                <p className="text-sm text-muted-foreground">
                  Counts Owner, Admin, and Moderator roles.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Premium Subscribers</p>
                <p className="text-sm text-muted-foreground">
                  This card is currently shown as N/A on the page.
                </p>
              </div>
            </div>
          </section>

          <section id="search-and-filter">
            <h2 className="text-2xl font-semibold mb-4">Search and filter</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#6B01B6]" />
                  Search members
                </p>
                <p className="text-sm text-muted-foreground">
                  Search by member name or @handle to quickly find people in larger communities.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#6B01B6]" />
                  Role filter
                </p>
                <p className="text-sm text-muted-foreground">
                  Filter by role (Owner, Admin, Moderator, Member) when you are in member list
                  view.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              When you switch to Pending applications, the role filter is hidden and search updates
              to application-focused search.
            </p>
          </section>

          <section id="pending-applications">
            <h2 className="text-2xl font-semibold mb-4">Pending applications</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6B01B6]" />
                Pending queue workflow
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Use the Pending button to switch from members to application review mode.</li>
                <li>Each card shows applicant name, email, profile image/initials, and applied time.</li>
                <li>Approve accepts the request and adds the person to your community.</li>
                <li>Deny declines the request and removes it from the pending queue.</li>
              </ul>
            </div>
            <Callout type="success" title="No save step needed">
              Approve and Deny actions apply immediately.
            </Callout>
          </section>

          <section id="member-list">
            <h2 className="text-2xl font-semibold mb-4">Member list view</h2>
            <p className="text-muted-foreground mb-4">
              The page adapts by device: table layout on desktop and card layout on mobile.
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Member identity: avatar, name, and @handle (when available).</li>
                <li>Role: visual badge for Owner, Admin, Moderator, or Member.</li>
                <li>Joined date: when the member entered the community.</li>
                <li>Subscription status: shown in the Subscription column on each row/card.</li>
                <li>Status badge: Active or Inactive.</li>
              </ul>
            </div>
          </section>

          <section id="member-actions">
            <h2 className="text-2xl font-semibold mb-4">Member row actions</h2>
            <p className="text-muted-foreground">
              A three-dot action menu is visible on member rows and cards for moderation workflows.
              Role assignment and role changes should be handled from{' '}
              <Link to="/admins-and-moderators" className="text-[#6B01B6] hover:underline">
                Permissions
              </Link>{' '}
              for the clearest control path.
            </p>
            <Callout type="info" title="Permissions reminder">
              Use the Permissions page to assign Admin and Moderator access.
            </Callout>
          </section>

          <section id="save-and-next">
            <h2 className="text-2xl font-semibold mb-4">Save and next</h2>
            <Callout type="success" title="No Save button needed">
              Search, filtering, and approve/deny actions update the page state right away.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/ai-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Community AI Assistant
          </Link>
          <Link
            to="/events-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Events Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
