import SubCategoryHero from "./SubCategoryHero";
import { SubCategoryContent } from "./SubCategoryContent";
import { SubCategoryPageProps } from "./types";
import { getSubCategoryDescription } from "@/data/categoryMeta";

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
        description={getSubCategoryDescription(subCategorySlug)}
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

