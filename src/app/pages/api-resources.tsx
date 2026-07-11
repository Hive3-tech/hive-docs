import { Callout, InlineCode } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";
import { ApiEndpointCard } from "./api-endpoint-card";
import { resourceEndpoints, resourceKinds } from "./api-resources-data";

export function ApiResourcesPage() {
  const tocItems = [{ id: "kinds", label: "Resource kinds" }, { id: "endpoints", label: "CRUD endpoints" }, { id: "ownership", label: "Ownership and deletion" }];
  return (
    <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
      <div className="text-sm text-muted-foreground mb-6">API Reference / <span className="text-foreground">Resources API</span></div>
      <h1 className="text-4xl font-bold mb-4 text-gradient">Resources API</h1>
      <p className="text-lg text-muted-foreground mb-12">Use one consistent CRUD shape for events, courses, content, quests, and jobs.</p>
      <div className="space-y-12">
        <section id="kinds"><h2 className="text-2xl font-semibold mb-4">Resource kinds</h2><p className="mb-4">Replace <InlineCode>{"{kind}"}</InlineCode> with one of the accepted values:</p><div className="flex flex-wrap gap-2">{resourceKinds.map((kind) => <code key={kind} className="rounded bg-muted px-3 py-1.5 text-sm">{kind}</code>)}</div></section>
        <section id="endpoints"><h2 className="text-2xl font-semibold mb-4">CRUD endpoints</h2><div className="space-y-6">{resourceEndpoints.map((endpoint) => <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />)}</div></section>
        <section id="ownership"><h2 className="text-2xl font-semibold mb-4">Ownership and deletion</h2><p className="mb-4">List requests can filter by <InlineCode>ownerType</InlineCode> and <InlineCode>communityId</InlineCode>. Create requests select a person or community owner in the JSON body. Community-owned writes require both the documented scopes and a current role with write capability.</p><Callout type="warning" title="DELETE archives">Resource DELETE routes archive the record rather than hard-deleting it.</Callout></section>
      </div><PagerNav /></div><RightSidebar items={tocItems} /></div>
  );
}
