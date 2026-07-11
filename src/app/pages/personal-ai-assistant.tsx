import { Callout, Step } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

export function PersonalAiAssistantPage() {
  const tocItems = [{ id: "access", label: "Access" }, { id: "identity", label: "Identity and instructions" }, { id: "visibility", label: "Visibility" }, { id: "launch", label: "Launch or update" }, { id: "training", label: "Training documents" }];
  return <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
    <div className="text-sm text-muted-foreground mb-6">Your Profile / <span className="text-foreground">Personal AI Assistant</span></div>
    <h1 className="text-4xl font-bold mb-4 text-gradient">Personal AI Assistant</h1>
    <p className="text-lg text-muted-foreground mb-12">Configure an assistant that represents your profile using the identity, description, visibility, and documents you provide.</p>
    <div className="space-y-12">
      <section id="access"><h2 className="text-2xl font-semibold mb-4">Access</h2><Callout type="info" title="Honey Bee+ feature">Personal AI assistants require Honey Bee, Swarm, or Royal Hive membership. Worker Bee accounts see an upgrade prompt.</Callout></section>
      <section id="identity"><h2 className="text-2xl font-semibold mb-4">Identity and instructions</h2><p className="text-muted-foreground">Set the assistant’s name, description, and avatar. Use the description to explain its role and the guidance it should follow when speaking for your profile.</p></section>
      <section id="visibility"><h2 className="text-2xl font-semibold mb-4">Visibility</h2><p className="text-muted-foreground">Choose <strong>Public</strong> when visitors may use the assistant or <strong>Private</strong> when it should not be publicly available.</p></section>
      <section id="launch"><h2 className="text-2xl font-semibold mb-4">Launch or update</h2><div className="space-y-5"><Step number={1} title="Review the settings"><p className="text-muted-foreground">Confirm the identity, description, avatar, and visibility.</p></Step><Step number={2} title="Launch Assistant"><p className="text-muted-foreground">Launch creates and saves a new assistant.</p></Step><Step number={3} title="Update Assistant"><p className="text-muted-foreground">After launch, use Update Assistant to save later changes.</p></Step></div></section>
      <section id="training"><h2 className="text-2xl font-semibold mb-4">Training documents</h2><p className="text-muted-foreground">Upload documents that give the assistant more context, and remove files that are no longer relevant. Training documents attach to a saved assistant. If you upload a document while configuring a new assistant, Hive3 launches the assistant first and then attaches the file.</p></section>
    </div><PagerNav /></div><RightSidebar items={tocItems} /></div>;
}
