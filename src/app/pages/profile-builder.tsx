import { Callout, Step } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

const blocks = ["Spotlight", "Bio (text or PDF)", "Badges", "Subscriptions", "Events", "Courses", "Content", "Jobs", "Communities", "Created Credentials", "Earned Credentials", "NFTs"];

export function ProfileBuilderPage() {
  const tocItems = [{ id: "configurations", label: "Three configurations" }, { id: "blocks", label: "Profile blocks" }, { id: "workflow", label: "Build and publish" }];
  return <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
    <div className="text-sm text-muted-foreground mb-6">Your Profile / <span className="text-foreground">Profile Builder</span></div>
    <h1 className="text-4xl font-bold mb-4 text-gradient">Profile Builder</h1>
    <p className="text-lg text-muted-foreground mb-12">Arrange reusable blocks into a profile that highlights the work, memberships, and credentials you want visitors to see.</p>
    <div className="space-y-12">
      <section id="configurations"><h2 className="text-2xl font-semibold mb-4">Three configurations</h2><div className="grid md:grid-cols-3 gap-4"><div className="border border-border rounded-lg p-4"><h3 className="font-semibold">Overview</h3><p className="text-sm text-muted-foreground mt-2">Controls the ordered blocks in your main profile overview.</p></div><div className="border border-border rounded-lg p-4"><h3 className="font-semibold">Welcome page</h3><p className="text-sm text-muted-foreground mt-2">Controls the focused introduction used by your welcome experience.</p></div><div className="border border-border rounded-lg p-4"><h3 className="font-semibold">Widgets</h3><p className="text-sm text-muted-foreground mt-2">Stores the profile widget configuration separately from the overview and welcome page.</p></div></div></section>
      <section id="blocks"><h2 className="text-2xl font-semibold mb-4">Profile blocks</h2><Callout type="info" title="Exact person-profile catalog">Community builders have a different catalog.</Callout><div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">{blocks.map(block => <div key={block} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium">{block}</div>)}</div></section>
      <section id="workflow"><h2 className="text-2xl font-semibold mb-4">Build and publish</h2><div className="space-y-5"><Step number={1} title="Add or enable blocks"><p className="text-muted-foreground">Choose the sections that belong in your profile.</p></Step><Step number={2} title="Reorder"><p className="text-muted-foreground">Drag enabled blocks into the order visitors should see.</p></Step><Step number={3} title="Edit settings"><p className="text-muted-foreground">Set block titles, item limits, Spotlight content, or curated entries where supported.</p></Step><Step number={4} title="Preview"><p className="text-muted-foreground">Review the visitor-facing layout before committing it.</p></Step><Step number={5} title="Publish"><p className="text-muted-foreground">Save the changed configuration to make it current.</p></Step></div></section>
    </div><PagerNav /></div><RightSidebar items={tocItems} /></div>;
}
