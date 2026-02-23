import { RightSidebar } from '../components/right-sidebar';
import { Callout, InlineCode } from '../components/doc-components';
import {
  ChevronLeft,
  ChevronRight,
  FileUp,
  MessageSquare,
  Shield,
  Sparkles,
  UserCircle,
} from 'lucide-react';
import { Link } from 'react-router';

export function AIAssistantSetupPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'profile-experience', label: 'Profile experience' },
    { id: 'access', label: 'Access requirements' },
    { id: 'identity', label: 'Assistant identity' },
    { id: 'visibility', label: 'Visibility controls' },
    { id: 'training', label: 'Training documents' },
    { id: 'save', label: 'Save and return' },
    { id: 'troubleshooting', label: 'Troubleshooting' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Your Profile / <span className="text-foreground">Personal AI Assistant</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Personal AI Assistant
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Set up your AI assistant identity, choose who can use it, and add training documents for
          better responses on your profile.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">
              This page controls your profile-level AI assistant. You can personalize assistant
              identity, set visibility, and manage training documents in one place.
            </p>
          </section>

          <section id="profile-experience">
            <h2 className="text-2xl font-semibold mb-4">Profile experience</h2>
            <ul className="text-muted-foreground list-disc list-inside space-y-1">
              <li>Your assistant can appear on your public profile as a chat sidebar.</li>
              <li>
                Public and Protected setups can show an AI badge on your profile header and people
                cards.
              </li>
              <li>Who can open and use the assistant depends on the visibility level you set.</li>
            </ul>
          </section>

          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Access requirements</h2>
            <Callout type="info" title="Membership requirement">
              The AI action in Profile Dashboard is available for Honey Bee+ memberships (Honey Bee,
              Swarm, and Royal Hive). Worker Bee users see an upgrade prompt.
            </Callout>
          </section>

          <section id="identity">
            <h2 className="text-2xl font-semibold mb-4">Assistant identity</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6B01B6]" />
                  Avatar image
                </p>
                <p className="text-sm text-muted-foreground">
                  Choose an image file for your assistant avatar and preview it before saving.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <UserCircle className="w-4 h-4 text-[#6B01B6]" />
                  Assistant name
                </p>
                <p className="text-sm text-muted-foreground">
                  Set the display name users will see when interacting with your assistant.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#6B01B6]" />
                  Assistant description
                </p>
                <p className="text-sm text-muted-foreground">
                  Add a short description that defines your assistant's purpose and tone.
                </p>
              </div>
            </div>

            <Callout type="info" title="First-time defaults">
              For first-time setup, Hive3 pre-fills a default assistant name and starts with Public
              visibility, so you can save quickly and refine afterward.
            </Callout>
          </section>

          <section id="visibility">
            <h2 className="text-2xl font-semibold mb-4">Visibility controls</h2>
            <p className="text-muted-foreground mb-4">Choose who can use your profile assistant:</p>
            <ul className="text-muted-foreground list-disc list-inside space-y-1">
              <li>
                <InlineCode>Public</InlineCode> - available to profile visitors.
              </li>
              <li>
                <InlineCode>Protected</InlineCode> - available to approved connections and you.
              </li>
              <li>
                <InlineCode>Private</InlineCode> - available only to you.
              </li>
            </ul>
            <Callout type="warning" title="Visibility reminder">
              Use Protected or Private when you want tighter control over assistant access and
              profile-level AI conversations.
            </Callout>
          </section>

          <section id="training">
            <h2 className="text-2xl font-semibold mb-4">Training documents</h2>
            <p className="text-muted-foreground mb-4">
              Upload source documents so your assistant has better context for profile conversations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileUp className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Upload and list</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Upload files from your device, then review each document by name, file size, and
                  upload date in the list.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Cleanup control</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Delete outdated documents at any time to keep your assistant context focused and
                  current.
                </p>
              </div>
            </div>

            <Callout type="info" title="Important first step">
              Save the assistant first, then upload training documents. Upload is disabled until the
              first save is complete.
            </Callout>
          </section>

          <section id="save">
            <h2 className="text-2xl font-semibold mb-4">Save and return</h2>
            <Callout type="success" title="When you click Save Changes">
              Hive3 saves your AI assistant settings and returns you to Profile Dashboard.
            </Callout>
            <p className="text-sm text-muted-foreground mt-4">
              Use <span className="font-medium">Cancel</span> when you want to exit without saving
              new changes.
            </p>
          </section>

          <section id="troubleshooting">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>If the AI card is locked, confirm your membership tier is Honey Bee or higher.</li>
              <li>If document upload is disabled, save assistant settings first.</li>
              <li>If others cannot access your assistant, review visibility settings and access state.</li>
            </ul>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/profile-paypal"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Link Paypal account
          </Link>
          <Link
            to="/profile-communities"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Communities
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
