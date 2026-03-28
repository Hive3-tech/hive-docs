import { RightSidebar } from "../components/right-sidebar";
import { Step, Callout } from "../components/doc-components";
import { ChevronLeft, ChevronRight, CircleCheckBig, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function GetStartedPage() {
  const tocItems = [
    { id: "start-account", label: "Step 1: Create an account" },
    { id: "connect-wallet", label: "Step 2: Connect your wallet" },
    { id: "explore", label: "Step 3: Explore the platform" },
    { id: "upgrade", label: "Step 4: Upgrade membership" },
    { id: "next-actions", label: "Next Actions" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Introduction / <span className="text-foreground">Get Started</span>
        </div>

        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Get Started with Hive3
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Complete these four steps to create your account, connect identity tooling,
          and begin using core Hive3 workflows.
        </p>

        <div className="space-y-12">
          <section id="start-account">
            <h2 className="text-2xl font-semibold mb-4">Step 1: Sign up with Google OAuth</h2>
            <Step number={1} title="Create a Hive3 account">
              Visit the Hive3 app and sign up using Google OAuth so your account is
              synced with secure identity credentials.
            </Step>
            <p className="text-muted-foreground mt-4">
              If you already have a user profile, confirm your email, complete onboarding,
              and set your default display name.
            </p>
          </section>

          <section id="connect-wallet">
            <h2 className="text-2xl font-semibold mb-4">Step 2: Connect or use Circle wallet</h2>
            <Step number={2} title="Enable your wallet path">
              In wallet settings, connect an existing Web3 wallet or continue with the
              built-in Circle wallet flow for your default profile wallet.
            </Step>
            <Callout type="info" title="Wallet choice matters">
              Choose Circle wallet when you want to test quickly and move faster with
              a managed onboarding path.
            </Callout>
            <div className="mt-4 rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">
                You can switch wallet type later from the profile settings area.
              </p>
            </div>
          </section>

          <section id="explore">
            <h2 className="text-2xl font-semibold mb-4">Step 3: Explore the platform</h2>
            <Step number={3} title="Discover community workflows">
              Spend a short run-through creating a new community, publishing a post,
              and checking events and courses in your dashboard.
            </Step>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <Link
                to="/communities-overview"
                className="p-4 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
              >
                <p className="font-semibold">Communities</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Review how communities are structured and configured.
                </p>
              </Link>
              <Link
                to="/courses-guide"
                className="p-4 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
              >
                <p className="font-semibold">Courses</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn the recommended flow for educational content.
                </p>
              </Link>
              <Link
                to="/events-guide"
                className="p-4 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
              >
                <p className="font-semibold">Events</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Check event setup and metaverse-linked session settings.
                </p>
              </Link>
            </div>
          </section>

          <section id="upgrade">
            <h2 className="text-2xl font-semibold mb-4">Step 4: Upgrade membership tier</h2>
            <Step number={4} title="Unlock more capabilities">
              Move from Worker Bee to Honey Bee, Swarm, or Royal Hive to access advanced
              permissions, collaboration, and developer-level tools.
            </Step>
            <Callout type="success" title="Typical upgrade path">
              Most teams move from Worker Bee to Honey Bee first, then to Swarm when they
              need team, moderation, and API workflows.
            </Callout>

            <div className="mt-4 grid md:grid-cols-4 gap-3">
              <Link
                to="/membership-tiers"
                className="p-3 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
              >
                <p className="font-medium">Worker Bee</p>
                <p className="text-xs text-muted-foreground">Start here, no-cost
                </p>
              </Link>
              <Link
                to="/membership-tiers"
                className="p-3 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
              >
                <p className="font-medium">Honey Bee</p>
                <p className="text-xs text-muted-foreground">Profile tools</p>
              </Link>
              <Link
                to="/membership-tiers"
                className="p-3 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
              >
                <p className="font-medium">Swarm</p>
                <p className="text-xs text-muted-foreground">Community operations</p>
              </Link>
              <Link
                to="/membership-tiers"
                className="p-3 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
              >
                <p className="font-medium">Royal Hive</p>
                <p className="text-xs text-muted-foreground">Maximum control</p>
              </Link>
            </div>
          </section>

          <section id="next-actions">
            <h2 className="text-2xl font-semibold mb-4">Next actions</h2>
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <CircleCheckBig className="w-5 h-5 mt-1 text-[#6B01B6]" />
                <div>
                  <p className="font-semibold">You are onboarding-ready</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Next, pick a core page and complete the section setup for your use
                    case: communities, profile, or platform features.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-[#6B01B6] text-[#6B01B6]">
              <Sparkles className="w-4 h-4" />
              Tip: complete one community setup end-to-end before opening advanced docs.
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Overview
          </Link>
          <Link
            to="/membership-tiers"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Membership Tiers
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
