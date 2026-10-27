import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Modal } from "@/components/Modal";

// width/height are injected at build time (scripts/remark-media-size.mjs) so the image box is reserved before load.
type FigureProps = { src: string; alt: string; caption?: string; darkSrc?: string; width?: number | string; height?: number | string };

/** Screenshot with a glass frame, lazy loading, and click-to-zoom. */
export function Figure({ src, alt, caption, darkSrc, width, height }: FigureProps) {
  const [zoomed, setZoomed] = useState(false);

  const image = (className: string, eager = false) => (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`${className}${darkSrc ? " dark:hidden" : ""}`}
      />
      {darkSrc ? (
        <img
          src={darkSrc}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`${className} hidden dark:block`}
        />
      ) : null}
    </>
  );

  return (
    <figure className="my-8">
      <button
        type="button"
        onClick={() => setZoomed(true)}
        aria-label={`Enlarge image: ${alt}`}
        className="surface-glass surface-interactive group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border p-1.5 text-left"
      >
        {image("block h-auto w-full rounded-xl")}
        <span className="pointer-events-none absolute right-3 top-3 flex size-8 items-center justify-center rounded-lg bg-background/80 text-foreground opacity-0 shadow-md backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <ZoomIn className="size-4" aria-hidden="true" />
        </span>
      </button>
      {caption ? <figcaption className="mt-2.5 px-1 text-center text-sm text-muted-foreground">{caption}</figcaption> : null}
      {zoomed ? (
        <Modal
          label={alt}
          onClose={() => setZoomed(false)}
          className="m-auto max-h-[94dvh] max-w-[min(96vw,1600px)] overflow-visible bg-transparent p-0 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
        >
          <div className="relative">
            {image("block max-h-[90dvh] w-auto max-w-full rounded-2xl shadow-2xl", true)}
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Close"
              className="absolute -top-3 -right-3 flex size-9 items-center justify-center rounded-full bg-background text-foreground shadow-lg"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        </Modal>
      ) : null}
    </figure>
  );
}
