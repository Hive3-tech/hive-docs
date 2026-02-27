import type { APIExample } from "./api-example-tabs";

export const listUsersExamples: APIExample[] = [
  {
    id: "curl",
    label: "cURL",
    language: "bash",
    code: `curl "https://api.hive3.tech/api/v1/communities/users?limit=20&offset=0&subscription_status=active" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
  },
  {
    id: "fetch",
    label: "fetch",
    language: "javascript",
    code: `const response = await fetch(
  "https://api.hive3.tech/api/v1/communities/users?limit=20&offset=0&subscription_status=active",
  { headers: { Authorization: "Bearer YOUR_API_KEY" } }
);

const data = await response.json();`,
  },
  {
    id: "node",
    label: "Node.js",
    language: "javascript",
    code: `const response = await fetch(
  "https://api.hive3.tech/api/v1/communities/users?limit=20&offset=0",
  { headers: { Authorization: "Bearer YOUR_API_KEY" } }
);

console.log(await response.json());`,
  },
  {
    id: "python",
    label: "Python",
    language: "python",
    code: `import requests

response = requests.get(
    "https://api.hive3.tech/api/v1/communities/users",
    params={"limit": 20, "offset": 0, "subscription_status": "active"},
    headers={"Authorization": "Bearer YOUR_API_KEY"},
)

print(response.json())`,
  },
];

export const getUserExamples: APIExample[] = [
  {
    id: "curl",
    label: "cURL",
    language: "bash",
    code: `curl "https://api.hive3.tech/api/v1/communities/users/USER_ID" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
  },
  {
    id: "fetch",
    label: "fetch",
    language: "javascript",
    code: `const response = await fetch(
  "https://api.hive3.tech/api/v1/communities/users/USER_ID",
  { headers: { Authorization: "Bearer YOUR_API_KEY" } }
);

const user = await response.json();`,
  },
  {
    id: "node",
    label: "Node.js",
    language: "javascript",
    code: `const response = await fetch(
  "https://api.hive3.tech/api/v1/communities/users/USER_ID",
  { headers: { Authorization: "Bearer YOUR_API_KEY" } }
);

console.log(await response.json());`,
  },
  {
    id: "python",
    label: "Python",
    language: "python",
    code: `import requests

response = requests.get(
    "https://api.hive3.tech/api/v1/communities/users/USER_ID",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
)

print(response.json())`,
  },
];

export const patchUserExamples: APIExample[] = [
  {
    id: "curl",
    label: "cURL",
    language: "bash",
    code: `curl -X PATCH https://api.hive3.tech/api/v1/communities/users/USER_ID \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "display_name": "Updated Partner User",
    "username": "updated_partner_user"
  }'`,
  },
  {
    id: "fetch",
    label: "fetch",
    language: "javascript",
    code: `const response = await fetch(
  "https://api.hive3.tech/api/v1/communities/users/USER_ID",
  {
    method: "PATCH",
    headers: {
      Authorization: "Bearer YOUR_API_KEY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      display_name: "Updated Partner User",
      username: "updated_partner_user",
    }),
  }
);

const user = await response.json();`,
  },
  {
    id: "node",
    label: "Node.js",
    language: "javascript",
    code: `const response = await fetch(
  "https://api.hive3.tech/api/v1/communities/users/USER_ID",
  {
    method: "PATCH",
    headers: {
      Authorization: "Bearer YOUR_API_KEY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "updated_partner_user" }),
  }
);

console.log(await response.json());`,
  },
  {
    id: "python",
    label: "Python",
    language: "python",
    code: `import requests

response = requests.patch(
    "https://api.hive3.tech/api/v1/communities/users/USER_ID",
    json={"display_name": "Updated Partner User", "username": "updated_partner_user"},
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
    },
)

print(response.json())`,
  },
];

export const assignSubscriptionExamples: APIExample[] = [
  {
    id: "curl",
    label: "cURL",
    language: "bash",
    code: `curl -X PUT https://api.hive3.tech/api/v1/communities/users/USER_ID/subscription \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "subscription_id": "7f5d9b84-45d8-4d71-bff8-72974f9de8e1",
    "expires_at": "2026-12-31T23:59:59Z"
  }'`,
  },
  {
    id: "fetch",
    label: "fetch",
    language: "javascript",
    code: `const response = await fetch(
  "https://api.hive3.tech/api/v1/communities/users/USER_ID/subscription",
  {
    method: "PUT",
    headers: {
      Authorization: "Bearer YOUR_API_KEY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subscription_id: "7f5d9b84-45d8-4d71-bff8-72974f9de8e1",
      expires_at: "2026-12-31T23:59:59Z",
    }),
  }
);

const assignment = await response.json();`,
  },
  {
    id: "node",
    label: "Node.js",
    language: "javascript",
    code: `const response = await fetch(
  "https://api.hive3.tech/api/v1/communities/users/USER_ID/subscription",
  {
    method: "PUT",
    headers: {
      Authorization: "Bearer YOUR_API_KEY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subscription_id: "7f5d9b84-45d8-4d71-bff8-72974f9de8e1",
    }),
  }
);

console.log(await response.json());`,
  },
  {
    id: "python",
    label: "Python",
    language: "python",
    code: `import requests

response = requests.put(
    "https://api.hive3.tech/api/v1/communities/users/USER_ID/subscription",
    json={
        "subscription_id": "7f5d9b84-45d8-4d71-bff8-72974f9de8e1",
        "expires_at": "2026-12-31T23:59:59Z",
    },
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
    },
)

print(response.json())`,
  },
];

export const revokeSubscriptionExamples: APIExample[] = [
  {
    id: "curl",
    label: "cURL",
    language: "bash",
    code: `curl -X DELETE https://api.hive3.tech/api/v1/communities/users/USER_ID/subscription \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
  },
  {
    id: "fetch",
    label: "fetch",
    language: "javascript",
    code: `await fetch(
  "https://api.hive3.tech/api/v1/communities/users/USER_ID/subscription",
  {
    method: "DELETE",
    headers: { Authorization: "Bearer YOUR_API_KEY" },
  }
);`,
  },
  {
    id: "node",
    label: "Node.js",
    language: "javascript",
    code: `const response = await fetch(
  "https://api.hive3.tech/api/v1/communities/users/USER_ID/subscription",
  {
    method: "DELETE",
    headers: { Authorization: "Bearer YOUR_API_KEY" },
  }
);

console.log(response.status);`,
  },
  {
    id: "python",
    label: "Python",
    language: "python",
    code: `import requests

response = requests.delete(
    "https://api.hive3.tech/api/v1/communities/users/USER_ID/subscription",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
)

print(response.status_code)`,
  },
];
