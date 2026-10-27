import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme"; // same key the Hive3 app uses

type ThemeContextValue = { theme: Theme | null; setTheme: (theme: Theme) => void };
const ThemeContext = createContext<ThemeContextValue>({ theme: null, setTheme: () => {} });

function applyTheme(theme: Theme): void {
  const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
  } catch {
    // Storage can be blocked; fall back to the system preference.
  }
  return "system";
}

/** `theme` is null until mounted, so server and first client render agree.
 *  The `dark` class itself is set before first paint by the inline script in index.html. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme | null>(null);

  useEffect(() => setThemeState(readStoredTheme()), []);

  useEffect(() => {
    if (theme !== "system") return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore blocked storage; the choice still applies for this visit.
    }
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
