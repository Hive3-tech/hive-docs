import { Callout } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";
import { ApiEndpointCard } from "./api-endpoint-card";
import { commentEndpoints, postEndpoints } from "./api-posts-and-comments-data";

export function ApiPostsAndCommentsPage() {
  const tocItems = [{ id: "posts", label: "Posts" }, { id: "comments", label: "Comments" }];
  return (
    <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
      <div className="text-sm text-muted-foreground mb-6">API Reference / <span className="text-foreground">Posts &amp; Comments API</span></div>
      <h1 className="text-4xl font-bold mb-4 text-gradient">Posts &amp; Comments API</h1>
      <p className="text-lg text-muted-foreground mb-12">Publish and manage posts, comments, and likes with your person-owned credential.</p>
      <Callout type="info" title="Community-owned posts">A write scope alone does not grant community authority. Hive rechecks your current community role when you create or modify a community-owned post.</Callout>
      <div className="space-y-12 mt-12">
        <section id="posts"><h2 className="text-2xl font-semibold mb-4">Posts</h2><div className="space-y-6">{postEndpoints.map((endpoint) => <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />)}</div></section>
        <section id="comments"><h2 className="text-2xl font-semibold mb-4">Comments</h2><div className="space-y-6">{commentEndpoints.map((endpoint) => <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />)}</div></section>
      </div><PagerNav /></div><RightSidebar items={tocItems} /></div>
  );
}
