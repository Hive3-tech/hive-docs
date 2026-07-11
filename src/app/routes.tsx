import { createBrowserRouter, Navigate } from "react-router";
import type { ComponentType } from "react";
import { DocLayout } from "./components/doc-layout";
import { orderedDocPages } from "./doc-navigation";
import { OverviewPage } from "./pages/overview";
import { MembershipPlansPage } from "./pages/membership-plans";
import { ProfileDashboardPage } from "./pages/profile-dashboard";
import { EditingYourProfilePage } from "./pages/editing-your-profile";
import { ProfileBuilderPage } from "./pages/profile-builder";
import { AccountSettingsPage } from "./pages/account-settings";
import { ConnectPayPalPage } from "./pages/connect-paypal";
import { PersonalAiAssistantPage } from "./pages/personal-ai-assistant";
import { YourCommunitiesPage } from "./pages/your-communities";
import { CollaboratorsPage } from "./pages/collaborators";
import { CommunitiesOverviewPage } from "./pages/communities-overview";
import { CreatingCommunityPage } from "./pages/creating-a-community";
import { CommunityProfileBuilderPage } from "./pages/community-profile-builder";
import { CommunitySettingsPage } from "./pages/community-settings";
import { MembersAndApplicationsPage } from "./pages/members-and-applications";
import { PermissionsPage } from "./pages/permissions";
import { ChatAndIntegrationsPage } from "./pages/chat-and-integrations";
import { CommunityPayPalPage } from "./pages/community-paypal";
import { CommunityAiAssistantPage } from "./pages/community-ai-assistant";
import { PostsAndFeedPage } from "./pages/posts-and-feed";
import { EventsGuidePage } from "./pages/events-guide";
import { CoursesGuidePage } from "./pages/courses-guide";
import { ContentGuidePage } from "./pages/content-guide";
import { QuestsGuidePage } from "./pages/quests-guide";
import { JobsGuidePage } from "./pages/jobs-guide";
import { HoneyMarketplacePage } from "./pages/honey-marketplace";
import { TicketsAndPurchasesPage } from "./pages/tickets-and-purchases";
import { MessagingPage } from "./pages/messaging";
import { NotificationsPage } from "./pages/notifications";
import { CredentialsPage } from "./pages/credentials";
import { CircleWalletPage } from "./pages/circle-wallet";
import { LinkingExternalWalletsPage } from "./pages/linking-external-wallets";
import { CliQuickstartPage } from "./pages/cli-quickstart";
import { CliAuthenticationPage } from "./pages/cli-authentication";
import { CliCommandsPage } from "./pages/cli-commands";
import { ApiOverviewPage } from "./pages/api-overview";
import { ApiKeysPage } from "./pages/api-keys";
import { ApiProfileAndAccountPage } from "./pages/api-profile-and-account";
import { ApiPostsAndCommentsPage } from "./pages/api-posts-and-comments";
import { ApiResourcesPage } from "./pages/api-resources";
import { ApiWorkflowsPage } from "./pages/api-workflows";
import { ApiCommunitiesPage } from "./pages/api-communities";
import { ApiNotificationsPage } from "./pages/api-notifications";
import { NotFoundPage } from "./pages/not-found";
import { DocsRouteErrorBoundary } from "./pages/route-error";

const customPages: Record<string, ComponentType> = {
  "/": OverviewPage,
  "/membership-plans": MembershipPlansPage,
  "/profile-dashboard": ProfileDashboardPage,
  "/editing-your-profile": EditingYourProfilePage,
  "/profile-builder": ProfileBuilderPage,
  "/account-settings": AccountSettingsPage,
  "/connect-paypal": ConnectPayPalPage,
  "/personal-ai-assistant": PersonalAiAssistantPage,
  "/your-communities": YourCommunitiesPage,
  "/collaborators": CollaboratorsPage,
  "/communities-overview": CommunitiesOverviewPage,
  "/creating-a-community": CreatingCommunityPage,
  "/community-profile-builder": CommunityProfileBuilderPage,
  "/community-settings": CommunitySettingsPage,
  "/members-and-applications": MembersAndApplicationsPage,
  "/permissions": PermissionsPage,
  "/chat-and-integrations": ChatAndIntegrationsPage,
  "/community-paypal": CommunityPayPalPage,
  "/community-ai-assistant": CommunityAiAssistantPage,
  "/posts-and-feed": PostsAndFeedPage,
  "/events-guide": EventsGuidePage,
  "/courses-guide": CoursesGuidePage,
  "/content-guide": ContentGuidePage,
  "/quests-guide": QuestsGuidePage,
  "/jobs-guide": JobsGuidePage,
  "/honey-marketplace": HoneyMarketplacePage,
  "/tickets-and-purchases": TicketsAndPurchasesPage,
  "/messaging": MessagingPage,
  "/notifications": NotificationsPage,
  "/credentials": CredentialsPage,
  "/circle-wallet": CircleWalletPage,
  "/linking-external-wallets": LinkingExternalWalletsPage,
  "/cli/quickstart": CliQuickstartPage,
  "/cli/authentication": CliAuthenticationPage,
  "/cli/commands": CliCommandsPage,
  "/api/overview": ApiOverviewPage,
  "/api/keys": ApiKeysPage,
  "/api/profile-and-account": ApiProfileAndAccountPage,
  "/api/posts-and-comments": ApiPostsAndCommentsPage,
  "/api/resources": ApiResourcesPage,
  "/api/workflows": ApiWorkflowsPage,
  "/api/communities": ApiCommunitiesPage,
  "/api/notifications": ApiNotificationsPage,
};

// Every navigation entry must resolve to a registered page component.
// Fail loudly at module scope so a missing page breaks dev/build instead
// of silently shipping a placeholder.
for (const page of orderedDocPages) {
  if (!customPages[page.path]) {
    throw new Error(`No component registered for ${page.path}`);
  }
}

// Old path -> new path. Every previously-live URL redirects to its
// replacement via a client-side replace navigation.
const redirects: Record<string, string> = {
  "/get-started": "/",
  "/changelog": "/",
  "/video-tutorials": "/",
  "/membership-tiers": "/membership-plans",
  "/honey-bee-profile-dashboard-overview": "/profile-dashboard",
  "/profile-and-account-settings": "/editing-your-profile",
  "/profile-paypal": "/connect-paypal",
  "/profile-ai": "/personal-ai-assistant",
  "/ai-assistant-setup": "/personal-ai-assistant",
  "/profile-communities": "/your-communities",
  "/profile-collaborators": "/collaborators",
  "/managing-collaborators": "/collaborators",
  "/communities-guide": "/creating-a-community",
  "/managing-members": "/members-and-applications",
  "/admins-and-moderators": "/permissions",
  "/chat-settings": "/chat-and-integrations",
  "/paypal-and-subscriptions": "/community-paypal",
  "/paypal-integration": "/community-paypal",
  "/ai-settings": "/community-ai-assistant",
  "/creating-events": "/events-guide",
  "/creating-courses": "/courses-guide",
  "/creating-content": "/content-guide",
  "/quests-and-tasks": "/quests-guide",
  "/creating-jobs": "/jobs-guide",
  "/credentials-and-nfts": "/credentials",
  "/credentials-explained": "/credentials",
  "/api-reference": "/api/overview",
  "/api-managing-users": "/api/overview",
  "/api-subscription-management": "/api/overview",
  "/api-keys-and-integrations": "/api/keys",
  "/cli/agents": "/cli/quickstart",
};

const pageRoutes = orderedDocPages.map((page) => ({
  path: page.path,
  Component: customPages[page.path],
}));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DocLayout,
    errorElement: <DocsRouteErrorBoundary />,
    children: [
      ...pageRoutes.map((route) => {
        if (route.path === "/") {
          return { index: true, Component: route.Component };
        }

        return {
          path: route.path.slice(1),
          Component: route.Component,
        };
      }),
      ...Object.entries(redirects).map(([from, to]) => ({
        path: from.slice(1),
        element: <Navigate to={to} replace />,
      })),
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
