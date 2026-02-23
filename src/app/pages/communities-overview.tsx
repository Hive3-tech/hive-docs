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
  KeyRound,
  MessageCircle,
  Shield,
  Sparkles,
  Target,
  UserCog,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function CommunitiesOverviewPage() {
  const tocItems = [
    { id: 'dashboard-home', label: 'Dashboard home' },
    { id: 'settings-cards', label: 'Settings cards' },
    { id: 'workspace', label: 'Creator workspace' },
    { id: 'access', label: 'Access notes' },
  ];

  const settingsCards = [
    {
      title: 'Community Settings',
      subtitle: 'Edit community',
      to: '/community-settings',
      icon: Shield,
      iconStyle: 'bg-emerald-100 text-emerald-600',
      note: 'Branding, access, and community profile controls',
    },
    {
      title: 'Permissions',
      subtitle: 'Manage permissions',
      to: '/admins-and-moderators',
      icon: UserCog,
      iconStyle: 'bg-blue-100 text-blue-600',
      note: 'Owner, admin, and moderator role controls',
    },
    {
      title: 'Chat Settings',
      subtitle: 'Manage chat',
      to: '/chat-settings',
      icon: MessageCircle,
      iconStyle: 'bg-blue-100 text-blue-600',
      note: 'Channel behavior and moderation settings',
    },
    {
      title: 'PayPal',
      subtitle: 'Payments & Subscriptions',
      to: '/paypal-and-subscriptions',
      icon: CreditCard,
      iconStyle: 'bg-blue-100 text-blue-600',
      note: 'Same core setup flow as Link Paypal account',
    },
    {
      title: 'AI',
      subtitle: 'AI Assistant',
      to: '/ai-settings',
      icon: Sparkles,
      iconStyle: 'bg-purple-100 text-purple-600',
      note: 'Same core setup flow as Community AI Assistant',
    },
    {
      title: 'Members',
      subtitle: 'Manage members',
      to: '/managing-members',
      icon: Users,
      iconStyle: 'bg-amber-100 text-amber-600',
      note: 'Member list, role filters, and pending application review',
    },
    {
      title: 'API Keys',
      subtitle: 'Integrations & onboarding API',
      to: '/api-keys-and-integrations',
      icon: KeyRound,
      iconStyle: 'bg-indigo-100 text-indigo-600',
      note: 'Available for Swarm community operations',
    },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities / <span className="text-foreground">Community Dashboard Overview</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Community Dashboard Overview
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          This is the community command center for settings, permissions, members, monetization, AI,
          and integrations.
        </p>

        <div className="space-y-12">
          <section id="dashboard-home">
            <h2 className="text-2xl font-semibold mb-4">Dashboard home</h2>
            <p className="text-muted-foreground">
              Your community dashboard gives you one place to run settings, member operations,
              monetization, and content workflows.
            </p>
          </section>

          <section id="settings-cards">
            <h2 className="text-2xl font-semibold mb-4">Settings cards</h2>
            <p className="text-muted-foreground mb-6">
              These links mirror the Community Dashboard action cards from the app.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {settingsCards.map(card => {
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

            <Callout type="info" title="Shared setup note">
              Community PayPal and AI setup use the same core workflow patterns as your profile
              guides, with community ownership context.
            </Callout>
          </section>

          <section id="workspace">
            <h2 className="text-2xl font-semibold mb-4">Creator workspace</h2>
            <p className="text-muted-foreground mb-6">
              The same dashboard also contains management panels for published community work.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                to="/events-guide"
                className="rounded-xl border border-border p-4 hover:border-[#6B01B6] hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#6B01B6]" />
                  Events
                </h3>
                <p className="text-sm text-muted-foreground">
                  Create events, edit details, and manage enrollments.
                </p>
              </Link>
              <Link
                to="/courses-guide"
                className="rounded-xl border border-border p-4 hover:border-[#6B01B6] hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#6B01B6]" />
                  Courses
                </h3>
                <p className="text-sm text-muted-foreground">
                  Build courses, update lessons, and review analytics.
                </p>
              </Link>
              <Link
                to="/content-guide"
                className="rounded-xl border border-border p-4 hover:border-[#6B01B6] hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#6B01B6]" />
                  Content
                </h3>
                <p className="text-sm text-muted-foreground">
                  Publish and manage community content.
                </p>
              </Link>
              <Link
                to="/jobs-guide"
                className="rounded-xl border border-border p-4 hover:border-[#6B01B6] hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#6B01B6]" />
                  Jobs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Post jobs and review applications.
                </p>
              </Link>
              <Link
                to="/quests-guide"
                className="rounded-xl border border-border p-4 hover:border-[#6B01B6] hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#6B01B6]" />
                  Quests
                </h3>
                <p className="text-sm text-muted-foreground">
                  Launch and manage quests using community quest credits.
                </p>
              </Link>
              <Link
                to="/quests-and-tasks"
                className="rounded-xl border border-border p-4 hover:border-[#6B01B6] hover:bg-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#6B01B6]" />
                  Tasks
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tasks are available in community dashboard workflows.
                </p>
              </Link>
            </div>
          </section>

          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Access notes</h2>
            <Callout type="info" title="Tier and visibility">
              Community management is designed for Swarm community operators. API keys and advanced
              integration controls are exposed for eligible community contexts.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/honey-bee-profile-dashboard-overview"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Profile Dashboard
          </Link>
          <Link
            to="/creating-a-community"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Creating a Community
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
