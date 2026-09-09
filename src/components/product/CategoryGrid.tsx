import Link from "next/link";
import Image from "next/image";
import { Category } from "./types";
import { PRODUCT_UI_CONSTANTS } from "./constants";

export const CategoryGrid = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/sub-category/${category.id}-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="group flex flex-col bg-card-light rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:border-brand-red"
        >
          <div className="p-8 pb-0 flex flex-col flex-1">
            <div className="bg-white rounded-t-lg p-6 flex flex-wrap justify-center items-center gap-4 min-h-[220px] shadow-sm relative">
              <div className="text-4xl text-brand-dark/5 font-bold absolute top-4 left-4">
                0{category.id}
              </div>
              {category.subCategories.flatMap((sc) => sc.products || []).slice(0, 3).map((product, i) => (
                product.image && (
                  <div key={i} className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                    <Image src={product.image} alt={product.name} fill className="object-contain" unoptimized />
                  </div>
                )
              ))}
              {category.subCategories.flatMap(sc => sc.products || []).length === 0 && (
                <div className="text-brand-red text-6xl">
                  ⚙️
                </div>
              )}
            </div>
          </div>
          <div className="p-8 bg-brand-dark text-white group-hover:bg-brand-red transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
            <p className="text-gray-300 text-sm mb-6 group-hover:text-white/90 line-clamp-3">
              Advanced addressable fire detection solutions designed for reliable monitoring.
            </p>
            <span className="inline-flex items-center text-sm font-semibold hover:underline">
              {PRODUCT_UI_CONSTANTS.exploreText}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
