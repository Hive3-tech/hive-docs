import { Link } from "react-router";
import { RightSidebar } from "../components/right-sidebar";
import { PagerNav } from "../components/pager-nav";

const destinations = [
  ["Your Profile", "/profile-dashboard", "Build your public identity and manage your account."],
  ["Communities", "/communities-overview", "Join, create, and manage shared spaces."],
  ["Events", "/events-guide", "Find gatherings or publish your own."],
  ["Courses", "/courses-guide", "Learn from structured lessons and creators."],
  ["Content", "/content-guide", "Read and publish long-form resources."],
  ["Quests", "/quests-guide", "Complete objectives and submit evidence."],
  ["Jobs", "/jobs-guide", "Discover opportunities and manage applications."],
  ["Honey Marketplace", "/honey-marketplace", "Browse community add-ons and coordinations."],
  ["Credentials", "/credentials", "Earn, claim, and create on-chain achievements."],
] as const;

export function OverviewPage() {
  const tocItems = [
    { id: "what-is-hive3", label: "What is Hive3?" },
    { id: "create-account", label: "Create your account" },
    { id: "create-profile", label: "Create your profile" },
    { id: "navigation", label: "Find your way around" },
    { id: "explore", label: "Explore Hive3" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Getting Started / <span className="text-foreground">Welcome to Hive3</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Welcome to Hive3</h1>
        <p className="text-lg text-muted-foreground mb-12">Hive3 brings communities, learning, work, commerce, and portable credentials into one social platform.</p>
        <div className="space-y-12">
          <section id="what-is-hive3">
            <h2 className="text-2xl font-semibold mb-4">What is Hive3?</h2>
            <p className="text-muted-foreground">Use Hive3 to participate in communities, attend events, take courses, read content, complete quests, find jobs, browse the Honey Marketplace, and earn credentials. Creators can publish many of those experiences from the same profile.</p>
          </section>
          <section id="create-account">
            <h2 className="text-2xl font-semibold mb-4">Create your account</h2>
            <p className="text-muted-foreground mb-4">Open the sign-in screen and continue with an email magic link, Google, GitHub, X, or Discord. Apple sign-in is shown as coming soon, so it is not currently available.</p>
            <p className="text-sm text-muted-foreground">You can also connect a wallet from the sign-in screen.</p>
          </section>
          <section id="create-profile">
            <h2 className="text-2xl font-semibold mb-4">Create your profile</h2>
            <p className="text-muted-foreground">After signing in, Hive3 shows one <strong>Create your profile</strong> screen. Add an avatar and banner, enter your display name, and confirm an available unique handle. Select <strong>Enter Hive</strong> when you are ready.</p>
          </section>
          <section id="navigation">
            <h2 className="text-2xl font-semibold mb-4">Find your way around</h2>
            <p className="text-muted-foreground mb-4">The main navigation includes Discover, My Hive, Events, Courses, Content, Quests, Jobs, Honey Marketplace, and Profile. My Hive collects activity from the people and communities you follow.</p>
            <p className="text-muted-foreground">On mobile, the bottom navigation puts Home, Discover, My Hive, and Messages within reach. Use Create to start a post and Menu for notifications and the rest of the catalog.</p>
          </section>
          <section id="explore">
            <h2 className="text-2xl font-semibold mb-4">Explore Hive3</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {destinations.map(([title, to, description]) => (
                <Link key={to} to={to} className="rounded-lg border border-border bg-card p-4 hover:border-primary transition-colors">
                  <h3 className="font-semibold">{title}</h3><p className="text-sm text-muted-foreground mt-1">{description}</p>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground">Ready to compare what each account can do? See <Link className="text-primary hover:underline" to="/membership-plans">Membership Plans</Link>.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
