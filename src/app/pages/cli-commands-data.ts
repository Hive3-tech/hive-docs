export type CliCommand = {
  command: string;
  args?: string;
  flags: { flag: string; required?: boolean; description: string }[];
  description: string;
  destructive?: boolean;
  output: "json" | "text";
};

export type CliCommandSection = { title: string; commands: CliCommand[] };
const json = (command: string, description: string, args?: string, flags: CliCommand["flags"] = [], destructive = false): CliCommand => ({ command, description, ...(args ? { args } : {}), flags, output: "json", ...(destructive ? { destructive: true } : {}) });
const text = (command: string, description: string, args?: string, flags: CliCommand["flags"] = []): CliCommand => ({ command, description, ...(args ? { args } : {}), flags, output: "text" });
const req = (flag: string, description: string) => ({ flag, required: true, description });
const opt = (flag: string, description: string) => ({ flag, description });

const listFlags = [opt("--limit <n>", "Positive result limit."), opt("--cursor <cursor>", "Pagination cursor."), opt("--owner-type <person|community>", "Filter by owner type."), opt("--community-id <id>", "Filter by community.")];
const resourceFields = [opt("--title <text>", "Title."), opt("--body <text>", "Body."), opt("--description <text>", "Description."), opt("--content-type <type>", "Content type."), opt("--image-url <url>", "Image URL."), opt("--visibility <value>", "Visibility."), opt("--file <json>", "Merge fields from a JSON object.")];
const createFlags = [...resourceFields, opt("--owner-type <person|community>", "Set the owner."), opt("--community-id <id>", "Required with a community owner."), opt("--idempotency-key <key>", "Make a retried create safe.")];
const resources = ["posts", "events", "courses", "content", "quests", "jobs"].flatMap((family) => [
  json(`hive ${family} list`, `List ${family}.`, undefined, listFlags),
  json(`hive ${family} create`, `Create ${family === "content" ? "content" : `a ${family.slice(0, -1)}`}.`, undefined, createFlags),
  json(`hive ${family} update`, `Update an existing ${family === "content" ? "content item" : family.slice(0, -1)}.`, "<id>", resourceFields),
  json(`hive ${family} archive`, `Archive an existing ${family === "content" ? "content item" : family.slice(0, -1)}.`, "<id>", [], true),
]);

export const cliCommandSections: CliCommandSection[] = [
  { title: "Authentication & meta", commands: [
    text("hive login", "Approve and store a person-owned API key.", undefined, [opt("--access <read|full>", "Request a permission bundle."), opt("--scope <scope>", "Request an exact scope; repeatable and mutually exclusive with --access."), opt("--label <label>", "Credential label; defaults to Hive CLI."), opt("--no-open", "Print the approval URL without opening it."), opt("--timeout-ms <ms>", "Positive polling timeout."), opt("--api-url <url>", "Override the API base URL."), opt("--app-url <url>", "Override the approval app URL."), opt("-h, --help", "Show login help.")]),
    text("hive logout", "Revoke the current server credential when possible, then remove local config."),
    text("hive whoami", "Show the person, scopes, and available community targets."),
    text("hive capabilities", "Show live role-derived community capabilities."),
    text("hive update", "Install the latest published CLI.", undefined, [opt("--check", "Check without installing."), opt("-h, --help", "Show update help.")]),
    text("hive help", "Show top-level usage."),
  ]},
  { title: "Resources", commands: [
    ...resources,
    json("hive posts like", "Toggle your like on a post.", "<post-id>"),
    json("hive events participants", "List event participants.", "<event-id>"),
    json("hive events rsvp", "Set your event enrollment response.", "<event-id>", [opt("--file <json>", "Merge a workflow JSON object."), opt("--enroll <boolean>", "Enroll or withdraw.")]),
    json("hive events approve", "Approve an event enrollment.", "<event-id> <enrollment-id>"),
    json("hive events deny", "Deny an event enrollment.", "<event-id> <enrollment-id>"),
    json("hive events attendance", "Record event attendance.", "<event-id> <enrollment-id>", [opt("--file <json>", "Merge a workflow JSON object."), opt("--attended <boolean>", "Set attendance.")], true),
    json("hive courses enroll", "Submit course enrollment data.", "<course-id>", [opt("--file <json>", "Merge a workflow JSON object.")]),
    json("hive courses enrollments", "List course enrollments.", "<course-id>"),
    json("hive courses approve", "Approve a course enrollment.", "<course-id> <person-id>"),
    json("hive courses deny", "Deny a course enrollment.", "<course-id> <person-id>"),
    json("hive courses complete", "Mark a lesson complete.", "<course-id> <lesson-id>"),
    json("hive quests enroll", "Submit quest enrollment data.", "<quest-id>", [opt("--file <json>", "Merge a workflow JSON object.")]),
    json("hive quests enrollments", "List quest enrollments.", "<quest-id>"),
    json("hive quests approve", "Approve a quest enrollment.", "<quest-id> <enrollment-id>"),
    json("hive quests deny", "Deny a quest enrollment.", "<quest-id> <enrollment-id>"),
    json("hive quests evidence list", "List quest evidence.", "<quest-id>", [opt("--status <status>", "Filter by status.")]),
    json("hive quests evidence submit", "Submit quest evidence.", "<quest-id>", [req("--objective-id <id>", "Target objective."), opt("--content <text>", "Evidence text or link."), opt("--file <json>", "Merge a workflow JSON object.")]),
    json("hive quests evidence approve", "Approve evidence.", "<quest-id> <evidence-id>"),
    json("hive quests evidence deny", "Deny evidence.", "<quest-id> <evidence-id>"),
    json("hive jobs apply", "Apply to a job; the JSON must include resume.", "<job-id>", [req("--file <json>", "Application JSON containing resume.")]),
    json("hive jobs applications", "List your applications, or applications for one job.", "[job-id]"),
    json("hive jobs status", "Change a job application status.", "<application-id>", [req("--status <status>", "New status.")]),
  ]},
  { title: "Profile", commands: [
    json("hive profile get", "Get your profile."),
    json("hive profile update", "Update profile fields.", undefined, [opt("--name <text>", "Display name."), opt("--username <handle>", "Handle (alias: --handle)."), opt("--title <text>", "Title."), opt("--experience <text>", "Experience."), opt("--short-description <text>", "Short description."), opt("--description <text>", "Full description."), opt("--location <text>", "Location."), opt("--image-storage-id <id>", "Avatar storage ID."), opt("--hero-image-storage-id <id>", "Banner storage ID (alias: --banner-storage-id)."), opt("--attachment-storage-id <id>", "Attachment storage ID."), opt("--show-collaborator-count <boolean>", "Show collaborator count."), opt("--custom-collaborator-count <number>", "Custom collaborator count."), opt("--badges <csv>", "Comma-separated badges."), opt("--socials-json <json>", "Social-links JSON value.")]),
    json("hive profile handle", "Check a handle.", "<handle>"),
    json("hive profile access", "Set profile access.", undefined, [req("--type <type>", "Access type."), opt("--subscription-id <id>", "Subscription plan.")]),
    ...["overview", "widgets", "welcome-page"].flatMap((kind) => [json(`hive profile ${kind} get`, `Get the ${kind} builder config.`), json(`hive profile ${kind} save`, `Save the ${kind} builder config.`, undefined, [req("--file <json>", "Builder JSON file.")]), json(`hive profile ${kind} import`, `Import the ${kind} builder config.`, undefined, [req("--file <json>", "Builder JSON file.")]), text(`hive profile ${kind} export`, `Write the ${kind} builder config to a file.`, undefined, [req("--file <path>", "Output file.")])]),
  ]},
  { title: "Uploads", commands: [json("hive upload", "Upload an image (up to 8 MB) or document (up to 25 MB).", "<file>", [opt("--purpose <image|document>", "Upload purpose; defaults to image."), opt("--content-type <mime>", "MIME type when it cannot be inferred.")])]},
  { title: "Account & wallets", commands: [
    json("hive account get", "Get account details."), json("hive account preferences", "Update preferences.", undefined, [opt("--theme <theme>", "Theme."), opt("--muted-notifications <csv>", "Muted notification categories.")]), json("hive account export", "Request an account export."), json("hive account deletion request", "Request account deletion.", undefined, [req("--confirm DELETE", "Required confirmation value.")], true), json("hive account deletion cancel", "Cancel a deletion request."),
    json("hive wallets list", "List linked wallets."), json("hive wallets default", "Set the default wallet.", "<address>"), json("hive wallets visibility", "Set wallet visibility.", "<address>", [req("--public <boolean>", "Public visibility.")]), json("hive wallets remove", "Remove a linked wallet.", "<address>", [req("--confirm <address>", "Must exactly match the address.")], true), json("hive nfts visibility", "Set public NFT exposure.", undefined, [req("--public <boolean>", "Public exposure.")]),
  ]},
  { title: "Notifications", commands: [json("hive notifications list", "List notifications.", undefined, [opt("--limit <n>", "Positive result limit."), opt("--offset <n>", "Zero-based offset."), opt("--unread-only", "Only unread notifications.")]), json("hive notifications read", "Mark one notification read.", "<notification-id>"), json("hive notifications read-all", "Mark all notifications read."), json("hive notifications delete", "Delete one notification.", "<notification-id>", [], true), json("hive notifications mutes list", "List notification mutes."), json("hive notifications mutes set", "Set a notification mute.", undefined, [req("--scope <scope>", "Mute scope."), opt("--scope-id <id>", "Target within the scope."), req("--muted <boolean>", "Mute state.")])]},
  { title: "Comments", commands: [json("hive comments list", "List comments for a post.", undefined, [req("--post-id <id>", "Post ID."), opt("--limit <n>", "Positive result limit."), opt("--cursor <cursor>", "Pagination cursor.")]), json("hive comments create", "Create a comment.", undefined, [req("--post-id <id>", "Post ID."), req("--content <text>", "Comment text."), opt("--image-url <url>", "Optional image URL.")]), json("hive comments update", "Update a comment.", "<comment-id>", [req("--content <text>", "New text.")]), json("hive comments delete", "Delete a comment.", "<comment-id>", [], true), json("hive comments like", "Toggle your like on a comment.", "<comment-id>")]},
  { title: "Communities", commands: [json("hive communities join", "Join a community.", "<community-id>", [opt("--message <text>", "Membership message.")]), json("hive communities apply", "Apply to a community.", "<community-id>", [opt("--message <text>", "Application message.")]), json("hive communities leave", "Leave a community.", "<community-id>", [opt("--message <text>", "Optional message.")]), json("hive communities applications", "List applications.", "<community-id>"), json("hive communities approve", "Approve an application.", "<application-id>"), json("hive communities deny", "Deny an application.", "<application-id>"), json("hive communities members", "List members.", "<community-id>"), json("hive communities role", "Assign a member role.", "<community-id> <person-id>", [req("--role <admin|moderator|member>", "New role.")], true), json("hive communities remove-member", "Remove a member.", "<community-id> <person-id>", [req("--confirm <person-id>", "Must exactly match the person ID.")], true), json("hive communities access", "Set community access.", "<community-id>", [req("--type <type>", "Access type."), opt("--subscription-id <id>", "Subscription plan.")])]},
];
