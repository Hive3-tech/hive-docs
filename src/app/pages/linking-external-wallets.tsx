import { Link } from 'react-router';
import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function LinkingExternalWalletsPage() {
  const tocItems = [
    { id: 'overview', label: 'External wallets' },
    { id: 'connect', label: 'Connect and link a wallet' },
    { id: 'default', label: 'Choose the default wallet' },
    { id: 'visibility', label: 'Control public visibility' },
    { id: 'remove', label: 'Remove a wallet' },
    { id: 'session-safety', label: 'Session-mismatch protection' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Wallets &amp; Credentials /{' '}
          <span className="text-foreground">Linking External Wallets</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">
          Linking External Wallets
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Prove ownership of an EVM wallet, link it to your Hive3 account, and control how Hive3 uses
          and displays it.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">External wallets</h2>
            <p className="text-muted-foreground">
              Linked Web3 wallets appear in Manage Wallets alongside your Circle Wallet. Linking
              records the wallet on your Hive3 account; it does not replace your Circle Wallet. A
              wallet already linked to another Hive3 account cannot be linked again until it is
              removed there.
            </p>
          </section>

          <section id="connect">
            <h2 className="text-2xl font-semibold mb-4">Connect and link a wallet</h2>
            <div className="space-y-4">
              <Step number={1} title="Open Manage Wallets">
                Open your profile wallet controls, then choose <strong>Link Web3 Wallet</strong>.
              </Step>
              <Step number={2} title="Select an EVM wallet">
                Choose the wallet and account in the connection dialog. Hive3 waits for the selected
                connector to report the active address and network.
              </Step>
              <Step number={3} title="Sign the verification message">
                Hive3 requests a fresh nonce and asks the connected address to sign a Sign-In with
                Ethereum verification message. Signing proves control of the address; it does not
                submit an on-chain transaction.
              </Step>
              <Step number={4} title="Confirm the linked address">
                After verification succeeds, the address appears under Linked Web3 Wallets.
              </Step>
            </div>
            <Callout type="info" title="Cancelled signatures do not link the wallet">
              If you reject, deny, or cancel the signature request, Hive3 stops the linking flow. You
              can start it again from Manage Wallets.
            </Callout>
          </section>

          <section id="default">
            <h2 className="text-2xl font-semibold mb-4">Choose the default wallet</h2>
            <p className="text-muted-foreground">
              Open a linked wallet's actions menu and choose <strong>Set as Default</strong>. Hive3
              refreshes your profile after the change, and the selected address appears in the
              Default Wallet card. You can also set your{' '}
              <Link to="/circle-wallet" className="text-primary hover:underline">
                Circle Wallet
              </Link>{' '}
              as default.
            </p>
          </section>

          <section id="visibility">
            <h2 className="text-2xl font-semibold mb-4">Control public visibility</h2>
            <p className="text-muted-foreground">
              Manage Wallets includes a public discoverability toggle for each linked address. Turn
              it on to let NFTs from that wallet appear when the account-level{' '}
              <strong>Show NFTs on my public profile</strong> setting is also on. Turn it off to
              keep NFTs from that wallet hidden even when account-level exposure is enabled.
            </p>
          </section>

          <section id="remove">
            <h2 className="text-2xl font-semibold mb-4">Remove a wallet</h2>
            <div className="space-y-4">
              <Step number={1} title="Open the wallet actions">
                Find the address under Linked Web3 Wallets and open its actions menu.
              </Step>
              <Step number={2} title="Choose Remove">
                Hive3 removes the address from your profile and refreshes your account data.
              </Step>
            </div>
            <Callout type="warning" title="Keep another sign-in method">
              Hive3 blocks removal when the wallet is your only sign-in method or your last wallet.
              Add an email or another wallet first.
            </Callout>
          </section>

          <section id="session-safety">
            <h2 className="text-2xl font-semibold mb-4">Session-mismatch protection</h2>
            <p className="text-muted-foreground mb-4">
              Before signing, Hive3 resolves the wallet connector's live address and network. If the
              connected address does not match the address bound to your authenticated wallet
              session, wallet features are blocked and Hive3 asks you to reconnect or authenticate
              again. Unsupported networks are also rejected.
            </p>
            <Callout type="warning" title="Your wallet changed">
              If you switch accounts or networks in your wallet app, reconnect before continuing.
              This prevents a stale browser session from signing with a different address or chain.
            </Callout>
            <p className="text-sm text-muted-foreground mt-4">
              For credential deployment requirements, see{' '}
              <Link to="/credentials" className="text-primary hover:underline">
                Credentials
              </Link>
              .
            </p>
          </section>
        </div>

        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
