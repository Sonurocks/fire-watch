import { HOME_ASSETS, PRODUCT_ASSETS } from "@/assets";
import Banner from "@/components/shared/Banner";

interface CategoryHeroProps {
  title: string;
  description?: string;
  bgImage?: string;
}

export default function CategoryHero({
  title,
  description = "Explore our complete range of fire protection solutions.",
  bgImage = HOME_ASSETS.FIRE_PANEL,
}: CategoryHeroProps) {
  return (
    <Banner
      title={title}
      description={description}
       bgImage={PRODUCT_ASSETS.HERO_BG}
    />
  );
}
