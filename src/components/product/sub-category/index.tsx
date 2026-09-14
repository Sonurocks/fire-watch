import React from "react";
import SubCategoryHero from "./SubCategoryHero";
import { SubCategoryGrid } from "./SubCategoryGrid";

import { SubCategoryIndexProps } from "./types";
import { SUBCATEGORY_UI_CONSTANTS } from "./constants";
import { getCategoryDescription } from "@/data/categoryMeta";
import { slugify } from "@/lib/slugify";

export default function SubCategoryIndex({ category }: SubCategoryIndexProps) {
  const categorySlug = slugify(category.name);

  return (
    <div className="flex flex-col bg-bg-light w-full">
      <SubCategoryHero
        title={category.name}
        description={getCategoryDescription(categorySlug)}
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
