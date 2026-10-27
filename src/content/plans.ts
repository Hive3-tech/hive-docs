export type Tier = "worker" | "honey" | "swarm" | "royal";
export type PlanCell = boolean | string; // true = included, false = not included, string = short text ("Pay as you go")
export type PlanRow = {
  feature: string;
  description?: string;
  href?: string;
  values: Record<Tier, PlanCell>;
  comingSoon?: boolean;
};
export type PlanGroup = { id: string; title: string; rows: PlanRow[] };

export const tiers: { id: Tier; name: string; price: string; tagline: string }[] = [
  { id: "worker", name: "Worker Bee", price: "Free", tagline: "Join, learn and publish at no cost." },
  { id: "honey", name: "Honey Bee", price: "$75/month", tagline: "Run a private or paid community." },
  { id: "swarm", name: "Swarm", price: "$250/month", tagline: "Monthly allowances for quests and 3D worlds." },
  { id: "royal", name: "Royal Hive", price: "$550/month", tagline: "Your own dedicated 3D world." },
];

const all = { worker: true, honey: true, swarm: true, royal: true } satisfies Record<Tier, PlanCell>;
const paid = { worker: false, honey: true, swarm: true, royal: true } satisfies Record<Tier, PlanCell>;

export const planGroups: PlanGroup[] = [
  {
    id: "explore",
    title: "Explore and join",
    rows: [
      { feature: "Join communities", href: "/explore/discover-and-join", values: all },
      { feature: "Attend events", href: "/explore/attend-events", values: all },
      { feature: "Take courses", href: "/explore/take-courses", values: all },
      { feature: "Read and watch content", href: "/explore/read-content", values: all },
    ],
  },
  {
    id: "create",
    title: "Create and publish",
    rows: [
      { feature: "Create events", href: "/create/create-an-event", values: all },
      { feature: "Create courses", href: "/create/create-a-course", values: all },
      { feature: "Publish content", href: "/create/publish-content", values: all },
      { feature: "Post jobs", href: "/create/post-a-job", values: all },
      { feature: "Create quests", href: "/create/create-a-quest", description: "Each quest uses one quest credit.", values: all },
      { feature: "Create add-ons", href: "/create/create-an-add-on", values: all },
      { feature: "Live streaming", href: "/create/go-live", values: all },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and monetization",
    rows: [
      { feature: "Members-only and private content", href: "/create/publish-content", values: paid },
      { feature: "Private account", href: "/community/members-and-applications", description: "Require people to apply before they join.", values: paid },
      { feature: "Payment integrations", href: "/community/get-paid", description: "Connect Stripe or PayPal to get paid.", values: paid },
      { feature: "Sell subscriptions and tickets", href: "/community/get-paid", values: paid },
    ],
  },
  {
    id: "community",
    title: "Run your community",
    rows: [
      { feature: "Account chat", href: "/explore/messages", description: "A shared chat for an account's members, found in Messages.", values: paid },
      { feature: "Start direct messages", href: "/explore/messages", description: "Worker Bee accounts can still reply in conversations that already exist.", values: paid },
      { feature: "Admins and moderators", href: "/community/roles-and-permissions", values: paid },
      { feature: "Affiliates", href: "/community/affiliates", values: paid },
      {
        feature: "Email broadcasts",
        href: "/community/broadcasts",
        description: "How often you can send a broadcast to opted-in members.",
        values: { worker: false, honey: "Every 30 days", swarm: "Every 14 days", royal: "Every 7 days" },
      },
      { feature: "AI assistant", href: "/community/ai-assistant", values: paid },
      { feature: "Credentials", href: "/community/issue-credentials", description: "Create and award custom credentials.", values: paid },
      { feature: "API keys", href: "/developers/api-authentication", values: paid },
      { feature: "Listed on the Communities page", href: "/explore/discover-and-join", values: paid },
    ],
  },
  {
    id: "monthly",
    title: "Included every month",
    rows: [
      {
        feature: "Metaverse time",
        href: "/create/host-in-a-world",
        description: "Time for events in 3D worlds. Included time does not roll over.",
        values: {
          worker: false,
          honey: "Pay as you go",
          swarm: "1 hour a month included, then pay as you go",
          royal: "Unlimited in your own world",
        },
      },
      {
        feature: "Quest credits",
        href: "/create/create-a-quest",
        description: "Included credits expire at the end of each month.",
        values: {
          worker: "Pay as you go",
          honey: "Pay as you go",
          swarm: "One 7-day and one 30-day credit a month",
          royal: "Two 7-day and two 30-day credits a month",
        },
      },
    ],
  },
  {
    id: "worlds",
    title: "3D worlds",
    rows: [
      {
        feature: "Book shared 3D worlds",
        href: "/create/host-in-a-world",
        description: "Host events in a shared world with up to 500 people.",
        values: { worker: false, honey: true, swarm: true, royal: false },
      },
      {
        feature: "Your own dedicated world",
        href: "/create/host-in-a-world",
        description: "A world reserved for your account, with up to 100 people.",
        values: { worker: false, honey: false, swarm: false, royal: true },
      },
    ],
  },
  {
    id: "support",
    title: "Support and analytics",
    rows: [
      { feature: "Community analytics", values: { worker: false, honey: false, swarm: true, royal: true }, comingSoon: true },
      { feature: "Advanced analytics", values: { worker: false, honey: false, swarm: false, royal: true }, comingSoon: true },
      { feature: "Priority support", values: { worker: false, honey: false, swarm: false, royal: true }, comingSoon: true },
      { feature: "White label options", values: { worker: false, honey: false, swarm: false, royal: true }, comingSoon: true },
    ],
  },
];
