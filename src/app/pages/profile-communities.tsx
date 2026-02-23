import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import {
  ChevronLeft,
  ChevronRight,
  Crown,
  ExternalLink,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function ProfileCommunitiesPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'what-you-see', label: 'What you see' },
    { id: 'what-you-can-do', label: 'What you can do' },
    { id: 'permissions', label: 'Community permissions' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Communities</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Communities
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          View the communities you manage and open the right workspace quickly.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">
              This page is a lightweight role view. It groups communities where you currently have
              management access so you can jump straight into that community.
            </p>
          </section>

          <section id="what-you-see">
            <h2 className="text-2xl font-semibold mb-4">What you see</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#6B01B6]" />
                  Admin of
                </p>
                <p className="text-sm text-muted-foreground">
                  Communities where you have admin permissions.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#6B01B6]" />
                  Moderator of
                </p>
                <p className="text-sm text-muted-foreground">
                  Communities where you have moderator permissions.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#6B01B6]" />
                  Owned
                </p>
                <p className="text-sm text-muted-foreground">
                  If applicable, communities where you are the owner.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Each card shows community name, short description, member count, and your role badge.
            </p>
          </section>

          <section id="what-you-can-do">
            <h2 className="text-2xl font-semibold mb-4">What you can do</h2>
            <ul className="text-muted-foreground list-disc list-inside space-y-1">
              <li>Click a community card to open that community.</li>
              <li>Use Back to Dashboard to return to your Profile Dashboard.</li>
              <li>
                Use Create Community if eligible. Creation is gated by membership tier and ownership
                limits.
              </li>
            </ul>
            <Callout type="info" title="Scope of this page">
              This page is for navigation and role visibility. It does not change permissions.
            </Callout>
          </section>

          <section id="permissions">
            <h2 className="text-2xl font-semibold mb-4">Community permissions</h2>
            <p className="text-muted-foreground mb-4">
              For detailed role capabilities and permission actions, use the dedicated permissions
              docs:
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/admins-and-moderators" className="inline-flex items-center gap-1 text-[#6B01B6] hover:underline">
                Admins & Moderators
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link to="/communities-overview" className="inline-flex items-center gap-1 text-[#6B01B6] hover:underline">
                Communities Overview
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/profile-ai"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Personal AI Assistant
          </Link>
          <Link
            to="/profile-collaborators"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Collaborators
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
