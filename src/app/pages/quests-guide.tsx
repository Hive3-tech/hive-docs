import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function QuestsGuidePage() {
  const tocItems = [
    { id: 'how-quests-work', label: 'How quests work' },
    { id: 'enroll', label: 'Enroll and participate' },
    { id: 'evidence', label: 'Submit evidence' },
    { id: 'create', label: 'Create a quest' },
    { id: 'credits', label: 'Quest credits' },
    { id: 'review', label: 'Review participation' },
    { id: 'tasks', label: 'Tasks' },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Using Hive3 / <span className="text-foreground">Quests</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Quests</h1>
        <p className="text-lg text-muted-foreground mb-12">Complete measurable objectives, submit evidence, and earn rewards through time-bound community challenges.</p>
        <div className="space-y-12">
          <section id="how-quests-work">
            <h2 className="text-2xl font-semibold mb-4">How quests work</h2>
            <p className="text-muted-foreground">A quest contains one or more objectives and runs as a standard or streak challenge. Objectives can track Hive3 activity or request custom written, link, or document evidence. A quest moves from scheduled to active to ended.</p>
          </section>
          <section id="enroll">
            <h2 className="text-2xl font-semibold mb-4">Enroll and participate</h2>
            <p className="text-muted-foreground">An auto-enroll quest confirms you immediately. An approval-based quest places your application in pending status until a manager approves or denies it. Once enrolled, choose Begin Quest when the quest is active and work through its objectives.</p>
          </section>
          <section id="evidence">
            <h2 className="text-2xl font-semibold mb-4">Submit evidence</h2>
            <p className="text-muted-foreground mb-4">For a custom objective, follow its requested evidence type. Enter written evidence, provide a link, or attach a supported document or image. Each submission appears as pending, approved, or denied in its history.</p>
            <p className="text-muted-foreground">Completing every required objective completes the quest. If a completion credential is attached, claim it from Notifications → Rewards after you become eligible.</p>
          </section>
          <section id="create">
            <h2 className="text-2xl font-semibold mb-4">Create a quest</h2>
            <Callout type="info" title="Quest setup">A quest needs at least one objective. Community quests also require an available quest credit before they can be published.</Callout>
            <div className="space-y-5 mt-6">
              <Step number={1} title="Basic Info">Add the quest name, descriptions, banner, and badges.</Step>
              <Step number={2} title="Quest Schedule">Set start and end dates within the selected credit’s allowed duration.</Step>
              <Step number={3} title="Quest Builder">Choose standard or streak mode and configure the objectives and evidence requirements.</Step>
              <Step number={4} title="Visibility & Access">Choose automatic enrollment or applications, then Public, Members only, or Subscription / ticket access.</Step>
              <Step number={5} title="Credential">Optionally deploy and attach a completion credential.</Step>
            </div>
          </section>
          <section id="credits">
            <h2 className="text-2xl font-semibold mb-4">Quest credits</h2>
            <p className="text-muted-foreground">Communities purchase quest credits through PayPal. The credit plan determines how many quests can be published and the maximum duration available in the Schedule step. The community’s remaining balance is checked before creation.</p>
          </section>
          <section id="review">
            <h2 className="text-2xl font-semibold mb-4">Review participation</h2>
            <p className="text-muted-foreground">Managers open Enrollments from the quest page to approve or deny applications. The same management area shows participant evidence by objective; reviewers can inspect written responses, links, and attachments, then approve or deny each pending submission.</p>
          </section>
          <section id="tasks">
            <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
            <Callout type="info" title="Community workflow">Tasks are created by Honey Bee+ members and managed inside communities. Hive3 does not provide a global task catalog.</Callout>
          </section>
        </div>
        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
