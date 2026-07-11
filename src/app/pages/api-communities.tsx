import { Callout } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";
import { ApiEndpointCard } from "./api-endpoint-card";
import { communityEndpoints } from "./api-communities-data";

export function ApiCommunitiesPage() {
  const tocItems = [{ id: "authorization", label: "Live-role authorization" }, { id: "endpoints", label: "Community endpoints" }];
  return (
    <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
      <div className="text-sm text-muted-foreground mb-6">API Reference / <span className="text-foreground">Communities API</span></div>
      <h1 className="text-4xl font-bold mb-4 text-gradient">Communities API</h1>
      <p className="text-lg text-muted-foreground mb-12">Manage your membership and, where authorized, review applications, members, roles, and community access.</p>
      <div className="space-y-12">
        <section id="authorization"><h2 className="text-2xl font-semibold mb-4">Live-role authorization</h2><Callout type="warning" title="Owner, admin, or moderator role required">Manager operations require a current accepted role with the corresponding live capability. A scope on the key never preserves access after your community role changes.</Callout></section>
        <section id="endpoints"><h2 className="text-2xl font-semibold mb-4">Community endpoints</h2><div className="space-y-6">{communityEndpoints.map((endpoint) => <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />)}</div></section>
      </div><PagerNav /></div><RightSidebar items={tocItems} /></div>
  );
}
