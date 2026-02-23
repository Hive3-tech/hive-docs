import { RightSidebar } from '../components/right-sidebar';
import { Callout, Step, InlineCode } from '../components/doc-components';
import {
  ChevronLeft,
  ChevronRight,
  Link2,
  ShieldCheck,
  Trash2,
  Wallet,
  WalletCards,
} from 'lucide-react';
import { Link } from 'react-router';

export function LinkingExternalWalletsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'before-link', label: 'Before you link' },
    { id: 'link-flow', label: 'Link a wallet' },
    { id: 'manage', label: 'Manage linked wallets' },
    { id: 'default-wallet', label: 'Set default wallet' },
    { id: 'remove', label: 'Remove a wallet safely' },
    { id: 'troubleshooting', label: 'Troubleshooting' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Wallet & Credentials /{' '}
          <span className="text-foreground">Linking External Wallets</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Linking External Wallets
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Connect one or more external Web3 wallets to your Hive3 account, then choose which one
          should be your default.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-4">
              External wallets work side by side with your Circle Wallet. This gives you flexible
              wallet options while keeping one Hive3 profile.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <WalletCards className="w-4 h-4 text-[#6B01B6]" />
                  Multi-wallet support
                </p>
                <p className="text-sm text-muted-foreground">
                  You can link multiple external wallets and manage them from one wallet panel.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Ownership verification
                </p>
                <p className="text-sm text-muted-foreground">
                  Hive3 verifies wallet ownership by asking you to sign a secure verification
                  message.
                </p>
              </div>
            </div>
          </section>

          <section id="before-link">
            <h2 className="text-2xl font-semibold mb-4">Before you link</h2>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Open your wallet app or extension and unlock the wallet you want to link.</li>
              <li>Use the correct wallet account before you approve the connection prompt.</li>
              <li>Keep at least one login method on your account (wallet or email).</li>
            </ul>
            <Callout type="info" title="No need to replace Circle Wallet">
              Linking an external wallet does not remove your Circle Wallet. You can use both.
            </Callout>
          </section>

          <section id="link-flow">
            <h2 className="text-2xl font-semibold mb-4">Link a wallet</h2>
            <div className="space-y-4">
              <Step number={1} title="Open Manage Wallets">
                Go to your profile wallet panel and open wallet management.
              </Step>
              <Step number={2} title="Click Link Web3 Wallet">
                Select <InlineCode>Link Web3 Wallet</InlineCode>.
              </Step>
              <Step number={3} title="Approve connection">
                Approve the wallet connection request in your wallet app.
              </Step>
              <Step number={4} title="Sign verification message">
                Sign the verification message so Hive3 can confirm wallet ownership.
              </Step>
              <Step number={5} title="Confirm linked wallet appears">
                Your wallet will appear under <InlineCode>Linked Web3 Wallets</InlineCode>.
              </Step>
            </div>
          </section>

          <section id="manage">
            <h2 className="text-2xl font-semibold mb-4">Manage linked wallets</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-[#6B01B6]" />
                  View linked wallets
                </p>
                <p className="text-sm text-muted-foreground">
                  Every linked wallet appears in one list so you can review what is connected.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Link2 className="w-4 h-4 text-[#6B01B6]" />
                  Switch default
                </p>
                <p className="text-sm text-muted-foreground">
                  Use <InlineCode>Set as Default</InlineCode> on any linked wallet to switch.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Trash2 className="w-4 h-4 text-[#6B01B6]" />
                  Remove wallet
                </p>
                <p className="text-sm text-muted-foreground">
                  Remove wallets you no longer want linked from the wallet action menu.
                </p>
              </div>
            </div>
          </section>

          <section id="default-wallet">
            <h2 className="text-2xl font-semibold mb-4">Set default wallet</h2>
            <p className="text-muted-foreground mb-4">
              Your default wallet is used for wallet-first actions like credential claim workflows.
              You can switch your default at any time.
            </p>
            <Callout type="success" title="Fast switching">
              In wallet management, choose <InlineCode>Set as Default</InlineCode> on any linked
              wallet or Circle Wallet.
            </Callout>
            <div className="mt-3 text-sm">
              <Link to="/circle-wallet" className="text-[#6B01B6] hover:underline">
                Open Circle Wallet guide
              </Link>
              {' · '}
              <Link to="/credentials-and-nfts" className="text-[#6B01B6] hover:underline">
                Open Credentials guide
              </Link>
            </div>
          </section>

          <section id="remove">
            <h2 className="text-2xl font-semibold mb-4">Remove a wallet safely</h2>
            <Callout type="warning" title="Avoid account lockout">
              Before removing a wallet, make sure you still have another login method connected.
            </Callout>
            <p className="text-muted-foreground mt-4">
              If a wallet is your only login method, connect another wallet or confirm email access
              first, then remove it.
            </p>
          </section>

          <section id="troubleshooting">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>If no wallet prompt appears, check for blocked pop-ups or extension prompts.</li>
              <li>If linking fails, confirm you selected the intended wallet account.</li>
              <li>
                If Hive3 says a wallet is already linked, that wallet is connected to another
                Hive3 account.
              </li>
              <li>If you declined the verification signature, restart the link flow and sign.</li>
            </ul>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/circle-wallet"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Circle Wallet
          </Link>
          <Link
            to="/api-keys-and-integrations"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            API Keys
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
