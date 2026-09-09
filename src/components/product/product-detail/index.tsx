import { ProductDetailHero } from "./ProductDetailHero";
import { ProductFeatures } from "./ProductFeatures";
import { ProductDownloads } from "./ProductDownloads";
import { PRODUCT_DETAIL_CONSTANTS } from "./constants";
import { ProductDetailPageProps } from "./types";

export default function ProductDetailIndex({
  product,
  subCategory,
  category,
  categorySlug,
  subCategorySlug,
}: ProductDetailPageProps) {
  return (
    <main className="flex flex-col w-full bg-white pt-[142px]">
      
      <ProductDetailHero
        product={product}
        category={category}
        subCategory={subCategory}
        categorySlug={categorySlug}
        subCategorySlug={subCategorySlug}
      />

      <ProductFeatures features={product.features} />

      <ProductDownloads documents={product.documents} />
    </main>
  );
}

export * from "./constants";
export * from "./types";
