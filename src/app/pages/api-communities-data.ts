import type { ApiEndpoint } from "./api-endpoint-types";

export const communityEndpoints: ApiEndpoint[] = [
  {
    method: "POST",
    path: "/communities/{communityId}/membership",
    scopes: ["communities:write"],
    description: "Join, apply to, or leave a community as the authenticated person.",
    request: {
      examplePath: "/communities/community-slug/membership",
      body: `{
  "action": "apply"
}`,
    },
    response: {
      status: 201,
      body: `{
  "data": {
    "applicationId": "jd7abc123def456",
    "status": "pending"
  }
}`,
    },
  },
  {
    method: "GET",
    path: "/communities/{communityId}/applications",
    scopes: ["communities:read"],
    description: "List applications when your live role grants manager access.",
    request: {
      examplePath: "/communities/community-slug/applications",
    },
    response: {
      status: 200,
      body: `{
  "data": [
    {
      "appliedAt": "2026-07-01T12:00:00.000Z",
      "id": "jd7app123def456",
      "message": "I would like to join.",
      "personId": "jd7person123def456",
      "personName": "Alex Rivera",
      "status": "pending"
    }
  ]
}`,
    },
  },
  {
    method: "PATCH",
    path: "/community-applications/{applicationId}",
    scopes: ["communities:moderate"],
    description: "Accept or reject an application when your live role permits moderation.",
    request: {
      examplePath: "/community-applications/jd7app123def456",
      body: `{
  "accepted": true
}`,
    },
    response: {
      status: 200,
      body: `{
  "data": {
    "id": "jd7app123def456",
    "status": "accepted"
  }
}`,
    },
  },
  {
    method: "GET",
    path: "/communities/{communityId}/members",
    scopes: ["communities:read"],
    description: "List members visible to you.",
    request: {
      examplePath: "/communities/community-slug/members",
    },
    response: {
      status: 200,
      body: `{
  "data": [
    {
      "id": "jd7person123def456",
      "image": "https://example.com/alex-rivera.jpg",
      "name": "Alex Rivera",
      "role": "moderator",
      "title": "Community Builder",
      "username": "alex-rivera"
    }
  ]
}`,
    },
  },
  {
    method: "PATCH",
    path: "/communities/{communityId}/members/{personId}/role",
    scopes: ["communities:moderate"],
    description: "Set admin, moderator, member, or clear a role through server permission checks.",
    request: {
      examplePath: "/communities/community-slug/members/jd7person123def456/role",
      body: `{
  "role": "moderator"
}`,
    },
    response: {
      status: 200,
      body: `{
  "data": {
    "role": "moderator",
    "status": "updated"
  }
}`,
    },
  },
  {
    method: "DELETE",
    path: "/communities/{communityId}/members/{personId}",
    scopes: ["communities:moderate"],
    description: "Remove a member when your live role permits it.",
    request: {
      examplePath: "/communities/community-slug/members/jd7person123def456",
    },
    response: {
      status: 200,
      body: `{
  "data": {
    "status": "removed"
  }
}`,
    },
  },
  {
    method: "PATCH",
    path: "/communities/{communityId}/access",
    scopes: ["communities:write"],
    description: "Update community access type and an optional subscription.",
    request: {
      examplePath: "/communities/community-slug/access",
      body: `{
  "accessType": "open"
}`,
    },
    response: {
      status: 200,
      body: `{
  "data": {
    "accessType": "open",
    "subscriptionId": null
  }
}`,
    },
  },
];
