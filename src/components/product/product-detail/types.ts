import { Category, SubCategory, Product } from "@/components/product/types";

export interface ProductDetailPageProps {
  product: Product;
  subCategory: SubCategory;
  category: Category;
  categorySlug: string;
  subCategorySlug: string;
}
