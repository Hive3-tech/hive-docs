import type { ApiEndpoint, ApiMethod } from "./api-endpoint-types";

const json = (value: unknown): string => JSON.stringify(value, null, 2);

const profileData = {
  accessType: "open",
  accountDeletionCancelledAt: null,
  accountDeletionRequestedAt: null,
  accountDeletionScheduledAt: null,
  accountStatus: "active",
  attachmentStorageId: null,
  attachmentUrl: "",
  badges: ["builder"],
  customCollaboratorCount: null,
  description: "Building open communities on Hive3.",
  displayName: "Avery Chen",
  experience: "Community operations and product design",
  handle: "avery",
  heroImage: "https://cdn.example.com/avery-hero.png",
  heroImageStorageId: "kg2hero...",
  id: "jd7abc...",
  image: "https://cdn.example.com/avery-avatar.png",
  imageStorageId: "kg2avatar...",
  location: "Toronto, Canada",
  membershipTier: "worker",
  name: "Avery Chen",
  primaryEmail: "avery@example.com",
  publicNftExposure: false,
  shortDescription: "Community builder",
  showCollaboratorCount: true,
  socials: [{ address: "https://github.com/avery", socialType: "github" }],
  title: "Community Builder",
  updatedAt: 1782907200000,
  username: "avery",
};

const endpoint = (
  method: ApiMethod,
  path: string,
  scope: string,
  description: string,
  options: {
    body?: string;
    examplePath?: string;
    query?: string;
    responseBody: unknown;
    responseNote?: string;
    responseStatus?: number;
  },
): ApiEndpoint => ({
  method,
  path,
  scopes: [scope],
  description,
  request: {
    ...(options.examplePath ? { examplePath: options.examplePath } : {}),
    ...(options.body ? { body: options.body } : {}),
    ...(options.query ? { query: options.query } : {}),
  },
  response: {
    status: options.responseStatus ?? 200,
    body: json(options.responseBody),
    ...(options.responseNote ? { note: options.responseNote } : {}),
  },
});

const builderFallback = {
  responseBody: { data: {} },
  responseNote: "Fields depend on the resource; see the app for a live response.",
};

export const profileEndpoints: ApiEndpoint[] = [
  endpoint("GET", "/profile", "account:read", "Return your profile.", {
    responseBody: { data: profileData },
  }),
  endpoint("PATCH", "/profile", "account:write", "Update profile identity, biography, images, badges, social links, attachments, or collaborator-display settings.", {
    body: json({ displayName: "Avery", handle: "avery" }),
    responseBody: { data: profileData },
  }),
  {
    ...endpoint("GET", "/profile/handle", "account:read", "Check whether a handle is available.", {
      query: "handle=avery",
      responseBody: { data: { available: true, handle: "avery" } },
    }),
    params: [{ name: "handle", type: "string", required: true, description: "Handle to check." }],
  },
  endpoint("PATCH", "/profile/access", "account:write", "Update profile access type and its optional subscription.", {
    body: json({ accessType: "public" }),
    responseBody: { data: { accessType: "open", id: "jd7abc..." } },
  }),
  endpoint("GET", "/profile/overview", "account:read", "Return profile overview-builder JSON.", builderFallback),
  endpoint("PATCH", "/profile/overview", "account:write", "Save profile overview-builder JSON.", {
    body: json({ config: {} }),
    ...builderFallback,
  }),
  endpoint("GET", "/profile/widgets", "account:read", "Return profile widget configuration.", builderFallback),
  endpoint("PATCH", "/profile/widgets", "account:write", "Save profile widget configuration.", {
    body: json({ config: {} }),
    ...builderFallback,
  }),
  endpoint("GET", "/profile/welcome-page", "account:read", "Return profile welcome-page builder JSON.", builderFallback),
  endpoint("PATCH", "/profile/welcome-page", "account:write", "Save profile welcome-page builder JSON.", {
    body: json({ config: {} }),
    ...builderFallback,
  }),
  {
    ...endpoint("POST", "/uploads/url", "account:write", "Request a validated upload URL for an image or document.", {
      body: json({ purpose: "image", fileName: "avatar.png", contentType: "image/png", byteSize: 1024 }),
      responseStatus: 201,
      responseBody: {
        data: {
          contentType: "image/png",
          fileName: "avatar.png",
          maxBytes: 8388608,
          purpose: "image",
          uploadUrl: "https://app.hive3.tech/internal/storage/upload?token=upload-token",
        },
      },
    }),
    params: [
      { name: "purpose", type: '"image" | "document"', required: true, description: "Select the upload policy." },
      { name: "fileName", type: "string", required: true, description: "Original file name." },
      { name: "contentType", type: "string", required: true, description: "Allowed MIME type." },
      { name: "byteSize", type: "number", required: true, description: "File size in bytes." },
    ],
  },
];

export const accountEndpoints: ApiEndpoint[] = [
  endpoint("GET", "/account", "account:read", "Return account settings and a linked-community summary.", {
    responseBody: {
      data: {
        accountDeletionCancelledAt: null,
        accountDeletionRequestedAt: null,
        accountDeletionScheduledAt: null,
        accountStatus: "active",
        linkedCommunities: [{ communityAvatar: null, communityId: "jd7community...", communityName: "Hive Builders", linkedAt: "2026-07-01T12:00:00.000Z" }],
        preferences: { mutedNotifications: [], theme: "system" },
      },
    },
  }),
  {
    method: "DELETE",
    path: "/account/keys/current",
    scopes: [],
    description: "Revokes the API key used to authenticate the current request — this is what `hive logout` calls.",
    request: {},
    response: {
      status: 200,
      body: json({ data: {} }),
      note: "Fields depend on the resource; see the app for a live response.",
    },
  },
  endpoint("PATCH", "/account/preferences", "account:write", "Update theme and muted-notification preferences.", {
    body: json({ theme: "system", mutedNotifications: [] }),
    responseBody: { data: { mutedNotifications: [], theme: "system", updatedAt: 1782907200000 } },
  }),
  endpoint("GET", "/account/linked-communities", "account:read", "List communities linked to your account.", {
    responseBody: { data: [{ communityAvatar: null, communityId: "jd7community...", communityName: "Hive Builders", linkedAt: "2026-07-01T12:00:00.000Z" }] },
  }),
  endpoint("DELETE", "/account/linked-communities/{communityId}", "account:write", "Disconnect a linked community.", {
    examplePath: "/account/linked-communities/jd7community...",
    responseBody: { data: { communityId: "jd7community...", success: true } },
  }),
  endpoint("POST", "/account/export", "account:read", "Request an export of your account data.", {
    responseStatus: 201,
    responseBody: { data: { exportId: "jd7export...", status: "requested" } },
  }),
  endpoint("POST", "/account/deletion", "account:destroy", "Request account deletion with explicit confirmation.", {
    body: json({ confirmation: "DELETE" }),
    responseBody: { data: { accountDeletionScheduledAt: 1783512000000, success: true } },
  }),
  endpoint("DELETE", "/account/deletion", "account:write", "Cancel a pending account-deletion request.", {
    responseBody: { data: { success: true } },
  }),
];

export const walletEndpoints: ApiEndpoint[] = [
  endpoint("GET", "/wallets", "account:read", "List your linked wallets.", {
    responseBody: {
      data: {
        defaultWalletAddress: "0x1234567890abcdef1234567890abcdef12345678",
        publicNftExposure: false,
        wallets: [{
          address: "0x1234567890abcdef1234567890abcdef12345678",
          chainId: 1,
          chainNamespace: "eip155",
          id: "jd7wallet...",
          isDefault: true,
          kind: "evm",
          publicallyDiscoverable: true,
        }],
      },
    },
  }),
  endpoint("PATCH", "/wallets/default", "account:write", "Set the default wallet.", {
    body: json({ walletAddress: "0x1234..." }),
    responseBody: { data: { defaultWalletAddress: "0x1234...", success: true } },
  }),
  endpoint("PATCH", "/wallets/{walletAddress}/visibility", "account:write", "Change a wallet's public discoverability.", {
    examplePath: "/wallets/0x1234.../visibility",
    body: json({ publicallyDiscoverable: true }),
    responseBody: { data: { publicallyDiscoverable: true, success: true, walletAddress: "0x1234..." } },
  }),
  endpoint("DELETE", "/wallets/{walletAddress}", "account:write", "Remove a linked wallet.", {
    examplePath: "/wallets/0x1234...",
    responseBody: { data: { removedWalletAddress: "0x1234...", success: true } },
  }),
  endpoint("PATCH", "/nfts/exposure", "account:write", "Control whether NFTs are publicly exposed.", {
    body: json({ enabled: true }),
    responseBody: { data: { enabled: true, success: true } },
  }),
];
