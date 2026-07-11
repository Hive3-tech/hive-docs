import { PagerNav } from "../components/pager-nav";
import { RightSidebar } from "../components/right-sidebar";

export function EditingYourProfilePage() {
  const tocItems = [{ id: "identity", label: "Identity and handle" }, { id: "images", label: "Avatar and banner" }, { id: "story", label: "Bio and location" }, { id: "details", label: "Badges and social links" }, { id: "privacy", label: "Collaborator count" }];
  return <div className="flex"><div className="flex-1 min-w-0 max-w-6xl mx-auto px-4 py-12 xl:pr-80">
    <div className="text-sm text-muted-foreground mb-6">Your Profile / <span className="text-foreground">Editing Your Profile</span></div>
    <h1 className="text-4xl font-bold mb-4 text-gradient">Editing Your Profile</h1>
    <p className="text-lg text-muted-foreground mb-12">Keep your public identity, story, and profile links accurate from the profile editor.</p>
    <div className="space-y-12">
      <section id="identity"><h2 className="text-2xl font-semibold mb-4">Identity and handle</h2><p className="text-muted-foreground">Open the profile identity editor to update your display name and unique handle. The identity fields also store your short description, full description, and location. Display names and locations accept up to 80 characters; the short description accepts up to 100.</p></section>
      <section id="images"><h2 className="text-2xl font-semibold mb-4">Avatar and banner</h2><p className="text-muted-foreground">Use the Avatar and Banner sections to upload the images shown with your profile. Check the preview before saving so important details are not cropped.</p></section>
      <section id="story"><h2 className="text-2xl font-semibold mb-4">Bio and location</h2><p className="text-muted-foreground">Use the short description for compact profile surfaces and the full description for your longer introduction. You can also attach a PDF biography when you want to share a formatted document.</p></section>
      <section id="details"><h2 className="text-2xl font-semibold mb-4">Badges and social links</h2><p className="text-muted-foreground">Add badges that describe your identity and social links that help visitors find you elsewhere. Empty social-link entries are ignored when your profile is saved.</p></section>
      <section id="privacy"><h2 className="text-2xl font-semibold mb-4">Collaborator count</h2><p className="text-muted-foreground">Honey Bee and higher memberships can use the collaborator-count privacy setting. Choose whether the count appears publicly; a custom collaborator count may be displayed when configured.</p></section>
    </div><PagerNav /></div><RightSidebar items={tocItems} /></div>;
}
