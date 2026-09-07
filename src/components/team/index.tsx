import TeamHero from "./TeamHero";
import OurCulture from "./OurCulture";
import MeetOurTeam from "./MeetOurTeam";

export default function TeamPageContent() {
  return (
    <main className="w-full flex flex-col">
      <TeamHero />
      <OurCulture />
      <MeetOurTeam />
    </main>
  );
}
