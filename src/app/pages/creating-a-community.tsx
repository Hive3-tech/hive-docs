import { Link } from 'react-router';
import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function CreatingCommunityPage() {
  const tocItems = [
    { id: 'before-you-start', label: 'Before you start' },
    { id: 'details', label: 'Community details' },
    { id: 'world-request', label: 'World media kit' },
    { id: 'next-steps', label: 'After creation' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Communities / <span className="text-foreground">Creating a Community</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Creating a Community</h1>
        <p className="text-lg text-muted-foreground mb-12">Create the community identity first, then send the team the visual references for its metaverse world.</p>

        <div className="space-y-12">
          <section id="before-you-start">
            <h2 className="text-2xl font-semibold mb-4">Before you start</h2>
            <Callout type="info" title="Swarm or Royal Hive required">
              Community creation is available to Swarm and Royal Hive members. Each account can own one community.
            </Callout>
            <p className="text-muted-foreground">If you already own a community, Hive3 returns you to your profile instead of opening another creation flow.</p>
          </section>

          <section id="details">
            <h2 className="text-2xl font-semibold mb-4">Step 1: Community details</h2>
            <Step number={1} title="Name and handle">
              Enter the community name and a unique handle. Handles use 3–30 lowercase letters, numbers, underscores, or hyphens.
            </Step>
            <Step number={2} title="Logo and banner">
              Upload the images that identify the community in its profile and cards.
            </Step>
            <Step number={3} title="Social links">
              Add the community's public social destinations, then review the details before continuing.
            </Step>
          </section>

          <section id="world-request">
            <h2 className="text-2xl font-semibold mb-4">Step 2: World media kit</h2>
            <p className="text-muted-foreground mb-4">
              Swarm and Royal Hive creation continues to a World media kit. Upload at least one logo, banner, or reference image that the Hive3 team can use when building your metaverse world.
            </p>
            <p className="text-muted-foreground">Creating the community submits those assets with a metaverse world request and then opens the new community.</p>
          </section>

          <section id="next-steps">
            <h2 className="text-2xl font-semibold mb-4">After creation</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-6">
              <li>Build the public overview and invitation page in <Link className="text-primary hover:underline" to="/community-profile-builder">Community Profile &amp; Welcome Page</Link>.</li>
              <li>Choose joining rules in <Link className="text-primary hover:underline" to="/community-settings">Community Settings</Link>.</li>
              <li>Assign trusted helpers through <Link className="text-primary hover:underline" to="/permissions">Permissions</Link>.</li>
              <li>Review people in <Link className="text-primary hover:underline" to="/members-and-applications">Members &amp; Applications</Link>.</li>
              <li>Connect chat, payments, or the assistant from the <Link className="text-primary hover:underline" to="/communities-overview">Community Dashboard</Link>.</li>
            </ul>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
