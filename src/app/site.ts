import manifest from "virtual:docs-manifest";
import type { NavSectionData } from "./types";

export const SITE_URL = "https://docs.hive3.tech";
export const APP_URL = "https://app.hive3.tech";

/** Netlify serves each prerendered `<path>/index.html` at `<path>/` (it 301s `<path>` there), so public URLs end in a slash. */
export function canonicalUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.replace(/\/+$/, "")}/`;
}

export const sections: NavSectionData[] = manifest.sections;

export type NavEntry = { path: string; title: string };

/** Flat reading order: home first, then every section in nav order. */
export const orderedPages: NavEntry[] = [
  ...(manifest.home ? [{ path: manifest.home.path, title: manifest.home.title }] : []),
  ...sections.flatMap((s) => s.pages.map((p) => ({ path: p.path, title: p.title }))),
];

export function neighbours(path: string): { prev?: NavEntry; next?: NavEntry } {
  const i = orderedPages.findIndex((p) => p.path === path);
  if (i < 0) return {};
  return { prev: orderedPages[i - 1], next: orderedPages[i + 1] };
}

export function sectionIdForPath(path: string): string | null {
  return sections.find((s) => s.pages.some((p) => p.path === path))?.id ?? null;
}

export function sectionHref(section: NavSectionData): string {
  return section.pages[0]?.path ?? "/";
}
