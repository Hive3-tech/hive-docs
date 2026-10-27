Set up the Hive3 command-line tool (hive3) and the Hive3 agent skill on this machine, then sign me in. Documentation: https://docs.hive3.tech/developers

Ground rules:
- Do not change anything in my Hive3 account. This setup only reads.
- Never ask me for an API key and never print or open the CLI's credential file. I sign in through my own browser.
- Hive3 developer access needs a Honey Bee plan or above. If the sign-in page says a Honey Bee subscription is required, tell me and stop.
- If you cannot run shell commands (for example in a chat app), do not pretend. Give me the commands below as a numbered list to run myself, and wait for what they print.

Steps:
1. Run `node --version`. It must be v20 or newer; if it is missing or older, tell me and stop.
2. Run `npm install --global @hive3/cli@latest`.
3. Run `hive3 --version`. It must print 0.4.0 or newer; if not, tell me and stop.
4. Install the Hive3 skill for the agent you are: `hive3 skill install --agent claude` (Claude Code), `hive3 skill install --agent codex` (Codex) or `hive3 skill install --agent cursor` (Cursor). For any other agent, run `hive3 skill install --dir <your skills directory>`. Tell me if I need to start a new session so the skill loads.
5. Run `hive3 login --access read --no-open`. It prints an approval URL and a one-time code, then waits. Start it in the background, or otherwise stream its output, so you can read it while it waits. Show me the URL and the code exactly as printed, ask me to open the URL, sign in, type the code and approve, and wait until the command finishes.
6. Run `hive3 whoami` and `hive3 capabilities`. Summarize for me: the account I signed in as, the scopes of the key, and which accounts it can act on.
7. Tell me this key is read only. For write access later I can ask you to run `hive3 login --access full`, which needs my approval in the browser again. Do not run it unless I ask.
