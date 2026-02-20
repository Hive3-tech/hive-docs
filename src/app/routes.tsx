import { createBrowserRouter } from "react-router";
import type { ComponentType } from "react";
import { DocLayout } from "./components/doc-layout";
import { createStubDocPage } from "./pages/stub-doc-page";
import { orderedDocPages } from "./doc-navigation";
import { OverviewPage } from "./pages/overview";
import { GetStartedPage } from "./pages/get-started";
import { TiersPage } from "./pages/tiers";
import { ProfileDashboardOverviewPage } from "./pages/profile-dashboard-overview";
import { ProfileAccountSettingsPage } from "./pages/profile-account-settings";
import { CreatingEventsPage } from "./pages/creating-events";
import { CreatingCoursesPage } from "./pages/creating-courses";
import { CreatingContentPage } from "./pages/creating-content";
import { CreatingJobsPage } from "./pages/creating-jobs";
import { CommunitiesOverviewPage } from "./pages/communities-overview";
import { CreatingCommunityPage } from "./pages/creating-a-community";
import { CommunitySettingsPage } from "./pages/community-settings";
import { AdminsAndModeratorsPage } from "./pages/admins-and-moderators";
import { ChatSettingsPage } from "./pages/chat-settings";
import { AISettingsPage } from "./pages/ai-settings";
import { PayPalAndSubscriptionsPage } from "./pages/paypal-and-subscriptions";
import { ManagingMembersPage } from "./pages/managing-members";
import { QuestsAndTasksPage } from "./pages/quests-and-tasks";
import { ApiOverviewPage } from "./pages/api-overview";
import { APIKeysAndIntegrationsPage } from "./pages/api-keys-and-integrations";
import { AuthenticationPage } from "./pages/api-auth";
import { PayPalIntegrationPage } from "./pages/paypal-integration";
import { OnboardingLinkSetupPage } from "./pages/onboarding-link-setup";
import { AIAssistantSetupPage } from "./pages/ai-assistant-setup";
import { ManagingCollaboratorsPage } from "./pages/managing-collaborators";
import { EventsGuidePage } from "./pages/events-guide";
import { CoursesGuidePage } from "./pages/courses-guide";
import { JobsGuidePage } from "./pages/jobs-guide";
import { QuestsGuidePage } from "./pages/quests-guide";
import { ContentGuidePage } from "./pages/content-guide";
import { CredentialsAndNFTsPage } from "./pages/credentials-and-nfts";
import { CircleWalletPage } from "./pages/circle-wallet";
import { LinkingExternalWalletsPage } from "./pages/linking-external-wallets";
import { CredentialsExplainedPage } from "./pages/credentials-explained";
import { NotFoundPage } from "./pages/not-found";
import { DocsRouteErrorBoundary } from "./pages/route-error";

const customPages: Record<string, ComponentType> = {
  "/": OverviewPage,
  "/get-started": GetStartedPage,
  "/membership-tiers": TiersPage,
  "/honey-bee-profile-dashboard-overview": ProfileDashboardOverviewPage,
  "/profile-and-account-settings": ProfileAccountSettingsPage,
  "/creating-events": CreatingEventsPage,
  "/creating-courses": CreatingCoursesPage,
  "/creating-content": CreatingContentPage,
  "/creating-jobs": CreatingJobsPage,
  "/communities-overview": CommunitiesOverviewPage,
  "/creating-a-community": CreatingCommunityPage,
  "/community-settings": CommunitySettingsPage,
  "/admins-and-moderators": AdminsAndModeratorsPage,
  "/chat-settings": ChatSettingsPage,
  "/ai-settings": AISettingsPage,
  "/paypal-and-subscriptions": PayPalAndSubscriptionsPage,
  "/managing-members": ManagingMembersPage,
  "/quests-and-tasks": QuestsAndTasksPage,
  "/api-overview": ApiOverviewPage,
  "/authentication": AuthenticationPage,
  "/onboarding-link-setup": OnboardingLinkSetupPage,
  "/api-keys-and-integrations": APIKeysAndIntegrationsPage,
  "/paypal-integration": PayPalIntegrationPage,
  "/ai-assistant-setup": AIAssistantSetupPage,
  "/managing-collaborators": ManagingCollaboratorsPage,
  "/events-guide": EventsGuidePage,
  "/courses-guide": CoursesGuidePage,
  "/jobs-guide": JobsGuidePage,
  "/quests-guide": QuestsGuidePage,
  "/content-guide": ContentGuidePage,
  "/credentials-and-nfts": CredentialsAndNFTsPage,
  "/circle-wallet": CircleWalletPage,
  "/linking-external-wallets": LinkingExternalWalletsPage,
  "/credentials-explained": CredentialsExplainedPage,
};

const pageRoutes = orderedDocPages.map((page, index) => {
  const previous = index > 0 ? orderedDocPages[index - 1] : undefined;
  const next = index < orderedDocPages.length - 1 ? orderedDocPages[index + 1] : undefined;

  const stubComponent = createStubDocPage({
    title: page.title,
    section: page.section,
    description: page.description,
    prev: previous ? { label: previous.title, path: previous.path } : undefined,
    next: next ? { label: next.title, path: next.path } : undefined,
  });

  return {
    path: page.path,
    Component: customPages[page.path] ?? stubComponent,
  };
});

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
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);
