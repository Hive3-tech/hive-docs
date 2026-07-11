import { Figure } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

export function ProfileDashboardPage() {
  const tocItems = [{ id: "dashboard", label: "Dashboard at a glance" }, { id: "builders", label: "Profile builders" }, { id: "creator-tools", label: "Creator tools" }, { id: "relationships", label: "Communities and collaborators" }];
  return <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
    <div className="text-sm text-muted-foreground mb-6">Your Profile / <span className="text-foreground">Profile Dashboard</span></div>
    <h1 className="text-4xl font-bold mb-4 text-gradient">Profile Dashboard</h1>
    <p className="text-lg text-muted-foreground mb-12">Use your dashboard to understand your profile activity and open the tools that shape your public presence.</p>
    <div className="space-y-12">
      <section id="dashboard"><h2 className="text-2xl font-semibold mb-4">Dashboard at a glance</h2><p className="text-muted-foreground mb-6">The dashboard brings profile statistics and creator shortcuts together. Start here when you want to edit what visitors see or manage a profile feature.</p><Figure src="/imgs/profile-dashboard/overview-light.png" darkSrc="/imgs/profile-dashboard/overview-dark.png" alt="Hive3 profile dashboard overview" caption="Your profile dashboard adapts to the current theme." /></section>
      <section id="builders"><h2 className="text-2xl font-semibold mb-4">Profile builders</h2><p className="text-muted-foreground">Open the overview builder to arrange your profile blocks. The welcome-page builder controls the focused introduction visitors can see before exploring your full profile. Both are profile configurations, so preview your work before publishing it.</p></section>
      <section id="creator-tools"><h2 className="text-2xl font-semibold mb-4">Creator tools</h2><p className="text-muted-foreground">The PayPal shortcut opens your personal merchant connection, subscription plans, and tickets. The AI shortcut opens your personal assistant settings. These tools display an upgrade prompt when your membership does not include them.</p></section>
      <section id="relationships"><h2 className="text-2xl font-semibold mb-4">Communities and collaborators</h2><p className="text-muted-foreground">Switch to Communities to see spaces you own, administer, or moderate. Switch to Collaborators to search the people collaborating with you and review pending applications.</p></section>
    </div><PagerNav /></div><RightSidebar items={tocItems} /></div>;
}
