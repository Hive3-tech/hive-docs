import { Callout } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";
import { cliCommandSections } from "./cli-commands-data";

export function CliCommandsPage() {
  const tocItems = [
    { id: "reading-reference", label: "Reading the reference" },
    ...cliCommandSections.map((section) => ({ id: section.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), label: section.title })),
    { id: "automation-rules", label: "Output and automation" },
  ];
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
        <div className="text-sm text-muted-foreground mb-6">Hive CLI / <span className="text-foreground">Command Reference</span></div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Command Reference</h1>
        <p className="text-lg text-muted-foreground mb-12">Use this source-verified inventory to find command arguments, flags, output format, and actions that deserve extra care.</p>
        <div className="space-y-12">
          <section id="reading-reference"><h2 className="text-2xl font-semibold mb-4">Reading the reference</h2><p className="text-muted-foreground">Arguments appear after the command. A <span className="font-medium text-red-600 dark:text-red-400">Destructive</span> badge marks actions that delete, archive, remove, or make a particularly consequential change. “Required” applies to the flag in that command shape.</p></section>
          {cliCommandSections.map((section) => {
            const id = section.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            return <section id={id} key={section.title}><h2 className="text-2xl font-semibold mb-5">{section.title}</h2><div className="space-y-6">{section.commands.map((item) => <article className="rounded-lg border p-5" key={`${item.command}-${item.args ?? ""}`}>
              <div className="flex flex-wrap items-center gap-2 mb-2"><code className="font-semibold text-primary">{item.command}{item.args ? ` ${item.args}` : ""}</code>{item.destructive && <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-950 dark:text-red-300">Destructive</span>}<span className="rounded-full bg-muted px-2 py-0.5 text-xs uppercase text-muted-foreground">{item.output}</span></div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              {item.flags.length > 0 && <div className="overflow-x-auto mt-4"><table className="w-full text-sm"><thead><tr className="border-b"><th className="text-left py-2 pr-4">Flag</th><th className="text-left py-2 pr-4">Required</th><th className="text-left py-2">Meaning</th></tr></thead><tbody>{item.flags.map((flag) => <tr className="border-b last:border-0" key={flag.flag}><td className="py-2 pr-4 font-mono whitespace-nowrap">{flag.flag}</td><td className="py-2 pr-4">{flag.required ? "Yes" : "No"}</td><td className="py-2 text-muted-foreground">{flag.description}</td></tr>)}</tbody></table></div>}
            </article>)}</div></section>;
          })}
          <section id="automation-rules"><h2 className="text-2xl font-semibold mb-4">Output and automation</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground"><li>Most account, resource, workflow, and social commands print pretty-formatted JSON. Login, logout, <code>whoami</code>, <code>capabilities</code>, update, help, and builder exports print text.</li><li>Exit code <code>0</code> means success, <code>1</code> means no local login was available, and <code>2</code> means another error occurred.</li><li>For commands that accept <code>--file</code>, the JSON object is merged at that position. Flags that appear later override the same fields.</li><li>Boolean value flags require an explicit value: <code>true</code>/<code>false</code>, <code>1</code>/<code>0</code>, or <code>yes</code>/<code>no</code>.</li></ul>
            <Callout type="warning" title="Confirmation values">Wallet removal requires <code>--confirm &lt;address&gt;</code>; member removal requires <code>--confirm &lt;person-id&gt;</code>; and an account deletion request requires <code>--confirm DELETE</code>.</Callout>
          </section>
        </div><PagerNav />
      </div><RightSidebar items={tocItems} />
    </div>
  );
}
