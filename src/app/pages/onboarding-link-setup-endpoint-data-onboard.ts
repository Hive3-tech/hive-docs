import type { EndpointCardData } from "./onboarding-link-setup-endpoint-card";

export const onboardEndpointCard: EndpointCardData = {
  method: "POST",
  path: "/api/v1/communities/onboard",
  title: "Create onboarding context",
  description:
    "Creates a short-lived onboarding context and returns `welcome_url` with `ctx` nonce. This endpoint does not accept `email` and does not auto-link users.",
  authMode: "Auth: API key",
  requestParameters: [
    {
      name: "display_name",
      type: "string",
      required: false,
      description: "Prefill candidate for onboarding display name.",
      example: "Partner User",
    },
    {
      name: "username",
      type: "string",
      required: false,
      description: "Prefill candidate for onboarding username.",
      example: "partner_user",
    },
    {
      name: "short_bio",
      type: "string",
      required: false,
      description: "Prefill candidate for short bio.",
      example: "Building in Web3",
    },
    {
      name: "full_bio",
      type: "string",
      required: false,
      description: "Prefill candidate for full bio.",
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
      notes: "Context created.",
      example: `{
  "welcome_url": "https://app.hive3.tech/community/builders/welcome?ctx=Q6mJmQ3f1jYw0V8LtF8UsH4o"
}`,
    },
    {
      status: 400,
      notes: "Invalid payload.",
      example: `{
  "message": "subscription_id is required when subscription_expires_at is set"
}`,
    },
    {
      status: 401,
      notes: "Missing or invalid API key.",
      example: `{
  "message": "invalid api key"
}`,
    },
  ],
};
