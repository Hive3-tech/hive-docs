export type DocNavigationPage = {
  path: string;
  title: string;
  description: string;
};

export type DocNavigationSection = {
  section: string;
  pages: DocNavigationPage[];
};

export const docNavigation: DocNavigationSection[] = [
  {
    section: "Getting Started",
    pages: [
      {
        title: "Welcome to Hive3",
        path: "/",
        description:
          "What Hive3 is, how to create an account, and a tour of the platform's main areas.",
      },
      {
        title: "Membership Plans",
        path: "/membership-plans",
        description:
          "Compare Worker Bee, Honey Bee, Swarm, and Royal Hive plans and what each unlocks.",
      },
    ],
  },
  {
    section: "Your Profile",
    pages: [
      {
        title: "Profile Dashboard",
        path: "/profile-dashboard",
        description:
          "Your control room for profile editing, builders, payments, AI, communities, and collaborators.",
      },
      {
        title: "Editing Your Profile",
        path: "/editing-your-profile",
        description:
          "Update your identity, images, bio attachment, badges, and social links.",
      },
      {
        title: "Profile Builder",
        path: "/profile-builder",
        description:
          "Compose your public overview, welcome page, and widgets from configurable blocks.",
      },
      {
        title: "Account Settings",
        path: "/account-settings",
        description:
          "Manage theme, notifications, linked logins, subscriptions, data export, and deletion.",
      },
      {
        title: "Connecting PayPal",
        path: "/connect-paypal",
        description:
          "Link a PayPal Business account to sell personal subscriptions and tickets.",
      },
      {
        title: "Personal AI Assistant",
        path: "/personal-ai-assistant",
        description:
          "Launch a personal AI assistant with custom identity, visibility, and training documents.",
      },
      {
        title: "Your Communities",
        path: "/your-communities",
        description:
          "See the communities where you are an owner, admin, or moderator and open them quickly.",
      },
      {
        title: "Collaborators",
        path: "/collaborators",
        description:
          "Review your collaborator list and approve or deny pending collaboration requests.",
      },
    ],
  },
  {
    section: "Communities",
    pages: [
      {
        title: "Community Dashboard Overview",
        path: "/communities-overview",
        description:
          "A map of every community management area, from members to monetization.",
      },
      {
        title: "Creating a Community",
        path: "/creating-a-community",
        description:
          "Set up your community's identity and request a metaverse world (Swarm and above).",
      },
      {
        title: "Community Profile & Welcome Page",
        path: "/community-profile-builder",
        description:
          "Build your community's public profile and invitation welcome page from blocks.",
      },
      {
        title: "Community Settings",
        path: "/community-settings",
        description:
          "Control identity, branding, visibility, and how people gain access to your community.",
      },
      {
        title: "Members & Applications",
        path: "/members-and-applications",
        description:
          "Manage your member list, review applications, assign roles, and remove members.",
      },
      {
        title: "Permissions",
        path: "/permissions",
        description:
          "Understand what owners, admins, and moderators can do and how to assign roles.",
      },
      {
        title: "Chat & Integrations",
        path: "/chat-and-integrations",
        description:
          "Run community chat and sync conversations with Discord and Telegram.",
      },
      {
        title: "Community PayPal & Monetization",
        path: "/community-paypal",
        description:
          "Connect community PayPal to sell subscriptions, tickets, quest credits, and metaverse time.",
      },
      {
        title: "Community AI Assistant",
        path: "/community-ai-assistant",
        description:
          "Give your community its own AI assistant with custom identity and training documents.",
      },
    ],
  },
  {
    section: "Using Hive3",
    pages: [
      {
        title: "Posts & the Feed",
        path: "/posts-and-feed",
        description:
          "Post to your feed, discover people and communities, and interact with likes and comments.",
      },
      {
        title: "Events",
        path: "/events-guide",
        description:
          "Browse, join, and create events with the week-grid scheduler and access controls.",
      },
      {
        title: "Courses",
        path: "/courses-guide",
        description:
          "Take courses lesson by lesson or build your own with office hours and rewards.",
      },
      {
        title: "Content",
        path: "/content-guide",
        description:
          "Publish long-form content with access gating, separate from feed posts.",
      },
      {
        title: "Quests",
        path: "/quests-guide",
        description:
          "Run objective-based quests with evidence review, credential rewards, and quest credits.",
      },
      {
        title: "Jobs",
        path: "/jobs-guide",
        description:
          "Browse and apply to jobs, or post openings and review applications.",
      },
      {
        title: "Honey Marketplace",
        path: "/honey-marketplace",
        description:
          "Discover coordinations and add-ons your profile or community can activate.",
      },
      {
        title: "Tickets & Purchases",
        path: "/tickets-and-purchases",
        description:
          "Buy tickets through PayPal, find your purchases, and request refunds.",
      },
      {
        title: "Messaging & Chats",
        path: "/messaging",
        description:
          "Use direct messages and community conversations, with tier-based DM rules.",
      },
      {
        title: "Notifications",
        path: "/notifications",
        description:
          "Stay on top of activity with categories, mutes, and the Rewards and Tickets panels.",
      },
    ],
  },
  {
    section: "Wallets & Credentials",
    pages: [
      {
        title: "Credentials",
        path: "/credentials",
        description:
          "Earn, claim, and create on-chain credentials for attendance, completion, and quests.",
      },
      {
        title: "Circle Wallet",
        path: "/circle-wallet",
        description:
          "Use the built-in Circle wallet for credential deployment on supported networks.",
      },
      {
        title: "Linking External Wallets",
        path: "/linking-external-wallets",
        description:
          "Connect EVM wallets, pick a default, and control public NFT visibility.",
      },
    ],
  },
  {
    section: "Hive CLI",
    pages: [
      {
        title: "CLI Quickstart",
        path: "/cli/quickstart",
        description:
          "Install @hive3/cli, log in from your browser, and set it up by hand or with an AI agent.",
      },
      {
        title: "Authentication & Configuration",
        path: "/cli/authentication",
        description:
          "How browser approval, login options, scopes, and logout work.",
      },
      {
        title: "Command Reference",
        path: "/cli/commands",
        description:
          "Every hive command and flag, grouped by area, with destructive actions marked.",
      },
    ],
  },
  {
    section: "API Reference",
    pages: [
      {
        title: "API Overview",
        path: "/api/overview",
        description:
          "Base URL, authentication, scopes, pagination, idempotency, errors, and rate limits.",
      },
      {
        title: "API Keys",
        path: "/api/keys",
        description:
          "Create, rotate, and revoke person-owned API keys from the dashboard or CLI.",
      },
      {
        title: "Profile & Account API",
        path: "/api/profile-and-account",
        description:
          "Endpoints for your profile, builders, uploads, account, wallets, and NFT exposure.",
      },
      {
        title: "Posts & Comments API",
        path: "/api/posts-and-comments",
        description:
          "Create, read, update, delete, and like posts and comments.",
      },
      {
        title: "Resources API",
        path: "/api/resources",
        description:
          "Shared CRUD semantics for events, courses, content, quests, and jobs.",
      },
      {
        title: "Workflows API",
        path: "/api/workflows",
        description:
          "Participation flows: RSVPs, enrollments, evidence, applications, and attendance.",
      },
      {
        title: "Communities API",
        path: "/api/communities",
        description:
          "Membership, applications, members, roles, and access — gated by your live roles.",
      },
      {
        title: "Notifications API",
        path: "/api/notifications",
        description:
          "List, read, and delete notifications and manage category mutes.",
      },
    ],
  },
];

export const orderedDocPages = docNavigation.flatMap((section) =>
  section.pages.map((page) => ({
    ...page,
    section: section.section,
  }))
);
