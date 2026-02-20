import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router";
import { RightSidebar } from "../components/right-sidebar";

const navigationItems = [{ id: "what-you-can-do", label: "What to do now" }];

export function NotFoundPage() {
  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-[#6B01B6]/10 border border-[#6B01B6]/30 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-7 h-7 text-[#6B01B6]" />
          </div>
          <p className="text-sm text-[#6B01B6] font-semibold mb-3">404</p>
          <h1 className="text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn&apos;t find that documentation page. It might have moved or no
            longer exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#6B01B6] text-white hover:opacity-95 transition-opacity"
            >
              <Home className="w-4 h-4" />
              Back to docs home
            </Link>
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              Get started
            </Link>
          </div>
          <div className="mt-10 pt-8 border-t border-border text-left" id="what-you-can-do">
            <h2 className="text-lg font-semibold mb-3">Next step</h2>
            <p className="text-sm text-muted-foreground">
              Return to{" "}
              <Link to="/communities-overview" className="text-[#6B01B6] underline underline-offset-2">
                Communities overview
              </Link>{" "}
              or continue to the{" "}
              <Link to="/api-overview" className="text-[#6B01B6] underline underline-offset-2">
                API overview
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <RightSidebar items={navigationItems} />
    </div>
  );
}
