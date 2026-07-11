import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function ChatAndIntegrationsPage() {
  const tocItems = [
    { id: 'community-chat', label: 'Community chat' },
    { id: 'connect', label: 'Connect Discord or Telegram' },
    { id: 'sync', label: 'Sync direction' },
    { id: 'moderation', label: 'Moderation controls' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Communities / <span className="text-foreground">Chat &amp; Integrations</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Chat &amp; Integrations</h1>
        <p className="text-lg text-muted-foreground mb-12">Keep Hive3 community chat connected with a Discord channel or Telegram group.</p>
        <div className="space-y-12">
          <section id="community-chat">
            <h2 className="text-2xl font-semibold mb-4">Community chat</h2>
            <p className="text-muted-foreground">Members chat in the community conversation in Hive3. Messages arriving through a connected integration display a Hive, Discord, or Telegram source marker.</p>
          </section>
          <section id="connect">
            <h2 className="text-2xl font-semibold mb-4">Connect Discord or Telegram</h2>
            <Step number={1} title="Install the bot">For Discord, add the Hive3 Discord bot to the server. For Telegram, add <strong>@hive3_bot</strong> to the group. Give the bot the admin privileges required by the setup screen.</Step>
            <Step number={2} title="Identify the destination">Choose Discord or Telegram and enter the Discord channel ID or Telegram group ID.</Step>
            <Step number={3} title="Choose a direction">Select bidirectional, inbound, or outbound sync, then save the active integration.</Step>
            <Callout type="info" title="Admin setup">Chat Settings is a community management screen. The owner or an admin must create and update integrations.</Callout>
          </section>
          <section id="sync">
            <h2 className="text-2xl font-semibold mb-4">Sync direction</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-6">
              <li><strong>Bidirectional:</strong> move messages between Hive3 and the external destination.</li>
              <li><strong>Inbound:</strong> bring messages from Discord or Telegram into Hive3.</li>
              <li><strong>Outbound:</strong> send Hive3 community messages to the external destination.</li>
            </ul>
          </section>
          <section id="moderation">
            <h2 className="text-2xl font-semibold mb-4">Moderation controls</h2>
            <p className="text-muted-foreground">A sender can edit or delete their own community message. The community owner and admins can delete community messages, including messages mirrored from an integration. Chat Settings does not provide separate content-filter rules for each integration.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
