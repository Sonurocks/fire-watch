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
      mobileImageClass="object-cover object-[65%_center] md:object-right md:scale-[1.10] md:-translate-x-[5%] md:translate-y-[3%] lg:object-right lg:scale-[1.15] lg:-translate-x-[7.5%] lg:translate-y-[4.5%] xl:object-right xl:scale-[1.20] xl:-translate-x-[10%] xl:translate-y-[6%]"
      // overlayClass="bg-black/30 lg:bg-black/20 xl:bg-black/0"
    />
  );
}
