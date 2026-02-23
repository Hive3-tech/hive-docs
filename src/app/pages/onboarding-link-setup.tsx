import { useState } from "react";
import { RightSidebar } from "../components/right-sidebar";
import { Callout, Step, CodeBlock, InlineCode } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Link2, LinkIcon, Mail } from "lucide-react";
import { Link } from "react-router";

type ExampleLanguage = "curl" | "fetch" | "node" | "python" | "go" | "java";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

type EndpointParameter = {
  name: string;
  type: string;
  required: boolean;
  description: string;
  example: string;
};

type EndpointExample = {
  id: ExampleLanguage;
  label: string;
  language: string;
  code: string;
};

type EndpointResponseExample = {
  status: number;
  notes: string;
  example: string;
};

type EndpointCardData = {
  method: HttpMethod;
  path: string;
  title: string;
  description: string;
  requestParameters: EndpointParameter[];
  requestExamples: EndpointExample[];
  responseExamples: EndpointResponseExample[];
};

const endpointCards: EndpointCardData[] = [
  {
    method: "POST",
    path: "/api/v1/communities/onboard",
    title: "Create onboarding link",
    description:
      "Create or resolve a user by email, add them to the target community, and return a one-time `redirect_url` with a welcome token. For existing users, the payload is not used as an update payload. This endpoint is for onboarding automation only, not full profile or subscription synchronization.",
    requestParameters: [
    {
        name: "email",
        type: "string",
        required: true,
        description: "Required. User email used to resolve an existing user or create a new one.",
        example: "user@example.com",
      },
      {
        name: "username",
        type: "string",
        required: false,
        description:
          "Optional desired handle. If user already exists, this field is ignored. For new users, this is used as a username candidate.",
        example: "optional_username",
      },
      {
        name: "display_name",
        type: "string",
        required: false,
        description: "Optional profile name stored on created users only.",
        example: "Optional display name",
      },
      {
        name: "profile_image_url",
        type: "string",
        required: false,
        description: "Optional profile image URL stored on created users only.",
        example: "https://cdn.example.com/avatar.png",
      },
      {
        name: "banner_image_url",
        type: "string",
        required: false,
        description: "Optional banner image URL stored on created users only.",
        example: "https://cdn.example.com/banner.png",
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
    "email": "partner_user@example.com",
    "username": "partner_user",
    "display_name": "Partner User",
    "profile_image_url": "https://cdn.example.com/avatar.png",
    "banner_image_url": "https://cdn.example.com/banner.png"
  }'`,
      },
      {
        id: "fetch",
        label: "fetch",
        language: "javascript",
        code: `const payload = {
  email: "partner_user@example.com",
  username: "partner_user",
  display_name: "Partner User",
  profile_image_url: "https://cdn.example.com/avatar.png",
  banner_image_url: "https://cdn.example.com/banner.png",
};

const response = await fetch("https://api.hive3.tech/api/v1/communities/onboard", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const data = await response.json();
console.log(data);`,
      },
      {
        id: "node",
        label: "Node.js",
        language: "javascript",
        code: `import https from "node:https";

const payload = JSON.stringify({
  email: "partner_user@example.com",
  username: "partner_user",
  display_name: "Partner User",
  profile_image_url: "https://cdn.example.com/avatar.png",
  banner_image_url: "https://cdn.example.com/banner.png",
});

const req = https.request(
  {
    method: "POST",
    hostname: "api.hive3.tech",
    path: "/api/v1/communities/onboard",
    headers: {
      Authorization: "Bearer YOUR_API_KEY",
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(payload),
    },
  },
  (res) => {
    let body = "";
    res.on("data", (chunk) => (body += chunk));
    res.on("end", () => {
      console.log(JSON.parse(body));
    });
  }
);

req.on("error", (error) => {
  console.error(error);
});
req.write(payload);
req.end();`,
      },
      {
        id: "python",
        label: "Python",
        language: "python",
        code: `import requests

payload = {
    "email": "partner_user@example.com",
    "username": "partner_user",
    "display_name": "Partner User",
    "profile_image_url": "https://cdn.example.com/avatar.png",
    "banner_image_url": "https://cdn.example.com/banner.png",
}

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
}

response = requests.post(
    "https://api.hive3.tech/api/v1/communities/onboard",
    json=payload,
    headers=headers,
)

print(response.status_code)
print(response.json())`,
      },
      {
        id: "go",
        label: "Go",
        language: "go",
        code: `package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "io"
  "net/http"
)

func main() {
  payload := map[string]string{
    "email":       "partner_user@example.com",
    "username":    "partner_user",
    "display_name": "Partner User",
    "profile_image_url": "https://cdn.example.com/avatar.png",
    "banner_image_url": "https://cdn.example.com/banner.png",
  }

  body, _ := json.Marshal(payload)
  req, _ := http.NewRequest(
    "POST",
    "https://api.hive3.tech/api/v1/communities/onboard",
    bytes.NewBuffer(body),
  )
  req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
  req.Header.Set("Content-Type", "application/json")

  client := &http.Client{}
  res, err := client.Do(req)
  if err != nil {
    panic(err)
  }
  defer res.Body.Close()

  data, _ := io.ReadAll(res.Body)
  fmt.Printf("%s\\n", data)
}`,
      },
      {
        id: "java",
        label: "Java",
        language: "java",
        code: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class OnboardExample {
  public static void main(String[] args) throws Exception {
    String payload = """
      {
        "email": "partner_user@example.com",
        "username": "partner_user",
        "display_name": "Partner User",
        "profile_image_url": "https://cdn.example.com/avatar.png",
        "banner_image_url": "https://cdn.example.com/banner.png"
      }
    """;

    HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create("https://api.hive3.tech/api/v1/communities/onboard"))
      .header("Authorization", "Bearer YOUR_API_KEY")
      .header("Content-Type", "application/json")
      .POST(HttpRequest.BodyPublishers.ofString(payload))
      .build();

    HttpResponse<String> response = HttpClient.newHttpClient()
      .send(request, HttpResponse.BodyHandlers.ofString());

    System.out.println(response.statusCode());
    System.out.println(response.body());
  }
}
`,
      },
    ],
    responseExamples: [
      {
        status: 200,
        notes: "Request accepted and onboarding URL generated.",
        example: `{
  "user_id": "uuid",
  "handle": "partner_user",
  "redirect_url": "https://app.hive3.tech/community/community_handle/welcome?token=..."
}`,
      },
      {
        status: 400,
        notes: "Validation failed in request payload.",
        example: `{
  "error": "BadRequest",
  "message": "email is required"
}`,
      },
      {
        status: 401,
        notes: "Authentication failed.",
        example: `{
  "error": "Unauthorized",
  "message": "Missing or invalid API key"
}`,
      },
      {
        status: 403,
        notes: "Community tier or role is not eligible for API key onboarding.",
        example: `{
  "error": "Forbidden",
  "message": "community admin access required"
}`,
      },
    ],
  },
];

function EndpointCard({
  method,
  path,
  title,
  description,
  requestParameters,
  requestExamples,
  responseExamples,
}: EndpointCardData) {
  const [activeExample, setActiveExample] = useState<ExampleLanguage>(requestExamples[0]?.id ?? "curl");
  const currentExample = requestExamples.find((example) => example.id === activeExample) ?? requestExamples[0];

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 px-2.5 py-0.5 text-xs font-semibold">
          {method}
        </span>
        <p className="font-mono text-sm">{path}</p>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5">{description}</p>

      <section className="space-y-3 mb-6 border border-border rounded-lg p-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#6B01B6]" />
          <h4 className="font-semibold text-lg">Onboard request parameters</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="p-2 min-w-28">Field</th>
                <th className="p-2 min-w-16">Type</th>
                <th className="p-2 min-w-16">Required</th>
                <th className="p-2 min-w-32">Description</th>
                <th className="p-2 min-w-40">Example</th>
              </tr>
            </thead>
            <tbody>
              {requestParameters.map((parameter) => (
                <tr key={parameter.name} className="border-b border-border last:border-b-0">
                  <td className="p-2 align-top font-mono text-xs">{parameter.name}</td>
                  <td className="p-2 align-top">{parameter.type}</td>
                  <td className="p-2 align-top">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
                        parameter.required
                          ? "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                          : "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300"
                      }`}
                    >
                      {parameter.required ? "Required" : "Optional"}
                    </span>
                  </td>
                  <td className="p-2 align-top text-muted-foreground">{parameter.description}</td>
                  <td className="p-2 align-top font-mono text-xs">{parameter.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3 mb-6 border border-border rounded-lg p-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#6B01B6]" />
          <h4 className="font-semibold text-lg">Onboard request examples</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {requestExamples.map((example) => (
            <button
              key={example.id}
              type="button"
              onClick={() => setActiveExample(example.id)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                activeExample === example.id
                  ? "bg-[#6B01B6] text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {example.label}
            </button>
          ))}
        </div>
        {currentExample ? (
          <>
            <p className="text-xs text-muted-foreground">{currentExample.label}</p>
            <CodeBlock language={currentExample.language} code={currentExample.code} />
          </>
        ) : null}
      </section>

      <section className="space-y-3 border border-border rounded-lg p-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#6B01B6]" />
          <h4 className="font-semibold text-lg">Onboard response</h4>
        </div>
        {responseExamples.map((response) => (
          <div key={`${path}-${response.status}`}>
            <p className="text-xs text-muted-foreground mb-1">
              HTTP {response.status}: {response.notes}
            </p>
            <CodeBlock language="json" code={response.example} />
          </div>
        ))}
      </section>
    </div>
  );
}

export function OnboardingLinkSetupPage() {
  const tocItems = [
    { id: "what-are", label: "What are onboarding links" },
    { id: "flow", label: "How links work" },
    { id: "url", label: "URL format" },
    { id: "welcome-page", label: "Welcome page behavior" },
    { id: "api", label: "API endpoints" },
    { id: "use-cases", label: "Use cases" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Developer Reference / <span className="text-foreground">Onboard</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Onboard
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Generate verified onboarding links for users your community platform already knows about.
        </p>

        <section id="what-are" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">What are onboarding links</h2>
          <p className="text-muted-foreground">
            These links are for partner-integrated communities that already have a user identifier or membership context.
            The endpoint creates or resolves that user, then returns a short-lived link they can click to join the community.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-[#6B01B6]" />
                Existing-user onboarding
              </div>
              <p className="text-sm text-muted-foreground">
                Designed to onboard users who are already known in your external system.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6B01B6]" />
                Scoped and safe
              </div>
              <p className="text-sm text-muted-foreground">
                The returned link contains a one-time token and short expiration to avoid stale invites.
              </p>
            </div>
          </div>
        </section>

        <section id="flow" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="space-y-6">
            <Step number={1} title="Generate tokenized URL">
              Your backend calls this API with known user details and receives a <InlineCode>redirect_url</InlineCode>.
            </Step>
            <Step number={2} title="Redirect the user">
              Redirect from your app, partner portal, or email flow to the returned <InlineCode>redirect_url</InlineCode>.
            </Step>
            <Step number={3} title="Onboard outcome">
              If that user already exists in Hive, access is connected to the target community; otherwise, a fresh Hive
              account is created with the supplied profile basics.
            </Step>
          </div>
          <Callout type="info" title="Existing users and confirmation">
            Existing Hive users are connected when they complete the redirect flow and validate identity in-browser. In cases where
            the user is already signed in, membership is applied immediately; otherwise the welcome step handles login and consent.
          </Callout>
        </section>

        <section id="url" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">URL format</h2>
          <Callout type="info" title="Community welcome URL">
            <InlineCode>/community/{`{slug}`}/welcome?token={`{welcomeToken}`}</InlineCode>
          </Callout>
          <p className="text-muted-foreground">
            The route is always a single, community-specific link that carries a scoped, one-time onboarding token.
          </p>
        </section>

        <section id="welcome-page" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Welcome page behavior</h2>
          <p className="text-muted-foreground">
            The page confirms identity context and then continues the onboarding flow for the specified community.
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Token-based onboarding route is prefilled before final handoff.</li>
            <li>Community context is shown to reduce confusion for the user.</li>
            <li>If needed, the user is prompted to sign in before access is granted.</li>
          </ul>
        </section>

        <section id="api" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">API endpoints</h2>
          <div className="space-y-4">
            {endpointCards.map((endpoint) => (
              <EndpointCard key={`${endpoint.path}-${endpoint.method}`} {...endpoint} />
            ))}
          </div>
        </section>

        <section id="use-cases" className="space-y-4">
          <h2 className="text-2xl font-semibold">Use cases</h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">Existing user handoff</p>
                <p className="text-sm text-muted-foreground">
                  Invite users from an external site or partner backend and preserve membership state.
                  This flow does not mirror arbitrary CRM/subscription attributes into Hive.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">Onboarding campaigns</p>
                <p className="text-sm text-muted-foreground">
                  Trigger clicks from partner products or portals directly into community onboarding.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">Partner integrations</p>
                <p className="text-sm text-muted-foreground">
                  Build reliable integrations where an external system owns customer membership decisions.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-[#6B01B6] mt-0.5" />
              <div>
                <p className="font-semibold">External embeds</p>
                <p className="text-sm text-muted-foreground">
                  Add onboarding actions inside your existing product surface without duplicating login UX.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/api-keys-and-integrations"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            API Keys
          </Link>
          <Link
            to="/video-tutorials"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Video Tutorials
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
