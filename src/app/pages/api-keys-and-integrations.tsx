import { RightSidebar } from '../components/right-sidebar';
import { Callout, CodeBlock, InlineCode } from '../components/doc-components';
import { ChevronLeft, ChevronRight, KeyRound, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';

export function APIKeysAndIntegrationsPage() {
  const tocItems = [
    { id: 'overview', label: 'What this page is for' },
    { id: 'get-key', label: 'Get your API key' },

    { id: 'use-key', label: 'Use as Bearer token' },
    { id: 'notes', label: 'Important notes' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Developer Reference / <span className="text-foreground">API Keys</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          API Keys
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Generate a community API key and use it for server-side Hive3 integration endpoints.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What this page is for</h2>
            <p className="text-muted-foreground mb-4">
              The API Keys page is used to create integration keys for your community so external
              systems can call Hive3 APIs securely.
            </p>
            <Callout type="info" title="Tier access">
              API key management is available for Swarm and Royal Hive communities.
            </Callout>
          </section>

          <section id="get-key">
            <h2 className="text-2xl font-semibold mb-4">Get your API key</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-[#6B01B6]" />
                Create key flow
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Open your community dashboard and go to API Keys.</li>
                <li>
                  Click <InlineCode>Create key</InlineCode>.
                </li>
                <li>Enter a key name and confirm.</li>
                <li>Copy and store the full key immediately. It is only shown once.</li>
              </ul>
            </div>
          </section>

          <section id="use-key">
            <h2 className="text-2xl font-semibold mb-4">Use as Bearer token</h2>
            <p className="text-muted-foreground mb-4">
              Send the API key in your authorization header for API requests:
            </p>
            <CodeBlock
              language="bash"
              code={`curl -X POST https://api.hive3.tech/api/v1/communities/onboard \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "display_name": "Partner User",
    "username": "partner_user",
    "short_bio": "Building in Web3",
    "social_links": [{"platform":"x","url":"https://x.com/partner_user"}]
  }'`}
            />
          </section>

          <section id="notes">
            <h2 className="text-2xl font-semibold mb-4">Important notes</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Only one active community API key is supported at a time.</li>
                <li>Rotate or revoke keys immediately if you suspect exposure.</li>
                <li>Do not embed keys in public client apps.</li>
              </ul>
            </div>
            <Callout type="warning" title="Security reminder">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Treat your API key like a password and store it in your backend secret manager.
              </span>
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/linking-external-wallets"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Linking External Wallets
          </Link>
          <Link
            to="/api-reference"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Onboard
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
