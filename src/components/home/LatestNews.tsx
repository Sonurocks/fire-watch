import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { NEWS_ITEMS, LATEST_NEWS_HEADER } from "./constants";

export default function LatestNews() {
  return (
    <section className="bg-white w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-20 lg:py-[80px]">
      <div className="w-full">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-[64px]">
          <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-medium font-host text-text-dark leading-[1.16] tracking-[-0.01em]">
            {LATEST_NEWS_HEADER.title}
          </h2>
          <p className="mt-6 text-[16px] lg:text-[18px] font-medium font-host text-text-muted leading-[1.58] lg:leading-[1.6] tracking-[-0.01em] max-w-[716px]">
            {LATEST_NEWS_HEADER.description}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col sm:flex-row rounded-[20px] p-5 transition-all duration-300 hover:shadow-lg h-auto sm:h-[288px] bg-section-bg hover:bg-primary"
            >
              <div className="relative w-full sm:w-[248px] h-[200px] sm:h-full flex-shrink-0 rounded-[12px] overflow-hidden mb-5 sm:mb-0 sm:mr-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 248px"
                  unoptimized
                />
              </div>

              <div className="flex flex-col justify-center flex-grow py-2">
                <h3 className="text-[20px] font-bold font-helvetica mb-3 leading-[1.48] tracking-[-0.01em] text-text-dark group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[15px] xl:text-[16px] leading-[1.6] mb-6 line-clamp-4 text-text-muted group-hover:text-white/90 transition-colors duration-300">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="mt-auto inline-flex items-center gap-2 font-medium font-helvetica text-[16px] leading-[32px] tracking-[0.02em] transition-colors duration-300 text-primary hover:text-primary-hover group-hover:text-white group-hover:hover:text-gray-200"
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
