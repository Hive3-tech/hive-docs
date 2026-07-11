---
name: hive
description: Manage a user's Hive3 account through the person-owned Hive CLI (`@hive3/cli`). Use when an agent needs to authenticate with `hive login`, inspect `hive whoami` or `hive capabilities`, or manage Hive profile, posts, events, courses, content, quests, jobs, comments, notifications, communities, and participant workflows using only the user's approved credential and live community permissions.
---

# Hive

Use the Hive CLI as the safe interface for programmatic Hive account work. Credentials belong to the signed-in person account only. Community commands are available only when `hive capabilities` shows that person currently has the needed owner, admin, or moderator access.

## Start Safely

1. Confirm the CLI is available with `hive --help`. If it is missing, install it with `npm install --global @hive3/cli`.
2. Run `hive whoami` before account or resource work.
3. If the CLI is not authenticated, ask the user to run `hive login` or run it only when the user has asked you to connect the CLI.
4. Run `hive capabilities` before any community-scoped action.
5. If no community targets are listed, report that no admin or moderator community commands are available for this account.

## Permission Rules

- Use only the person-owned credential created by `hive login`. Do not ask the user to paste API key secrets into chat.
- Treat the credential as person-owned. Community access is derived from live roles and can disappear.
- Use `--owner-type community --community-id <id>` only after `hive capabilities` shows the target community and sufficient capability.
- Ask for explicit confirmation before destructive or hard-to-undo actions such as `archive`, member removal, role changes, application decisions, attendance recording, evidence review, account deletion requests, or replacing builder JSON, unless the user has already given precise approval for that exact action.
- If an API error reports `insufficient_scope`, explain the missing scopes and suggest re-running `hive login --scope ...`.
- If the API reports `forbidden`, explain that the person key has the scope but no longer has the live role/capability for that target.

## Identity And Capability Checks

Use:

```bash
hive whoami
hive capabilities
```

Interpret the output literally:

- `whoami` identifies the person account and credential scopes.
- `capabilities` lists community targets and role-derived actions.
- Empty capabilities means personal commands may still work, but community-scoped commands should not be attempted.

## Output And Conventions

- Most commands print pretty JSON. `login`, `logout`, `whoami`, `capabilities`, `update`, `help`, and builder `export` print text.
- Exit codes: `0` success, `1` not logged in, `2` any other error.
- `--file <json>` reads a JSON object and merges it into the payload; flags given after `--file` override fields from the file.
- Boolean flags take explicit values: `true`/`false`, `1`/`0`, or `yes`/`no`.
- Pass `--idempotency-key <key>` on resource creates so a retried command cannot create duplicates.

## Command Reference

Every command the CLI supports, grouped by area. Commands marked destructive require user confirmation first.

### Authentication & meta

- `hive login` — Approve and store a person-owned API key. (text output)
  - `--access <read|full>` — Request a permission bundle.
  - `--scope <scope>` — Request an exact scope; repeatable and mutually exclusive with --access.
  - `--label <label>` — Credential label; defaults to Hive CLI.
  - `--no-open` — Print the approval URL without opening it.
  - `--timeout-ms <ms>` — Positive polling timeout.
  - `--api-url <url>` — Override the API base URL.
  - `--app-url <url>` — Override the approval app URL.
  - `-h, --help` — Show login help.
- `hive logout` — Revoke the current server credential when possible, then remove local config. (text output)
- `hive whoami` — Show the person, scopes, and available community targets. (text output)
- `hive capabilities` — Show live role-derived community capabilities. (text output)
- `hive update` — Install the latest published CLI. (text output)
  - `--check` — Check without installing.
  - `-h, --help` — Show update help.
- `hive help` — Show top-level usage. (text output)

### Resources

- `hive posts list` — List posts. (JSON output)
  - `--limit <n>` — Positive result limit.
  - `--cursor <cursor>` — Pagination cursor.
  - `--owner-type <person|community>` — Filter by owner type.
  - `--community-id <id>` — Filter by community.
- `hive posts create` — Create a post. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
  - `--owner-type <person|community>` — Set the owner.
  - `--community-id <id>` — Required with a community owner.
  - `--idempotency-key <key>` — Make a retried create safe.
- `hive posts update <id>` — Update an existing post. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
- `hive posts archive <id>` — Archive an existing post. (**destructive — confirm with the user first**; JSON output)
- `hive events list` — List events. (JSON output)
  - `--limit <n>` — Positive result limit.
  - `--cursor <cursor>` — Pagination cursor.
  - `--owner-type <person|community>` — Filter by owner type.
  - `--community-id <id>` — Filter by community.
- `hive events create` — Create a event. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
  - `--owner-type <person|community>` — Set the owner.
  - `--community-id <id>` — Required with a community owner.
  - `--idempotency-key <key>` — Make a retried create safe.
- `hive events update <id>` — Update an existing event. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
- `hive events archive <id>` — Archive an existing event. (**destructive — confirm with the user first**; JSON output)
- `hive courses list` — List courses. (JSON output)
  - `--limit <n>` — Positive result limit.
  - `--cursor <cursor>` — Pagination cursor.
  - `--owner-type <person|community>` — Filter by owner type.
  - `--community-id <id>` — Filter by community.
- `hive courses create` — Create a course. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
  - `--owner-type <person|community>` — Set the owner.
  - `--community-id <id>` — Required with a community owner.
  - `--idempotency-key <key>` — Make a retried create safe.
- `hive courses update <id>` — Update an existing course. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
- `hive courses archive <id>` — Archive an existing course. (**destructive — confirm with the user first**; JSON output)
- `hive content list` — List content. (JSON output)
  - `--limit <n>` — Positive result limit.
  - `--cursor <cursor>` — Pagination cursor.
  - `--owner-type <person|community>` — Filter by owner type.
  - `--community-id <id>` — Filter by community.
- `hive content create` — Create content. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
  - `--owner-type <person|community>` — Set the owner.
  - `--community-id <id>` — Required with a community owner.
  - `--idempotency-key <key>` — Make a retried create safe.
- `hive content update <id>` — Update an existing content item. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
- `hive content archive <id>` — Archive an existing content item. (**destructive — confirm with the user first**; JSON output)
- `hive quests list` — List quests. (JSON output)
  - `--limit <n>` — Positive result limit.
  - `--cursor <cursor>` — Pagination cursor.
  - `--owner-type <person|community>` — Filter by owner type.
  - `--community-id <id>` — Filter by community.
- `hive quests create` — Create a quest. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
  - `--owner-type <person|community>` — Set the owner.
  - `--community-id <id>` — Required with a community owner.
  - `--idempotency-key <key>` — Make a retried create safe.
- `hive quests update <id>` — Update an existing quest. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
- `hive quests archive <id>` — Archive an existing quest. (**destructive — confirm with the user first**; JSON output)
- `hive jobs list` — List jobs. (JSON output)
  - `--limit <n>` — Positive result limit.
  - `--cursor <cursor>` — Pagination cursor.
  - `--owner-type <person|community>` — Filter by owner type.
  - `--community-id <id>` — Filter by community.
- `hive jobs create` — Create a job. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
  - `--owner-type <person|community>` — Set the owner.
  - `--community-id <id>` — Required with a community owner.
  - `--idempotency-key <key>` — Make a retried create safe.
- `hive jobs update <id>` — Update an existing job. (JSON output)
  - `--title <text>` — Title.
  - `--body <text>` — Body.
  - `--description <text>` — Description.
  - `--content-type <type>` — Content type.
  - `--image-url <url>` — Image URL.
  - `--visibility <value>` — Visibility.
  - `--file <json>` — Merge fields from a JSON object.
- `hive jobs archive <id>` — Archive an existing job. (**destructive — confirm with the user first**; JSON output)
- `hive posts like <post-id>` — Toggle your like on a post. (JSON output)
- `hive events participants <event-id>` — List event participants. (JSON output)
- `hive events rsvp <event-id>` — Set your event enrollment response. (JSON output)
  - `--file <json>` — Merge a workflow JSON object.
  - `--enroll <boolean>` — Enroll or withdraw.
- `hive events approve <event-id> <enrollment-id>` — Approve an event enrollment. (JSON output)
- `hive events deny <event-id> <enrollment-id>` — Deny an event enrollment. (JSON output)
- `hive events attendance <event-id> <enrollment-id>` — Record event attendance. (**destructive — confirm with the user first**; JSON output)
  - `--file <json>` — Merge a workflow JSON object.
  - `--attended <boolean>` — Set attendance.
- `hive courses enroll <course-id>` — Submit course enrollment data. (JSON output)
  - `--file <json>` — Merge a workflow JSON object.
- `hive courses enrollments <course-id>` — List course enrollments. (JSON output)
- `hive courses approve <course-id> <person-id>` — Approve a course enrollment. (JSON output)
- `hive courses deny <course-id> <person-id>` — Deny a course enrollment. (JSON output)
- `hive courses complete <course-id> <lesson-id>` — Mark a lesson complete. (JSON output)
- `hive quests enroll <quest-id>` — Submit quest enrollment data. (JSON output)
  - `--file <json>` — Merge a workflow JSON object.
- `hive quests enrollments <quest-id>` — List quest enrollments. (JSON output)
- `hive quests approve <quest-id> <enrollment-id>` — Approve a quest enrollment. (JSON output)
- `hive quests deny <quest-id> <enrollment-id>` — Deny a quest enrollment. (JSON output)
- `hive quests evidence list <quest-id>` — List quest evidence. (JSON output)
  - `--status <status>` — Filter by status.
- `hive quests evidence submit <quest-id>` — Submit quest evidence. (JSON output)
  - `--objective-id <id>` (required) — Target objective.
  - `--content <text>` — Evidence text or link.
  - `--file <json>` — Merge a workflow JSON object.
- `hive quests evidence approve <quest-id> <evidence-id>` — Approve evidence. (JSON output)
- `hive quests evidence deny <quest-id> <evidence-id>` — Deny evidence. (JSON output)
- `hive jobs apply <job-id>` — Apply to a job; the JSON must include resume. (JSON output)
  - `--file <json>` (required) — Application JSON containing resume.
- `hive jobs applications [job-id]` — List your applications, or applications for one job. (JSON output)
- `hive jobs status <application-id>` — Change a job application status. (JSON output)
  - `--status <status>` (required) — New status.

### Profile

- `hive profile get` — Get your profile. (JSON output)
- `hive profile update` — Update profile fields. (JSON output)
  - `--name <text>` — Display name.
  - `--username <handle>` — Handle (alias: --handle).
  - `--title <text>` — Title.
  - `--experience <text>` — Experience.
  - `--short-description <text>` — Short description.
  - `--description <text>` — Full description.
  - `--location <text>` — Location.
  - `--image-storage-id <id>` — Avatar storage ID.
  - `--hero-image-storage-id <id>` — Banner storage ID (alias: --banner-storage-id).
  - `--attachment-storage-id <id>` — Attachment storage ID.
  - `--show-collaborator-count <boolean>` — Show collaborator count.
  - `--custom-collaborator-count <number>` — Custom collaborator count.
  - `--badges <csv>` — Comma-separated badges.
  - `--socials-json <json>` — Social-links JSON value.
- `hive profile handle <handle>` — Check a handle. (JSON output)
- `hive profile access` — Set profile access. (JSON output)
  - `--type <type>` (required) — Access type.
  - `--subscription-id <id>` — Subscription plan.
- `hive profile overview get` — Get the overview builder config. (JSON output)
- `hive profile overview save` — Save the overview builder config. (JSON output)
  - `--file <json>` (required) — Builder JSON file.
- `hive profile overview import` — Import the overview builder config. (JSON output)
  - `--file <json>` (required) — Builder JSON file.
- `hive profile overview export` — Write the overview builder config to a file. (text output)
  - `--file <path>` (required) — Output file.
- `hive profile widgets get` — Get the widgets builder config. (JSON output)
- `hive profile widgets save` — Save the widgets builder config. (JSON output)
  - `--file <json>` (required) — Builder JSON file.
- `hive profile widgets import` — Import the widgets builder config. (JSON output)
  - `--file <json>` (required) — Builder JSON file.
- `hive profile widgets export` — Write the widgets builder config to a file. (text output)
  - `--file <path>` (required) — Output file.
- `hive profile welcome-page get` — Get the welcome-page builder config. (JSON output)
- `hive profile welcome-page save` — Save the welcome-page builder config. (JSON output)
  - `--file <json>` (required) — Builder JSON file.
- `hive profile welcome-page import` — Import the welcome-page builder config. (JSON output)
  - `--file <json>` (required) — Builder JSON file.
- `hive profile welcome-page export` — Write the welcome-page builder config to a file. (text output)
  - `--file <path>` (required) — Output file.

### Uploads

- `hive upload <file>` — Upload an image (up to 8 MB) or document (up to 25 MB). (JSON output)
  - `--purpose <image|document>` — Upload purpose; defaults to image.
  - `--content-type <mime>` — MIME type when it cannot be inferred.

### Account & wallets

- `hive account get` — Get account details. (JSON output)
- `hive account preferences` — Update preferences. (JSON output)
  - `--theme <theme>` — Theme.
  - `--muted-notifications <csv>` — Muted notification categories.
- `hive account export` — Request an account export. (JSON output)
- `hive account deletion request` — Request account deletion. (**destructive — confirm with the user first**; JSON output)
  - `--confirm DELETE` (required) — Required confirmation value.
- `hive account deletion cancel` — Cancel a deletion request. (JSON output)
- `hive wallets list` — List linked wallets. (JSON output)
- `hive wallets default <address>` — Set the default wallet. (JSON output)
- `hive wallets visibility <address>` — Set wallet visibility. (JSON output)
  - `--public <boolean>` (required) — Public visibility.
- `hive wallets remove <address>` — Remove a linked wallet. (**destructive — confirm with the user first**; JSON output)
  - `--confirm <address>` (required) — Must exactly match the address.
- `hive nfts visibility` — Set public NFT exposure. (JSON output)
  - `--public <boolean>` (required) — Public exposure.

### Notifications

- `hive notifications list` — List notifications. (JSON output)
  - `--limit <n>` — Positive result limit.
  - `--offset <n>` — Zero-based offset.
  - `--unread-only` — Only unread notifications.
- `hive notifications read <notification-id>` — Mark one notification read. (JSON output)
- `hive notifications read-all` — Mark all notifications read. (JSON output)
- `hive notifications delete <notification-id>` — Delete one notification. (**destructive — confirm with the user first**; JSON output)
- `hive notifications mutes list` — List notification mutes. (JSON output)
- `hive notifications mutes set` — Set a notification mute. (JSON output)
  - `--scope <scope>` (required) — Mute scope.
  - `--scope-id <id>` — Target within the scope.
  - `--muted <boolean>` (required) — Mute state.

### Comments

- `hive comments list` — List comments for a post. (JSON output)
  - `--post-id <id>` (required) — Post ID.
  - `--limit <n>` — Positive result limit.
  - `--cursor <cursor>` — Pagination cursor.
- `hive comments create` — Create a comment. (JSON output)
  - `--post-id <id>` (required) — Post ID.
  - `--content <text>` (required) — Comment text.
  - `--image-url <url>` — Optional image URL.
- `hive comments update <comment-id>` — Update a comment. (JSON output)
  - `--content <text>` (required) — New text.
- `hive comments delete <comment-id>` — Delete a comment. (**destructive — confirm with the user first**; JSON output)
- `hive comments like <comment-id>` — Toggle your like on a comment. (JSON output)

### Communities

- `hive communities join <community-id>` — Join a community. (JSON output)
  - `--message <text>` — Membership message.
- `hive communities apply <community-id>` — Apply to a community. (JSON output)
  - `--message <text>` — Application message.
- `hive communities leave <community-id>` — Leave a community. (JSON output)
  - `--message <text>` — Optional message.
- `hive communities applications <community-id>` — List applications. (JSON output)
- `hive communities approve <application-id>` — Approve an application. (JSON output)
- `hive communities deny <application-id>` — Deny an application. (JSON output)
- `hive communities members <community-id>` — List members. (JSON output)
- `hive communities role <community-id> <person-id>` — Assign a member role. (**destructive — confirm with the user first**; JSON output)
  - `--role <admin|moderator|member>` (required) — New role.
- `hive communities remove-member <community-id> <person-id>` — Remove a member. (**destructive — confirm with the user first**; JSON output)
  - `--confirm <person-id>` (required) — Must exactly match the person ID.
- `hive communities access <community-id>` — Set community access. (JSON output)
  - `--type <type>` (required) — Access type.
  - `--subscription-id <id>` — Subscription plan.

## Uploads And JSON Files

Use `hive upload <file> --purpose image|document` before attaching media or documents. Then place the returned storage ID in a JSON payload. Allowed uploads are images up to 8 MB and documents up to 25 MB. Job applications require a `resume` object; quest evidence can include uploaded attachments.

## Exclusions

The Hive CLI does not cover wallet operations, key handling or signing, payments or refunds, credential minting or claiming, or direct messages. Never attempt these through the CLI or the public API, and never ask the user for wallet keys, payment details, or other secrets to work around a missing command — tell the user to do those actions in the Hive3 app instead.

## Reporting

After running commands, summarize:

- Which person account was used when identity matters.
- Which community target was used, if any.
- What changed, including returned resource IDs.
- Any missing permission or scope in plain language.

Never print stored API keys, config file contents, bearer tokens, or upload URLs that should stay private.
