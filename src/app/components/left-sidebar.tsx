import { Link, useLocation } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { docNavigation } from "../doc-navigation";

export function LeftSidebar({ isOpen }: { isOpen: boolean }) {
  const location = useLocation();
  const visibleSections = docNavigation.filter(
    (section) => section.section !== "Resources"
  );
  const sectionTitles = visibleSections.map((section) => section.section);
  const [expandedSection, setExpandedSection] = useState<string>(
    sectionTitles[0] ?? ""
  );

  const toggleSection = (title: string) => {
    setExpandedSection((previous) => (previous === title ? "" : title));
  };

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path;
  };

  if (!isOpen) return null;

  return (
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto z-40 md:block">
      <nav className="p-4 space-y-2">
        {visibleSections.map((section) => (
          <div key={section.section} className="space-y-1">
            <button
              onClick={() => toggleSection(section.section)}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
            >
              {expandedSection === section.section ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              <span className="font-medium">{section.section}</span>
            </button>

            {expandedSection === section.section && (
              <div className="ml-6 space-y-1">
                {section.pages.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActivePath(item.path)
                        ? "bg-[#6B01B6] text-white"
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
