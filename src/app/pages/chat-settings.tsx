import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Bot, MessageCircle, Settings } from "lucide-react";
import { Link } from "react-router";

export function ChatSettingsPage() {
  const tocItems = [
    { id: "access", label: "Open chat settings" },
    { id: "bots", label: "Bot integration types" },
    { id: "add", label: "Add integration" },
    { id: "sync", label: "Sync direction" },
    { id: "manage", label: "Manage and delete" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities (Swarm) / <span className="text-foreground">Chat Settings</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Chat Settings
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Configure bot integrations that sync community messages and channel activity.
        </p>

        <section id="access" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Open chat settings</h2>
          <p className="text-muted-foreground">
            Visit <InlineCode>/community/:id/chat-settings</InlineCode>, launched from dashboard action
            <InlineCode>Chat Settings</InlineCode>.
          </p>
          <Callout type="info" title="Instruction flow">
            The page shows setup instructions first, then the current integration list and an <InlineCode>+ Add Integration</InlineCode> action.
          </Callout>
        </section>

        <section id="bots" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Bot integration types</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <div className="font-semibold mb-1 flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#5865F2]" />
                Discord
              </div>
              <p className="text-sm text-muted-foreground">
                Add a Discord bot to sync messages from your server.
              </p>
              <p className="text-xs text-muted-foreground">Adds a sync channel for community moderation workflows.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <div className="font-semibold mb-1 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#0088cc]" />
                Telegram
              </div>
              <p className="text-sm text-muted-foreground">
                Add a Telegram bot to sync messages from your group.
              </p>
              <p className="text-xs text-muted-foreground">Useful for mobile-first community routing.</p>
            </div>
          </div>
        </section>

        <section id="add" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Add an integration</h2>
          <div className="space-y-6">
            <Step number={1} title="Add bot account">
              In your chat platform, add the Hive3 bot to your server/group using the platform-specific add button.
            </Step>
            <Step number={2} title="Collect channel identifier">
              Copy Discord server ID or Telegram group ID from platform settings.
            </Step>
            <Step number={3} title="Create integration">
              Open <InlineCode>+ Add Integration</InlineCode>, pick platform, paste channel ID, choose direction, save.
            </Step>
          </div>
          <CodeBlock
            language="text"
            code={`1) Install bot in Discord or Telegram
2) copy channelId / groupId
3) open Add Integration
4) select platform + sync direction
5) submit`}
          />
          <Callout type="warning" title="Platform IDs">
            Keep integration IDs exact; malformed values can prevent bot connection.
          </Callout>
        </section>

        <section id="sync" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Sync direction options</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Bidirectional</div>
              <p className="text-sm text-muted-foreground">
                Messages flow both from community chat and bot channel in both directions.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Inbound</div>
              <p className="text-sm text-muted-foreground">
                Inbound only sends platform messages into community context.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2">Outbound</div>
              <p className="text-sm text-muted-foreground">
                Outbound only sends community messages to the bot channel.
              </p>
            </div>
          </div>
        </section>

        <section id="manage" className="space-y-4">
          <h2 className="text-2xl font-semibold">Manage and delete integrations</h2>
          <div className="rounded-lg border border-border bg-card p-4">
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>All configured entries show platform, channel ID, sync direction, and status.</li>
              <li>Use <InlineCode>Delete</InlineCode> to remove an integration.</li>
              <li>Reloading while save is pending may retry partially; confirm backend response after delete.</li>
            </ul>
          </div>
          <Callout type="success" title="Error handling">
            If integrations fail to load, the page surfaces an error card and keeps controls available for retry.
          </Callout>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/admins-and-moderators"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Admins & Moderators
          </Link>
          <Link
            to="/ai-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            AI Settings
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
