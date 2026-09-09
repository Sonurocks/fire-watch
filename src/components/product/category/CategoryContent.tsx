import Breadcrumb from "@/components/shared/Breadcrumb";
import { SubCategoryGrid } from "@/components/product/sub-category/SubCategoryGrid";
import { slugify } from "@/lib/slugify";
import { Category } from "../types";

export function CategoryContent({ category, categorySlug }: { category: Category; categorySlug: string }) {
  return (
    <section className="py-16 lg:py-[80px] px-5 md:px-[40px] lg:px-[56px] mx-auto w-full">
      <div className="flex justify-center mb-12 w-full">
        <Breadcrumb
          items={[
            { label: "Categories", href: "/products" },
            { label: category.name, isActive: true }
          ]}
        />
      </div>

      <SubCategoryGrid
        category={category}
        buildHref={(subCatName) =>
          `/products/${categorySlug}/${slugify(subCatName)}`
        }
      />
    </section>
  );
}
