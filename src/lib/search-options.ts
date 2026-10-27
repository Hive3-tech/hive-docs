// Shared by the build-time index writer (scripts/vite-docs-plugin.mjs) and the client loader.
// Pure data only: this file is also loaded directly by Node.

export const searchIndexOptions = {
  idField: "id",
  fields: ["title", "heading", "text"],
  storeFields: ["title", "heading", "path", "anchor", "snippet"],
};

export const searchQueryOptions = {
  prefix: true,
  fuzzy: 0.2,
  boost: { title: 3, heading: 2 },
  combineWith: "AND",
};
