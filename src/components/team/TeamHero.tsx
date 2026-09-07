import Banner from "@/components/shared/Banner";
import { TEAM_ASSETS } from "@/assets";
import { TEAM_HERO_DATA } from "./constants";

export default function TeamHero() {
  return (
    <Banner
      title={TEAM_HERO_DATA.title}
      description={TEAM_HERO_DATA.description}
      bgImage={TEAM_ASSETS.HERO_BG}
    />
  );
}
