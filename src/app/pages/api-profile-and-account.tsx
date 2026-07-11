import { Callout } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";
import { ApiEndpointCard } from "./api-endpoint-card";
import { accountEndpoints, profileEndpoints, walletEndpoints } from "./api-profile-and-account-data";

export function ApiProfileAndAccountPage() {
  const tocItems = [{ id: "profile", label: "Profile and builders" }, { id: "account", label: "Account" }, { id: "wallets", label: "Wallets and NFTs" }];
  return (
    <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
      <div className="text-sm text-muted-foreground mb-6">API Reference / <span className="text-foreground">Profile &amp; Account API</span></div>
      <h1 className="text-4xl font-bold mb-4 text-gradient">Profile &amp; Account API</h1>
      <p className="text-lg text-muted-foreground mb-12">Read and update your profile, account preferences, builders, uploads, linked communities, wallets, and public NFT settings.</p>
      <Callout type="info" title="Your account only">The server resolves the person from the Bearer key. Do not send a person ID as authority.</Callout>
      <div className="space-y-12 mt-12">
        <section id="profile"><h2 className="text-2xl font-semibold mb-4">Profile, builders, and uploads</h2><div className="space-y-6">{profileEndpoints.map((endpoint) => <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />)}</div></section>
        <section id="account"><h2 className="text-2xl font-semibold mb-4">Account</h2><div className="space-y-6">{accountEndpoints.map((endpoint) => <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />)}</div></section>
        <section id="wallets"><h2 className="text-2xl font-semibold mb-4">Wallets and NFT exposure</h2><p className="mb-5 text-muted-foreground">These routes manage account settings only. They do not sign transactions or take custody of wallet keys.</p><div className="space-y-6">{walletEndpoints.map((endpoint) => <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} {...endpoint} />)}</div></section>
      </div><PagerNav /></div><RightSidebar items={tocItems} /></div>
  );
}
