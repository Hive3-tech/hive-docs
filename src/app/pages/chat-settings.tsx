import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import { Bot, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export function ChatSettingsPage() {
  const tocItems = [
    { id: 'at-a-glance', label: 'What this page controls' },
    { id: 'before-you-start', label: 'Before you start' },
    { id: 'add-bots', label: 'Add Hive3 bots' },
    { id: 'find-ids', label: 'Find Discord and Telegram IDs' },
    { id: 'add-integration', label: 'Add an integration' },
    { id: 'sync-direction', label: 'Sync direction options' },
    { id: 'manage-integrations', label: 'Manage integrations' },
    { id: 'save-and-next', label: 'Save and next' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities / <span className="text-foreground">Chat Settings</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Chat Settings
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Connect Discord and Telegram so your community can sync messages with external chat
          platforms.
        </p>

        <div className="space-y-12">
          <section id="at-a-glance">
            <h2 className="text-2xl font-semibold mb-4">What this page controls</h2>
            <p className="text-muted-foreground mb-4">
              Use this page to connect chat bots, add platform IDs, and control how messages sync
              between Hive3 and Discord or Telegram.
            </p>
            <Callout type="info" title="Access note">
              Chat settings are for community managers with owner or admin-level access.
            </Callout>
          </section>

          <section id="before-you-start">
            <h2 className="text-2xl font-semibold mb-4">Before you start</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Use Add Bot to connect Hive3 bot access in Discord or Telegram.</li>
                <li>Give the bot admin privileges in the target server or group.</li>
                <li>
                  Have your Discord channel ID or Telegram group ID ready before adding
                  integration.
                </li>
              </ul>
            </div>
          </section>

          <section id="add-bots">
            <h2 className="text-2xl font-semibold mb-4">Add Hive3 bots</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-[#5865F2]" />
                  Discord Bot
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect your Discord server to sync messages with your community.
                </p>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1417623607479111801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6B01B6] hover:underline"
                >
                  Add bot to Discord
                </a>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#0088cc]" />
                  Telegram Bot
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect your Telegram group to sync messages with your community.
                </p>
                <a
                  href="https://t.me/hive3_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6B01B6] hover:underline"
                >
                  Add bot to Telegram
                </a>
              </div>
            </div>
          </section>

          <section id="find-ids">
            <h2 className="text-2xl font-semibold mb-4">Find Discord and Telegram IDs</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Discord channel ID</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Use Discord Developer Mode and copy the channel ID you want to sync.</li>
                  <li>
                    Discord guide:
                    <a
                      href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-[#6B01B6] hover:underline"
                    >
                      Where can I find my channel ID?
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Telegram group ID</p>
                <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                  <li>Open web.telegram.org and sign in.</li>
                  <li>Open the group you want to sync.</li>
                  <li>Find the value after `#` in the URL (example: `#-5072553859`).</li>
                  <li>Use that value as your Telegram group ID.</li>
                </ol>
              </div>
            </div>
          </section>

          <section id="add-integration">
            <h2 className="text-2xl font-semibold mb-4">Add an integration</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                <li>Click Add Integration.</li>
                <li>Select platform: Discord or Telegram.</li>
                <li>Paste your Discord channel ID or Telegram group ID.</li>
                <li>Choose a sync direction.</li>
                <li>Click Add.</li>
              </ol>
            </div>
            <Callout type="warning" title="Validation note">
              Add stays disabled until a channel/group ID is entered.
            </Callout>
          </section>

          <section id="sync-direction">
            <h2 className="text-2xl font-semibold mb-4">Sync direction options</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Bidirectional</p>
                <p className="text-sm text-muted-foreground">
                  Messages sync both ways between Hive3 and your connected platform.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Inbound</p>
                <p className="text-sm text-muted-foreground">
                  External platform messages flow into Hive3 only.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Outbound</p>
                <p className="text-sm text-muted-foreground">
                  Hive3 messages flow out to Discord or Telegram only.
                </p>
              </div>
            </div>
          </section>

          <section id="manage-integrations">
            <h2 className="text-2xl font-semibold mb-4">Manage integrations</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Each integration shows platform, status, ID, and sync direction.</li>
                <li>Use Delete to remove an integration.</li>
                <li>If you need different settings, delete and add again.</li>
              </ul>
            </div>
            <div className="mt-4 space-y-4">
              <Callout type="info" title="Load states">
                The page includes loading and empty states when integrations are being fetched or
                none exist yet.
              </Callout>
              <Callout type="error" title="Error state">
                If integrations fail to load, the page shows an error card and asks you to refresh.
              </Callout>
            </div>
          </section>

          <section id="save-and-next">
            <h2 className="text-2xl font-semibold mb-4">Save and next</h2>
            <Callout type="success" title="No Save button needed">
              Adding and deleting integrations apply immediately.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/admins-and-moderators"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Permissions
          </Link>
          <Link
            to="/paypal-and-subscriptions"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            PayPal Integration
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
