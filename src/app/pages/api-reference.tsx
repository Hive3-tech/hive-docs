import { RightSidebar } from "../components/right-sidebar";
import { CodeBlock, Callout } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Terminal } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function ApiReferencePage() {
  const [activeTab, setActiveTab] = useState<"javascript" | "typescript" | "python" | "curl">("curl");

  const tocItems = [
    { id: "base-url", label: "Base URL" },
    { id: "communities", label: "Communities API" },
    { id: "courses", label: "Courses API" },
    { id: "users", label: "Users API" },
    { id: "webhooks", label: "Webhooks" },
  ];

  const tabs = [
    { id: "curl" as const, label: "cURL" },
    { id: "javascript" as const, label: "JavaScript" },
    { id: "typescript" as const, label: "TypeScript" },
    { id: "python" as const, label: "Python" },
  ];

  const codeExamples = {
    curl: `curl -X POST https://api.hive3.com/api/v1/communities/onboard \\
  -H \"Authorization: Bearer YOUR_API_KEY\" \\
  -H \"Content-Type: application/json\" \\
  -d '{
    "email": "user@example.com",
    "username": "user123",
    "displayName": "Display Name"
  }'`,
    javascript: `const res = await fetch("https://api.hive3.com/api/v1/communities/onboard", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "user@example.com",
    username: "user123",
  }),
});

const payload = await res.json();`,
    typescript: `const res = await fetch("https://api.hive3.com/api/v1/communities/onboard", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "user@example.com",
    username: "user123",
  }),
});

type OnboardResponse = { user_id: string; handle: string; redirect_url: string };
const payload: OnboardResponse = await res.json();`,
    python: `import requests

res = requests.post(
    "https://api.hive3.com/api/v1/communities/onboard",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
    },
    json={
        "email": "user@example.com",
        "username": "user123"
    },
)
data = res.json()
print(data.get("redirect_url"))`,
  };

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          Developer Reference / <span className="text-foreground">API Overview</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          API Reference
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Complete reference for the Hive3 REST API with code examples in multiple languages.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Documentation */}
          <div className="space-y-12">
            {/* Base URL Section */}
            <section id="base-url">
              <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
              <p className="text-muted-foreground mb-4">
                All API requests should be made to:
              </p>
              <div className="bg-[#1e1e1e] rounded-lg p-4">
                <code className="text-green-400">https://api.hive3.com/api/v1</code>
              </div>
              <Callout type="info" title="Rate Limits">
                API requests are rate-limited to 100 requests per minute per API key.
              </Callout>
            </section>

            {/* Communities API Section */}
            <section id="communities">
              <h2 className="text-2xl font-semibold mb-4">Communities API</h2>
              
              <div className="space-y-6">
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-card p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded text-xs font-mono">
                        POST
                      </span>
                      <code className="text-sm">/communities</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Create a new community
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30">
                    <h4 className="text-sm font-semibold mb-2">Request Body</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <td className="py-1 font-mono text-xs">name</td>
                          <td className="py-1 text-muted-foreground">string (required)</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-mono text-xs">description</td>
                          <td className="py-1 text-muted-foreground">string</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-mono text-xs">isPublic</td>
                          <td className="py-1 text-muted-foreground">boolean</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-card p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded text-xs font-mono">
                        GET
                      </span>
                      <code className="text-sm">/communities/:id</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Get community details
                    </p>
                  </div>
                </div>

                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-card p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded text-xs font-mono">
                        PATCH
                      </span>
                      <code className="text-sm">/communities/:id</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Update community
                    </p>
                  </div>
                </div>

                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-card p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-xs font-mono">
                        DELETE
                      </span>
                      <code className="text-sm">/communities/:id</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Delete community
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Courses API Section */}
            <section id="courses">
              <h2 className="text-2xl font-semibold mb-4">Courses API</h2>
              
              <div className="space-y-4">
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-card p-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded text-xs font-mono">
                        POST
                      </span>
                      <code className="text-sm">/courses</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Create a new course
                    </p>
                  </div>
                </div>

                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-card p-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded text-xs font-mono">
                        GET
                      </span>
                      <code className="text-sm">/courses/:id/lessons</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      List course lessons
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Users API Section */}
            <section id="users">
              <h2 className="text-2xl font-semibold mb-4">Users API</h2>
              
              <div className="space-y-4">
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-card p-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded text-xs font-mono">
                        GET
                      </span>
                      <code className="text-sm">/users/me</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Get current user profile
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Webhooks Section */}
            <section id="webhooks">
              <h2 className="text-2xl font-semibold mb-4">Webhooks</h2>
              <p className="text-muted-foreground mb-4">
                Configure webhooks to receive real-time notifications about events in your communities.
              </p>
              <Callout type="info" title="Webhook Events">
                Supported events: community.created, member.joined, course.completed, payment.received
              </Callout>
            </section>
          </div>

          {/* Right: Live Code Example */}
          <div className="lg:sticky lg:top-20 h-fit">
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-border">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Live Example</span>
                </div>
                <div className="flex gap-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1 text-xs rounded transition-colors ${
                        activeTab === tab.id
                          ? "bg-[#6B01B6] text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <pre className="text-sm text-gray-100 overflow-x-auto">
                  <code>{codeExamples[activeTab]}</code>
                </pre>
              </div>
            </div>

            {/* Response Example */}
            <div className="mt-4 bg-[#1e1e1e] rounded-lg overflow-hidden border border-border">
              <div className="p-4 border-b border-gray-700">
                <span className="text-sm text-gray-300">Response</span>
              </div>
              <div className="p-4">
                <pre className="text-sm text-gray-100 overflow-x-auto">
                  <code>{`{
  "id": "comm_abc123",
  "name": "My Community",
  "description": "A great community",
  "isPublic": true,
  "memberCount": 1,
  "createdAt": "2026-02-19T10:30:00Z",
  "url": "https://app.hive3.com/c/my-community"
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Page Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/courses-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Courses Guide
          </Link>
          <Link
            to="/authentication"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Authentication
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
