// Navigation order for the whole docs site. Pure data: it is imported by the app,
// the Vite plugin, and the Node build scripts, so it must not import anything.
// A page appears in the site only when it is listed here AND its .mdx file exists.

export type Accent =
  | "events"
  | "courses"
  | "content"
  | "jobs"
  | "quests"
  | "addons"
  | "credentials"
  | "community"
  | "developer"
  | "default";

export type NavPage = {
  slug: string;
  title: string;
  /** Optional sidebar group heading. Consecutive pages with the same group are shown as one collapsible group. */
  group?: string;
};

export type NavSection = {
  /** URL prefix without slashes, e.g. "start" -> /start/<slug>. */
  id: string;
  label: string;
  /** Lucide icon name (kebab-case) shown in the sidebar. */
  icon: string;
  /** Default hero accent for pages of this section. */
  accent: Accent;
  /** Short summary shown on the landing pages. */
  summary: string;
  pages: NavPage[];
};

export const homePage: NavPage = { slug: "index", title: "Hive3 Documentation" };

export const navSections: NavSection[] = [
  {
    id: "start",
    label: "Get started",
    icon: "rocket",
    accent: "default",
    summary: "Learn what Hive3 is, create your account, and find your way around.",
    pages: [
      { slug: "what-is-hive3", title: "What is Hive3" },
      { slug: "create-your-account", title: "Create your account" },
      { slug: "find-your-way-around", title: "Find your way around" },
      { slug: "plans", title: "Plans and pricing" },
      { slug: "glossary", title: "Glossary" },
    ],
  },
  {
    id: "explore",
    label: "Explore and join",
    icon: "compass",
    accent: "quests",
    summary: "Join communities, attend events, take courses, and complete quests.",
    pages: [
      { slug: "discover-and-join", title: "Discover and join communities" },
      { slug: "the-buzz", title: "Posts and the Buzz" },
      { slug: "attend-events", title: "Attend events" },
      { slug: "take-courses", title: "Take courses" },
      { slug: "complete-quests", title: "Complete quests" },
      { slug: "find-jobs", title: "Find and apply for jobs" },
      { slug: "read-content", title: "Read and watch content" },
      { slug: "watch-live", title: "Watch live streams" },
      { slug: "messages", title: "Messages" },
      { slug: "notifications", title: "Notifications" },
      { slug: "tickets-and-subscriptions", title: "Tickets and subscriptions" },
    ],
  },
  {
    id: "create",
    label: "Create and publish",
    icon: "pen-line",
    accent: "events",
    summary: "Build your page and publish events, courses, quests, jobs, and content.",
    pages: [
      { slug: "your-dashboard", title: "Your dashboard" },
      { slug: "build-your-page", title: "Build your account page" },
      { slug: "create-an-event", title: "Create an event" },
      { slug: "create-a-course", title: "Create a course" },
      { slug: "create-a-quest", title: "Create a quest" },
      { slug: "post-a-job", title: "Post a job" },
      { slug: "publish-content", title: "Publish content" },
      { slug: "create-an-add-on", title: "Create an add-on" },
      { slug: "go-live", title: "Go live" },
      { slug: "host-in-a-world", title: "Host in a 3D world" },
    ],
  },
  {
    id: "community",
    label: "Run your community",
    icon: "users",
    accent: "community",
    summary: "Manage members, roles, payments, broadcasts, and integrations.",
    pages: [
      { slug: "members-and-applications", title: "Members and applications" },
      { slug: "roles-and-permissions", title: "Roles and permissions" },
      { slug: "get-paid", title: "Get paid: subscriptions and tickets" },
      { slug: "broadcasts", title: "Email broadcasts" },
      { slug: "ai-assistant", title: "AI assistant" },
      { slug: "chat-integrations", title: "Discord and Telegram" },
      { slug: "affiliates", title: "Affiliates" },
      { slug: "issue-credentials", title: "Create and award credentials" },
    ],
  },
  {
    id: "account",
    label: "Your account",
    icon: "user-round",
    accent: "credentials",
    summary: "Settings, security, wallets, credentials, privacy, and help.",
    pages: [
      { slug: "settings", title: "Settings overview" },
      { slug: "security", title: "Sign-in and security" },
      { slug: "proof-of-human", title: "Liveness and proof of human" },
      { slug: "wallets", title: "Wallets" },
      { slug: "credentials", title: "Your credentials" },
      { slug: "referrals", title: "Referrals" },
      { slug: "privacy-and-data", title: "Privacy, export and deletion" },
      { slug: "help", title: "Help and feedback" },
    ],
  },
  {
    id: "developers",
    label: "Developers",
    icon: "terminal",
    accent: "developer",
    summary: "Build on Hive3 with the public API and the hive command-line tool.",
    pages: [
      { slug: "index", title: "Developer overview" },
      { slug: "api-authentication", title: "Authentication and API keys", group: "API basics" },
      { slug: "api-conventions", title: "Requests, errors and limits", group: "API basics" },
      { slug: "api-account", title: "Account and profile", group: "Account and uploads" },
      { slug: "api-account-settings", title: "Account settings", group: "Account and uploads" },
      { slug: "api-wallets", title: "Wallets", group: "Account and uploads" },
      { slug: "api-account-data", title: "Export and deletion", group: "Account and uploads" },
      { slug: "api-uploads", title: "Uploads", group: "Account and uploads" },
      { slug: "api-posts", title: "Posts and comments", group: "Content and workflows" },
      { slug: "api-resources", title: "Events, courses, content, quests, jobs", group: "Content and workflows" },
      { slug: "api-resources-events", title: "Events", group: "Content and workflows" },
      { slug: "api-resources-content", title: "Courses and content", group: "Content and workflows" },
      { slug: "api-resources-quests", title: "Quests", group: "Content and workflows" },
      { slug: "api-workflows", title: "Participation workflows", group: "Content and workflows" },
      { slug: "api-workflows-courses-jobs", title: "Course and job workflows", group: "Content and workflows" },
      { slug: "api-workflows-quests", title: "Quest workflows", group: "Content and workflows" },
      { slug: "api-communities", title: "Communities and members", group: "Communities and more" },
      { slug: "api-notifications", title: "Notifications", group: "Communities and more" },
      { slug: "api-search", title: "Search", group: "Communities and more" },
      { slug: "api-broadcasts", title: "Broadcasts", group: "Communities and more" },
      { slug: "api-tickets", title: "Tickets", group: "Communities and more" },
      { slug: "api-ai-assistant", title: "AI assistant", group: "Communities and more" },
      { slug: "api-credentials", title: "Credentials", group: "Communities and more" },
      { slug: "cli-quickstart", title: "CLI quickstart", group: "Command line" },
      { slug: "cli-authentication", title: "CLI sign-in and configuration", group: "Command line" },
      { slug: "cli-commands", title: "CLI command reference", group: "Command line" },
      { slug: "cli-commands-resources", title: "CLI commands: resources and workflows", group: "Command line" },
      { slug: "cli-commands-areas", title: "CLI commands: search, broadcasts, tickets, assistant, credentials", group: "Command line" },
      { slug: "cli-agents", title: "Use Hive3 with AI agents", group: "Command line" },
      { slug: "changelog", title: "API and CLI changelog" },
    ],
  },
];

/** URL for a page. `index` pages live at their section root. */
export function pagePath(sectionId: string | null, slug: string): string {
  if (sectionId === null) return "/";
  return slug === "index" ? `/${sectionId}` : `/${sectionId}/${slug}`;
}
