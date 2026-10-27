// Shared by the build-time index writer (scripts/vite-docs-plugin.mjs) and the client loader.
// Pure data only: this file is also loaded directly by Node.

export const searchIndexOptions = {
  idField: "id",
  fields: ["title", "heading", "text"],
  // p = index into `pages`, a = heading anchor, h = heading text, s = snippet
  storeFields: ["p", "a", "h", "s"],
};

/** Shape of the search-index.json asset. */
export type SearchIndexFile = {
  pages: { path: string; title: string }[];
  index: unknown;
};

export const searchQueryOptions = {
  prefix: true,
  fuzzy: 0.2,
  boost: { title: 3, heading: 2 },
  combineWith: "AND",
};
