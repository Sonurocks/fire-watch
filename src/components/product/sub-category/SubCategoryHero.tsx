import React from "react";
import Banner from "@/components/shared/Banner";
import { PRODUCT_ASSETS } from "@/assets";

interface SubCategoryHeroProps {
  title: string;
  description?: string;
  bgImage?: string;
}

export default function SubCategoryHero({
  title,
  description = "Explore our complete range of fire protection solutions.",
  bgImage = PRODUCT_ASSETS.HERO_BG,
}: SubCategoryHeroProps) {
  return (
    <Banner
      title={title}
      description={description}
      bgImage={bgImage}
    />
  );
}
