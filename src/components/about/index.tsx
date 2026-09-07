import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import WhoWeAre from "./WhoWeAre";
import AboutVision from "./AboutVision";
import ProtectingGlobe from "./ProtectingGlobe";
import OurMission from "./OurMission";
import OurCoreValues from "./OurCoreValues";

export default function About() {
  return (
    <div className="w-full flex flex-col">
      <AboutHero />
      <OurStory />
      <WhoWeAre />
      <AboutVision />
      <ProtectingGlobe />
      <OurMission />
      <OurCoreValues />
    </div>
  );
}
