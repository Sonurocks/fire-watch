import { Category, SubCategory, Product } from "@/components/product/types";

/** Used by sub-category/index.tsx (old route entry) */
export interface SubCategoryIndexProps {
  category: Category;
}

/** Used by sub-category/SubCategoryGrid.tsx */
export interface SubCategoryGridProps {
  category: Category;
}

/** Used by sub-category/listing-index.tsx (new /products route) */
export interface SubCategoryPageProps {
  category: Category;
  subCategory: SubCategory;
  products: Product[];
  categorySlug: string;
  subCategorySlug: string;
}
