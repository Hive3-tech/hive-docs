import { RightSidebar } from '../components/right-sidebar';
import { Callout, Step } from '../components/doc-components';
import {
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Flame,
  Rocket,
  ShieldCheck,
  Target,
  Ticket,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

export function QuestsGuidePage() {
  const tocItems = [
    { id: 'overview', label: 'What quests include' },
    { id: 'where-to-start', label: 'Where to start' },
    { id: 'quest-credits', label: 'Quest credits and duration' },
    { id: 'create-flow', label: 'Create flow (5 steps)' },
    { id: 'objectives-and-modes', label: 'Objectives and quest modes' },
    { id: 'access-and-monetization', label: 'Access and monetization' },
    { id: 'participant-experience', label: 'Participant experience' },
    { id: 'owner-management', label: 'Owner and admin management' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Hive3 Features / <span className="text-foreground">Quests Guide</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Quests Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Design mission-based challenges for your community with objective tracking, review tools,
          and optional paid access.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What quests include</h2>
            <p className="text-muted-foreground mb-4">
              Quests are built for measurable participation. You define what members must complete,
              then Hive3 tracks progress and supports approval workflows for custom submissions.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#6B01B6]" />
                  Objective-driven experience
                </div>
                <p className="text-sm text-muted-foreground">
                  Set one or more objectives, add target counts, and define who or what the
                  objective applies to.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Full moderation tools
                </div>
                <p className="text-sm text-muted-foreground">
                  Review enrollments, approve or decline custom evidence, and manage quest lifecycle
                  from community management tools.
                </p>
              </div>
            </div>
          </section>

          <section id="where-to-start">
            <h2 className="text-2xl font-semibold mb-4">Where to start</h2>
            <Callout type="info" title="Community-only creator workflow">
              <ul className="list-disc list-inside space-y-1">
                <li>Quest creation is a Swarm community workflow and above.</li>
                <li>Quests are created from the Community dashboard, not the profile dashboard.</li>
              </ul>
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Community dashboard
                </div>
                <p className="text-sm text-muted-foreground">
                  Use the Quests section to launch, edit, delete, and moderate community quests.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#6B01B6]" />
                  Quest detail pages
                </div>
                <p className="text-sm text-muted-foreground">
                  Members can enroll, track progress, and submit objective evidence directly in each
                  quest.
                </p>
              </div>
            </div>
          </section>

          <section id="quest-credits">
            <h2 className="text-2xl font-semibold mb-4">Quest credits and duration</h2>
            <p className="text-muted-foreground mb-4">
              New community quests require available quest credits. When you start a quest, you pick
              the credit type based on duration.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CircleDollarSign className="w-4 h-4 text-[#6B01B6]" />
                  Quest Single
                </p>

                <p className="text-sm text-muted-foreground">1 quest, up to 7 days.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CircleDollarSign className="w-4 h-4 text-[#6B01B6]" />
                  Quest Bundle
                </p>

                <p className="text-sm text-muted-foreground">4 quests, up to 30 days each.</p>
              </div>
            </div>
          </section>

          <section id="create-flow">
            <h2 className="text-2xl font-semibold mb-4">Create flow (5 steps)</h2>
            <div className="space-y-6">
              <Step number={1} title="Basic Info">
                Add quest thumbnail/banner, title, short description, full description, and start
                date/time. End date is set automatically from the selected quest credit, with an
                optional custom end date inside your allowed range.
              </Step>
              <Step number={2} title="Quest Builder">
                Add objectives, set target counts, choose scope, and configure custom objective
                rules.
              </Step>
              <Step number={3} title="Credential">
                Optionally attach a completion credential reward.
              </Step>
              <Step number={4} title="Visibility & Access">
                Set auto-enroll behavior, choose visibility (public/protected/private), and
                optionally require a subscription or one-time quest ticket.
              </Step>
              <Step number={5} title="Review">
                Confirm all settings before publishing or updating.
              </Step>
            </div>
            <Callout type="info" title="Edit window">
              Quests stay editable until 30 minutes after the quest start time.
            </Callout>
          </section>

          <section id="objectives-and-modes">
            <h2 className="text-2xl font-semibold mb-4">Objectives and quest modes</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-[#6B01B6]" />
                  Standard Quest
                </p>
                <p className="text-sm text-muted-foreground">
                  Members complete objectives at their own pace before the quest ends.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#6B01B6]" />
                  Streak Quest
                </p>
                <p className="text-sm text-muted-foreground">
                  Members complete objectives on consecutive days. Streak duration supports 1 to 30
                  days.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold mb-2">Objective options</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Like posts</li>
                <li>Comment on posts</li>
                <li>Complete courses</li>
                <li>Attend metaverse events</li>
                <li>Custom task (manual evidence review)</li>
              </ul>
            </div>
            <Callout type="info" title="Custom objective evidence">
              For custom tasks, you can require one evidence type: written response, link, or
              document upload.
            </Callout>
          </section>

          <section id="access-and-monetization">
            <h2 className="text-2xl font-semibold mb-4">Access and monetization</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6B01B6]" />
                  Enrollment mode
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Auto-enroll on: members join immediately.</li>
                  <li>Auto-enroll off: members stay pending until approval.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CircleDollarSign className="w-4 h-4 text-[#6B01B6]" />
                  Subscription gate
                </p>
                <p className="text-sm text-muted-foreground">
                  Optionally require an active subscription before members can begin the quest.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-[#6B01B6]" />
                  One-time quest ticket
                </p>
                <p className="text-sm text-muted-foreground">
                  Optionally require one-time ticket purchase for quest access.
                </p>
              </div>
            </div>
            <Callout type="info" title="PayPal requirement">
              PayPal must be connected before you can use subscription gating or one-time quest
              tickets.
              <div className="mt-2">
                <Link to="/paypal-and-subscriptions" className="underline">
                  PayPal Integration
                </Link>{' '}
                should be completed in your community settings before enabling quest monetization.
              </div>
            </Callout>
          </section>

          <section id="participant-experience">
            <h2 className="text-2xl font-semibold mb-4">Participant experience</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Quest detail pages show Scheduled, Active, or Ended status.</li>
                <li>
                  Enrollment actions adapt to status: enroll, apply, pause, resume, or pending.
                </li>
                <li>
                  If subscription or ticket access is required, members see purchase options before
                  they can start.
                </li>
                <li>
                  Custom objective evidence is submitted on the quest page and reviewed by admins.
                </li>
                <li>Evidence history shows pending, approved, or denied results.</li>
                <li>
                  When all objectives are complete, members can claim credentials from Notifications
                  {' -> '}Claim Credentials.
                </li>
              </ul>
            </div>
          </section>

          <section id="owner-management">
            <h2 className="text-2xl font-semibold mb-4">Owner and admin management</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Enrollment moderation</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Open the quest&apos;s Enrollments view from the quest header.</li>
                  <li>Approve or decline pending enrollment requests.</li>
                  <li>Review participant progress and submitted evidence from one workspace.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Evidence decisions</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Review written, link, or document proof by participant.</li>
                  <li>Approve or deny each pending evidence submission.</li>
                  <li>Decisions update participant progress in real time.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Lifecycle controls</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Edit quest settings while the edit window is open.</li>
                  <li>Delete quests from dashboard management when you want to retire them.</li>
                  <li>Ended quests preserve past progress and completed records.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/content-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Content Guide
          </Link>
          <Link
            to="/jobs-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Jobs Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
