import { RightSidebar } from "../components/right-sidebar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Link } from "react-router";

export function VideoTutorialsPage() {
  const sectionCards = [
    {
      id: "getting-started",
      title: "Getting Started",
      description:
        "A quick orientation for account setup, membership basics, and first community actions.",
      gradient: "linear-gradient(135deg, #6b01b6, #512da8)",
    },
    {
      id: "creating-a-community",
      title: "Creating a Community",
      description:
        "Planned walkthrough for community setup, branding, and access policy configuration.",
      gradient: "linear-gradient(135deg, #6b01b6, #2563eb)",
    },
    {
      id: "setting-up-events",
      title: "Setting Up Events",
      description:
        "Coming soon: event creation, ticket flow, scheduling, and participation controls.",
      gradient: "linear-gradient(135deg, #512da8, #16a34a)",
    },
    {
      id: "managing-your-profile",
      title: "Managing Your Profile",
      description:
        "Planned content on profile updates, publishing controls, and Honey Bee workflow settings.",
      gradient: "linear-gradient(135deg, #16a34a, #6b01b6)",
    },
  ];

  const tocItems = sectionCards.map((section) => ({
    id: section.id,
    label: section.title,
  }));

  const VideoPlaceholderCard = ({
    title,
    description,
    gradient,
  }: {
    title: string;
    description: string;
    gradient: string;
  }) => (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="relative aspect-video" style={{ background: gradient }}>
        <div className="absolute inset-0 bg-black/25" />
        <span className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold bg-black/70 border border-white/40 text-white">
          Coming soon
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="w-8 h-8 text-[#6B01B6] ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-xs uppercase tracking-wider text-white/80">
            Video placeholder
          </p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          Resources / <span className="text-foreground">Video Tutorials</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Video Tutorials
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Placeholder index for planned Hive3 tutorial content.
        </p>

        <div className="space-y-12">
          {sectionCards.map((section) => (
            <section key={section.id} id={section.id} className="space-y-4">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                <VideoPlaceholderCard
                  title={section.title}
                  description={section.description}
                  gradient={section.gradient}
                />
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#6B01B6] to-[#512DA8] rounded-xl p-8 text-white text-center mt-12">
          <h3 className="text-2xl font-semibold mb-3">More Tutorials Planned</h3>
          <p className="mb-6 opacity-90">
            Subscribe to release notes and upcoming walkthroughs as each section ships.
          </p>
          <button className="px-6 py-3 bg-white text-[#6B01B6] rounded-lg hover:bg-opacity-90 transition-opacity font-semibold">
            Subscribe to Updates
          </button>
        </div>

        {/* Page Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/authentication"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Authentication
          </Link>
          <Link
            to="/changelog"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Changelog
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
