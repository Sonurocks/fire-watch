import Link from "next/link";
import Image from "next/image";
import ArrowHoverButton from "@/ui/buttons/ArrowHoverButton";
import { Product } from "./types";

interface ProductGridProps {
  products: Product[];
  buildHref?: (product: Product) => string;
}

export const ProductGrid = ({
  products,
  buildHref,
}: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
      {products.map((product, index) => {
        const image = product.image;
        const href = buildHref
          ? buildHref(product)
          : product.url.replace("https://fire-watch.co", "");
        return (
          <div
            key={product.id}
            className="group flex flex-col bg-[#F4F4F4] rounded-[22px] p-[12px] transition-all duration-300 w-full h-[600px] outline outline-1 outline-transparent hover:outline-c-e5e5e5"
          >
            <div className="relative w-full h-[224px] bg-white rounded-[16px] flex items-center justify-center px-[8px] shrink-0 overflow-hidden">
              <div className="absolute top-[16px] left-[16px] text-[16px] font-medium font-host text-c-8d2b22 z-10">
                {`0${index + 1}`}
              </div>
              
              {image ? (
                <div className="relative w-[180px] h-[180px]">
                  <Image
                    src={image}
                    alt={product.name}
                    fill
                    quality={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
              ) : (
                <div className="text-brand-red opacity-50 text-6xl">
                  ⚙️
                </div>
              )}
            </div>

            <div className="mt-[16px] flex flex-col flex-grow px-[4px] pb-[8px]">
              <h3 className="text-[22px] font-medium font-host leading-[1.16] tracking-[-0.01em] text-text-dark mb-[12px] line-clamp-2">
                {product.name}
              </h3>
              <p className="text-c-666666 text-[16px] font-normal font-host leading-[1.64] tracking-[-0.01em] line-clamp-[6] mb-[20px] flex-grow">
                {product.listingDescription || product.description}
              </p>
              
              <div className="mt-auto flex justify-start">
                <Link href={href}>
                  <ArrowHoverButton text="View More" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      {products.length === 0 && (
        <div className="col-span-full py-12 text-center text-text-muted font-host">
          No products available yet.
        </div>
      )}
    </div>
  );
};
