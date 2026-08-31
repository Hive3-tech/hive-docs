import { Link } from 'react-router';
import { Callout, Step } from '../components/doc-components';
import { PagerNav } from '../components/pager-nav';
import { RightSidebar } from '../components/right-sidebar';

export function CredentialsPage() {
  const tocItems = [
    { id: 'overview', label: 'What credentials are' },
    { id: 'earning', label: 'Earn a credential' },
    { id: 'claiming', label: 'Claim a credential' },
    { id: 'creating', label: 'Create a credential' },
    { id: 'deployment', label: 'Choose a deployment wallet' },
    { id: 'rewards', label: 'Attach a credential reward' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Wallets &amp; Credentials / <span className="text-foreground">Credentials</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">
          Credentials
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Earn verifiable records of participation and completion, then claim them to your wallet as
          on-chain credentials.
        </p>

        <div className="space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">What credentials are</h2>
            <p className="text-muted-foreground">
              A Hive3 credential records an achievement connected to an activity, such as attending
              an event or completing a course. Eligibility is checked from your Hive3 activity;
              claiming is the separate step that mints the credential on-chain.
            </p>
          </section>

          <section id="earning">
            <h2 className="text-2xl font-semibold mb-4">Earn a credential</h2>
            <p className="text-muted-foreground mb-4">
              You can become eligible through any of these verified sources:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Camera liveness check completion</li>
              <li>Event attendance</li>
              <li>Course completion</li>
              <li>Quest completion</li>
            </ul>
            <Callout type="info" title="No wallet is needed to discover eligibility">
              Hive3 checks your completion or attendance in your account, so an eligible credential
              can appear before you connect a wallet. Already minted credentials are filtered out.
            </Callout>
          </section>

          <section id="claiming">
            <h2 className="text-2xl font-semibold mb-4">Claim a credential</h2>
            <div className="space-y-4">
              <Step number={1} title="Open Notifications">
                Go to Notifications and open the Rewards panel to see credentials you are eligible
                to claim.
              </Step>
              <Step number={2} title="Choose a wallet">
                A wallet is required for the on-chain mint. Select an available wallet when prompted.
              </Step>
              <Step number={3} title="Mint the credential">
                Confirm the claim. Hive3 submits the mint and removes the credential from your
                unclaimed eligibility list after it is minted.
              </Step>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Learn how to prepare a{' '}
              <Link to="/circle-wallet" className="text-primary hover:underline">
                Circle Wallet
              </Link>{' '}
              or{' '}
              <Link to="/linking-external-wallets" className="text-primary hover:underline">
                link an external wallet
              </Link>
              .
            </p>
          </section>

          <section id="creating">
            <h2 className="text-2xl font-semibold mb-4">Create a credential</h2>
            <Callout type="info" title="Honey Bee membership or higher required">
              Creating credentials is available to Honey Bee, Swarm, and Royal Hive members.
            </Callout>
            <div className="space-y-4 mt-6">
              <Step number={1} title="Credential Metadata">
                Enter a name and description, upload the required credential image, and optionally
                add trait-and-value attributes.
              </Step>
              <Step number={2} title="Credential Configuration">
                Set the maximum supply, mint start, expiry, and credential network. Use a maximum
                supply of <strong>0</strong> for unlimited minting. Start and expiry are optional.
              </Step>
              <Step number={3} title="Review & Deploy">
                Review the metadata and configuration, choose your deployment wallet, and deploy.
                Hive3 uploads the metadata to IPFS, submits the on-chain deployment, waits for
                confirmation, and syncs the credential back to Hive3.
              </Step>
            </div>
          </section>

          <section id="deployment">
            <h2 className="text-2xl font-semibold mb-4">Choose a deployment wallet</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-semibold mb-2">External wallet</h3>
                <p className="text-sm text-muted-foreground">
                  This is the default deployment option. Connect the wallet, switch it to the
                  credential network you selected, and make sure it has enough native currency for
                  gas. Hive3 blocks deployment when the connected network or wallet session does not
                  match.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-semibold mb-2">Circle Wallet</h3>
                <p className="text-sm text-muted-foreground">
                  If your account has a Circle Wallet, you can deploy without a browser wallet on
                  networks where Circle operations are supported. On an unsupported selected
                  network, use an external wallet instead.
                </p>
              </div>
            </div>
          </section>

          <section id="rewards">
            <h2 className="text-2xl font-semibold mb-4">Attach a credential reward</h2>
            <p className="text-muted-foreground">
              Credential deployment is part of the creation flow for events and courses. After the
              credential deploys and Hive3 records its ID, the creator flow can finish creating the
              activity and attach the credential as its reward.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link to="/events-guide" className="text-primary hover:underline">
                Create an event with an attendance credential
              </Link>
              <Link to="/courses-guide" className="text-primary hover:underline">
                Create a course with a completion credential
              </Link>
            </div>
          </section>
        </div>

        <PagerNav />
      </div>
      <RightSidebar items={tocItems} />
    </div>
  );
}
