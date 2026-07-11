import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

const blocks = [
  ['Spotlight', 'Feature a primary message or item.'],
  ['About', 'Show the community description or attached PDF.'],
  ['Guidelines', 'Present community rules and expectations.'],
  ['Subscriptions', 'Show available community subscription plans.'],
  ['Events', 'Feature community events.'],
  ['Courses', 'Feature community courses.'],
  ['Quests', 'Feature active community quests.'],
  ['Jobs', 'Feature community job listings.'],
  ['Credentials', 'Show credentials issued by the community.'],
] as const;

export function CommunityProfileBuilderPage() {
  const tocItems = [
    { id: 'two-pages', label: 'Overview and welcome page' },
    { id: 'blocks', label: 'Block catalog' },
    { id: 'publish', label: 'Build and publish' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Communities / <span className="text-foreground">Community Profile &amp; Welcome Page</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Community Profile &amp; Welcome Page</h1>
        <p className="text-lg text-muted-foreground mb-12">Arrange reusable blocks to tell your community's story and guide visitors toward joining.</p>
        <div className="space-y-12">
          <section id="two-pages">
            <h2 className="text-2xl font-semibold mb-4">Overview and welcome page</h2>
            <p className="text-muted-foreground mb-4">The Community Builder lets managers edit the community overview and its welcome-page layout. The welcome page appears at <code>/community/:slug/welcome</code> when people follow an invitation.</p>
            <Callout type="info" title="Invitation destination">Use the welcome page to introduce the community before a visitor joins. Keep access rules and paid options aligned with Community Settings.</Callout>
          </section>
          <section id="blocks">
            <h2 className="text-2xl font-semibold mb-4">Block catalog</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {blocks.map(([name, description]) => (
                <div key={name} className="rounded-lg border border-border p-4"><h3 className="font-semibold">{name}</h3><p className="text-sm text-muted-foreground mt-1">{description}</p></div>
              ))}
            </div>
          </section>
          <section id="publish">
            <h2 className="text-2xl font-semibold mb-4">Build and publish</h2>
            <Step number={1} title="Choose a page">Open the overview or welcome-page builder from the community dashboard.</Step>
            <Step number={2} title="Add and arrange blocks">Choose only from the community block catalog, edit each block, and arrange the layout.</Step>
            <Step number={3} title="Review and save">Check the draft in the builder, then save it to publish the updated community presentation.</Step>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
