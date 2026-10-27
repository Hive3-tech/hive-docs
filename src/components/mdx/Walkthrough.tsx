import { useEffect, useRef, useState } from "react";
import { Clapperboard } from "lucide-react";
import { cn } from "@/lib/cn";

type Chapter = { at: number; label: string };
type WalkthroughProps = { src: string; poster?: string; title: string; chapters?: Chapter[] };

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Short silent clip. Plays muted while at least half of it is on screen, pauses when it leaves,
 *  never autoplays under prefers-reduced-motion. Chapter chips seek the video. */
export function Walkthrough({ src, poster, title, chapters = [] }: WalkthroughProps) {
  const video = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const observerPaused = useRef(false);
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          if (!userPaused.current && !prefersReducedMotion()) void el.play().catch(() => undefined);
        } else if (!el.paused) {
          observerPaused.current = true;
          el.pause();
        }
      },
      { threshold: [0, 0.5, 1] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onTimeUpdate = () => {
    const time = video.current?.currentTime ?? 0;
    let index = 0;
    chapters.forEach((chapter, i) => {
      if (chapter.at <= time + 0.05) index = i;
    });
    setCurrent(index);
  };

  const seek = (chapter: Chapter, index: number) => {
    const el = video.current;
    if (!el) return;
    el.currentTime = chapter.at;
    setCurrent(index);
    userPaused.current = false;
    void el.play().catch(() => undefined);
  };

  return (
    <figure className="surface-glass my-8 overflow-hidden rounded-2xl border p-2">
      <figcaption className="flex items-center gap-2 px-2.5 pb-2 pt-1 text-sm font-medium text-foreground">
        <Clapperboard className="size-4 text-primary" aria-hidden="true" />
        <span className="min-w-0 flex-1 truncate">{title}</span>
        <span className="shrink-0 text-xs font-normal text-muted-foreground">Silent walkthrough</span>
      </figcaption>
      {failed ? (
        <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted-foreground">
          This walkthrough video is not available right now.
        </div>
      ) : (
        <video
          ref={video}
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          controls
          preload="metadata"
          aria-label={title}
          onTimeUpdate={onTimeUpdate}
          onError={() => setFailed(true)}
          onPause={() => {
            if (observerPaused.current) observerPaused.current = false;
            else userPaused.current = true;
          }}
          onPlay={() => {
            userPaused.current = false;
          }}
          className="block aspect-[16/10] w-full rounded-xl bg-black/5 object-cover dark:bg-white/5"
        />
      )}
      {chapters.length > 0 ? (
        <ol className="m-0 flex list-none flex-wrap gap-1.5 p-2 pt-3" aria-label="Chapters">
          {chapters.map((chapter, index) => (
            <li key={`${chapter.at}-${chapter.label}`} className="m-0 p-0">
              <button
                type="button"
                onClick={() => seek(chapter, index)}
                aria-current={index === current ? "step" : undefined}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  index === current
                    ? "border-transparent bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background/60 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:bg-white/5",
                )}
              >
                <span className="opacity-70">{index + 1}</span>
                {chapter.label}
              </button>
            </li>
          ))}
        </ol>
      ) : null}
    </figure>
  );
}
