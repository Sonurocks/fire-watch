import React from "react";
import SubCategoryHero from "./SubCategoryHero";
import { SubCategoryGrid } from "./SubCategoryGrid";
import { PRODUCTS } from "@/components/home/constants";
import { SubCategoryIndexProps } from "./types";
import { SUBCATEGORY_UI_CONSTANTS } from "./constants";

export default function SubCategoryIndex({ category }: SubCategoryIndexProps) {
  const categoryContent = PRODUCTS.find(
    (p) => p.title.toLowerCase() === category.name.toLowerCase(),
  );

  return (
    <div className="flex flex-col bg-bg-light w-full">
      <SubCategoryHero
        title={category.name}
        description={
          categoryContent?.description ||
          SUBCATEGORY_UI_CONSTANTS.defaultDescription
        }
      />

      <section className="py-16 lg:py-[80px] px-5 md:px-[40px] lg:px-[56px] max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-text-muted text-sm uppercase tracking-wide">
            {SUBCATEGORY_UI_CONSTANTS.breadcrumbPrefix}{" "}
            <span className="text-brand-red font-semibold">
              {category.name}
            </span>
          </p>
        </div>

        <SubCategoryGrid category={category} />
      </section>
    </div>
  );
}

export * from "./types";
export * from "./constants";
export * from "./SubCategoryGrid";
