import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import { ChevronLeft, ChevronRight, Mail, Search, UserCheck, Users } from 'lucide-react';
import { Link } from 'react-router';

export function ProfileCollaboratorsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'what-you-see', label: 'What you see' },
    { id: 'what-you-can-do', label: 'What you can do' },
    { id: 'related', label: 'Related guides' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Collaborators</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Collaborators
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Review collaborator relationships on your profile and process pending collaboration
          applications.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">
              This page is focused on your profile collaborator network. It helps you monitor your
              current collaborators and handle incoming requests in one place.
            </p>
            <Callout type="info" title="Profile vs community roles">
              Collaborators are profile-level relationships. Community permissions like owner,
              admin, and moderator are managed separately.
            </Callout>
          </section>

          <section id="what-you-see">
            <h2 className="text-2xl font-semibold mb-4">What you see</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#6B01B6]" />
                  Search and filters
                </p>
                <p className="text-sm text-muted-foreground">
                  Search collaborators and switch between the main list and pending applications.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Summary cards
                </p>
                <p className="text-sm text-muted-foreground">
                  Track total collaborators and mutual follows at a glance.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#6B01B6]" />
                  Collaborator list
                </p>
                <p className="text-sm text-muted-foreground">
                  View collaborator profile details, join date, and relationship indicators.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#6B01B6]" />
                  Pending requests
                </p>
                <p className="text-sm text-muted-foreground">
                  See incoming applications with applicant identity, email, and application date.
                </p>
              </div>
            </div>
          </section>

          <section id="what-you-can-do">
            <h2 className="text-2xl font-semibold mb-4">What you can do</h2>
            <ul className="text-muted-foreground list-disc list-inside space-y-1">
              <li>Approve pending collaborator applications.</li>
              <li>Deny pending collaborator applications.</li>
              <li>Return to Profile Dashboard at any time.</li>
            </ul>
            <Callout type="warning" title="Action scope">
              Core management actions on this page are pending-request decisions (Approve or Deny).
            </Callout>
          </section>

          <section id="related">
            <h2 className="text-2xl font-semibold mb-4">Related guides</h2>
            <p className="text-muted-foreground mb-4">
              Use these pages when you need deeper setup or permissions details:
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/profile-and-account-settings" className="text-[#6B01B6] hover:underline">
                Profile Settings (privacy and access)
              </Link>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/profile-communities"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Communities
          </Link>
          <Link
            to="/communities-overview"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Communities Overview
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
