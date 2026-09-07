import { HOME_ASSETS } from "@/assets";
import Banner from "@/components/shared/Banner";
import { HERO_DATA } from "./constants";

export default function Hero() {
  return (
    <Banner
      bgImage={HOME_ASSETS.HERO_BG}
      title={HERO_DATA.title}
      description={HERO_DATA.description}
      buttonText={HERO_DATA.buttonText}
      buttonLink={HERO_DATA.buttonLink}
      // heightClass="min-h-[600px] "
      mobileImageClass="object-cover object-[65%_center] lg:object-[75%_center] xl:object-center"
      mobileOverlayClass="bg-black/30 lg:bg-black/20 xl:bg-black/0"
    />
  );
}
