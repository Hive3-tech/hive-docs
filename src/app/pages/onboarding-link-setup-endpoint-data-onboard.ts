import type { EndpointCardData } from "./onboarding-link-setup-endpoint-card";

export const onboardEndpointCard: EndpointCardData = {
  method: "POST",
  path: "/api/v1/communities/onboard",
  title: "Create or match onboarding user",
  description:
    "Creates or matches a Hive3 user for the target community, stores welcome context, and returns a session-capable `welcome_url` plus the resolved `user_id` and `username`.",
  authMode: "Auth: API key",
  requestParameters: [
    {
      name: "email",
      type: "string",
      required: true,
      description: "Required email address. Existing emails reuse the current Hive3 account; new emails create a Hive3 account.",
      example: "partner.user@example.com",
    },
    {
      name: "display_name",
      type: "string",
      required: false,
      description: "Optional profile display name. Defaults to the email prefix when omitted.",
      example: "Partner User",
    },
    {
      name: "username",
      type: "string",
      required: false,
      description: "Optional requested username. If taken, Hive3 assigns the next sequential suffix such as `name01`, `name02`, and so on.",
      example: "partner_user",
    },
    {
      name: "short_bio",
      type: "string",
      required: false,
      description: "Optional short bio for the created or matched user.",
      example: "Building in Web3",
    },
    {
      name: "full_bio",
      type: "string",
      required: false,
      description: "Optional full bio for the created or matched user.",
      example: "I like shipping useful products.",
    },
    {
      name: "social_links",
      type: "array<{platform,url}>",
      required: false,
      description: "Optional social prefill list. Each item requires both `platform` and `url`.",
      example: '[{"platform":"x","url":"https://x.com/partner_user"}]',
    },
    {
      name: "subscription_id",
      type: "uuid",
      required: false,
      description:
        "Optional community-owned subscription plan to assign at consume time (must be active and PayPal-linked).",
      example: "7f5d9b84-45d8-4d71-bff8-72974f9de8e1",
    },
    {
      name: "subscription_expires_at",
      type: "RFC3339 timestamp",
      required: false,
      description: "Optional expiration for API-assigned subscription. Requires `subscription_id`.",
      example: "2026-12-31T23:59:59Z",
    },
  ],
  requestExamples: [
    {
      id: "curl",
      label: "cURL",
      language: "bash",
      code: `curl -X POST https://api.hive3.tech/api/v1/communities/onboard \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "partner.user@example.com",
    "display_name": "Partner User",
    "username": "partner_user",
    "short_bio": "Building in Web3",
    "full_bio": "I like shipping useful products.",
    "social_links": [
      { "platform": "x", "url": "https://x.com/partner_user" }
    ]
  }'`,
    },
    {
      id: "fetch",
      label: "fetch",
      language: "javascript",
      code: `const response = await fetch("https://api.hive3.tech/api/v1/communities/onboard", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "partner.user@example.com",
    display_name: "Partner User",
    username: "partner_user",
    short_bio: "Building in Web3",
    full_bio: "I like shipping useful products.",
    social_links: [{ platform: "x", url: "https://x.com/partner_user" }],
  }),
});

const data = await response.json();`,
    },
  ],
  responseExamples: [
    {
      status: 200,
      notes: "User created or matched successfully.",
      example: `{
  "user_id": "7f5d9b84-45d8-4d71-bff8-72974f9de8e1",
  "username": "partner_user",
  "welcome_url": "https://api.hive3.tech/api/auth/welcome?token=ENCRYPTED_TOKEN&communityId=COMMUNITY_ID&ctx=Q6mJmQ3f1jYw0V8LtF8UsH4o"
}`,
    },
    {
      status: 400,
      notes: "Invalid payload.",
      example: `{
  "message": "email is required"
}`,
    },
    {
      status: 401,
      notes: "Missing or invalid API key.",
      example: `{
  "message": "invalid api key"
}`,
    },
    {
      status: 409,
      notes: "A required linked resource is invalid for this community.",
      example: `{
  "message": "subscription_id does not belong to this community"
}`,
    },
  ],
};
