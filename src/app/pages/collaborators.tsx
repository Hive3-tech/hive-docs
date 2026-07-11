import { Callout, Step } from "../components/doc-components";
import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

export function CollaboratorsPage() {
  const tocItems = [{ id: "meaning", label: "How collaboration works" }, { id: "list", label: "Collaborator list" }, { id: "requests", label: "Pending requests" }, { id: "review", label: "Approve or deny" }];
  return <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
    <div className="text-sm text-muted-foreground mb-6">Your Profile / <span className="text-foreground">Collaborators</span></div>
    <h1 className="text-4xl font-bold mb-4 text-gradient">Collaborators</h1>
    <p className="text-lg text-muted-foreground mb-12">See who collaborates with your profile and respond to applications from people requesting access.</p>
    <div className="space-y-12">
      <section id="meaning"><h2 className="text-2xl font-semibold mb-4">How collaboration works</h2><p className="text-muted-foreground">On Hive3, your collaborator list is built from the people following your profile. Visitors to an open profile can collaborate directly. Private profiles show an <strong>Apply to Collaborate</strong> action instead, followed by an <strong>Application Pending</strong> state while you review it.</p></section>
      <section id="list"><h2 className="text-2xl font-semibold mb-4">Collaborator list</h2><p className="text-muted-foreground">Open Collaborators from your Profile Dashboard. Search the loaded list by a person’s name, username, or title to find an existing collaborator.</p><Callout type="info" title="Public count is a separate preference">Your profile’s collaborator-count visibility does not change who appears in this management list.</Callout></section>
      <section id="requests"><h2 className="text-2xl font-semibold mb-4">Pending requests</h2><p className="text-muted-foreground">Pending application cards show the applicant’s profile details and when they applied. Requests remain pending until you choose Approve or Deny.</p></section>
      <section id="review"><h2 className="text-2xl font-semibold mb-4">Approve or deny</h2><div className="space-y-5"><Step number={1} title="Review the applicant"><p className="text-muted-foreground">Check the name and profile information on the pending card.</p></Step><Step number={2} title="Choose Approve or Deny"><p className="text-muted-foreground">Approve accepts the application and adds the relationship. Deny rejects the application.</p></Step><Step number={3} title="Check the lists"><p className="text-muted-foreground">An accepted applicant appears with your collaborators; the reviewed card leaves the pending queue.</p></Step></div></section>
    </div><PagerNav /></div><RightSidebar items={tocItems} /></div>;
}
