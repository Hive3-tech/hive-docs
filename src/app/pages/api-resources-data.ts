import type { ApiEndpoint, ApiMethod } from "./api-endpoint-types";

const eventBody = `{
  "data": {
    "archivedAt": null,
    "autoEnroll": true,
    "badges": [],
    "createdAt": "2026-07-01T12:00:00.000Z",
    "data": {},
    "description": "Monthly gathering",
    "eventSlots": [],
    "heroImage": "https://cdn.hive3.tech/events/evt_123/hero.jpg",
    "heroImageStorageId": "kg2hero123",
    "id": "evt_123",
    "image": "https://cdn.hive3.tech/events/evt_123/card.jpg",
    "imageStorageId": "kg2image123",
    "owner": {
      "personId": "jd7abc123",
      "type": "person"
    },
    "subscriptionId": null,
    "title": "Design meetup",
    "type": "event",
    "updatedAt": "2026-07-01T12:00:00.000Z",
    "visibility": "public"
  }
}`;

const eventListBody = `{
  "data": [
    {
      "archivedAt": null,
      "autoEnroll": true,
      "badges": [],
      "createdAt": "2026-07-01T12:00:00.000Z",
      "data": {},
      "description": "Monthly gathering",
      "eventSlots": [],
      "heroImage": "https://cdn.hive3.tech/events/evt_123/hero.jpg",
      "heroImageStorageId": "kg2hero123",
      "id": "evt_123",
      "image": "https://cdn.hive3.tech/events/evt_123/card.jpg",
      "imageStorageId": "kg2image123",
      "owner": {
        "personId": "jd7abc123",
        "type": "person"
      },
      "subscriptionId": null,
      "title": "Design meetup",
      "type": "event",
      "updatedAt": "2026-07-01T12:00:00.000Z",
      "visibility": "public"
    }
  ],
  "page": {
    "hasMore": false,
    "nextCursor": null
  }
}`;

const archivedEventBody = `{
  "data": {
    "archived": true,
    "id": "evt_123",
    "type": "events"
  }
}`;

const resource = (
  method: ApiMethod,
  path: string,
  scopes: string[],
  description: string,
  body?: string,
  idempotent = false,
): ApiEndpoint => ({
  method,
  path,
  scopes,
  description,
  request: {
    examplePath: path.replace("{kind}", "events").replace("{id}", "evt_123"),
    ...(body ? { body } : {}),
    ...(idempotent ? { idempotencyKey: "create-event-2026-07-10" } : {}),
  },
  response: {
    status: method === "POST" ? 201 : 200,
    body:
      method === "DELETE"
        ? archivedEventBody
        : method === "GET" && path === "/{kind}"
          ? eventListBody
          : eventBody,
  },
});

export const resourceEndpoints: ApiEndpoint[] = [
  {
    ...resource(
      "GET",
      "/{kind}",
      ["resources:read"],
      "List visible resources of one accepted kind.",
    ),
    params: [
      { name: "limit", type: "number", description: "Page size, from 1 to 100." },
      { name: "cursor", type: "string", description: "Opaque cursor from the previous response." },
      { name: "ownerType", type: '"person" | "community"', description: "Filter by owner type." },
      { name: "communityId", type: "string", description: "Filter by community." },
    ],
  },
  resource(
    "POST",
    "/{kind}",
    ["resources:write", "communities:write for community owners"],
    "Create a resource. The server rechecks community ownership and role capability.",
    `{
  "title": "Design meetup",
  "description": "Monthly gathering",
  "owner": {
    "type": "person"
  }
}`,
    true,
  ),
  resource(
    "GET",
    "/{kind}/{id}",
    ["resources:read"],
    "Return a resource only when it is visible to you.",
  ),
  resource(
    "PATCH",
    "/{kind}/{id}",
    ["resources:write", "communities:write for community owners"],
    "Partially update a resource you can manage.",
    `{
  "title": "Updated title"
}`,
  ),
  resource(
    "DELETE",
    "/{kind}/{id}",
    ["resources:write", "communities:write for community owners"],
    "Archive a resource. This is not a hard delete.",
  ),
];

export const resourceKinds = ["events", "courses", "content", "quests", "jobs"] as const;
