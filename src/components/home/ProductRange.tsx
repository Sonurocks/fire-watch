import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/ui/typography/SectionLabel";
import Button from "@/ui/buttons/Button";
import { BsArrowRight } from "react-icons/bs";
import { PRODUCTS } from "./constants";

export default function ProductRange() {
  return (
    <section className="bg-section-bg w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-15 lg:py-[80px]">
      <div className="w-full">
        <div className="flex flex-col gap-6 mb-12 lg:mb-16">
          <div className="max-w-[580px]">
            <SectionLabel>Our Product Range</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-[48px] font-medium text-text-dark leading-[1.16] tracking-[-0.01em]">
              Advanced Fire <br className="hidden md:block" /> Protection
              Systems
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-500 leading-[1.5]">
              Explore reliable fire detection and protection solutions
              engineered to meet the demands of modern buildings, facilities,
              and critical environments.
            </p>
            <div className="mt-8">
              <Button href="/products">Explore All Products</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col h-full min-h-[564px] rounded-[12px] p-6 lg:p-[40px] transition-shadow ${
                product.isDark
                  ? "bg-brand-dark hover:shadow-lg"
                  : "bg-transparent"
              }`}
            >
              <div
                className={`text-sm font-medium mb-6 ${
                  product.isDark ? "text-white" : "text-primary"
                }`}
              >
                {product.id}
              </div>

              <div className="relative w-full aspect-[4/3] mb-8 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="mt-auto">
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    product.isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className={`text-base leading-[1.6] mb-8 ${
                    product.isDark ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {product.description}
                </p>
                <Link
                  href={product.link}
                  className={`inline-flex items-center gap-2 font-medium transition-colors ${
                    product.isDark
                      ? "text-white hover:text-gray-200"
                      : "text-primary hover:text-primary-hover"
                  }`}
                >
                  Explore Products <BsArrowRight className="text-xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
