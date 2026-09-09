import { HOME_ASSETS } from "@/assets";
import ProductIndex from "@/components/product";
import { getAllCategories, slugify } from "@/data";

const CATEGORY_VISUAL: Record<
  string,
  { description: string; image: string; isDark: boolean }
> = {
  "intelligent-system": {
    description:
      "Advanced addressable fire detection solutions designed for precise monitoring, faster response, and flexible system integration.",
    image: HOME_ASSETS.PRODUCT_1,
    isDark: true,
  },
  "conventional-system": {
    description:
      "Reliable fire detection systems designed to provide dependable monitoring and straightforward protection for a wide range of applications.",
    image: HOME_ASSETS.PRODUCT_2,
    isDark: false,
  },
  "gas-releasing-system": {
    description:
      "Specialized releasing systems designed to detect fire conditions and support the controlled activation of fixed firefighting installations.",
    image: HOME_ASSETS.PRODUCT_3,
    isDark: false,
  },
};

const FALLBACK_VISUAL = {
  description: "Explore our range of fire protection products.",
  image: HOME_ASSETS.PRODUCT_1,
  isDark: false,
};

export default function ProductsPage() {
  const rawCategories = getAllCategories();

  const categories = rawCategories.map((cat, idx) => {
    const slug = slugify(cat.name);
    const visual = CATEGORY_VISUAL[slug] ?? FALLBACK_VISUAL;
    return {
      id: cat.id,
      number: `0${idx + 1}`,
      name: cat.name,
      description: visual.description,
      image: visual.image,
      isDark: visual.isDark,
    };
  });

  return (
    <div>
      <ProductIndex/>
    </div>
  );
}
