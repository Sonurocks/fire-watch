import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { NEWS_ITEMS } from "./constants";

export default function LatestNews() {
  return (
    <section className="bg-white w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-20 lg:py-[80px]">
      <div className="w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-[64px]">
          <h2 className="text-4xl md:text-[44px] font-semibold text-text-dark leading-[1.26] tracking-[-0.01em]">
            Latest From Fire Watch
          </h2>
          <p className="mt-6 text-base md:text-[20px] font-medium text-[#222222] leading-[1.82] tracking-[-0.01em] max-w-[716px]">
            Stay informed with the latest news, insights, product updates, and
            developments from Fire Watch.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col sm:flex-row rounded-[20px] p-5 transition-shadow hover:shadow-lg h-auto sm:h-[288px] ${
                item.isHighlighted ? "bg-primary" : "bg-section-bg"
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full sm:w-[248px] h-[200px] sm:h-full flex-shrink-0 rounded-[12px] overflow-hidden mb-5 sm:mb-0 sm:mr-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 248px"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col justify-center flex-grow py-2">
                <h3
                  className={`text-[22px] font-bold mb-3 leading-[1.3] ${
                    item.isHighlighted ? "text-white" : "text-text-dark"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-[15px] leading-[1.6] mb-6 line-clamp-4 ${
                    item.isHighlighted ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className={`mt-auto inline-flex items-center gap-2 font-semibold text-[15px] transition-colors ${
                    item.isHighlighted
                      ? "text-white hover:text-gray-200"
                      : "text-primary hover:text-primary-hover"
                  }`}
                >
                  Read More <BsArrowRight className="text-lg" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
