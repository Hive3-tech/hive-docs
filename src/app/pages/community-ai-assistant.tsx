import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function CommunityAiAssistantPage() {
  const tocItems = [
    { id: 'access', label: 'Who can manage it' },
    { id: 'identity', label: 'Identity and visibility' },
    { id: 'launch', label: 'Launch and update' },
    { id: 'training', label: 'Training documents' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Communities / <span className="text-foreground">Community AI Assistant</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Community AI Assistant</h1>
        <p className="text-lg text-muted-foreground mb-12">Give your community a named assistant, choose its audience, and train it with approved documents.</p>
        <div className="space-y-12">
          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Who can manage it</h2>
            <Callout type="info" title="Community authority, not personal tier">The community assistant is managed through community ownership and admin authority. It does not use the personal AI assistant's Honey Bee membership gate.</Callout>
          </section>
          <section id="identity">
            <h2 className="text-2xl font-semibold mb-4">Identity and visibility</h2>
            <p className="text-muted-foreground mb-4">Upload an avatar, enter a name, and write a description that explains the assistant's purpose. Names may contain up to 80 characters and descriptions up to 2,000.</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Public</h3><p className="text-sm text-muted-foreground mt-1">All signed-in Hive3 members can use it.</p></div>
              <div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Protected</h3><p className="text-sm text-muted-foreground mt-1">Only community members can use it.</p></div>
              <div className="rounded-lg border border-border p-4"><h3 className="font-semibold">Private</h3><p className="text-sm text-muted-foreground mt-1">Only community admins can use it.</p></div>
            </div>
          </section>
          <section id="launch">
            <h2 className="text-2xl font-semibold mb-4">Launch and update</h2>
            <Step number={1} title="Complete the identity">Add the assistant's name, description, avatar, and visibility.</Step>
            <Step number={2} title="Launch Assistant">The first save launches the assistant. Later saves update the existing assistant.</Step>
          </section>
          <section id="training">
            <h2 className="text-2xl font-semibold mb-4">Training documents</h2>
            <p className="text-muted-foreground mb-4">Upload PDF, DOCX, or TXT files up to 5 MiB each. Hive3 accepts up to 50 documents per assistant and extracts their text for training.</p>
            <Callout type="info" title="Launching before upload">Training belongs to a launched assistant. If you upload while creating a new assistant, Hive3 first saves and launches it, then starts the document upload.</Callout>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
