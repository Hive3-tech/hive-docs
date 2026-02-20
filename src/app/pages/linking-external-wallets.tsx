import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Fingerprint, Globe, Plus, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

export function LinkingExternalWalletsPage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "setup", label: "How to link" },
    { id: "management", label: "Active/default wallet" },
    { id: "security", label: "Verification and SIWE" },
    { id: "display", label: "Address display" },
    { id: "recovery", label: "Access safety" },
    { id: "routes", label: "Route map" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Wallets & Web3 / <span className="text-foreground">Linking External Wallets</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Linking External Wallets
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Attach one or more external wallets and keep one wallet set as your default for actions that require it.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">
              External wallets are managed separately from your Circle wallet. You can connect multiple addresses so you can sign in or
              transact with different accounts while keeping a single Hive3 identity.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#6B01B6]" />
                  Multi-wallet support
                </div>
                <p className="text-sm text-muted-foreground">
                  Connect MetaMask and other wallet providers supported by the app's connect flow.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Default wallet
                </div>
                <p className="text-sm text-muted-foreground">
                  Pick one as the account default; this is used for wallet-first interactions.
                </p>
              </div>
            </div>
          </section>

          <section id="setup">
            <h2 className="text-2xl font-semibold mb-4">How to link wallets</h2>
            <p className="text-muted-foreground mb-4">
              Open wallet management from profile and choose <InlineCode>Link Web3 Wallet</InlineCode>. If you already have a
              wallet connected in your browser, it is verified and added directly.
            </p>
            <div className="space-y-6">
              <Step number={1} title="Open wallet controls">
                Go to your wallet modal and view the Wallets section.
              </Step>
              <Step number={2} title="Launch link action">
                Click <InlineCode>Link Web3 Wallet</InlineCode> and approve connection.
              </Step>
              <Step number={3} title="Sign and verify">
                Sign the message request to verify ownership and finish linking.
              </Step>
              <Step number={4} title="Use immediately">
                The wallet appears in your linked list and can be set as default.
              </Step>
            </div>
            <Callout type="info" title="No wallet limit">
              The wallet controls support linking multiple wallets and are designed to be used with different providers.
            </Callout>
          </section>

          <section id="management">
            <h2 className="text-2xl font-semibold mb-4">Active and default wallet management</h2>
            <p className="text-muted-foreground mb-4">
              Every linked wallet can be set as default. You can switch without unlinking others.
            </p>
            <CodeBlock
              language="text"
              code={`Wallet list
Set as default: choose any non-default wallet
Remove wallet: available from the wallet action menu
Default marker: shown in UI for quick context`}
            />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">Wallet states</div>
                <p className="text-sm text-muted-foreground">
                  One wallet is active in wallet actions; linked wallets can stay in storage and be switched anytime.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2">Quick identify</div>
                <p className="text-sm text-muted-foreground">
                  Use short address labels in UI and full copy when needed.
                </p>
              </div>
            </div>
          </section>

          <section id="security">
            <h2 className="text-2xl font-semibold mb-4">Verification and SIWE</h2>
            <Callout type="success" title="Sign-In with Ethereum (SIWE) flow">
              External wallets are verified with signed SIWE-style messages so the backend can confirm ownership.
            </Callout>
            <p className="text-muted-foreground mt-4">
              The linking process requests a user signature, then backend verification validates the connection before persisting.
              This is also why linking may be blocked if the wallet refuses to sign.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-[#6B01B6]" />
                  Signature required
                </div>
                <p className="text-sm text-muted-foreground">
                  Keep your wallet unlocked and your app connected when signing.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#6B01B6]" />
                  Provider compatibility
                </div>
                <p className="text-sm text-muted-foreground">
                  Any provider compatible with AppKit/wallet connect flow can usually be used to link.
                </p>
              </div>
            </div>
          </section>

          <section id="display">
            <h2 className="text-2xl font-semibold mb-4">Address display format</h2>
            <p className="text-muted-foreground mb-4">
              Wallet addresses are shown in compact format in lists and dialogs:
            </p>
            <CodeBlock
              language="text"
              code={`0x12ab34...ef90`}
            />
            <p className="text-sm text-muted-foreground mt-4">
              Use copy actions to get the full address when needed for blockchain tools or support requests.
            </p>
          </section>

          <section id="recovery">
            <h2 className="text-2xl font-semibold mb-4">Access safety</h2>
            <Callout type="warning" title="Keep at least one login method">
              Do not remove your final sign-in method. If you attempt to remove the only wallet on file, remove/add email or another wallet first.
            </Callout>
            <p className="text-muted-foreground mt-4">
              This guard prevents accidental lockout from both wallet-only accounts and active sessions.
            </p>
          </section>

          <section id="routes">
            <h2 className="text-2xl font-semibold mb-4">Route map</h2>
            <CodeBlock
              language="text"
              code={`/profile/dashboard
/profile/:userId
/profile/settings
/notifications`}
            />
            <p className="text-sm text-muted-foreground mt-4">
              Route list is conceptual for where wallet actions are surfaced; actual link/unlink workflows are handled by UI
              controls in profile wallet management.
            </p>
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
            to="/credentials-explained"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Credentials Explained
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
