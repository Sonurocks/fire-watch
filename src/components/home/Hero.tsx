import { HOME_ASSETS } from "@/assets";
import Banner from "@/components/shared/Banner";

export default function Hero() {
  return (
    <Banner
      bgImage={HOME_ASSETS.HERO_BG}
      title={
        <>
          Your Safety Is<br />
          Our Commitment<br />
          to Protection
        </>
      }
      description="Reliable fire detection and protection solutions designed to safeguard people, property, and critical environments."
      buttonText="Explore Our Solutions"
      buttonLink="#solutions"
    />
  );
}
