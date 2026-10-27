import manifest, { type ManifestPage, type ManifestSection } from "virtual:docs-manifest";
import { isAccent } from "@/lib/accents";
import type { Accent } from "@/content/nav";

export const SITE_URL = "https://docs.hive3.tech";
export const APP_URL = "https://app.hive3.tech";

export const sections: ManifestSection[] = manifest.sections;
export const pages: ManifestPage[] = manifest.pages;

const byPath = new Map(pages.map((page) => [page.path, page]));

export function getPage(path: string): ManifestPage | undefined {
  return byPath.get(path);
}

export type NavEntry = { path: string; title: string; sectionId: string | null };

/** Flat reading order: home first, then every section in nav order. Scratch (`_`) pages are excluded. */
export const orderedPages: NavEntry[] = [
  ...pages.filter((p) => p.sectionId === null && !p.hidden).map((p) => ({ path: p.path, title: p.navTitle, sectionId: null })),
  ...sections.flatMap((s) => s.pages.map((p) => ({ path: p.path, title: p.title, sectionId: s.id }))),
];

export function neighbours(path: string): { prev?: NavEntry; next?: NavEntry } {
  const i = orderedPages.findIndex((p) => p.path === path);
  if (i < 0) return {};
  return { prev: orderedPages[i - 1], next: orderedPages[i + 1] };
}

export function sectionFor(path: string): ManifestSection | undefined {
  return sections.find((s) => s.pages.some((p) => p.path === path));
}

export function accentFor(page: ManifestPage): Accent {
  const section = page.sectionId ? sections.find((s) => s.id === page.sectionId) : undefined;
  return isAccent(page.accent) ? page.accent : (section?.accent ?? "default");
}

export function sectionHref(section: ManifestSection): string {
  return section.pages[0]?.path ?? "/";
}
