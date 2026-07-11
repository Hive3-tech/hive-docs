import type { ApiEndpoint, ApiMethod } from "./api-endpoint-types";

const notification = (
  method: ApiMethod,
  path: string,
  scope: string,
  description: string,
  responseBody: string,
  body?: string,
): ApiEndpoint => ({
  method,
  path,
  scopes: [scope],
  description,
  request: {
    examplePath: path.replace(/\{[^}]+\}/g, "example-id"),
    ...(body ? { body } : {}),
  },
  response: {
    status: 200,
    body: responseBody,
  },
});

export const notificationEndpoints: ApiEndpoint[] = [
  {
    ...notification(
      "GET",
      "/notifications",
      "account:read",
      "List notifications using offset pagination.",
      `{
  "data": {
    "hasMore": false,
    "notifications": [
      {
        "createdAt": "2026-07-01T12:00:00.000Z",
        "data": {
          "actorId": "jd7actor123",
          "entityId": "jd7event123",
          "entityType": "event"
        },
        "id": "jd7notification123",
        "message": "Alex invited you to an event.",
        "read": false,
        "readAt": null,
        "title": "Event invitation",
        "type": "event_invitation"
      }
    ],
    "total": 3,
    "unreadCount": 1
  }
}`,
    ),
    params: [
      { name: "limit", type: "number", description: "Maximum notifications to return." },
      { name: "offset", type: "number", description: "Number of notifications to skip." },
      { name: "unreadOnly", type: "boolean", description: "Return only unread notifications." },
    ],
  },
  notification(
    "GET",
    "/notifications/unread-count",
    "account:read",
    "Return your unread notification count.",
    `{
  "data": {
    "unreadCount": 1
  }
}`,
  ),
  notification(
    "POST",
    "/notifications/{notificationId}/read",
    "account:write",
    "Mark one notification as read.",
    `{
  "data": {
    "id": "jd7notification123"
  }
}`,
  ),
  notification(
    "POST",
    "/notifications/mark-all-read",
    "account:write",
    "Mark all notifications as read.",
    `{
  "data": {
    "updated": 3
  }
}`,
  ),
  notification(
    "DELETE",
    "/notifications/{notificationId}",
    "account:write",
    "Delete one notification.",
    `{
  "data": {
    "id": "jd7notification123",
    "removed": true
  }
}`,
  ),
  notification(
    "GET",
    "/notification-mutes",
    "account:read",
    "Return notification mute settings.",
    `{
  "data": {
    "mutes": [
      {
        "createdAt": "2026-07-01T12:00:00.000Z",
        "id": "event:jd7event123",
        "scope": "event",
        "scopeId": "jd7event123"
      }
    ]
  }
}`,
  ),
  notification(
    "PATCH",
    "/notification-mutes",
    "account:write",
    "Update notification mute settings.",
    `{
  "data": {
    "muted": true,
    "scope": "event",
    "scopeId": "jd7event123"
  }
}`,
    `{
  "mutedNotifications": [
    "messages"
  ]
}`,
  ),
];
