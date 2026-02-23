import { Link } from "react-router";
import {
  Rocket,
  Users,
  Calendar,
  GraduationCap,
  Briefcase,
  ClipboardCheck,
  Award,
} from "lucide-react";
import { RightSidebar } from "../components/right-sidebar";

export function OverviewPage() {
  const tocItems = [
    { id: "what-is-hive3", label: "What is Hive3" },
    { id: "quick-start", label: "Quick Start Steps" },
    { id: "key-features", label: "Key Features" },
    { id: "membership-tiers", label: "Membership Tiers" },
    { id: "explore-the-docs", label: "Explore the Docs" },
  ];

  const features = [
    {
      icon: Users,
      label: "Communities",
      description:
        "Create branded spaces for conversations, membership rules, and content sharing.",
      href: "/communities-overview",
    },
    {
      icon: Calendar,
      label: "Events & Metaverse",
      description:
        "Plan event calendars, immersive sessions, and track attendance from one hub.",
      href: "/events-guide",
    },
    {
      icon: GraduationCap,
      label: "Courses",
      description:
        "Publish lessons and learning tracks for community education and onboarding.",
      href: "/courses-guide",
    },
    {
      icon: Briefcase,
      label: "Jobs",
      description: "Post opportunities and manage roles with status and membership context.",
      href: "/jobs-guide",
    },
    {
      icon: ClipboardCheck,
      label: "Quests",
      description: "Run tasks and milestones that reward participation and growth.",
      href: "/quests-guide",
    },
    {
      icon: Award,
      label: "Content & Credentials",
      description: "Publish creator posts and issue verifiable credentials and NFT proofs.",
      href: "/credentials-and-nfts",
    },
  ];

  const sections = [
    {
      name: "Worker Bee (Free)",
      detail: "Access base discovery and profile setup with limited community actions.",
    },
    {
      name: "Honey Bee",
      detail:
        "Add profile tools for publishing events, courses, jobs, and collaborating.",
    },
    {
      name: "Swarm",
      detail:
        "Unlock advanced community permissions, API tooling, and monetized offerings.",
    },
    {
      name: "Royal Hive",
      detail:
        "Scale to highest governance and enterprise-level controls and integrations.",
    },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Getting Started</div>

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Getting Started with Hive3
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          Start here for a full platform overview and your first setup steps in Hive3.
        </p>

        <section id="what-is-hive3" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">What is Hive3?</h2>
          <p className="text-muted-foreground max-w-4xl">
            Hive3 combines social community management, creator tooling, events, quests,
            and wallet-aware identity features into one operational flow for members,
            creators, and organizations.
          </p>
        </section>

        <section id="quick-start" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Quick Start Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">Step 1: Create your account</p>
              <p className="text-sm text-muted-foreground mt-1">
                Sign up and finish your basic profile setup.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">Step 2: Set up your wallet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Link an external wallet or continue with your built-in Circle wallet.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">Step 3: Explore your dashboards</p>
              <p className="text-sm text-muted-foreground mt-1">
                Open your profile and community dashboards to learn available actions.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">Step 4: Choose your subscription tier</p>
              <p className="text-sm text-muted-foreground mt-1">
                Review tier capabilities before enabling advanced creator or community workflows.
              </p>
            </div>
          </div>
        </section>

        <section id="key-features" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.label}
                to={feature.href}
                className="group rounded-xl border border-border bg-card p-6 hover:border-[#6B01B6] hover:shadow-md transition-all"
              >
                <feature.icon className="w-10 h-10 text-[#6B01B6] mb-3" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#6B01B6] transition-colors">
                  {feature.label}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="membership-tiers" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Membership Tiers</h2>
          <div className="space-y-4">
            {sections.map((tier) => (
              <div
                key={tier.name}
                className="rounded-lg border border-border bg-card p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <p className="font-semibold">{tier.name}</p>
                <p className="text-sm text-muted-foreground">{tier.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="explore-the-docs" className="space-y-4">
          <h2 className="text-3xl font-semibold mb-6">Explore the docs by section</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/honey-bee-profile-dashboard-overview"
              className="p-4 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
            >
              <p className="font-semibold">Profile (Honey Bee)</p>
              <p className="text-sm text-muted-foreground mt-1">
                Learn creator workflows, publishing, and profile settings.
              </p>
            </Link>
            <Link
              to="/communities-overview"
              className="p-4 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
            >
              <p className="font-semibold">Communities</p>
              <p className="text-sm text-muted-foreground mt-1">
                Manage community lifecycle, members, and moderation.
              </p>
            </Link>
            <Link
              to="/circle-wallet"
              className="p-4 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
            >
              <p className="font-semibold">Wallet & Credentials</p>
              <p className="text-sm text-muted-foreground mt-1">
                Configure Circle wallets and external wallet linking.
              </p>
            </Link>
            <Link
              to="/api-reference"
              className="p-4 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
            >
              <p className="font-semibold">Developer Reference</p>
              <p className="text-sm text-muted-foreground mt-1">
                Onboarding API flow and authentication details.
              </p>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <Link
              to="/honey-bee-profile-dashboard-overview"
              className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Rocket className="w-5 h-5" />
              Start with your profile dashboard
            </Link>
          </div>
        </section>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
