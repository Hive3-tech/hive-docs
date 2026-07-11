import { Callout } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";
import { ApiEndpointCard } from "./api-endpoint-card";
import { courseWorkflowEndpoints, eventWorkflowEndpoints, jobWorkflowEndpoints, questWorkflowEndpoints } from "./api-workflows-data";

const groups = [
  { id: "events", title: "Event workflows", endpoints: eventWorkflowEndpoints },
  { id: "courses", title: "Course workflows", endpoints: courseWorkflowEndpoints },
  { id: "quests", title: "Quest workflows", endpoints: questWorkflowEndpoints },
  { id: "jobs", title: "Job workflows", endpoints: jobWorkflowEndpoints },
];

export function ApiWorkflowsPage() {
  const tocItems = groups.map(({ id, title }) => ({ id, label: title }));
  return (
    <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
      <div className="text-sm text-muted-foreground mb-6">API Reference / <span className="text-foreground">Workflows API</span></div>
      <h1 className="text-4xl font-bold mb-4 text-gradient">Workflows API</h1>
      <p className="text-lg text-muted-foreground mb-12">RSVP, enroll, complete lessons, submit evidence, apply to jobs, and manage participants through resource-specific workflows.</p>
      <Callout type="info" title="Manager checks">Read and write scopes open the route, but approval, attendance, evidence review, and application management also require current ownership or manager capability.</Callout>
      <div className="space-y-12 mt-12">{groups.map(({ id, title, endpoints }) => <section id={id} key={id}><h2 className="text-2xl font-semibold mb-4">{title}</h2><div className="space-y-6">{endpoints.map((endpoint) => <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />)}</div></section>)}</div>
      <PagerNav /></div><RightSidebar items={tocItems} /></div>
  );
}
