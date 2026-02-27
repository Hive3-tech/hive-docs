import { Link } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RightSidebar } from '../components/right-sidebar';
import { Callout, CodeBlock, InlineCode } from '../components/doc-components';
import { APIExampleTabs } from './api-example-tabs';
import {
  assignSubscriptionExamples,
  getUserExamples,
  listUsersExamples,
  patchUserExamples,
  revokeSubscriptionExamples,
} from './api-managing-users-example-data';

export function APIManagingUsersPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'list-users', label: 'List linked users' },
    { id: 'get-user', label: 'Get one linked user' },
    { id: 'update-user', label: 'Update linked user' },
    { id: 'scope', label: 'Scope and authorization' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">
          Developer Reference / <span className="text-foreground">Managing Users</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Managing Users
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Manage linked users created through community API onboarding, including API-managed
          subscription assignments.
        </p>

        <section id="overview" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-muted-foreground">
            Linked scope is created when users complete the Hive onboarding and consent flow from
            your onboarding link.
          </p>
        </section>

        <section id="list-users" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">GET /api/v1/communities/users</h2>
          <p className="text-muted-foreground">
            Returns paginated linked users with subscription summary.
          </p>
          <div className="rounded-lg border border-border bg-card p-4 text-sm space-y-2">
            <p>
              <InlineCode>limit</InlineCode> (default 20, max 100), <InlineCode>offset</InlineCode>{' '}
              (offset pagination)
            </p>
            <p>
              <InlineCode>subscription_status</InlineCode>: <InlineCode>active</InlineCode> |{' '}
              <InlineCode>expired</InlineCode> | <InlineCode>none</InlineCode>
            </p>
            <p>
              <InlineCode>linked_from</InlineCode>, <InlineCode>linked_to</InlineCode> (RFC3339
              timestamps)
            </p>
          </div>
          <APIExampleTabs examples={listUsersExamples} />
          <CodeBlock
            language="json"
            code={`{
  "users": [
    {
      "user_id": "uuid",
      "username": "partner_user",
      "display_name": "Partner User",
      "email": "***@example.com",
      "subscription_status": "active",
      "linked_at": "2026-03-04T12:00:00Z"
    }
  ],
  "limit": 20,
  "offset": 0
}`}
          />
        </section>

        <section id="get-user" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">GET /api/v1/communities/users/:userId</h2>
          <p className="text-muted-foreground">
            Returns one linked user profile + subscription status.
          </p>
          <p className="text-sm text-muted-foreground">
            <InlineCode>email</InlineCode> is masked to domain format (
            <InlineCode>***@domain</InlineCode>) and may be empty.
          </p>
          <APIExampleTabs examples={getUserExamples} />
          <CodeBlock
            language="json"
            code={`{
  "user_id": "uuid",
  "username": "partner_user",
  "display_name": "Partner User",
  "email": "***@example.com",
  "subscription_status": "active",
  "linked_at": "2026-03-04T12:00:00Z"
}`}
          />
        </section>

        <section id="update-user" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">PATCH /api/v1/communities/users/:userId</h2>
          <p className="text-muted-foreground">
            Updates linked user <InlineCode>display_name</InlineCode> and/or{' '}
            <InlineCode>username</InlineCode>.
          </p>
          <div className="rounded-lg border border-border bg-card p-4 text-sm space-y-2">
            <p>
              <InlineCode>display_name</InlineCode>: optional string
            </p>
            <p>
              <InlineCode>username</InlineCode>: optional handle, validated with global uniqueness
              and normalized to lowercase
            </p>
            <p>At least one field is required.</p>
          </div>
          <APIExampleTabs examples={patchUserExamples} />
          <Callout type="warning" title="Common error codes">
            <InlineCode>400</InlineCode> invalid payload, <InlineCode>404</InlineCode> user not
            linked, <InlineCode>409</InlineCode> username already taken.
          </Callout>

          <h3 className="text-xl font-semibold pt-4">
            PUT /api/v1/communities/users/:userId/subscription
          </h3>
          <div className="rounded-lg border border-border bg-card p-4 text-sm space-y-2">
            <p>
              <InlineCode>subscription_id</InlineCode>: required UUID
            </p>
            <p>
              <InlineCode>expires_at</InlineCode>: optional RFC3339 timestamp
            </p>
            <p>Target user must have an active linked-community relationship.</p>
          </div>
          <APIExampleTabs examples={assignSubscriptionExamples} />
          <CodeBlock
            language="json"
            code={`{
  "user_subscription_id": "uuid",
  "user_id": "uuid",
  "subscription_id": "uuid",
  "status": "active",
  "starts_at": "2026-03-04T12:00:00Z",
  "expires_at": "2026-12-31T23:59:59Z",
  "assigned_via": "api",
  "assigned_by_community_id": "uuid"
}`}
          />

          <h3 className="text-xl font-semibold pt-4">
            DELETE /api/v1/communities/users/:userId/subscription
          </h3>
          <p className="text-muted-foreground">
            Cancels only API-assigned active subscriptions for that user/community pair.
          </p>
          <APIExampleTabs examples={revokeSubscriptionExamples} />
          <CodeBlock language="http" code={`HTTP/1.1 204 No Content`} />
        </section>

        <section id="scope" className="space-y-4">
          <h2 className="text-2xl font-semibold">Scope and authorization</h2>
          <div className="rounded-lg border border-border bg-card p-4">
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Only active linked users are manageable.</li>
              <li>
                Unlinked users always return <InlineCode>404</InlineCode> to prevent cross-community
                user probing.
              </li>
              <li>API key requests are rate-limited at 100 requests/minute per key.</li>
              <li>All management actions are written to API audit logs.</li>
            </ul>
          </div>
        </section>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/api-reference"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Onboard
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
