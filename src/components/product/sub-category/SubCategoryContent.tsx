"use client";

import { ProductGrid } from "../ProductGrid";
import { Product, Category, SubCategory } from "../types";
import { slugify } from "@/lib/slugify";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SearchInput from "@/ui/inputs/SearchInput";
import { useState } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 lg:py-[80px] px-5 md:px-[40px] lg:px-[56px] mx-auto w-full">
      <div className="flex flex-col items-center mb-12 w-full gap-8">
        <Breadcrumb
          items={[
            { label: "Categories", href: "/products" },
            { label: category.name, href: `/products/${categorySlug}` },
            { label: subCategory.name, isActive: true }
          ]}
        />
        
        <SearchInput 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          containerClassName="!w-full !max-w-[689px] !h-[60px] !rounded-[14px] !border-search-border !bg-white px-[16px] mx-auto" 
          className="!font-montserrat !font-semibold !text-[16px] !text-search-text !placeholder-search-text" 
          placeholder="Search by product name or part number"
        />
      </div>

      <ProductGrid
        products={filteredProducts}
        buildHref={(product: Product) =>
          `/products/${categorySlug}/${subCategorySlug}/${slugify(product.name)}`
        }
      />
    </section>
  );
}
