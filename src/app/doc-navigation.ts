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
        title: "Getting Started",
        path: "/",
        description:
          "Start here for the Hive3 overview and the fastest path to your first account and workflow setup.",
      },
    ],
  },
  {
    section: "Your Profile",
    pages: [
      {
        title: "Profile Dashboard Overview",
        path: "/honey-bee-profile-dashboard-overview",
        description: "Review dashboard workflows for profile and content creators on Hive3.",
      },
      {
        title: "Profile Settings",
        path: "/profile-and-account-settings",
        description: "Update profile identity, badges, and privacy for your public profile.",
      },
      {
        title: "Account Settings",
        path: "/account-settings",
        description: "Manage membership plan, theme preferences, and notification settings.",
      },
      {
        title: "Link Paypal account",
        path: "/profile-paypal",
        description: "Connect a PayPal business account and manage Honey Bee subscriptions.",
      },
      {
        title: "Personal AI Assistant",
        path: "/profile-ai",
        description: "Set up your profile AI assistant, visibility, and training documents.",
      },
      {
        title: "Communities",
        path: "/profile-communities",
        description: "See communities where you are owner, admin, or moderator, and open them quickly.",
      },
      {
        title: "Collaborators",
        path: "/profile-collaborators",
        description: "Review collaborators, monitor pending requests, and approve or deny applications.",
      },
    ],
  },
  {
    section: "Communities",
    pages: [
      {
        title: "Community Dashboard Overview",
        path: "/communities-overview",
        description: "Use a dashboard-level map of community settings, permissions, members, AI, and monetization tools.",
      },
      {
        title: "Creating a Community",
        path: "/creating-a-community",
        description: "Set up a new Swarm community and choose your first profile details.",
      },
      {
        title: "Community Settings",
        path: "/community-settings",
        description: "Control visibility, branding, and core policy settings in one place.",
      },
      {
        title: "Permissions",
        path: "/admins-and-moderators",
        description: "Assign and manage owner-admin-moderator permission workflows.",
      },
      {
        title: "Chat Settings",
        path: "/chat-settings",
        description: "Tune chat moderation, moderation rules, and member controls.",
      },
      {
        title: "PayPal Integration",
        path: "/paypal-and-subscriptions",
        description: "Connect PayPal and run community subscription plans and payment flows.",
      },
      {
        title: "Community AI Assistant",
        path: "/ai-settings",
        description: "Configure community AI with the same setup pattern used in profile AI guides.",
      },
      {
        title: "Members",
        path: "/managing-members",
        description: "Review members, filter roles, and process pending community applications.",
      },
    ],
  },
  {
    section: "Hive3 Features",
    pages: [
      {
        title: "Subscriptions",
        path: "/membership-tiers",
        description:
          "Compare Worker Bee, Honey Bee, Swarm, and Royal Hive capabilities and access gates.",
      },
      {
        title: "Events Guide",
        path: "/events-guide",
        description: "Create, host, and monitor platform events from a single place.",
      },
      {
        title: "Courses Guide",
        path: "/courses-guide",
        description: "Build course structures and learning paths for members.",
      },
      {
        title: "Content Guide",
        path: "/content-guide",
        description: "Author, schedule, and curate content assets for platform distribution.",
      },
      {
        title: "Quests Guide",
        path: "/quests-guide",
        description: "Design and launch community quest flows and completion milestones.",
      },
      {
        title: "Jobs Guide",
        path: "/jobs-guide",
        description: "Publish and manage job opportunities with role and status workflows.",
      },
      {
        title: "Task Guide",
        path: "/quests-and-tasks",
        description: "Review task status and upcoming task workflow availability.",
      },
    ],
  },
  {
    section: "Wallet & Credentials",
    pages: [
      {
        title: "Credentials",
        path: "/credentials-and-nfts",
        description: "Understand credential rewards, claiming, wallet requirements, and minting.",
      },
      {
        title: "Circle Wallet",
        path: "/circle-wallet",
        description: "Set up and use the built-in Circle wallet experience.",
      },
      {
        title: "Linking External Wallets",
        path: "/linking-external-wallets",
        description: "Attach external wallets and manage connection status safely.",
      },
    ],
  },
  {
    section: "Developer Reference",
    pages: [
      {
        title: "API Keys",
        path: "/api-keys-and-integrations",
        description: "Generate an API key and use it as the Bearer token for Hive3 API calls.",
      },
      {
        title: "Onboard",
        path: "/api-reference",
        description: "Set up community onboarding links and server-side flow for API-based integration.",
      },
      {
        title: "Managing Users",
        path: "/api-managing-users",
        description: "List, inspect, and update users scoped to your community's linked relationships.",
      },
    ],
  },
  {
    section: "Resources",
    pages: [
      {
        title: "Video Tutorials",
        path: "/video-tutorials",
        description: "Use guided videos for quick onboarding and feature walkthroughs.",
      },
      {
        title: "Changelog",
        path: "/changelog",
        description: "Track releases and versioned documentation updates.",
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
