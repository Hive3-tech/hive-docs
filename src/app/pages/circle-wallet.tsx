import { Link } from 'react-router';
import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function CircleWalletPage() {
  const tocItems = [
    { id: 'overview', label: 'What Circle Wallet is' },
    { id: 'provisioning', label: 'Provisioning and reconnecting' },
    { id: 'viewing', label: 'View your wallet' },
    { id: 'credentials', label: 'Deploy credentials' },
    { id: 'limitations', label: 'Network availability' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Wallets &amp; Credentials / <span className="text-foreground">Circle Wallet</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">
          Circle Wallet
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Use the managed Circle Wallet associated with your Hive3 account for supported credential
          workflows without connecting a browser wallet.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What Circle Wallet is</h2>
            <p className="text-muted-foreground">
              Circle Wallet is a managed wallet shown alongside your linked Web3 wallets in Hive3.
              When it is available, the wallet panel identifies it by its address and lets you use
              it as your default wallet. You can keep external wallets linked at the same time.
            </p>
          </section>

          <section id="provisioning">
            <h2 className="text-2xl font-semibold mb-4">Provisioning and reconnecting</h2>
            <p className="text-muted-foreground mb-4">
              A provisioned Circle Wallet appears automatically in Manage Wallets. You do not pair
              it through the external-wallet connection dialog.
            </p>
            <div className="space-y-4">
              <Step number={1} title="Open Manage Wallets">
                Open the wallet controls from your profile and look for the Circle Wallet section.
              </Step>
              <Step number={2} title="Reconnect if it is unavailable">
                If the wallet is missing or inaccessible, choose <strong>Reconnect Circle Wallet</strong>.
                Hive3 attempts to restore access and refreshes your profile wallet data when the
                operation succeeds.
              </Step>
            </div>
            <Callout type="info" title="Availability is account-specific">
              If reconnecting fails, use the error shown by Hive3. The wallet manager can report that
              the wallet is unavailable rather than presenting an address.
            </Callout>
          </section>

          <section id="viewing">
            <h2 className="text-2xl font-semibold mb-4">View your wallet</h2>
            <p className="text-muted-foreground mb-4">
              In Manage Wallets, the Circle Wallet card shows a shortened address. When the wallet
              is accessible, select the address to copy its full value. The same panel shows its
              available network balance summaries.
            </p>
            <p className="text-muted-foreground">
              To make it your default, open its actions menu and choose{' '}
              <strong>Set as Default</strong>. The current default appears at the top of the dialog
              with a Circle or Web3 label.
            </p>
          </section>

          <section id="credentials">
            <h2 className="text-2xl font-semibold mb-4">Deploy credentials</h2>
            <p className="text-muted-foreground">
              During credential creation, choose <strong>My Circle Wallet</strong> to deploy without
              a browser wallet. Hive3 uploads the credential metadata, submits the Circle deployment,
              waits for its transaction result, and records the deployed credential.
            </p>
            <div className="mt-4">
              <Link to="/credentials" className="text-primary hover:underline">
                Read the credentials guide
              </Link>
            </div>
          </section>

          <section id="limitations">
            <h2 className="text-2xl font-semibold mb-4">Network availability</h2>
            <Callout type="warning" title="Circle support depends on the selected network">
              Circle Wallet deployment is offered only when Circle operations support the credential
              network you selected. If the option is unavailable, connect an external wallet on the
              selected network instead.
            </Callout>
            <p className="text-muted-foreground mt-4">
              See{' '}
              <Link to="/linking-external-wallets" className="text-primary hover:underline">
                Linking External Wallets
              </Link>{' '}
              for the external deployment option.
            </p>
          </section>
        </div>

        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
