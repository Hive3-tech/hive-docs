import { ChevronLeft, ChevronRight, CircleDot } from "lucide-react";
import { Link } from "react-router";
import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step } from "../components/doc-components";

type PageNavLink = {
  label: string;
  path: string;
};

export type StubDocPageConfig = {
  title: string;
  section: string;
  description: string;
  prev?: PageNavLink;
  next?: PageNavLink;
};

const toKebabLink = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export function createStubDocPage({ title, section, description, prev, next }: StubDocPageConfig) {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "what-to-build", label: "What to Build" },
    { id: "coming-soon", label: "Implementation Status" },
    { id: "next-steps", label: "Next Steps" },
  ];

  const placeholderTag = toKebabLink(title);

  const PlaceholderPage = () => {
    return (
      <div className="flex">
        <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
          <div className="text-sm text-muted-foreground mb-6">
            {section} / <span className="text-foreground">{title}</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-12">{description}</p>

          <div className="space-y-12">
            <section id="overview" className="space-y-4">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-muted-foreground">
                This page documents the <strong>{title}</strong> flow and links into
                its related setup surfaces inside Hive3.
              </p>
              <div className="rounded-lg border border-border bg-card/50 p-4">
                <p className="text-sm font-semibold">Implementation state</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Placeholder ID: <span className="font-mono">{placeholderTag}</span>
                </p>
              </div>
            </section>

            <section id="what-to-build" className="space-y-4">
              <h2 className="text-2xl font-semibold">What to build</h2>
              <div className="space-y-4">
                <Step number={1} title="Define the use case">
                  Clarify who uses this feature and what success looks like at each
                  tier level.
                </Step>
                <Step number={2} title="Configure platform rules">
                  Enable the relevant permissions, payouts, or integrations required
                  for this section.
                </Step>
                <Step number={3} title="Publish and test">
                  Verify navigation and behavior in your target community or profile
                  path.
                </Step>
              </div>
            </section>

            <section id="coming-soon" className="space-y-4">
              <h2 className="text-2xl font-semibold">Implementation status</h2>
              <Callout type="info" title="Placeholder page">
                This page is scaffolded for this documentation architecture sprint.
                Replace this content with actual Hive3 screenshots, settings, and
                feature steps in a later task.
              </Callout>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CircleDot className="w-4 h-4 text-[#6B01B6]" />
                <span>Page status: Planned</span>
              </div>
            </section>

            <section id="next-steps" className="space-y-4">
              <h2 className="text-2xl font-semibold">Next steps</h2>
              <p className="text-muted-foreground">
                Keep this section aligned with neighboring pages so users can follow
                the documentation journey in order.
              </p>
            </section>
          </div>

          <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
            {prev ? (
              <Link
                to={prev.path}
                className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {prev.label}
              </Link>
            ) : (
              <span className="text-sm text-muted-foreground">Beginning of section</span>
            )}

            {next ? (
              <Link
                to={next.path}
                className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
              >
                {next.label}
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="text-sm text-muted-foreground">End of documentation</span>
            )}
          </div>
        </div>

        <RightSidebar items={tocItems} />
      </div>
    );
  };

  PlaceholderPage.displayName = `StubDocPage-${placeholderTag}`;

  return PlaceholderPage;
}
