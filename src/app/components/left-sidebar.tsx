import { Link, useLocation } from "react-router";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { docNavigation } from "../doc-navigation";
import bannerDarkText from "../../assets/banner-dark-text.png";
import bannerLightText from "../../assets/banner-light-text.png";

export function LeftSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const location = useLocation();
  const visibleSections = docNavigation;
  const accordionSections = visibleSections.filter((section) => {
    const singlePage = section.pages.length === 1 ? section.pages[0] : undefined;

    return !(singlePage && singlePage.title === section.section);
  });
  const sectionTitles = accordionSections.map((section) => section.section);
  const activeSection = accordionSections.find((section) =>
    section.pages.some((page) => page.path === location.pathname)
  )?.section;
  const [expandedSection, setExpandedSection] = useState<string>(
    activeSection ?? sectionTitles[0] ?? ""
  );

  useEffect(() => {
    if (activeSection) {
      setExpandedSection(activeSection);
    }
  }, [activeSection]);

  const toggleSection = (title: string) => {
    setExpandedSection((previous) => (previous === title ? "" : title));
  };

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path;
  };

  const nav = (
    <nav className="flex-1 p-1 space-y-1 overflow-y-auto">
      {visibleSections.map((section) => {
        const singlePage = section.pages.length === 1 ? section.pages[0] : undefined;
        const renderAsDirectTab = !!singlePage && singlePage.title === section.section;

        if (renderAsDirectTab && singlePage) {
          return (
            <Link
              key={section.section}
              to={singlePage.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-all ${
                isActivePath(singlePage.path)
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              {section.section}
            </Link>
          );
        }

        return (
          <div key={section.section} className="space-y-1">
            <button
              onClick={() => toggleSection(section.section)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all"
            >
              {expandedSection === section.section ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              {section.section}
            </button>

            {expandedSection === section.section && (
              <div className="ml-6 pl-3 py-1 border-l border-sidebar-border space-y-1">
                {section.pages.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 text-sm rounded-md transition-all ${
                      isActivePath(item.path)
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-16 h-[calc(100dvh-4rem)] py-6">
        <div className="relative flex h-full flex-col bg-sidebar border border-l-0 border-sidebar-border rounded-r-[22px] overflow-hidden shadow-[8px_0_30px_-12px_rgba(20,20,60,0.18)]">
          {nav}
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <aside className="lg:hidden fixed top-0 left-0 h-dvh w-screen z-50 bg-sidebar overflow-y-auto">
            <div className="flex items-center justify-between px-4 h-16 border-b border-sidebar-border">
              <Link to="/" onClick={onClose} className="flex items-center">
                <img src={bannerDarkText} alt="Hive3" className="h-7 w-auto dark:hidden" />
                <img src={bannerLightText} alt="Hive3" className="h-7 w-auto hidden dark:block" />
              </Link>
              <button
                onClick={onClose}
                className="p-2 hover:bg-sidebar-accent rounded-md"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {nav}
          </aside>
        </>
      )}
    </>
  );
}
