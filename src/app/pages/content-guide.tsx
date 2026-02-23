import { RightSidebar } from '../components/right-sidebar';
import { Callout, Step } from '../components/doc-components';
import {
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clapperboard,
  FileText,
  Lock,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function ContentGuidePage() {
  const tocItems = [
    { id: 'overview', label: 'What content includes' },
    { id: 'where-to-start', label: 'Where to start' },
    { id: 'create-flow', label: 'Create flow (3 steps)' },
    { id: 'content-types', label: 'Content types and editor' },
    { id: 'access', label: 'Access and subscription gate' },
    { id: 'publish-and-manage', label: 'Publish and manage' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Hive3 Features / <span className="text-foreground">Content Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Content Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Create and publish long-form content as articles or videos, with optional subscription
          access for premium publishing.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What content includes</h2>
            <p className="text-muted-foreground mb-4">
              Content is Hive3&apos;s publishing workflow for written and video-first posts with
              creator branding, rich descriptions, and optional subscriber-only access.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#6B01B6]" />
                  Long-form publishing
                </div>
                <p className="text-sm text-muted-foreground">
                  Publish article-style entries with rich text and optional document attachments.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-[#6B01B6]" />
                  Video publishing
                </div>
                <p className="text-sm text-muted-foreground">
                  Publish video entries using supported YouTube or Vimeo links, with the same
                  content metadata workflow.
                </p>
              </div>
            </div>
          </section>

          <section id="where-to-start">
            <h2 className="text-2xl font-semibold mb-4">Where to start</h2>
            <Callout type="info" title="Membership entry points">
              <ul className="list-disc list-inside space-y-1">
                <li>Profile dashboard content creation is a Honey Bee+ workflow.</li>
                <li>Community dashboard content creation is available in Swarm community workflows.</li>
              </ul>
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Your Profile dashboard
                </p>
                <p className="text-sm text-muted-foreground">
                  Use your Content section to create new posts and manage your creator publishing
                  library.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Community dashboard
                </p>
                <p className="text-sm text-muted-foreground">
                  Publish community-owned content and manage updates as part of community operations.
                </p>
              </div>
            </div>
          </section>

          <section id="create-flow">
            <h2 className="text-2xl font-semibold mb-4">Create flow (3 steps)</h2>
            <p className="text-muted-foreground mb-4">
              Content creation uses a fast 3-step flow:
            </p>
            <div className="space-y-6">
              <Step number={1} title="Basic Info">
                Add thumbnail/banner, content name, short description, content type (Article or
                Video), full description, and badges (up to 5).
                <br />
                Video entries require a valid YouTube or Vimeo URL.
              </Step>
              <Step number={2} title="Content Access">
                Choose whether the content is public or requires a subscription tier.
              </Step>
              <Step number={3} title="Review and publish">
                Review your metadata, content type, and access setup before creating or updating.
              </Step>
            </div>
          </section>

          <section id="content-types">
            <h2 className="text-2xl font-semibold mb-4">Content types and editor</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-[#6B01B6]" />
                  Type behavior
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Create mode currently supports Article and Video.</li>
                  <li>Video mode requires a YouTube or Vimeo URL.</li>
                  <li>Discovery filters can also include tutorial content where available.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6B01B6]" />
                  Editor tools
                </div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Rich description editor supports formatted text and inline media uploads.</li>
                  <li>Optional document attachment is supported in the same editor.</li>
                  <li>Description input supports larger long-form publishing content.</li>
                </ul>
              </div>
            </div>
            <Callout type="info" title="Preview behavior">
              In the Review step, PDF attachments are previewed directly and rich-text content is
              rendered as final-form content preview.
            </Callout>
          </section>

          <section id="access">
            <h2 className="text-2xl font-semibold mb-4">Access and subscription gate</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#6B01B6]" />
                  Public or gated
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>No subscription selected: content is publicly accessible.</li>
                  <li>Subscription selected: content is subscriber-only.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CircleDollarSign className="w-4 h-4 text-[#6B01B6]" />
                  Subscriber gating experience
                </p>
                <p className="text-sm text-muted-foreground">
                  Non-subscribers see a locked overlay and a subscription prompt until access is
                  granted.
                </p>
              </div>
            </div>
            <Callout type="info" title="Subscription setup requirement">
              You need at least one active subscription plan to use subscription gating for content.
              <div className="mt-2">
                <Link to="/profile-paypal" className="underline">
                  Link Paypal account
                </Link>{' '}
                for profile-owned content, or{' '}
                <Link to="/paypal-and-subscriptions" className="underline">
                  PayPal Integration
                </Link>{' '}
                for community-owned content.
              </div>
            </Callout>
          </section>

          <section id="publish-and-manage">
            <h2 className="text-2xl font-semibold mb-4">Publish and manage</h2>
            <p className="text-muted-foreground mb-4">
              After publishing, content appears in feed and detail experiences where users can
              discover and open entries.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#6B01B6]" />
                  Discovery
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Content page supports search by title/description.</li>
                  <li>Type filters include All, Article, Video, and Tutorial.</li>
                  <li>Each content detail page can show similar related content cards.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#6B01B6]" />
                  Creator controls
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Edit and update published content as needed.</li>
                  <li>Use delete/retire controls to remove content from active publishing lists.</li>
                  <li>Subscription gate settings can be adjusted in later edits.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/courses-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Courses Guide
          </Link>
          <Link
            to="/quests-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Quests Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
