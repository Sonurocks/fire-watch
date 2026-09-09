import SubCategoryHero from "./SubCategoryHero";
import { SubCategoryContent } from "./SubCategoryContent";
import { SubCategoryPageProps } from "./types";

export default function SubCategoryListingIndex({
  category,
  subCategory,
  products,
  categorySlug,
  subCategorySlug,
}: SubCategoryPageProps) {
  return (
    <main className="flex flex-col bg-bg-light w-full">
      <SubCategoryHero
        title={subCategory.name}
        description={`Explore our range of ${category.name} — ${subCategory.name.toLowerCase()} products.`}
      />
      <SubCategoryContent
        products={products}
        category={category}
        subCategory={subCategory}
        categorySlug={categorySlug}
        subCategorySlug={subCategorySlug}
      />
    </main>
  );
}

export * from "./constants";
export * from "./listing-constants";
export * from "./SubCategoryGrid";
export * from "./types";

