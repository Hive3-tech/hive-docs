import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode } from "../components/doc-components";
import { ChevronLeft, ChevronRight, FileUp, Settings2, Upload } from "lucide-react";
import { Link } from "react-router";

export function AIAssistantSetupPage() {
  const tocItems = [
    { id: "intro", label: "Requirements" },
    { id: "open", label: "Open AI settings" },
    { id: "configure", label: "Configure AI identity" },
    { id: "visibility", label: "Set visibility" },
    { id: "training", label: "Upload training docs" },
    { id: "save", label: "Save and publish" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Honey Bee (Profile) / <span className="text-foreground">AI Assistant Setup</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          AI Assistant Setup
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Configure your personal AI assistant profile, access rules, and training documents.
        </p>

        <div className="space-y-12">
          <section id="intro">
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <Callout type="info" title="Honey Bee requirement">
              AI settings are a Honey Bee feature on the profile dashboard. Lower tiers receive an upgrade prompt.
            </Callout>
          </section>

          <section id="open">
            <h2 className="text-2xl font-semibold mb-4">Open AI settings</h2>
            <p className="text-muted-foreground mb-4">
              Open from <InlineCode>/profile/dashboard</InlineCode> by clicking <InlineCode>AI</InlineCode>, or open
              directly at <InlineCode>/ai-settings</InlineCode>.
            </p>
            <p className="text-muted-foreground">
              The settings page is shared for profile and community AI agents, with profile context set by route.
            </p>
          </section>

          <section id="configure">
            <h2 className="text-2xl font-semibold mb-4">Configure AI identity</h2>
            <div className="space-y-6">
              <Step number={1} title="Set name and description">
                Fill the AI agent profile values that are surfaced during assistant interactions.
              </Step>
              <Step number={2} title="Upload avatar">
                Add a profile image for the assistant. The image is shown in the AI context and card UI.
              </Step>
              <Step number={3} title="Review defaults">
                Ensure avatar/name/description are aligned with your branding before saving.
              </Step>
            </div>
          </section>

          <section id="visibility">
            <h2 className="text-2xl font-semibold mb-4">Set visibility</h2>
            <p className="text-muted-foreground mb-4">
              Choose who can use your AI assistant:
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-1">
              <li><InlineCode>public</InlineCode> – all users can use your assistant.</li>
              <li><InlineCode>protected</InlineCode> – collaborators only.</li>
              <li><InlineCode>private</InlineCode> – only you can use it.</li>
            </ul>
            <Callout type="warning" title="Note">
              Public/protected/private values are implemented in the settings component and saved together with the profile
              agent record.
            </Callout>
          </section>

          <section id="training">
            <h2 className="text-2xl font-semibold mb-4">Upload training documents</h2>
            <p className="text-muted-foreground mb-4">
              Upload supporting documents so the assistant can reference your context.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileUp className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Document uploads</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Upload files from your local system; only after save can new documents be uploaded from an existing
                  agent record.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Upload className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">List management</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Manage existing docs per row: open details, delete old files, and keep the corpus clean.
                </p>
              </div>
            </div>
          </section>

          <section id="save">
            <h2 className="text-2xl font-semibold mb-4">Save and go live</h2>
            <Callout type="success" title="Action on save">
              After clicking Save, users are navigated back to their previous page and the assistant becomes available based on
              visibility rules.
            </Callout>
            <div className="mt-4">
              <Link
                to="/ai-settings"
                className="inline-flex items-center gap-2 text-[#6B01B6] hover:underline"
              >
                <Settings2 className="w-4 h-4" />
                Open AI Settings Page
              </Link>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/paypal-integration"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            PayPal Integration
          </Link>
          <Link
            to="/managing-collaborators"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Managing Collaborators
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
