import { RightSidebar } from "../components/right-sidebar";
import { CircleAlert, ChevronLeft, ChevronRight, Bug, Plus, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router";

type ChangeType = "new" | "improved" | "fixed" | "breaking";

interface ChangeItem {
  type: ChangeType;
  title: string;
  description: string;
}

interface Release {
  id: string;
  version: string;
  releaseDate: string;
  isLatest?: boolean;
  changes: ChangeItem[];
  migration?: {
    title: string;
    description: string;
    linkLabel: string;
    linkTo: string;
  };
}

const releases: Release[] = [
  {
    id: "v2-1-0",
    version: "v2.1.0",
    releaseDate: "February 15, 2026",
    isLatest: true,
    changes: [
      {
        type: "new",
        title: "NFT Certificate Minting",
        description:
          "Course certificates can now be minted as NFTs on Ethereum, Polygon, and Base, including custom metadata and on-chain verification.",
      },
      {
        type: "new",
        title: "Live Streaming for Events",
        description:
          "Host live events directly in your communities with integrated chat, Q&A, and recording capabilities.",
      },
      {
        type: "improved",
        title: "Search",
        description:
          "Improved relevance ranking with better query matching, and added tag/category filters.",
      },
      {
        type: "improved",
        title: "Dashboard Performance",
        description:
          "Reduced dashboard load times by 40% through query optimization and caching improvements.",
      },
      {
        type: "fixed",
        title: "Community Invites",
        description:
          "Fixed missed email delivery for private communities and role-specific invitation notifications.",
      },
      {
        type: "fixed",
        title: "Course Progress Tracking",
        description:
          "Resolved incorrect percentage calculations in courses containing video-based lessons.",
      },
    ],
    migration: {
      title: "Migration note",
      description:
        "If you're using the courses API, update to SDK v2.1.0 for certificate minting support.",
      linkLabel: "Courses Guide",
      linkTo: "/courses-guide",
    },
  },
  {
    id: "v2-0-0",
    version: "v2.0.0",
    releaseDate: "January 8, 2026",
    changes: [
      {
        type: "new",
        title: "Token-Gated Communities",
        description:
          "Control access using NFT ownership, token balance thresholds, or custom smart-contract conditions.",
      },
      {
        type: "new",
        title: "Multi-Chain Support",
        description:
          "Added support for Ethereum, Polygon, Arbitrum, Optimism, and Base networks in wallet-aware flows.",
      },
      {
        type: "improved",
        title: "API Rate Limits",
        description:
          "Increased allowed traffic to 1000 requests per minute for paid plans.",
      },
      {
        type: "improved",
        title: "Member Analytics",
        description:
          "New dashboards now expose growth, retention, and engagement signals per community.",
      },
      {
        type: "fixed",
        title: "Webhook Reliability",
        description:
          "Added retry and exponential backoff behavior to reduce transient webhook delivery failures.",
      },
      {
        type: "breaking",
        title: "Field rename",
        description:
          "`accessLevel` is now `accessControl` in membership settings and API responses.",
      },
      {
        type: "breaking",
        title: "Visibility rename",
        description:
          "`visibility` is now `isPublic` for community-level policy controls.",
      },
    ],
  },
  {
    id: "v1-9-0",
    version: "v1.9.0",
    releaseDate: "December 5, 2025",
    changes: [
      {
        type: "new",
        title: "Course Assignments",
        description:
          "Added assignment workflows with file uploads, text submissions, and grading views.",
      },
      {
        type: "new",
        title: "Community Templates",
        description:
          "Launched templates for DAO, NFT project, learning, and creator-led communities.",
      },
      {
        type: "improved",
        title: "Mobile Responsiveness",
        description:
          "Refreshed mobile navigation and touch interaction patterns for better use on smaller screens.",
      },
      {
        type: "fixed",
        title: "Email Notifications",
        description: "Addressed email template formatting issues and improved deliverability behavior.",
      },
    ],
  },
];

const typeMap: Record<ChangeType, { label: string; icon: typeof Plus; className: string }> = {
  new: {
    label: "New",
    icon: Plus,
    className: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  improved: {
    label: "Improved",
    icon: Zap,
    className: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  fixed: {
    label: "Fixed",
    icon: Bug,
    className: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  },
  breaking: {
    label: "Breaking",
    icon: CircleAlert,
    className: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
};

function ChangeLine({
  item,
}: {
  item: ChangeItem;
}) {
  const style = typeMap[item.type];
  const Icon = style.icon;

  return (
    <div className="flex gap-3">
      <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-semibold h-fit ${style.className}`}>
        <Icon className="w-3 h-3" />
        {style.label}
      </div>
      <p className="text-muted-foreground flex-1">
        <strong>{item.title}: </strong>
        {item.description}
      </p>
    </div>
  );
}

export function ChangelogPage() {
  const tocItems = releases.map((release) => ({
    id: release.id,
    label: release.version,
  }));

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          Resources / <span className="text-foreground">Changelog</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Changelog
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Stay up to date with the latest features, improvements, and bug fixes in Hive3.
        </p>

        <div className="space-y-12">
          {releases.map((release) => (
            <section
              key={release.id}
              id={release.id}
              className="border-l-4 pl-6 border-[#6B01B6]"
            >
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-semibold">{release.version}</h2>
                {release.isLatest && (
                  <span className="px-3 py-1 bg-[#6B01B6] text-white rounded-full text-sm">
                    Latest
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Released on {release.releaseDate}
              </p>

              <div className="space-y-4">
                {release.changes.map((item) => (
                  <ChangeLine key={`${release.id}-${item.title}`} item={item} />
                ))}
              </div>

              {release.migration ? (
                <div className="mt-6 p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#6B01B6]" />
                    {release.migration.title}
                  </h3>
        <p className="text-sm text-muted-foreground">
                    {release.migration.description}{" "}
                    <Link
                      to={release.migration.linkTo}
                      className="text-[#6B01B6] hover:underline"
                    >
                      {release.migration.linkLabel}
                    </Link>
                  </p>
                </div>
              ) : null}
            </section>
          ))}

          {/* Subscribe to updates */}
          <div className="bg-gradient-to-r from-[#6B01B6] to-[#512DA8] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-3">Stay Updated</h3>
            <p className="mb-6 opacity-90">
              Get notified when we ship new features and improvements to Hive3.
            </p>
            <div className="flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white placeholder:text-white/60 outline-none focus:border-white/60"
              />
              <button className="px-6 py-3 bg-white text-[#6B01B6] rounded-lg hover:bg-opacity-90 transition-opacity font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Page Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/video-tutorials"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Video Tutorials
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
