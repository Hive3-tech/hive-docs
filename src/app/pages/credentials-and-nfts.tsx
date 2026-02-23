import { RightSidebar } from '../components/right-sidebar';
import { Callout, Step } from '../components/doc-components';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Target,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router';

export function CredentialsAndNFTsPage() {
  const tocItems = [
    { id: 'overview', label: 'What credentials are' },
    { id: 'where-used', label: 'Where credentials are used' },
    { id: 'setup', label: 'Set up credential rewards' },
    { id: 'claiming', label: 'Eligibility and claiming' },
    { id: 'wallet', label: 'Wallet and network requirements' },
    { id: 'configuration', label: 'Credential settings you control' },
    { id: 'visibility', label: 'Where credentials appear' },
    { id: 'states', label: 'Common credential states' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Wallet & Credentials / <span className="text-foreground">Credentials</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Credentials
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Credentials are verifiable achievement assets in Hive3 that can be earned through platform
          activity and minted as on-chain proof.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What credentials are</h2>
            <p className="text-muted-foreground mb-4">
              A credential represents completion or participation. It can be attached to creator
              experiences and then claimed by eligible members.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#6B01B6]" />
                  Achievement proof
                </p>
                <p className="text-sm text-muted-foreground">
                  Credentials act as badge-style proof for user progress and outcomes.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  On-chain capable
                </p>
                <p className="text-sm text-muted-foreground">
                  Credentials can be deployed and minted as blockchain-backed assets.
                </p>
              </div>
            </div>
          </section>

          <section id="where-used">
            <h2 className="text-2xl font-semibold mb-4">Where credentials are used</h2>
            <p className="text-muted-foreground mb-4">
              Credentials are part of multiple Hive3 workflows, including reward-based creator
              experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6B01B6]" />
                  Events
                </p>
                <p className="text-sm text-muted-foreground">
                  Event creators can enable credential rewards for attendee outcomes.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#6B01B6]" />
                  Courses
                </p>
                <p className="text-sm text-muted-foreground">
                  Course creators can issue credentials tied to completion.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#6B01B6]" />
                  Quests
                </p>
                <p className="text-sm text-muted-foreground">
                  Quest creators can attach credentials as mission completion rewards.
                </p>
              </div>
            </div>
            <Callout type="info" title="Standalone credentials">
              You can also create a standalone credential directly when you need a general reward
              not tied to a single event, course, or quest.
            </Callout>
          </section>

          <section id="setup">
            <h2 className="text-2xl font-semibold mb-4">Set up credential rewards</h2>
            <p className="text-muted-foreground mb-4">
              In event, course, and quest creation, credentials are managed from the reward or
              credential step.
            </p>
            <div className="space-y-6">
              <Step number={1} title="Open the reward step">
                In your create flow, go to the credential/reward step for that experience.
              </Step>
              <Step number={2} title="Enable credential reward">
                Turn on credential rewards and configure the credential details.
              </Step>
              <Step number={3} title="Review and publish">
                Confirm the setup in review, then publish your event, course, or quest.
              </Step>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Related guides:{' '}
              <Link to="/events-guide" className="underline">
                Events
              </Link>{' '}
              ·{' '}
              <Link to="/courses-guide" className="underline">
                Courses
              </Link>{' '}
              ·{' '}
              <Link to="/quests-guide" className="underline">
                Quests
              </Link>
            </div>
          </section>

          <section id="claiming">
            <h2 className="text-2xl font-semibold mb-4">Eligibility and claiming</h2>
            <p className="text-muted-foreground mb-4">
              Hive3 checks eligibility from your participation/completion data. Eligible credentials
              are surfaced in Notifications under claim workflows.
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Claimable credentials can come from events, courses, and quests.</li>
                <li>You can view eligibility before minting.</li>
                <li>Already minted credentials do not become claimable again.</li>
              </ul>
            </div>
            <Callout type="success" title="Claim location">
              Use Notifications and open the Claim Credentials view to review and claim what you are
              currently eligible for.
            </Callout>
          </section>

          <section id="wallet">
            <h2 className="text-2xl font-semibold mb-4">Wallet and network requirements</h2>
            <p className="text-muted-foreground mb-4">
              Wallet readiness is required for on-chain mint actions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-[#6B01B6]" />
                  Default wallet behavior
                </p>
                <p className="text-sm text-muted-foreground">
                  Your default wallet is used for credential claim and wallet-based credential
                  actions.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Network context
                </p>
                <p className="text-sm text-muted-foreground">
                  Credential deployment/minting runs on Base environments (mainnet or Base Sepolia
                  in testnet mode).
                </p>
              </div>
            </div>
            <Callout type="info" title="Wallet options">
              You can use the built-in Circle wallet or linked external wallets as part of your
              credential workflow.
              <div className="mt-2">
                <Link to="/circle-wallet" className="underline">
                  Circle Wallet
                </Link>{' '}
                ·{' '}
                <Link to="/linking-external-wallets" className="underline">
                  Linking External Wallets
                </Link>
              </div>
            </Callout>
          </section>

          <section id="configuration">
            <h2 className="text-2xl font-semibold mb-4">Credential settings you control</h2>
            <p className="text-muted-foreground mb-4">
              The credential builder supports core metadata and optional minting controls.
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Required metadata: name, description, credential image.</li>
                <li>Optional attributes for trait-style metadata.</li>
                <li>Optional max supply (or unlimited supply).</li>
                <li>Optional start and end windows for mint availability.</li>
              </ul>
            </div>
          </section>

          <section id="visibility">
            <h2 className="text-2xl font-semibold mb-4">Where credentials appear</h2>
            <p className="text-muted-foreground mb-4">
              Credentials are visible across profile and notification experiences after creation and
              claim eligibility checks.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Profile display</p>
                <p className="text-sm text-muted-foreground">
                  Credentials show as tile-style assets on profile credential/token surfaces.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Notifications display</p>
                <p className="text-sm text-muted-foreground">
                  Claimable credentials are listed in notification-side claim panels.
                </p>
              </div>
            </div>
          </section>

          <section id="states">
            <h2 className="text-2xl font-semibold mb-4">Common credential states</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B01B6]" />
                  Eligible to claim
                </p>
                <p className="text-sm text-muted-foreground">
                  You met completion/attendance rules and can move forward with claim flow.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Already minted</p>
                <p className="text-sm text-muted-foreground">
                  The credential has already been claimed, so it will not show as claimable again.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2">Not eligible yet</p>
                <p className="text-sm text-muted-foreground">
                  Completion or participation requirements are not met yet for that credential.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/quests-and-tasks"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Task Guide
          </Link>
          <Link
            to="/circle-wallet"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Circle Wallet
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
