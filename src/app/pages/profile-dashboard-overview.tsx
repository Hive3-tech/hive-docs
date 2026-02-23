import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import {
  BookOpen,
  Briefcase,
  Calendar,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileText,
  Settings,
  Sparkles,
  Target,
  UserCheck,
  UserCircle,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function ProfileDashboardOverviewPage() {
  const tocItems = [
    { id: 'dashboard-home', label: 'Dashboard home' },
    { id: 'action-cards', label: 'Action cards' },
    { id: 'creator-workspace', label: 'Creator workspace' },
    { id: 'membership-access', label: 'Membership access' },
  ];

  const actionCards = [
    {
      title: 'Profile Settings',
      subtitle: 'Edit profile',
      to: '/profile-and-account-settings',
      icon: UserCircle,
      iconStyle: 'bg-emerald-100 text-emerald-600',
      note: 'Profile page details',
    },
    {
      title: 'Account Settings',
      subtitle: 'Manage account',
      to: '/account-settings',
      icon: Settings,
      iconStyle: 'bg-blue-100 text-blue-600',
      note: 'Plan, theme, and notifications',
    },
    {
      title: 'PayPal',
      subtitle: 'Payments & Subscriptions',
      to: '/profile-paypal',
      icon: CreditCard,
      iconStyle: 'bg-blue-100 text-blue-600',
      note: 'Link account for Honey Bee subscriptions',
    },
    {
      title: 'AI',
      subtitle: 'Personal AI Assistant',
      to: '/profile-ai',
      icon: Sparkles,
      iconStyle: 'bg-purple-100 text-purple-600',
      note: 'Assistant identity, visibility, and training docs',
    },
    {
      title: 'Communities',
      subtitle: 'View your communities',
      to: '/profile-communities',
      icon: Users,
      iconStyle: 'bg-amber-100 text-amber-600',
      note: 'Role-based list for owner/admin/moderator communities',
    },
    {
      title: 'Collaborators',
      subtitle: 'Manage collaborators',
      to: '/profile-collaborators',
      icon: UserCheck,
      iconStyle: 'bg-green-100 text-green-600',
      note: 'Search, pending requests, and collaborator approvals',
    },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Profile Dashboard Overview</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Profile Dashboard Overview
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          This is the Honey Bee home for profile-level workflows: profile editing, content
          publishing, community linking, and monetization tools.
        </p>

        <div className="space-y-12">
          <section id="dashboard-home">
            <h2 className="text-2xl font-semibold mb-4">Dashboard home</h2>
            <p className="text-muted-foreground">
              Your dashboard gives you one place to manage your profile, creator content, payments,
              and collaboration tools. Think of it as your Hive3 control room.
            </p>
          </section>

          <section id="action-cards">
            <h2 className="text-2xl font-semibold mb-4">Action cards</h2>
            <p className="text-muted-foreground mb-6">
              These links match the dashboard buttons and open the corresponding docs pages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {actionCards.map(card => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.title}
                    to={card.to}
                    className="rounded-xl border border-border bg-card p-5 hover:border-[#6B01B6] hover:bg-accent/50 transition-colors"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${card.iconStyle}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{card.subtitle}</p>
                    <p className="text-xs text-[#6B01B6] mt-3 font-medium">{card.note}</p>
                  </Link>
                );
              })}
            </div>
          </section>

          <section id="creator-workspace">
            <h2 className="text-2xl font-semibold mb-4">Creator workspace</h2>
            <p className="text-muted-foreground mb-6">
              The dashboard also includes your creator sections for publishing and management.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#6B01B6]" />
                  Events
                </h3>
                <p className="text-sm text-muted-foreground">
                  Create events, edit details, and manage enrollments.
                </p>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#6B01B6]" />
                  Courses
                </h3>
                <p className="text-sm text-muted-foreground">
                  Build courses, update lessons, and check course analytics.
                </p>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#6B01B6]" />
                  Content
                </h3>
                <p className="text-sm text-muted-foreground">
                  Publish profile content and manage your existing posts.
                </p>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#6B01B6]" />
                  Jobs
                </h3>
                <p className="text-sm text-muted-foreground">Post jobs and review applications.</p>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#6B01B6]" />
                  Quests
                </h3>
                <p className="text-sm text-muted-foreground">
                  Available in community workflows for Swarm+ use cases.
                </p>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#6B01B6]" />
                  Tasks
                </h3>
                <p className="text-sm text-muted-foreground">
                  Available in community workflows for Swarm+ use cases.
                </p>
              </div>
            </div>
          </section>

          <section id="membership-access">
            <h2 className="text-2xl font-semibold mb-4">Membership access</h2>
            <Callout type="info" title="How access works">
              Most dashboard navigation is available to signed-in users, but creator and
              monetization features use membership gating. Honey Bee+ unlocks creator tools such as
              privacy controls, PayPal connection, and AI assistant setup.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/membership-tiers"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Membership Tiers
          </Link>
          <Link
            to="/profile-and-account-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Profile Settings
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
