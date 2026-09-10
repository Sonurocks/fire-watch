import Image from "next/image";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Product, SubCategory, Category } from "../types";

export interface ProductDetailHeroProps {
  product: Product;
  subCategory: SubCategory;
  category: Category;
  categorySlug: string;
  subCategorySlug: string;
}

export function ProductDetailHero({
  product,
  subCategory,
  category,
  categorySlug,
  subCategorySlug,
}: ProductDetailHeroProps) {
  return (
    <section className=" w-full mx-auto px-5 md:px-[40px] lg:px-[56px] pb-[80px]">
      <div className="flex flex-col lg:flex-row items-start lg:gap-[60px] xl:gap-[147px] gap-[40px]">
        <div className="w-full mb-[24px] lg:hidden">
          <Breadcrumb
            items={[
              { label: "Categories", href: "/products" },
              { label: category.name, href: `/products/${categorySlug}` },
              { label: subCategory.name, href: `/products/${categorySlug}/${subCategorySlug}` },
              { label: product.name.split(" (")[0], isActive: true },
            ]}
            className="!justify-start"
          />
        </div>

        <div className="w-full lg:w-[455px] shrink-0 flex flex-col items-center">
          <div className="w-full h-[400px] lg:h-[536px] relative flex items-center justify-center">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                quality={100}
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 910px"
              />
            ) : (
              <div className="text-primary opacity-50 text-6xl font-host">No Image</div>
            )}
          </div>
        </div>

        <div className="w-full lg:max-w-[642px] flex-grow flex flex-col pt-0 gap-[28px] ">
          <div className="w-full hidden lg:block">
            <Breadcrumb
              items={[
                { label: "Categories", href: "/products" },
                { label: category.name, href: `/products/${categorySlug}` },
                { label: subCategory.name, href: `/products/${categorySlug}/${subCategorySlug}` },
                { label: product.name.split(" (")[0], isActive: true },
              ]}
              className="!justify-start"
            />
          </div>

          <div>
            <h2 className="text-[28px] md:text-[32px] font-sans font-bold text-text-dark leading-[1.12] tracking-[-0.01em] lg:mb-[24px] xl:mt-10">
              {product.name}
            </h2>
            <p className="text-[16px] md:text-[18px] font-sans font-normal text-c-414141 leading-[1.8] tracking-normal mb-0">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
