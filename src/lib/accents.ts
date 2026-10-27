import type { CSSProperties } from "react";
import type { Accent } from "@/content/nav";

/** Three gradient stops per accent. The first seven mirror the app's create-flow themes
 *  (apps/web/src/app/components/create-form/theme/createThemes.ts); the rest are docs-only. */
export const accentColors: Record<Accent, readonly [string, string, string]> = {
  events: ["#fcd34d", "#f97316", "#f43f5e"],
  courses: ["#818cf8", "#8b5cf6", "#9333ea"],
  content: ["#e879f9", "#ec4899", "#f43f5e"],
  jobs: ["#bef264", "#10b981", "#0d9488"],
  quests: ["#5eead4", "#06b6d4", "#2563eb"],
  addons: ["#7dd3fc", "#6366f1", "#c026d3"],
  credentials: ["#fde047", "#f59e0b", "#7e22ce"],
  community: ["#c084fc", "#d946ef", "#fb7185"],
  developer: ["#38bdf8", "#2563eb", "#6b01b6"],
  default: ["#8b5cf6", "#6b01b6", "#275dc1"],
};

export function isAccent(value: unknown): value is Accent {
  return typeof value === "string" && value in accentColors;
}

/** CSS variables --a1..--a3 consumed by .accent-* utilities and components. */
export function accentStyle(accent: Accent): CSSProperties {
  const [a1, a2, a3] = accentColors[accent];
  return { "--a1": a1, "--a2": a2, "--a3": a3 } as CSSProperties;
}
