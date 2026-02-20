import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, InlineCode, CodeBlock } from "../components/doc-components";
import { Award, ChevronLeft, CheckCircle2, CircleAlert, Eye, Link2 } from "lucide-react";
import { Link } from "react-router";

export function CredentialsExplainedPage() {
  const tocItems = [
    { id: "what", label: "What credentials are" },
    { id: "profile", label: "Profile appearance" },
    { id: "assets", label: "Image source order" },
    { id: "viewing", label: "View details" },
    { id: "chain", label: "Blockchain and verification" },
    { id: "faq", label: "When you earn one" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Wallets & Web3 / <span className="text-foreground">Credentials Explained</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Credentials Explained
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Credentials are achievement-style assets that can also be deployed as on-chain tokens.
        </p>

        <div className="space-y-12">
          <section id="what">
            <h2 className="text-2xl font-semibold mb-4">What credentials are</h2>
            <p className="text-muted-foreground">
              A credential is a reward asset given for meeting conditions (e.g. course completion, event participation,
              quest milestones). In Hive3, they are user-facing achievements and can be tied to blockchain minting.
            </p>
            <Callout type="success" title="Reward model">
              You can receive credentials as proof of participation or completion and use them as a verified signal in your profile.
            </Callout>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#6B01B6]" />
                  Issuer context
                </div>
                <p className="text-sm text-muted-foreground">
                  Credentials come from platform actions you control through event, course, or quest settings.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B01B6]" />
                  Completion signals
                </div>
                <p className="text-sm text-muted-foreground">
                  Most workflows issue credentials only after a specific requirement is met.
                </p>
              </div>
            </div>
          </section>

          <section id="profile">
            <h2 className="text-2xl font-semibold mb-4">How they appear on profile</h2>
            <p className="text-muted-foreground mb-4">
              Your profile credential panel shows tokens in a compact tile grid.
            </p>
            <Step number={1} title="Profile render">
              Credentials surface from profile metadata and are shown as credential thumbnails.
            </Step>
            <Step number={2} title="Interactive tile">
              Click a tile to open a credential detail panel where eligibility, links, and mint data are shown.
            </Step>
            <Step number={3} title="Notifications">
              Eligible credentials can also appear in the reward notifications view.
            </Step>
          </section>

          <section id="assets">
            <h2 className="text-2xl font-semibold mb-4">Credential image handling</h2>
            <p className="text-muted-foreground mb-4">
              Platform code resolves images from multiple storage providers in this priority order:
            </p>
            <CodeBlock
              language="text"
              code={`1) imageS3Url
2) imageUrl (IPFS fallback conversion)
3) placeholder icon`}
            />
            <Callout type="info" title="Display behavior">
              If both storage fields are missing or fail to render, credentials still appear as an icon tile.
            </Callout>
          </section>

          <section id="viewing">
            <h2 className="text-2xl font-semibold mb-4">View and claim process</h2>
            <p className="text-muted-foreground mb-4">
              In profile and notifications contexts, you can open details and claim eligible credentials where prompted.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#6B01B6]" />
                  Detail views
                </div>
                <p className="text-sm text-muted-foreground">
                  Click credential tiles to inspect name, description, and associated action context.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Link2 className="w-4 h-4 text-[#6B01B6]" />
                  Claim actions
                </div>
                <p className="text-sm text-muted-foreground">
                  Claim button availability depends on eligibility state and current credential configuration.
                </p>
              </div>
            </div>
          </section>

          <section id="chain">
            <h2 className="text-2xl font-semibold mb-4">On-chain verification</h2>
            <p className="text-muted-foreground mb-4">
              Credentials may be deployed as on-chain SBT-like assets and are associated with a wallet context for validation.
            </p>
            <Callout type="warning" title="Minting path">
              Minting is handled from the credential creation flow, where metadata, supply, and availability windows are set.
            </Callout>
            <CodeBlock
              language="text"
              code={`/create/credential
/profile/:userId
/community/:id
/event/:id
/course/:id
/quest/:id`}
            />
          </section>

          <section id="faq">
            <h2 className="text-2xl font-semibold mb-4">When you earn a credential</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <CircleAlert className="w-4 h-4 text-[#6B01B6]" />
                Practical expectation
              </div>
              <p className="text-sm text-muted-foreground">
                Most users earn credentials while engaging in events, quests, and learning workflows.
                Even if you do not mint a token immediately, credentials still represent completion state and are still useful for platform trust signals.
              </p>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/linking-external-wallets"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Linking External Wallets
          </Link>
          <Link
            to="/api-overview"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            API Overview
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
