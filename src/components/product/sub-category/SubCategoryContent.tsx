"use client";

import { ProductGrid } from "../ProductGrid";
import { Product, Category, SubCategory } from "../types";
import { slugify } from "@/lib/slugify";
import Breadcrumb from "@/components/shared/Breadcrumb";

interface SubCategoryContentProps {
  products: Product[];
  category: Category;
  subCategory: SubCategory;
  categorySlug: string;
  subCategorySlug: string;
}

export function SubCategoryContent({
  products,
  category,
  subCategory,
  categorySlug,
  subCategorySlug,
}: SubCategoryContentProps) {
  return (
    <section className="py-16 lg:py-[80px] px-5 md:px-[40px] lg:px-[56px] mx-auto w-full">
      <div className="flex justify-center mb-12 w-full">
        <Breadcrumb
          items={[
            { label: "Categories", href: "/products" },
            { label: category.name, href: `/products/${categorySlug}` },
            { label: subCategory.name, isActive: true }
          ]}
        />
      </div>

      <ProductGrid
        products={products}
        buildHref={(product: Product) =>
          `/products/${categorySlug}/${subCategorySlug}/${slugify(product.name)}`
        }
      />
    </section>
  );
}
