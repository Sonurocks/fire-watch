import SectionLabel from "@/ui/typography/SectionLabel";
import Button from "@/ui/buttons/Button";
import { PRODUCTS } from "./constants";
import ProductCard from "@/components/shared/ProductCard";

interface ProductRangeProps {
  label?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  showExploreAll?: boolean;
}

export default function ProductRange({
  label = "Our Product Range",
  title = (
    <>
      Advanced Fire <br className="hidden md:block" /> Protection Systems
    </>
  ),
  description = "Explore reliable fire detection and protection solutions engineered to meet the demands of modern buildings, facilities, and critical environments.",
  showExploreAll = true,
}: ProductRangeProps) {
  return (
    <section className="bg-section-bg w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-15 lg:py-[60px]">
      <div className="w-full">
        <div className="flex flex-col gap-6 mb-12 lg:mb-16">
          <div className="max-w-[481px]">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="mt-4 text-[30px] md:text-[36px] lg:text-[48px] font-medium font-host text-text-dark leading-[1.16] tracking-[-0.01em]">
              {title}
            </h2>
            <p className="mt-6 text-[16px] lg:text-[18px] text-text-muted leading-[1.58] lg:leading-[1.6]">
              {description}
            </p>
            {showExploreAll && (
              <div className="mt-8">
                <Button href="/products">Explore All Products</Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
