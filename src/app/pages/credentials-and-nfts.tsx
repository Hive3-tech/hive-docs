import { RightSidebar } from "../components/right-sidebar";
import { Callout, InlineCode, CodeBlock } from "../components/doc-components";
import { Award, ChevronLeft, Globe, Link as LinkIcon, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function CredentialsAndNFTsPage() {
  const tocItems = [
    { id: "what", label: "What credentials are" },
    { id: "where", label: "Where they appear" },
    { id: "images", label: "Image resolution" },
    { id: "details", label: "View and claim flow" },
    { id: "blockchain", label: "Blockchain and minting" },
    { id: "routes", label: "Route map" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Platform Features / <span className="text-foreground">Credentials & NFTs</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Credentials & NFTs
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Credentials are earned assets that can be minted and displayed as proof of participation or completion.
        </p>

        <div className="space-y-12">
          <section id="what">
            <h2 className="text-2xl font-semibold mb-4">What credentials are</h2>
            <p className="text-muted-foreground mb-4">
              Credentials are attached to events, courses, quests, and role workflows as badge-style assets.
              They can be minted and represented as NFT-style tokens in profile-owned token views.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#6B01B6]" />
                  Issuance sources
                </div>
                <p className="text-sm text-muted-foreground">
                  Posted from creation flows and reward settings on supported entity types.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B01B6]" />
                  Owner visibility
                </div>
                <p className="text-sm text-muted-foreground">
                  Profiles can claim eligible credentials through notifications and creator controls.
                </p>
              </div>
            </div>
          </section>

          <section id="where">
            <h2 className="text-2xl font-semibold mb-4">Where they appear</h2>
            <p className="text-muted-foreground mb-4">
              Earned and created credentials are shown in token grids on profile pages.
            </p>
            <Callout type="info" title="Token grid">
              Profiles and community pages render credentials as image tiles, opening a detail modal when clicked.
            </Callout>
            <div className="rounded-lg border border-border bg-card p-4 mt-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#6B01B6]" />
                Discovery
              </div>
              <p className="text-sm text-muted-foreground">
                Notifications also surface credential opportunities with quick claim actions.
              </p>
            </div>
          </section>

          <section id="images">
            <h2 className="text-2xl font-semibold mb-4">Image resolution order</h2>
            <p className="text-muted-foreground mb-4">
              Credential image URLs are resolved from platform storage first, then fallback to IPFS conversion.
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Prefer <InlineCode>imageS3Url</InlineCode> when present and non-empty.</li>
              <li>Fallback to <InlineCode>imageUrl</InlineCode> converted through IPFS gateway mapping.</li>
              <li>If no image resolves, placeholder icon render is used.</li>
            </ul>
            <CodeBlock
              language="text"
              code={`1) Use imageS3Url when available
2) Else fallback to convertIpfsToHttp(imageUrl)`}
            />
          </section>

          <section id="details">
            <h2 className="text-2xl font-semibold mb-4">View and claim credentials</h2>
            <p className="text-muted-foreground mb-4">
              Users can open credential details from profile token tiles and notification credential cards.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-[#6B01B6]" />
                  Detail view
                </div>
                <p className="text-sm text-muted-foreground">
                  Click a credential tile to open detailed metadata and related onchain/attachment actions.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#6B01B6]" />
                  Claim workflow
                </div>
                <p className="text-sm text-muted-foreground">
                  Claiming is exposed through eligibility feeds and credential tabs in notification/profile contexts.
                </p>
              </div>
            </div>
          </section>

          <section id="blockchain">
            <h2 className="text-2xl font-semibold mb-4">Blockchain and minting</h2>
            <Callout type="success" title="Minting flow">
              Credentials can be deployed to blockchain-backed backing via the Create Credential flow.
            </Callout>
            <p className="text-muted-foreground mt-4">
              Use <InlineCode>/create/credential</InlineCode> to build credential metadata, attributes, supply settings, and
              review deployment.
            </p>
          </section>

          <section id="routes">
            <h2 className="text-2xl font-semibold mb-4">Route map</h2>
            <CodeBlock
              language="text"
              code={`/create/credential
/profile/{handle}
/community/{id}
/event/{id}
/course/{id}
/quest/{id}`}
            />
            <p className="text-sm text-muted-foreground mt-4">
              Route examples are for context: view and manage tokens from profile/community/event/course/quest detail surfaces.
            </p>
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
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
