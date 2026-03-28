import { RightSidebar } from '../components/right-sidebar';
import { Callout, Step, InlineCode } from '../components/doc-components';
import {
  ChevronLeft,
  ChevronRight,
  Coins,
  Copy,
  RefreshCcw,
  Send,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router';

export function CircleWalletPage() {
  const tocItems = [
    { id: 'overview', label: 'What Circle Wallet is' },
    { id: 'where-found', label: 'Where to find it' },
    { id: 'actions', label: 'What you can do' },
    { id: 'transfer', label: 'Send funds from Circle Wallet' },
    { id: 'default-wallet', label: 'Default wallet and credentials' },
    { id: 'status', label: 'If your wallet shows unavailable' },
    { id: 'tips', label: 'Best practices' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Wallet & Credentials / <span className="text-foreground">Circle Wallet</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Circle Wallet
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Circle Wallet is your built-in Hive3 profile wallet. It is created for your account
          automatically and gives you a ready-to-use home base for default wallet actions.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What Circle Wallet is</h2>
            <Callout type="info" title="Automatic setup">
              You do not need to create this wallet manually. Hive3 prepares it for your account.
            </Callout>
            <p className="text-muted-foreground mt-4">
              Think of Circle Wallet as your account-native wallet for core Hive3 workflows. It
              stays linked to your account and can be used alongside any external wallets you link.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-[#6B01B6]" />
                  Account-linked
                </div>
                <p className="text-sm text-muted-foreground">
                  Your default Circle Wallet is attached to your Hive3 account, not to one browser
                  session.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Managed experience
                </div>
                <p className="text-sm text-muted-foreground">
                  Hive3 handles the wallet plumbing so you can focus on your creator and community
                  workflows.
                </p>
              </div>
            </div>
          </section>

          <section id="where-found">
            <h2 className="text-2xl font-semibold mb-4">Where to find it</h2>
            <p className="text-muted-foreground">
              Open your wallet management controls from your profile experience. In that modal, you
              will see your default wallet, your default/profile Circle Wallet details, and linked
              external wallets in one place.
            </p>
          </section>

          <section id="actions">
            <h2 className="text-2xl font-semibold mb-4">What you can do</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Copy className="w-4 h-4 text-[#6B01B6]" />
                  Copy wallet address
                </div>
                <p className="text-sm text-muted-foreground">
                  View your short address and copy the full address directly from the Circle Wallet
                  card.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Coins className="w-4 h-4 text-[#6B01B6]" />
                  Check balances
                </div>
                <p className="text-sm text-muted-foreground">
                  See your default wallet balance and USDC in the same panel where you manage your
                  wallets.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#6B01B6]" />
                  Transfer funds
                </div>
                <p className="text-sm text-muted-foreground">
                  Use the Transfer action from Circle Wallet to send funds to another wallet
                  address.
                </p>
              </div>
            </div>
          </section>

          <section id="transfer">
            <h2 className="text-2xl font-semibold mb-4">Send funds from Circle Wallet</h2>
            <Callout type="warning" title="Double-check before sending">
              Transfers are irreversible. Confirm wallet address and amount before you click Send.
            </Callout>
            <div className="space-y-4 mt-4">
              <Step number={1} title="Open Manage Wallets">
                In your profile wallet panel, open the Circle Wallet actions menu.
              </Step>
              <Step number={2} title="Select Transfer">
                Choose <InlineCode>Transfer</InlineCode>.
              </Step>
              <Step number={3} title="Enter destination and amount">
                Add a valid destination address and amount, or use{' '}
                <InlineCode>Max</InlineCode>.
              </Step>
              <Step number={4} title="Review and send">
                Confirm the warning prompt, then send your transfer.
              </Step>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              The Max option leaves a small native-token gas reserve (about{' '}
              <InlineCode>0.00005</InlineCode>) so your wallet can still process network fees.
            </p>
          </section>

          <section id="default-wallet">
            <h2 className="text-2xl font-semibold mb-4">Default wallet and credentials</h2>
            <p className="text-muted-foreground mb-4">
              You can set Circle Wallet as your default wallet, or keep an external wallet as
              default. Your default wallet is used for wallet-first credential workflows.
            </p>
            <Callout type="info" title="You can switch anytime">
              In Manage Wallets, use <InlineCode>Set as Default</InlineCode> on Circle Wallet or
              any linked Web3 wallet.
            </Callout>
            <div className="mt-3 text-sm">
              <Link to="/credentials-and-nfts" className="text-[#6B01B6] hover:underline">
                Open Credentials guide
              </Link>
            </div>
          </section>

          <section id="status">
            <h2 className="text-2xl font-semibold mb-4">If your wallet shows unavailable</h2>
            <Callout type="info" title="Use Reconnect first">
              If Circle Wallet is unavailable in your current environment, click{' '}
              <InlineCode>Reconnect</InlineCode> from the wallet actions menu.
            </Callout>
            <div className="rounded-lg border border-border bg-card p-4 mt-4">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <RefreshCcw className="w-4 h-4 text-[#6B01B6]" />
                Common reasons you may see
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Wallet environment mismatch (example: test vs production context).</li>
                <li>Temporary Circle service availability issue.</li>
                <li>Wallet validation needs a fresh reconnect.</li>
              </ul>
            </div>
          </section>

          <section id="tips">
            <h2 className="text-2xl font-semibold mb-4">Best practices</h2>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Verify destination addresses carefully before sending.</li>
              <li>Keep a small ETH balance available for gas fees.</li>
              <li>Use copy actions instead of typing wallet addresses manually.</li>
              <li>
                If your wallet state looks stale, reconnect and refresh your profile wallet panel.
              </li>
            </ul>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/credentials-and-nfts"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Credentials
          </Link>
          <Link
            to="/linking-external-wallets"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Linking External Wallets
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
