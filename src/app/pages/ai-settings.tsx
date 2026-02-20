import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Bot, FileInput, Eye, Upload } from "lucide-react";
import { Link } from "react-router";

export function AISettingsPage() {
  const tocItems = [
    { id: "open", label: "Open AI settings" },
    { id: "identity", label: "Name and description" },
    { id: "avatar", label: "Avatar upload" },
    { id: "visibility", label: "Visibility" },
    { id: "training", label: "Training documents" },
    { id: "save", label: "Save and use" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">AI Settings</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          AI Settings
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Configure a community AI assistant used by admins and members according to visibility rules.
        </p>

        <section id="open" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Open AI settings</h2>
          <p className="text-muted-foreground">
            Access via <InlineCode>/community/:id/ai-settings</InlineCode> from the community dashboard card
            <InlineCode>AI</InlineCode>.
          </p>
          <Callout type="info" title="Flow note">
            Community AI shares component structure with profile AI but is persisted per community context.
          </Callout>
        </section>

        <section id="identity" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Agent name and description</h2>
          <p className="text-muted-foreground">
            Set identity fields shown to users:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Agent name</div>
              <p className="text-sm text-muted-foreground">A short name used in chat prompts and headers.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Description</div>
              <p className="text-sm text-muted-foreground">Define personality and usage intent for clearer interactions.</p>
            </div>
          </div>
        </section>

        <section id="avatar" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Avatar upload</h2>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="font-semibold mb-2 flex items-center gap-2">
              <Upload className="w-4 h-4 text-[#6B01B6]" />
              Choose image
            </div>
            <p className="text-sm text-muted-foreground">
              Upload an image file to represent the AI agent. The UI stores a preview and sends it as the agent avatar.
            </p>
          </div>
        </section>

        <section id="visibility" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Visibility settings</h2>
          <p className="text-muted-foreground mb-2">
            Community AI supports three access levels:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Public</div>
              <p className="text-sm text-muted-foreground">Open access for community context.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Protected</div>
              <p className="text-sm text-muted-foreground">Only community members can use the assistant.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Private</div>
              <p className="text-sm text-muted-foreground">Limited to community admins.</p>
            </div>
          </div>
          <Callout type="warning" title="Community context">
            The value is applied in the same visibility component used by user AI, with community-aware copy.
          </Callout>
        </section>

        <section id="training" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Training documents</h2>
          <div className="space-y-6">
            <Step number={1} title="Upload docs">
              Use file picker in <InlineCode>Upload Document</InlineCode> and select PDFs/context files.
            </Step>
            <Step number={2} title="List and manage">
              Review uploaded files in the documents list.
            </Step>
            <Step number={3} title="Delete when stale">
              Remove outdated docs to keep responses relevant.
            </Step>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileInput className="w-4 h-4 text-[#6B01B6]" />
              <div className="font-semibold">Upload state</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Upload is disabled if no agent record exists yet; save identity first to create the agent record.
            </p>
          </div>
        </section>

        <section id="save" className="space-y-4">
          <h2 className="text-2xl font-semibold">Save and use</h2>
          <p className="text-muted-foreground">
            After saving, return action sends you back to dashboard and the agent is available in community scope.
          </p>
          <CodeBlock
            language="text"
            code={`/community/:id/ai-settings
set name, description, avatar
set visibility
upload documents
click Save`}
          />
          <Callout type="success" title="Result">
            With visibility configured, members and admins can use the assistant according to role/access policy.
          </Callout>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/chat-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Chat Settings
          </Link>
          <Link
            to="/paypal-and-subscriptions"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            PayPal & Subscriptions
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
