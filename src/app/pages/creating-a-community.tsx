import { RightSidebar } from '../components/right-sidebar';
import { Callout } from '../components/doc-components';
import { AtSign, ChevronLeft, ChevronRight, Globe, Image, Shield, Users } from 'lucide-react';
import { Link } from 'react-router';

export function CreatingCommunityPage() {
  const tocItems = [
    { id: 'at-a-glance', label: 'What this page does' },
    { id: 'before-you-start', label: 'Before you start' },
    { id: 'open-flow', label: 'Open create flow' },
    { id: 'details', label: 'Community details' },
    { id: 'media-socials', label: 'Images and social links' },
    { id: 'create', label: 'Create community' },
    { id: 'after-create', label: 'After creation' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities / <span className="text-foreground">Creating a Community</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Creating a Community
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Launch your community with your name, handle, visuals, and social links in one guided
          setup screen.
        </p>

        <div className="space-y-12">
          <section id="at-a-glance">
            <h2 className="text-2xl font-semibold mb-4">What this page does</h2>
            <p className="text-muted-foreground mb-4">
              Think of this page as your community launch pad. You set the public basics first, then
              create the community and continue setup in community settings.
            </p>
            <Callout type="info" title="Header actions">
              The page includes a <span className="font-medium">Back to Dashboard</span> button and
              a <span className="font-medium">Cancel</span> action at the bottom.
            </Callout>
          </section>

          <section id="before-you-start">
            <h2 className="text-2xl font-semibold mb-4">Before you start</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#6B01B6]" />
                  Swarm access required
                </p>
                <p className="text-sm text-muted-foreground">
                  Community creation requires Swarm tier (or higher).
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  One community owner limit
                </p>
                <p className="text-sm text-muted-foreground">
                  If you already own a community, the create flow is blocked.
                </p>
              </div>
            </div>
          </section>

          <section id="open-flow">
            <h2 className="text-2xl font-semibold mb-4">Open create flow</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                <li>Open your Profile Dashboard.</li>
                <li>Select Communities.</li>
                <li>Click Create Community.</li>
              </ol>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              If your account is below Swarm tier, Hive3 shows the membership upgrade prompt instead
              of opening the create screen.
            </p>
          </section>

          <section id="media-socials">
            <h2 className="text-2xl font-semibold mb-4">Images and social links</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Image className="w-4 h-4 text-[#6B01B6]" />
                  Community logo and hero image
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Both image uploads are optional.</li>
                  <li>You can remove an uploaded image before creating.</li>
                  <li>Upload supports standard image files.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#6B01B6]" />
                  Social links section
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Starts with one social row by default.</li>
                  <li>Choose a platform and add a valid URL.</li>
                  <li>Add or remove rows as needed.</li>
                  <li>Only completed rows are saved.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="details">
            <h2 className="text-2xl font-semibold mb-4">Community details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Community Name (required)</p>
                <p className="text-sm text-muted-foreground">
                  This is your primary display name across cards and profile views.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <AtSign className="w-4 h-4 text-[#6B01B6]" />
                  Community Handle (required)
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Unique @handle for your community.</li>
                  <li>3 to 30 characters.</li>
                  <li>Lowercase letters, numbers, and underscores.</li>
                  <li>Input is auto-formatted to match allowed characters.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Short Description (optional)</p>
                <p className="text-sm text-muted-foreground">
                  A quick summary line for your community.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Full Description (optional)</p>
                <p className="text-sm text-muted-foreground">
                  Longer detail about your mission, audience, and goals.
                </p>
              </div>
            </div>
          </section>

          <section id="after-create">
            <h2 className="text-2xl font-semibold mb-4">After creation</h2>
            <p className="text-muted-foreground mb-4">
              After a successful create, Hive3 takes you directly to your new community page.
            </p>
            <Callout type="info" title="Recommended next step">
              Open{' '}
              <Link to="/community-settings" className="text-[#6B01B6] hover:underline">
                Community Settings
              </Link>{' '}
              to configure privacy, access mode, guidelines, and other management controls.
            </Callout>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/communities-overview"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Community Dashboard Overview
          </Link>
          <Link
            to="/community-settings"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Community Settings
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
