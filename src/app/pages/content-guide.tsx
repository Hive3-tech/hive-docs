import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function ContentGuidePage() {
  const tocItems = [
    { id: 'content-vs-posts', label: 'Content and posts' },
    { id: 'browse', label: 'Browse content' },
    { id: 'create', label: 'Create content' },
    { id: 'access', label: 'Control access' },
    { id: 'edit', label: 'Edit content' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Content</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Content</h1>
        <p className="text-lg text-muted-foreground mb-12">Publish durable, long-form resources with descriptions, documents, badges, and audience controls.</p>
        <div className="space-y-12">
          <section id="content-vs-posts">
            <h2 className="text-2xl font-semibold mb-4">Content and posts</h2>
            <p className="text-muted-foreground">Use a post for a short update or conversation in the feed. Use Content for a structured article with a banner, full description, attachments, badges, and access rules. Current creator tools publish new entries as articles; the directory can also display existing Article, Video, and Tutorial entries.</p>
          </section>
          <section id="browse">
            <h2 className="text-2xl font-semibold mb-4">Browse content</h2>
            <p className="text-muted-foreground">Search Content by title or description and filter the directory by Article, Video, or Tutorial. A detail page renders its long-form body or PDF attachment and can suggest other entries of the same type.</p>
          </section>
          <section id="create">
            <h2 className="text-2xl font-semibold mb-4">Create content</h2>
            <Callout type="info" title="Honey Bee+">Creating content requires a Honey Bee, Swarm, or Royal Hive membership.</Callout>
            <div className="space-y-5 mt-6">
              <Step number={1} title="Basic Info">Add a banner, name, short description, and a full rich-text description or document attachment. Add up to five badges to help describe the entry.</Step>
              <Step number={2} title="Content Access">Choose Public, Members only, or Subscription access, then publish after reviewing the live preview.</Step>
            </div>
          </section>
          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Control access</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Public:</strong> anyone can read the entry.</li>
              <li><strong className="text-foreground">Members only:</strong> access is limited to members.</li>
              <li><strong className="text-foreground">Subscription:</strong> readers need the selected active subscription.</li>
            </ul>
            <p className="text-muted-foreground mt-4">Subscription access requires the owner to connect PayPal and create a subscription plan. Readers without access see the entry locked behind the subscription prompt.</p>
          </section>
          <section id="edit">
            <h2 className="text-2xl font-semibold mb-4">Edit content</h2>
            <p className="text-muted-foreground">Open an entry you manage and choose Edit to return to the same two-step builder. You can update its text, attachment, badges, visibility, and selected subscription before publishing the changes.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
