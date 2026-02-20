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
    section: "Introduction",
    pages: [
      {
        title: "Overview",
        path: "/",
        description:
          "Start here for the big-picture view of Hive3 documentation, the platform layout, and where to begin.",
      },
      {
        title: "Get Started",
        path: "/get-started",
        description:
          "Learn the fastest path to setup your first Hive3 workspace and account flow.",
      },
    ],
  },
  {
    section: "Membership Tiers",
    pages: [
      {
        title: "Tiers Overview",
        path: "/membership-tiers",
        description:
          "Compare Worker Bee, Honey Bee, Swarm, and Royal Hive capabilities and access gates.",
      },
    ],
  },
  {
    section: "Honey Bee (Profile)",
    pages: [
      {
        title: "Profile Dashboard Overview",
        path: "/honey-bee-profile-dashboard-overview",
        description: "Review dashboard workflows for profile and content creators on Hive3.",
      },
      {
        title: "Profile & Account Settings",
        path: "/profile-and-account-settings",
        description: "Manage profile metadata, credentials, and account-level preferences.",
      },
      {
        title: "Creating Events",
        path: "/creating-events",
        description: "Plan and publish events for your community with the profile flow.",
      },
      {
        title: "Creating Courses",
        path: "/creating-courses",
        description: "Build and organize education experiences for members.",
      },
      {
        title: "Creating Content",
        path: "/creating-content",
        description: "Produce and publish Hive3-native content in structured collections.",
      },
      {
        title: "Creating Jobs",
        path: "/creating-jobs",
        description: "Post and manage hiring opportunities for your community.",
      },
      {
        title: "PayPal Integration",
        path: "/paypal-integration",
        description: "Configure payment options and payout flows for creator-level monetization.",
      },
      {
        title: "AI Assistant Setup",
        path: "/ai-assistant-setup",
        description: "Set up the AI assistant for profile-level workflows and drafting.",
      },
      {
        title: "Managing Collaborators",
        path: "/managing-collaborators",
        description: "Invite teammates and configure role-based access for profile tasks.",
      },
    ],
  },
  {
    section: "Communities (Swarm)",
    pages: [
      {
        title: "Communities Overview",
        path: "/communities-overview",
        description: "Understand community lifecycle and the tools available to community owners.",
      },
      {
        title: "Creating a Community",
        path: "/creating-a-community",
        description: "Set up a new Swarm community and choose the first configuration options.",
      },
      {
        title: "Community Settings",
        path: "/community-settings",
        description: "Control visibility, branding, and core policy settings in one place.",
      },
      {
        title: "Admins & Moderators",
        path: "/admins-and-moderators",
        description: "Assign and manage moderation roles across your community.",
      },
      {
        title: "Chat Settings",
        path: "/chat-settings",
        description: "Tune chat moderation, moderation rules, and member controls.",
      },
      {
        title: "AI Settings",
        path: "/ai-settings",
        description:
          "Enable AI tools for moderation, suggestions, and guided community interactions.",
      },
      {
        title: "PayPal & Subscriptions",
        path: "/paypal-and-subscriptions",
        description: "Use PayPal-based subscriptions and recurring community access plans.",
      },
      {
        title: "Managing Members",
        path: "/managing-members",
        description: "Invite, remove, and segment members in your community.",
      },
      {
        title: "Quests & Tasks",
        path: "/quests-and-tasks",
        description: "Design quest systems and reward flows for member engagement.",
      },
      {
        title: "API Keys & Integrations",
        path: "/api-keys-and-integrations",
        description: "Issue integration keys and connect external tools to your community.",
      },
    ],
  },
  {
    section: "Platform Features",
    pages: [
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
        title: "Jobs Guide",
        path: "/jobs-guide",
        description: "Publish and manage job opportunities with role and status workflows.",
      },
      {
        title: "Quests Guide",
        path: "/quests-guide",
        description: "Design and launch community quest flows and completion milestones.",
      },
      {
        title: "Content Guide",
        path: "/content-guide",
        description: "Author, schedule, and curate content assets for platform distribution.",
      },
      {
        title: "Credentials & NFTs",
        path: "/credentials-and-nfts",
        description: "Use credential and NFT experiences across identity and access.",
      },
    ],
  },
  {
    section: "Wallets & Web3",
    pages: [
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
      {
        title: "Credentials Explained",
        path: "/credentials-explained",
        description: "Understand how credentials map to wallet status and privileges.",
      },
    ],
  },
  {
    section: "Developer Reference",
    pages: [
      {
        title: "API Overview",
        path: "/api-overview",
        description: "Review endpoint categories, rate limiting, and environment behavior.",
      },
      {
        title: "Authentication",
        path: "/authentication",
        description: "Understand token flow, key management, and verification behavior.",
      },
      {
        title: "Onboarding Link Setup",
        path: "/onboarding-link-setup",
        description: "Build onboarding deep links for profile and community conversion journeys.",
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
