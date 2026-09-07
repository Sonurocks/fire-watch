import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/ui/typography/SectionLabel";
import Button from "@/ui/buttons/Button";
import { BsArrowRight } from "react-icons/bs";
import { PRODUCTS } from "./constants";

export default function ProductRange() {
  return (
    <section className="bg-section-bg w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-15 lg:py-[60px]">
      <div className="w-full">
        <div className="flex flex-col gap-6 mb-12 lg:mb-16">
          <div className="max-w-[481px]">
            <SectionLabel>Our Product Range</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[48px] font-medium font-host text-[#111111] leading-[1.16] tracking-[-0.01em]">
              Advanced Fire <br className="hidden md:block" /> Protection
              Systems
            </h2>
            <p className="mt-6 text-base md:text-lg text-text-muted leading-[1.5]">
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
              className="group flex flex-col h-full min-h-[564px] rounded-[12px] p-6 lg:p-[40px] transition-all duration-300 bg-transparent hover:bg-brand-dark hover:shadow-lg"
            >
              <div className="text-[18px] font-normal font-host leading-[1.48] tracking-[-0.01em] mb-6 text-text-accent-red group-hover:text-white transition-colors duration-300">
                {product.id}
              </div>

              <div className="relative w-full h-[200px] md:h-[240px] xl:h-[279px] mb-8 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-[24px] lg:text-[30px] font-medium font-host mb-4 text-text-dark group-hover:text-white leading-[1.16] tracking-[-0.01em] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-[16px] lg:text-[18px] font-host font-normal leading-[1.48] tracking-[-0.01em] mb-8 text-text-muted group-hover:text-text-gray-hover transition-colors duration-300">
                  {product.description}
                </p>
                <Link
                  href={product.link}
                  className="inline-flex items-center gap-2 font-medium transition-colors duration-300 text-primary hover:text-primary-hover group-hover:text-white group-hover:hover:text-gray-200 mt-auto"
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
