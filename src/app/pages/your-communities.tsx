import { Link } from "react-router";
import { Callout } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

export function YourCommunitiesPage() {
  const tocItems = [{ id: "groups", label: "Communities by role" }, { id: "open", label: "Quick-open a community" }, { id: "create", label: "Create a community" }];
  return <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
    <div className="text-sm text-muted-foreground mb-6">Your Profile / <span className="text-foreground">Your Communities</span></div>
    <h1 className="text-4xl font-bold mb-4 text-gradient">Your Communities</h1>
    <p className="text-lg text-muted-foreground mb-12">Use the Communities view on your profile dashboard to return to the spaces you help lead.</p>
    <div className="space-y-12">
      <section id="groups"><h2 className="text-2xl font-semibold mb-4">Communities by role</h2><p className="text-muted-foreground mb-4">Hive3 groups your dashboard communities into three sections based on your live role:</p><div className="grid md:grid-cols-3 gap-4"><div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Owned</h3><p className="text-sm text-muted-foreground mt-2">Communities where you are the owner.</p></div><div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Admin of</h3><p className="text-sm text-muted-foreground mt-2">Communities where you serve as an administrator.</p></div><div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Moderator of</h3><p className="text-sm text-muted-foreground mt-2">Communities where you serve as a moderator.</p></div></div></section>
      <section id="open"><h2 className="text-2xl font-semibold mb-4">Quick-open a community</h2><p className="text-muted-foreground">Select a community card in any group to open that community without searching the public directory. The heading count makes it easy to check how many communities you hold in each role.</p></section>
      <section id="create"><h2 className="text-2xl font-semibold mb-4">Create a community</h2><Callout type="info" title="Swarm+ and one owned community">Creating a community requires Swarm or Royal Hive, and an account can own one community. The Create Community action is disabled after you own one.</Callout><p className="text-muted-foreground mt-4">See <Link to="/creating-a-community" className="text-primary hover:underline">Creating a Community</Link> for the full flow.</p></section>
    </div><PagerNav /></div><RightSidebar items={tocItems} /></div>;
}
