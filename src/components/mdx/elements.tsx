import type { ComponentProps } from "react";
import { Link } from "react-router";
import { ExternalLink } from "lucide-react";

/** Markdown links: internal doc paths use client routing, everything else opens normally. */
export function MdxLink({ href = "", children, ...props }: ComponentProps<"a">) {
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("#") || href.startsWith("mailto:")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <ExternalLink className="ml-0.5 inline size-3 align-[-0.05em] opacity-60" aria-hidden="true" />
    </a>
  );
}

function heading(Tag: "h2" | "h3" | "h4") {
  return function Heading({ id, children, ...props }: ComponentProps<"h2">) {
    return (
      <Tag id={id} {...props}>
        {id ? (
          <a href={`#${id}`} className="heading-anchor" data-plain aria-label="Link to this section">
            #
          </a>
        ) : null}
        {children}
      </Tag>
    );
  };
}

export const H2 = heading("h2");
export const H3 = heading("h3");
export const H4 = heading("h4");

/** Tables scroll horizontally inside a glass plate instead of overflowing the article. */
export function MdxTable(props: ComponentProps<"table">) {
  return (
    <div className="table-wrap">
      <table {...props} />
    </div>
  );
}
