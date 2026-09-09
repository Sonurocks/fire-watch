import Image from "next/image";
import { VISION_ITEMS } from "./constants";

export default function VisionValues() {
  return (
    <section className="bg-section-bg w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-10">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4">
          {VISION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col h-full w-full max-w-[490px] mx-auto md:mx-0"
            >
              <div className="relative w-full h-[250px] sm:h-[368px] rounded-[20px] overflow-hidden mb-6 sm:mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 490px"
                  unoptimized
                />
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[15px] font-medium text-text-muted">
                  {item.label}
                </span>
                <h3 className="text-[20px] md:text-[24px] font-bold text-text-dark leading-[1.48] tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[18px] text-text-muted leading-[1.6] font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
