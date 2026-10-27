import { lazy, Suspense, useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { getPage } from "@/app/site";
import { Modal } from "@/components/Modal";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

const SearchDialog = lazy(() => import("./SearchDialog"));

export function DocLayout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const currentSectionId = getPage(pathname)?.sectionId ?? null;

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-dvh">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <TopBar currentSectionId={currentSectionId} onOpenMenu={() => setMenuOpen(true)} onOpenSearch={() => setSearchOpen(true)} />
      <div className="flex items-start">
        <aside className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-72 shrink-0 py-6 lg:block">
          <Sidebar variant="desktop" pathname={pathname} currentSectionId={currentSectionId} />
        </aside>
        <main id="main" className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
      {menuOpen ? (
        <Modal
          label="Navigation"
          onClose={() => setMenuOpen(false)}
          className="docs-drawer fixed inset-y-0 left-0 m-0 h-dvh max-h-none w-[min(20rem,88vw)] max-w-none bg-transparent p-0 backdrop:bg-black/50"
        >
          <Sidebar variant="mobile" pathname={pathname} currentSectionId={currentSectionId} onNavigate={() => setMenuOpen(false)} onClose={() => setMenuOpen(false)} />
        </Modal>
      ) : null}
      {searchOpen ? (
        <Suspense fallback={null}>
          <SearchDialog onClose={() => setSearchOpen(false)} />
        </Suspense>
      ) : null}
      <ScrollRestoration />
    </div>
  );
}
