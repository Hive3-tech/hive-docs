import { Callout } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function PostsAndFeedPage() {
  const tocItems = [
    { id: 'home-feed', label: 'Your home feed' },
    { id: 'discover', label: 'Discover' },
    { id: 'create', label: 'Create a post' },
    { id: 'interact', label: 'Join the conversation' },
    { id: 'my-hive', label: 'My Hive and directories' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Posts &amp; the Feed</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Posts &amp; the Feed</h1>
        <p className="text-lg text-muted-foreground mb-12">Follow updates from your network, discover public conversations, and share a post as yourself or a community.</p>
        <div className="space-y-12">
          <section id="home-feed">
            <h2 className="text-2xl font-semibold mb-4">Your home feed</h2>
            <p className="text-muted-foreground mb-4">The Buzz is your home feed. When signed in, it brings together posts from people you follow and communities you joined. Featured highlights selected posts in a separate tab.</p>
            <Callout type="info" title="Build your feed">If your feed is empty, follow people or join communities, or open Discover to find public activity.</Callout>
          </section>
          <section id="discover">
            <h2 className="text-2xl font-semibold mb-4">Discover</h2>
            <p className="text-muted-foreground">Discover is the public exploration area, while your home feed is personalized to your connections. Use it when you want to browse beyond the people and communities already in My Hive.</p>
          </section>
          <section id="create">
            <h2 className="text-2xl font-semibold mb-4">Create a post</h2>
            <p className="text-muted-foreground mb-4">Choose Create post, write your update, and optionally add hashtags, mentions, or an image. Select whether to publish as yourself or as a community you can represent, and confirm the visibility before posting.</p>
            <p className="text-muted-foreground">You can save an unfinished post as a draft and return to it from the Drafts list. Posting is available on the free Worker Bee plan.</p>
          </section>
          <section id="interact">
            <h2 className="text-2xl font-semibold mb-4">Join the conversation</h2>
            <p className="text-muted-foreground">Like a post, open its comments, or share its direct link. Mentions can identify people and communities in the post. Authors can edit their posts; authors and authorized community moderators can remove posts they manage.</p>
          </section>
          <section id="my-hive">
            <h2 className="text-2xl font-semibold mb-4">My Hive and directories</h2>
            <p className="text-muted-foreground">My Hive collects the people and communities in your network. Use the People and Communities directories to find profiles to follow and communities to join, then return to the feed to see their updates.</p>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
