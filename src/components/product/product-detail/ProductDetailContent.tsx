import Breadcrumb from "@/components/shared/Breadcrumb";
import { Product, SubCategory, Category } from "../types";

export interface ProductDetailContentProps {
  product: Product;
  subCategory: SubCategory;
  category: Category;
  categorySlug: string;
  subCategorySlug: string;
}

export function ProductDetailContent({
  product,
  subCategory,
  category,
  categorySlug,
  subCategorySlug,
}: ProductDetailContentProps) {
  return (
    <div className="w-full lg:max-w-[642px] flex-grow flex flex-col pt-0 gap-[28px]">
      <div className="w-full">
        <Breadcrumb
          items={[
            { label: "Categories", href: "/products" },
            { label: category.name, href: `/products/${categorySlug}` },
            { label: subCategory.name, href: `/products/${categorySlug}/${subCategorySlug}` },
            { label: product.name.split(' (')[0], isActive: true }
          ]}
          className="!justify-start"
        />
      </div>
      <div>
        <h2 className="text-[28px] md:text-[32px] font-sans font-bold text-text-dark leading-[1.12] tracking-[-0.01em] mb-[24px]">
          {product.name}
        </h2>
        <p className="text-[16px] md:text-[18px] font-sans font-normal text-c-414141 leading-[1.8] tracking-normal mb-0">
          {product.description}
        </p>
      </div>
    </div>
  );
}
