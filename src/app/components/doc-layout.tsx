import { Outlet, useLocation } from "react-router";
import { TopNav } from "./top-nav";
import { LeftSidebar } from "./left-sidebar";
import { BackToTop } from "./back-to-top";
import { Footer } from "./footer";
import { useEffect, useState } from "react";

export function DocLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <TopNav onToggleSidebar={() => setMobileNavOpen((open) => !open)} />

      <div className="flex pt-16">
        {/* Left Sidebar */}
        <LeftSidebar open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <Outlet />
          <Footer />
        </main>
      </div>

      <BackToTop />
    </div>
  );
}
