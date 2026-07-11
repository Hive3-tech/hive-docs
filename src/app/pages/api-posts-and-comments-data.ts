import type { ApiEndpoint, ApiMethod } from "./api-endpoint-types";

const postResponse = `{
  "data": {
    "body": "Hello, Hive",
    "createdAt": 1782907200000,
    "deletedAt": null,
    "id": "jd7post123",
    "imageUrl": null,
    "owner": {
      "personId": "jd7person123",
      "type": "person"
    },
    "title": "Hello from Hive",
    "type": "post",
    "updatedAt": 1782907200000,
    "visibility": "public"
  }
}`;

const commentResponse = `{
  "data": {
    "content": "Thanks for sharing",
    "createdAt": "2026-07-01T12:00:00.000Z",
    "id": "jd7comment123",
    "imageUrl": null,
    "isLikedByMe": false,
    "isOwnedByMe": true,
    "likeCount": 0,
    "mentionedCommunityIds": [],
    "mentionedPersonIds": [],
    "personId": "jd7person123",
    "personName": "Alex Rivera",
    "personUsername": "alex",
    "postId": "jd7post123",
    "updatedAt": "2026-07-01T12:00:00.000Z"
  }
}`;

const item = (
  method: ApiMethod,
  path: string,
  scope: string,
  description: string,
  request: NonNullable<ApiEndpoint["request"]>,
  response: NonNullable<ApiEndpoint["response"]>,
): ApiEndpoint => ({ method, path, scopes: [scope], description, request, response });

export const postEndpoints: ApiEndpoint[] = [
  {
    ...item(
      "GET",
      "/posts",
      "posts:read",
      "List visible person or community posts.",
      { query: "limit=25&ownerType=person" },
      {
        status: 200,
        body: `{
  "data": [
    {
      "body": "Hello, Hive",
      "createdAt": 1782907200000,
      "deletedAt": null,
      "id": "jd7post123",
      "imageUrl": null,
      "owner": {
        "personId": "jd7person123",
        "type": "person"
      },
      "title": "Hello from Hive",
      "type": "post",
      "updatedAt": 1782907200000,
      "visibility": "public"
    }
  ],
  "page": {
    "hasMore": false,
    "nextCursor": null
  }
}`,
      },
    ),
    params: [
      { name: "limit", type: "number", description: "Page size, from 1 to 100." },
      { name: "cursor", type: "string", description: "Opaque cursor from the previous response." },
      { name: "ownerType", type: '"person" | "community"', description: "Filter by owner type." },
      { name: "communityId", type: "string", description: "Filter by community." },
    ],
  },
  item(
    "POST",
    "/posts",
    "posts:write",
    "Create a person- or community-owned post. Community creation also requires a live community write capability.",
    { body: `{
  "body": "Hello, Hive",
  "owner": {
    "type": "person"
  }
}` },
    { status: 201, body: postResponse },
  ),
  item("GET", "/posts/{postId}", "posts:read", "Return a visible post.", { examplePath: "/posts/jd7post123" }, { status: 200, body: postResponse }),
  item(
    "PATCH",
    "/posts/{postId}",
    "posts:write",
    "Partially update a post you can manage.",
    { examplePath: "/posts/jd7post123", body: `{
  "body": "Updated post"
}` },
    { status: 200, body: postResponse },
  ),
  item(
    "DELETE",
    "/posts/{postId}",
    "posts:write",
    "Archive a post through the existing permission checks.",
    { examplePath: "/posts/jd7post123" },
    { status: 200, body: `{
  "data": {
    "deleted": true,
    "id": "jd7post123"
  }
}` },
  ),
  item(
    "POST",
    "/posts/{postId}/like",
    "posts:write",
    "Toggle your like on a post.",
    { examplePath: "/posts/jd7post123/like" },
    { status: 200, body: `{
  "data": {
    "count": 8,
    "liked": true
  }
}` },
  ),
];

export const commentEndpoints: ApiEndpoint[] = [
  {
    ...item(
      "GET",
      "/comments",
      "posts:read",
      "List comments for a visible post.",
      { query: "postId=jd7post123" },
      {
        status: 200,
        body: `{
  "data": [
    {
      "content": "Thanks for sharing",
      "createdAt": "2026-07-01T12:00:00.000Z",
      "id": "jd7comment123",
      "imageUrl": null,
      "isLikedByMe": false,
      "isOwnedByMe": true,
      "likeCount": 0,
      "mentionedCommunityIds": [],
      "mentionedPersonIds": [],
      "personId": "jd7person123",
      "personName": "Alex Rivera",
      "personUsername": "alex",
      "postId": "jd7post123",
      "updatedAt": "2026-07-01T12:00:00.000Z"
    }
  ],
  "page": {
    "hasMore": false,
    "nextCursor": null
  }
}`,
      },
    ),
    params: [{ name: "postId", type: "string", required: true, description: "Post whose comments to list." }],
  },
  item(
    "POST",
    "/posts/{postId}/comments",
    "posts:write",
    "Create a comment on a post.",
    { examplePath: "/posts/jd7post123/comments", body: `{
  "content": "Thanks for sharing"
}` },
    { status: 201, body: commentResponse },
  ),
  item(
    "PATCH",
    "/comments/{commentId}",
    "posts:write",
    "Update your comment.",
    { examplePath: "/comments/jd7comment123", body: `{
  "content": "Updated comment"
}` },
    { status: 200, body: commentResponse },
  ),
  item(
    "DELETE",
    "/comments/{commentId}",
    "posts:write",
    "Remove a comment through the existing permission checks.",
    { examplePath: "/comments/jd7comment123" },
    { status: 200, body: `{
  "data": {
    "deleted": true,
    "id": "jd7comment123"
  }
}` },
  ),
  item(
    "POST",
    "/comments/{commentId}/like",
    "posts:write",
    "Toggle your like on a comment.",
    { examplePath: "/comments/jd7comment123/like" },
    { status: 200, body: `{
  "data": {
    "count": 3,
    "liked": true
  }
}` },
  ),
];
