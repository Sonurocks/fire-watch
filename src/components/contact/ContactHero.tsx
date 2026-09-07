import Banner from "@/components/shared/Banner";
import { CONTACT_ASSETS } from "@/assets";
import { CONTACT_HERO_DATA } from "./constants";

export default function ContactHero() {
  return (
    <Banner
      title={CONTACT_HERO_DATA.title}
      description={CONTACT_HERO_DATA.description}
      bgImage={CONTACT_ASSETS.HERO_BG}
    />
  );
}
