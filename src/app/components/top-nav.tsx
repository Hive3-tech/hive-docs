import { Link, useLocation } from "react-router";
import { Search, Moon, Sun, Menu, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import bannerDarkText from "../../assets/banner-dark-text.png";
import bannerLightText from "../../assets/banner-light-text.png";

export function TopNav({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { label: "Getting Started", path: "/" },
    { label: "CLI", path: "/cli/quickstart" },
    { label: "API Reference", path: "/api/overview" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 app-surface border-b border-border backdrop-blur-lg">
      <div className="h-16 flex items-center px-4 gap-4">
        {/* Hamburger Menu (mobile drawer toggle) */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          aria-label="Open navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-4">
          <img src={bannerDarkText} alt="Hive3" className="h-8 w-auto dark:hidden" />
          <img src={bannerLightText} alt="Hive3" className="h-8 w-auto hidden dark:block" />
          <span className="text-muted-foreground text-sm font-medium">Docs</span>
        </Link>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="hidden lg:flex items-center gap-2 px-4 py-2 bg-input-background dark:bg-card border border-border rounded-lg text-sm text-muted-foreground hover:border-primary transition-colors min-w-[240px]"
        >
          <Search className="w-4 h-4" />
          <span>Search docs...</span>
          <kbd className="ml-auto px-2 py-0.5 bg-muted rounded text-xs">⌘K</kbd>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-2 ml-auto lg:ml-0">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Go to App Button */}
          <a
            href="https://app.hive3.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
          >
            Go to App
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-card border border-border rounded-lg shadow-2xl w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="flex-1 bg-transparent outline-none"
                  autoFocus
                />
              </div>
            </div>
            <div className="p-4 text-sm text-muted-foreground">
              Start typing to search...
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
