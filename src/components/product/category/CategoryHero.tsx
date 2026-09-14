import { PRODUCT_ASSETS } from "@/assets";
import Banner from "@/components/shared/Banner";

interface CategoryHeroProps {
  title: string;
  description?: string;
}

export default function CategoryHero({
  title,
  description = "Explore our complete range of fire protection solutions.",
}: CategoryHeroProps) {
  return (
    <Banner
      title={title}
      description={description}
      bgImage={PRODUCT_ASSETS.HERO_BG}
    />
  );
}
