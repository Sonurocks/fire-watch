import Banner from "@/components/shared/Banner";
import { PRODUCT_PAGE_TEXTS } from "./constants";
import { PRODUCT_ASSETS } from "@/assets";

export const ProductHero = () => {
  return (
    <Banner
      title={PRODUCT_PAGE_TEXTS.hero.title}
      description={PRODUCT_PAGE_TEXTS.hero.description}
      bgImage={PRODUCT_ASSETS.HERO_BG}
    />
  );
};
