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
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function AISettingsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'community-experience', label: 'Community experience' },
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
          Communities / <span className="text-foreground">Community AI Assistant</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Community AI Assistant
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Set up your community AI assistant identity, choose visibility, and manage training
          documents for stronger assistant responses.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">
              This page controls your community-level AI assistant. You can configure assistant
              details, visibility, and training documents in one place.
            </p>
          </section>

          <section id="community-experience">
            <h2 className="text-2xl font-semibold mb-4">Community experience</h2>
            <ul className="text-muted-foreground list-disc list-inside space-y-1">
              <li>
                Communities can show an <span className="font-medium">AI</span> badge when
                visibility is set to Public or Protected.
              </li>
              <li>
                The community profile chat experience follows your selected visibility level.
              </li>
              <li>
                Community card and profile AI signals update from your assistant visibility
                configuration.
              </li>
            </ul>
          </section>

          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Access requirements</h2>
            <Callout type="info" title="Community manager access">
              The community AI settings page is available in community dashboard workflows for
              community managers (owner/admin access context).
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
                  Upload an image to represent your community assistant and preview it before
                  saving.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <UserCircle className="w-4 h-4 text-[#6B01B6]" />
                  Assistant name
                </p>
                <p className="text-sm text-muted-foreground">
                  Set the assistant display name your community members will see.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#6B01B6]" />
                  Assistant description
                </p>
                <p className="text-sm text-muted-foreground">
                  Add a short description that guides your assistant voice and purpose.
                </p>
              </div>
            </div>

            <Callout type="info" title="First-time defaults">
              For a new community AI assistant, Hive3 starts with default values such as assistant
              name and Public visibility, so you can save quickly and refine afterward.
            </Callout>
          </section>

          <section id="visibility">
            <h2 className="text-2xl font-semibold mb-4">Visibility controls</h2>
            <p className="text-muted-foreground mb-4">Choose who can use your community assistant:</p>
            <ul className="text-muted-foreground list-disc list-inside space-y-1">
              <li>
                <InlineCode>Public</InlineCode> - all logged in members can use.
              </li>
              <li>
                <InlineCode>Protected</InlineCode> - only community members can use.
              </li>
              <li>
                <InlineCode>Private</InlineCode> - only community admins can use.
              </li>
            </ul>
            <Callout type="warning" title="Visibility reminder">
              Set visibility intentionally, because it controls assistant usage access in community
              contexts.
            </Callout>
          </section>

          <section id="training">
            <h2 className="text-2xl font-semibold mb-4">Training documents</h2>
            <p className="text-muted-foreground mb-4">
              Upload source files so the community assistant has better context when answering.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileUp className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Upload and list</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Upload documents and review each file by name, size, and upload date in the
                  documents list.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-[#6B01B6]" />
                  <span className="font-semibold">Cleanup control</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Delete stale files to keep assistant context accurate and relevant.
                </p>
              </div>
            </div>

            <Callout type="info" title="Important first step">
              Save the assistant first, then upload training documents. Upload stays disabled until
              the first save is complete.
            </Callout>
          </section>

          <section id="save">
            <h2 className="text-2xl font-semibold mb-4">Save and return</h2>
            <Callout type="success" title="When you click Save Changes">
              Hive3 saves your community AI assistant settings and returns you to Community
              Dashboard.
            </Callout>
            <p className="text-sm text-muted-foreground mt-4">
              Use <span className="font-medium">Cancel</span> to leave without saving new changes.
            </p>
          </section>

          <section id="troubleshooting">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>If this page is blocked, confirm owner/admin management access.</li>
              <li>If document upload is disabled, save assistant settings first.</li>
              <li>
                If expected users cannot access AI, review visibility mode and membership/admin
                requirements.
              </li>
              <li>
                If AI status does not update in community views, save changes and reload the
                community view.
              </li>
            </ul>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/paypal-and-subscriptions"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            PayPal Integration
          </Link>
          <Link
            to="/managing-members"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Members
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
