import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step } from "../components/doc-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

type TierFeature = {
  feature: string;
  worker: string;
  honey: string;
  swarm: string;
  royal: string;
};

const tierFeatureRows: TierFeature[] = [
  {
    feature: "create.post / follow / join",
    worker: "Read content, create posts",
    honey: "Create posts, content, courses, events, jobs, rewards, tasks",
    swarm: "Everything in Honey Bee + create communities",
    royal: "Everything in Swarm + enterprise tools",
  },
  {
    feature: "social.interaction",
    worker: "Follow users and communities",
    honey: "Follow users and communities",
    swarm: "Follow users and communities",
    royal: "Follow users and communities",
  },
  {
    feature: "join.community",
    worker: "Join communities and interact in chat/quests",
    honey: "Join communities and interact in chat/quests",
    swarm: "Join communities and interact in chat/quests",
    royal: "Join communities and interact in chat/quests",
  },
  {
    feature: "interact.chat",
    worker: "Community chat participation",
    honey: "Community chat participation",
    swarm: "Community chat participation",
    royal: "Community chat participation",
  },
  {
    feature: "initiate.dm",
    worker: "No content ownership tools",
    honey: "Initiate DMs",
    swarm: "Initiate DMs",
    royal: "Initiate DMs",
  },
  {
    feature: "privacy.settings",
    worker: "Limited profile privacy controls",
    honey: "Privacy controls (show/hide collaborator/member counts)",
    swarm: "Privacy controls (show/hide collaborator/member counts)",
    royal: "Privacy controls (show/hide collaborator/member counts)",
  },
  {
    feature: "paypal.connect",
    worker: "PayPal not available",
    honey: "PayPal connection available",
    swarm: "PayPal connection available",
    royal: "PayPal connection available",
  },
  {
    feature: "AI assistant",
    worker: "AI assistant unavailable",
    honey: "AI assistant available",
    swarm: "AI assistant available",
    royal: "AI assistant available",
  },
  {
    feature: "API keys & integrations",
    worker: "No API key features",
    honey: "Limited API operations (content/workflow actions)",
    swarm: "Community API keys + integrations",
    royal: "Community API keys + advanced integrations",
  },
  {
    feature: "Metaverse access",
    worker: "No metaverse controls",
    honey: "No shared world access",
    swarm: "Shared event world access (35-seat baseline, larger by request), hourly rental",
    royal: "Custom branded metaverse world included",
  },
  {
    feature: "events in metaverse",
    worker: "No event/world ownership",
    honey: "No event/world ownership",
    swarm: "Rent shared metaverse world for events",
    royal: "Own custom metaverse environment at scale",
  },
];

export function TiersPage() {
  const tocItems = [
    { id: "worker-bee", label: "Worker Bee (Free)" },
    { id: "honey-bee", label: "Honey Bee" },
    { id: "swarm", label: "Swarm" },
    { id: "royal-hive", label: "Royal Hive" },
    { id: "feature-matrix", label: "Feature Matrix" },
    { id: "upgrade", label: "How to Upgrade" },
  ];

  const workerOnly = [
    "Create posts and interact with community chat/quests",
    "Follow users and communities",
    "Join communities from existing roles and public onboarding",
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Hive3 Features / <span className="text-foreground">Subscriptions</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Subscriptions
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Your subscription tier determines what you can unlock inside Hive3. Every higher tier
          includes everything from lower tiers.
        </p>

        <section id="worker-bee" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Worker Bee (Free)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">Core access</p>
              <p className="text-sm text-muted-foreground mt-2">Free and default tier</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">Primary capabilities</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                {workerOnly.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="honey-bee" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Honey Bee</h2>
          <p className="text-muted-foreground">
            Expands creator and profile workflows.
          </p>

          <div className="space-y-4">
            <Step number={1} title="Content creation">
              You can create content, courses, events, jobs, rewards, tasks.
            </Step>
            <Step number={2} title="Profile controls">
              Privacy controls become available and PayPal can be connected.
            </Step>
            <Step number={3} title="Collaboration and chat">
              You can initiate DMs and use AI-assisted support.
            </Step>
          </div>
        </section>

        <section id="swarm" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Swarm</h2>
          <p className="text-muted-foreground">
            Adds community ownership, quests/tasks administration, integrations, and metaverse capacity.
          </p>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <p className="font-semibold">Metaverse behavior</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Shared metaverse world access for events.</li>
              <li>Metaverse event capacity is capped at 35 attendees by default.</li>
              <li>Hourly metaverse rental available for event hosting.</li>
              <li>Larger gatherings are arranged via support request.</li>
            </ul>
          </div>
        </section>

        <section id="royal-hive" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Royal Hive</h2>
          <p className="text-muted-foreground">
            The top tier unlocks enterprise-grade platform control, including brand-owned
            metaverse customization and enterprise integration depth.
          </p>

          <Callout type="info" title="What this tier includes">
            Use this tier when you need custom world styling and advanced operational
            controls across community and developer surfaces.
          </Callout>
        </section>

        <section id="feature-matrix" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Feature comparison</h2>

          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left">Worker Bee</th>
                  <th className="p-3 text-left">Honey Bee</th>
                  <th className="p-3 text-left">Swarm</th>
                  <th className="p-3 text-left">Royal Hive</th>
                </tr>
              </thead>
              <tbody>
                {tierFeatureRows.map((row, index) => (
                  <tr key={row.feature ?? `feature-${index}`} className="border-t border-border">
                    <td className="p-3 text-muted-foreground">{row.feature}</td>
                    <td className="p-3">{row.worker}</td>
                    <td className="p-3">{row.honey}</td>
                    <td className="p-3">{row.swarm}</td>
                    <td className="p-3">{row.royal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Feature names are mapped to permission keys used in app logic.
          </p>
        </section>

        <section id="upgrade" className="space-y-4 mb-4">
          <h2 className="text-2xl font-semibold">How to upgrade</h2>
          <p className="text-muted-foreground">
            Open <span className="font-semibold">Profile & Account Settings</span> to review your current
            tier and start an upgrade.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/profile-and-account-settings"
              className="p-4 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
            >
              <p className="font-semibold">Profile settings</p>
              <p className="text-sm text-muted-foreground mt-1">
                Manage account settings and change your tier.
              </p>
            </Link>
            <Link
              to="/community-settings"
              className="p-4 border border-border rounded-lg hover:border-[#6B01B6] hover:bg-accent transition-colors"
            >
              <p className="font-semibold">Swarm admin path</p>
              <p className="text-sm text-muted-foreground mt-1">
                Configure community-level permissions once upgraded.
              </p>
            </Link>
          </div>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/managing-members"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Members
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
