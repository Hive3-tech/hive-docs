import { BookOpen, type LucideIcon } from "lucide-react";
import iconMap from "virtual:docs-icons";

const icons: Record<string, LucideIcon> = iconMap;

/** Look up a lucide icon by kebab-case name. Only icons referenced in nav.ts or MDX are bundled. */
export function DocIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? BookOpen;
  return <Icon className={className} aria-hidden="true" />;
}
