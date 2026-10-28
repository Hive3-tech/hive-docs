import { useEffect } from "react";
import { canonicalUrl } from "@/app/site";

export type HeadMeta = { title: string; description: string; path: string; noindex?: boolean };

export const SITE_NAME = "Hive3 Docs";

export function documentTitle(title: string, path: string): string {
  return path === "/" ? title : `${title} | ${SITE_NAME}`;
}

function setMeta(selector: string, attr: "name" | "property", key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Keeps <title> and meta tags in sync during client-side navigation. The prerenderer writes the same tags into static HTML. */
export function useHead({ title, description, path, noindex }: HeadMeta): void {
  useEffect(() => {
    const full = documentTitle(title, path);
    const url = canonicalUrl(path);
    document.title = full;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", full);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", full);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex" : "index,follow");
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;
  }, [title, description, path, noindex]);
}
