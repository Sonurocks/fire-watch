import Banner from "@/components/shared/Banner";
import { ABOUT_ASSETS } from "@/assets";
import { ABOUT_HERO_DATA } from "./constants";

export default function AboutHero() {
  return (
    <Banner
      title={ABOUT_HERO_DATA.title}
      description={ABOUT_HERO_DATA.description}
      bgImage={ABOUT_ASSETS.HERO_BG}
      buttonText={ABOUT_HERO_DATA.buttonText}
      buttonLink={ABOUT_HERO_DATA.buttonLink}
    />
  );
}
