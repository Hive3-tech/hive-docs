// Remark plugin: gives every <Figure src="…"> the intrinsic width/height of its image, read at build time,
// so the browser reserves the right box before the image loads (no layout shift).
import { join } from "node:path";
import { root } from "./lib/content.mjs";
import { imageSize } from "./lib/image-size.mjs";

const attr = (node, name) => node.attributes?.find((a) => a.type === "mdxJsxAttribute" && a.name === name);

function visit(node, fn) {
  fn(node);
  for (const child of node.children ?? []) visit(child, fn);
}

export default function remarkMediaSize() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "mdxJsxFlowElement" || node.name !== "Figure") return;
      const src = attr(node, "src")?.value;
      if (typeof src !== "string" || !src.startsWith("/") || attr(node, "width")) return;
      const size = imageSize(join(root, "public", src));
      if (!size) return;
      node.attributes.push({ type: "mdxJsxAttribute", name: "width", value: String(size.width) });
      node.attributes.push({ type: "mdxJsxAttribute", name: "height", value: String(size.height) });
    });
  };
}
