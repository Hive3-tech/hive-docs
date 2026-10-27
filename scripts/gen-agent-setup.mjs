// Writes public/agent-setup.md from src/content/agent-setup.ts, so an agent can fetch https://docs.hive3.tech/agent-setup.md.
// Runs at the start of `npm run build`; `npm run check` fails when the committed file is out of date.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { contentDir, root } from "./lib/content.mjs";

const { agentSetupPrompt } = await import(pathToFileURL(join(contentDir, "agent-setup.ts")).href);

export const agentSetupFile = () => agentSetupPrompt;

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  writeFileSync(join(root, "public/agent-setup.md"), agentSetupFile());
  console.log("Wrote public/agent-setup.md");
}
