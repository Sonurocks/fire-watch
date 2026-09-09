"use client";

import ProductCard from "@/components/shared/ProductCard";
import SectionLabel from "@/ui/typography/SectionLabel";
import { slugify } from "@/lib/slugify";
import ProductSearch from "./ProductSearch";
import { PRODUCT_UI_CONSTANTS } from "./constants";

interface CategoryItem {
  id: number;
  name: string;
  number: string;
  description: string;
  image: string;
  isDark: boolean;
}

interface ProductCategoriesProps {
  categories: CategoryItem[];
}

export const ProductCategories = ({ categories }: ProductCategoriesProps) => {
  return (
    <section className="bg-bg-light w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-16 lg:py-[60px]">
      <div className="w-full">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <SectionLabel>Our Product Range</SectionLabel>
          <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-medium font-host text-text-dark leading-[1.16] tracking-[-0.01em]">
            Advanced Fire <br className="hidden md:block" /> Protection Systems
          </h2>
          <p className="mt-2 text-[16px] lg:text-[18px] text-text-muted leading-[1.6] max-w-2xl text-center">
            Explore reliable fire detection and protection solutions engineered
            to meet the demands of modern buildings, facilities, and critical
            environments.
          </p>

          <ProductSearch 
            containerClassName="my-6" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
          {categories.map((category) => (
            <ProductCard
              key={category.id}
              id={category.number}
              title={category.name}
              description={category.description}
              image={category.image}
              link={`/products/${slugify(category.name)}`}
            />
          ))}
          {categories.length === 0 && (
            <div className="col-span-full text-center py-12 text-text-muted font-host">
              {PRODUCT_UI_CONSTANTS.noProductsFound}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
