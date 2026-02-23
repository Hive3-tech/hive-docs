import { RightSidebar } from "../components/right-sidebar";
import { CodeBlock, Callout, InlineCode } from "../components/doc-components";
import { ChevronLeft, ChevronRight, Users, Shield, Settings, BarChart } from "lucide-react";
import { Link } from "react-router";

export function CommunitiesGuidePage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "creating", label: "Creating a Community" },
    { id: "member-management", label: "Member Management" },
    { id: "roles-permissions", label: "Roles & Permissions" },
    { id: "discovery", label: "Community Discovery" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          Platform Guide / <span className="text-foreground">Communities</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6B01B6] to-[#512DA8] bg-clip-text text-transparent">
          Communities Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Learn how to create and manage thriving Web3 communities on the Hive3 platform.
        </p>

        {/* Content */}
        <div className="space-y-12">
          {/* Overview Section */}
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-6">
              Communities are the foundation of Hive3. They bring together members around shared interests, 
              learning goals, and collaborative projects in the Web3 space.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <Users className="w-10 h-10 text-[#6B01B6] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Member-Centric</h3>
                  <p className="text-sm text-muted-foreground">
                    Build engaged communities with powerful member management tools.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <Shield className="w-10 h-10 text-[#6B01B6] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Token-Gated</h3>
                  <p className="text-sm text-muted-foreground">
                    Control access with NFTs, tokens, or custom conditions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <Settings className="w-10 h-10 text-[#6B01B6] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Fully Customizable</h3>
                  <p className="text-sm text-muted-foreground">
                    Customize every aspect from branding to features.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <BarChart className="w-10 h-10 text-[#6B01B6] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Analytics Built-In</h3>
                  <p className="text-sm text-muted-foreground">
                    Track engagement, growth, and member activity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Creating Section */}
          <section id="creating">
            <h2 className="text-2xl font-semibold mb-4">Creating a Community</h2>
            <p className="text-muted-foreground mb-4">
              Use a server-side API call to create and configure communities:
            </p>
            
            <CodeBlock
              language="bash"
              code={`curl -X POST https://api.hive3.tech/api/v1/communities \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "DeFi Developers",
    "description": "A community for DeFi protocol developers",
    "isPublic": true
  }'`}
            />

            <Callout type="info" title="Community Types">
              You can create public communities (discoverable by all users) or private communities 
              (invite-only with optional token-gating requirements).
            </Callout>
          </section>

          {/* Member Management Section */}
          <section id="member-management">
            <h2 className="text-2xl font-semibold mb-4">Member Management</h2>
            <p className="text-muted-foreground mb-4">
              Manage your community members with these API methods:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Invite Members</h3>
                <CodeBlock
                  language="TypeScript"
                  code={`// Send email invitations
await client.communities.invite({
  communityId: 'community-id',
  emails: ['user1@example.com', 'user2@example.com'],
  role: 'member',
  message: 'Welcome to our community!'
});

// Generate invite link
const invite = await client.communities.createInviteLink({
  communityId: 'community-id',
  maxUses: 50,
  expiresAt: '2026-12-31'
});
console.log('Invite link:', invite.url);`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">List Members</h3>
                <CodeBlock
                  language="TypeScript"
                  code={`const members = await client.communities.listMembers({
  communityId: 'community-id',
  role: 'all', // or 'admin', 'moderator', 'member'
  limit: 50,
  offset: 0
});

members.data.forEach(member => {
  console.log(\`\${member.username} - \${member.role}\`);
});`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Remove Members</h3>
                <CodeBlock
                  language="TypeScript"
                  code={`await client.communities.removeMember({
  communityId: 'community-id',
  userId: 'user-id',
  reason: 'Violation of community guidelines'
});`}
                />
              </div>
            </div>
          </section>

          {/* Roles & Permissions Section */}
          <section id="roles-permissions">
            <h2 className="text-2xl font-semibold mb-4">Roles & Permissions</h2>
            <p className="text-muted-foreground mb-4">
              Hive3 communities support granular role-based access control:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold">Role</th>
                    <th className="text-left p-3 font-semibold">Permissions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border">
                    <td className="p-3"><InlineCode>owner</InlineCode></td>
                    <td className="p-3 text-muted-foreground">Full control including deletion and transfer</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3"><InlineCode>admin</InlineCode></td>
                    <td className="p-3 text-muted-foreground">Manage members, content, and settings</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3"><InlineCode>moderator</InlineCode></td>
                    <td className="p-3 text-muted-foreground">Moderate content and manage members</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3"><InlineCode>member</InlineCode></td>
                    <td className="p-3 text-muted-foreground">Post content and participate in community</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <CodeBlock
                language="TypeScript"
                code={`// Update member role
await client.communities.updateMemberRole({
  communityId: 'community-id',
  userId: 'user-id',
  role: 'moderator'
});`}
              />
            </div>
          </section>

          {/* Discovery Section */}
          <section id="discovery">
            <h2 className="text-2xl font-semibold mb-4">Community Discovery</h2>
            <p className="text-muted-foreground mb-4">
              Make your community discoverable to potential members:
            </p>

            <CodeBlock
              language="TypeScript"
              code={`// Search for communities
const results = await client.communities.search({
  query: 'defi',
  category: 'development',
  tags: ['blockchain', 'web3'],
  isPublic: true,
  limit: 20
});

// Get trending communities
const trending = await client.communities.getTrending({
  period: '7d', // 24h, 7d, 30d
  limit: 10
});`}
            />

            <Callout type="success" title="Pro Tip">
              Optimize your community for discovery by adding relevant tags, a detailed description, 
              and keeping your community active with regular content and events.
            </Callout>
          </section>
        </div>

        {/* Page Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          <Link
            to="/get-started"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Get Started
          </Link>
          <Link
            to="/courses-guide"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#6B01B6] transition-colors"
          >
            Courses Guide
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RightSidebar items={tocItems} />
    </div>
  );
}
