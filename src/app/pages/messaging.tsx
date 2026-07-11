import { Callout } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function MessagingPage() {
  const tocItems = [
    { id: 'layout', label: 'Open Messages' },
    { id: 'conversations', label: 'Direct and community chats' },
    { id: 'dm-rules', label: 'Direct-message access' },
    { id: 'safety', label: 'Unknown senders' },
    { id: 'controls', label: 'Conversation controls' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Messaging</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Messaging</h1>
        <p className="text-lg text-muted-foreground mb-12">Keep direct conversations and community chat activity together in Hive3.</p>
        <div className="space-y-12">
          <section id="layout">
            <h2 className="text-2xl font-semibold mb-4">Open Messages</h2>
            <p className="text-muted-foreground">Open Messages at <code className="rounded bg-muted px-1.5 py-0.5">/chats</code>. The conversation sidebar includes New Message, Unknown, and Archived views. Select a conversation to read its history and use the composer.</p>
          </section>
          <section id="conversations">
            <h2 className="text-2xl font-semibold mb-4">Direct and community chats</h2>
            <p className="text-muted-foreground">Direct conversations connect you with another person. Community conversations are shared spaces whose participation and moderation follow your community role. The composer supports text, emoji, and image attachments.</p>
          </section>
          <section id="dm-rules">
            <h2 className="text-2xl font-semibold mb-4">Direct-message access</h2>
            <Callout type="info" title="Membership rules">Worker Bee members can reply when someone messages them but cannot initiate a new direct-message thread. Honey Bee, Swarm, and Royal Hive members can choose New Message and start a conversation.</Callout>
          </section>
          <section id="safety">
            <h2 className="text-2xl font-semibold mb-4">Unknown senders</h2>
            <p className="text-muted-foreground mb-4">Starting a message with someone outside your collaborator network shows a collaboration warning. Messages from people outside your network are grouped under Unknown.</p>
            <p className="text-muted-foreground">Opening an unknown conversation shows an Unknown User warning before you continue. Review the sender and choose whether to accept or decline the conversation.</p>
          </section>
          <section id="controls">
            <h2 className="text-2xl font-semibold mb-4">Conversation controls</h2>
            <p className="text-muted-foreground">Press Enter to send or Shift+Enter for a new line. You can edit or delete your messages, react to messages, mute a conversation’s notifications, and archive or restore conversations. Community moderators may also be able to remove other messages.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
