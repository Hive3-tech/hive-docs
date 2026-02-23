import { Outlet, useLocation } from "react-router";
import { TopNav } from "./top-nav";
import { LeftSidebar } from "./left-sidebar";
import { BackToTop } from "./back-to-top";
import { Footer } from "./footer";
import { useEffect, useState } from "react";

export function DocLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <TopNav onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex pt-16">
        {/* Left Sidebar */}
        <LeftSidebar isOpen={sidebarOpen} />
        
        {/* Main Content */}
        <main 
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <Outlet />
          <Footer />
        </main>
      </div>

      <BackToTop />
    </div>
  );
}
