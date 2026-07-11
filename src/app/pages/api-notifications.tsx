import { InlineCode } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";
import { ApiEndpointCard } from "./api-endpoint-card";
import { notificationEndpoints } from "./api-notifications-data";

export function ApiNotificationsPage() {
  const tocItems = [{ id: "pagination", label: "Offset pagination" }, { id: "endpoints", label: "Notification endpoints" }];
  return (
    <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
      <div className="text-sm text-muted-foreground mb-6">API Reference / <span className="text-foreground">Notifications API</span></div>
      <h1 className="text-4xl font-bold mb-4 text-gradient">Notifications API</h1>
      <p className="text-lg text-muted-foreground mb-12">List and manage your notifications, unread state, and category mutes.</p>
      <div className="space-y-12">
        <section id="pagination"><h2 className="text-2xl font-semibold mb-4">Offset pagination</h2><p>Unlike cursor-paginated resource lists, notifications use <InlineCode>limit</InlineCode>, <InlineCode>offset</InlineCode>, and <InlineCode>unreadOnly</InlineCode>.</p></section>
        <section id="endpoints"><h2 className="text-2xl font-semibold mb-4">Notification endpoints</h2><div className="space-y-6">{notificationEndpoints.map((endpoint) => <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />)}</div></section>
      </div><PagerNav /></div><RightSidebar items={tocItems} /></div>
  );
}
