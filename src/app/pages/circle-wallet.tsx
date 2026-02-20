import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ArrowUpRight, ChevronLeft, ChevronRight, CircleDollarSign, Coins, ShieldCheck, Wallet } from "lucide-react";
import { Link } from "react-router";

export function CircleWalletPage() {
  const tocItems = [
    { id: "overview", label: "How it works" },
    { id: "lifecycle", label: "Lifecycle and chain" },
    { id: "funds", label: "Balances and assets" },
    { id: "transfer", label: "Transfer behavior" },
    { id: "status", label: "Status and troubleshooting" },
    { id: "routes", label: "Route map" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Wallets & Web3 / <span className="text-foreground">Circle Wallet</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Circle Wallet
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Hive3 ships with a managed wallet that is created automatically and stays attached to your account.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <Callout type="info" title="Auto-created wallet">
              Circle wallet is provisioned when needed, so you do not need to manually set up a smart wallet to use
              app features that rely on it.
            </Callout>
            <p className="text-muted-foreground mt-4">
              A Circle wallet is generated per Hive3 account and is reused for the life of your profile. It behaves as a
              managed control surface so creators can transact without configuring infrastructure on day one.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-[#6B01B6]" />
                  Account binding
                </div>
                <p className="text-sm text-muted-foreground">
                  The wallet is attached to your Hive3 identity, not to one browser profile.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Managed lifecycle
                </div>
                <p className="text-sm text-muted-foreground">
                  It is used for platform operations like viewing balances, initiating transfers, and funding workflows.
                </p>
              </div>
            </div>
          </section>

          <section id="lifecycle">
            <h2 className="text-2xl font-semibold mb-4">Lifecycle and chain</h2>
            <Step number={1} title="Creation trigger">
              Created when the account initializes wallet access in the product, often via profile wallet view.
            </Step>
            <Step number={2} title="Chain routing">
              Runs on Base mainnet or Base Sepolia depending on environment.
            </Step>
            <Step number={3} title="Active connection">
              Used through the wallet modal where balances and transfer controls are shown.
            </Step>
            <p className="text-muted-foreground mt-4">
              Environment selection is controlled by backend/frontend chain config (testnet mode uses Base Sepolia).
            </p>
          </section>

          <section id="funds">
            <h2 className="text-2xl font-semibold mb-4">Balances and assets</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Coins className="w-4 h-4 text-[#6B01B6]" />
                  Native and token balances
                </div>
                <p className="text-sm text-muted-foreground">
                  The wallet supports ETH and USDC balances directly in the same interface.
                </p>
                <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>ETH balance shown as chain-native funds.</li>
                  <li>USDC is shown as token balance.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <CircleDollarSign className="w-4 h-4 text-[#6B01B6]" />
                  Activity support
                </div>
                <p className="text-sm text-muted-foreground">
                  View current holdings and initiate outgoing transfers from the same dialog where you confirm default wallet state.
                </p>
              </div>
            </div>
          </section>

          <section id="transfer">
            <h2 className="text-2xl font-semibold mb-4">Transfer behavior</h2>
            <Callout type="warning" title="Transfers are irreversible">
              Outgoing sends from Circle wallet do not support rollback. Confirm recipient and amount before sending.
            </Callout>
            <p className="text-muted-foreground mt-4">
              Before submitting a transfer, the interface reserves approximately <InlineCode>0.00005 ETH</InlineCode> as gas buffer.
              You can only send up to <InlineCode>balance - 0.00005 ETH</InlineCode>.
            </p>
            <div className="mt-6 rounded-lg border border-border bg-card p-4">
              <h3 className="font-semibold mb-2">Transfer checks</h3>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Destination must be a valid wallet address.</li>
                <li>Amount must be greater than 0 and within transferable balance.</li>
                <li>Circle wallet must be accessible in the current environment.</li>
              </ul>
            </div>
            <CodeBlock
              language="text"
              code={`Circle Wallet Transfer Flow:
1) Open Wallet Management
2) Click Transfer
3) Enter destination + amount
4) Confirm transfer`}
            />
          </section>

          <section id="status">
            <h2 className="text-2xl font-semibold mb-4">Status and troubleshooting</h2>
            <Callout type="info" title="Possible status messages">
              If your wallet status is flagged, the app can show reasons like project mismatch,
              blockchain mismatch, or temporary service issues.
            </Callout>
            <p className="text-muted-foreground mb-4">
              If a wallet is inaccessible, use the reconnect action in wallet management before trying again.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">Inaccessible</div>
                <p className="text-sm text-muted-foreground">
                  Indicates the wallet cannot be validated against current runtime conditions.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">Reconnect</div>
                <p className="text-sm text-muted-foreground">
                  Reconnect from the Circle wallet menu to refresh chain/project binding.
                </p>
              </div>
            </div>
          </section>

          <section id="routes">
            <h2 className="text-2xl font-semibold mb-4">Route map</h2>
            <CodeBlock
              language="text"
              code={`Profile settings wallet modal
/profile/dashboard
/profile/:userId
/notifications`}
            />
            <p className="text-sm text-muted-foreground mt-4">
              In addition to transfer controls, the wallet screen is your source of truth for Circle wallet status,
              chain context, and active default wallet selection.
            </p>
            <div className="mt-4">
              <a
                href="https://www.circle.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#6B01B6] hover:text-[#512DA8]"
              >
                Learn more about Circle <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link to="/credentials-and-nfts" className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Credentials & NFTs
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
