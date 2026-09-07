import Image from "next/image";
import { ABOUT_ASSETS } from "@/assets";
import { OUR_CORE_VALUES_DATA } from "./constants";

export default function OurCoreValues() {
  const valueIcons = [
    ABOUT_ASSETS.VALUE_ICON_1,
    ABOUT_ASSETS.VALUE_ICON_2,
    ABOUT_ASSETS.VALUE_ICON_3,
    ABOUT_ASSETS.VALUE_ICON_4,
  ];

  const iconDimensions = [
    { width: 33.86, height: 42.33 },
    { width: 39.33, height: 39.27 },
    { width: 31.95, height: 43.45 },
    { width: 40.5, height: 34.5 },
  ];

  return (
    <section className="relative w-full bg-bg-light flex justify-center overflow-hidden">
      <div className="relative z-10 w-full mx-auto px-5 md:px-[40px] lg:px-[56px] pt-16 lg:pt-[60px] pb-16 lg:pb-[80px] lg:min-h-[850px] flex flex-col justify-between font-helvetica">
        <div className="w-full max-w-[740px] mx-auto text-center flex flex-col items-center gap-4 lg:gap-[24px]">
          <span className="text-[13px] font-bold text-brand-red tracking-[0.15em] uppercase font-host">
            {OUR_CORE_VALUES_DATA.label}
          </span>

          <h2 className="text-3xl sm:text-[40px] lg:text-[48px] font-medium text-text-dark leading-[1.16] tracking-[-0.01em] font-helvetica whitespace-pre-line">
            {OUR_CORE_VALUES_DATA.title}
          </h2>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[40px] xl:gap-[60px] mt-12 lg:mt-[60px]">
          <div className="w-full max-w-[499px] h-[340px] sm:h-[400px] lg:h-[442px] relative rounded-[4px] overflow-hidden flex-shrink-0 shadow-sm">
            <Image
              src={ABOUT_ASSETS.CORE_VALUES_IMG}
              alt="Fire Watch Technician"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 499px"
              priority
            />
          </div>

          <div className="w-full max-w-[705px] flex flex-col">
            {OUR_CORE_VALUES_DATA.items.map((item, index) => {
              const dim = iconDimensions[index % iconDimensions.length];
              return (
                <div
                  key={item.id}
                  className="w-full h-[115px] border-b border-border-gray flex items-center gap-6 lg:gap-14 px-2 transition-colors duration-200 hover:bg-black/[0.02]"
                >
                  <div className="w-[45px] flex items-center justify-center flex-shrink-0">
                    <div
                      style={{
                        width: `${dim.width}px`,
                        height: `${dim.height}px`,
                      }}
                      className="relative flex-shrink-0"
                    >
                      <Image
                        src={valueIcons[index % valueIcons.length]}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-[20px] lg:text-[22px] font-medium font-helvetica text-text-dark tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
