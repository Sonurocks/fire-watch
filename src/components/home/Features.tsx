import Image from "next/image";
import { HOME_ASSETS } from "@/assets";
import SectionLabel from "@/ui/typography/SectionLabel";
import { BsCheckCircleFill } from "react-icons/bs";

import { FEATURE_DATA } from "./constants";

export default function Features() {
  return (
    <section className="bg-white w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-15 lg:py-[80px]">
      <div className="w-full ">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-8 xl:gap-[75px]">
          <div className="w-full lg:w-[45%] xl:w-[560px] flex-shrink-0">
            <div className="relative w-full aspect-[560/533] rounded-[12px] overflow-hidden shadow-sm">
              <Image
                src={HOME_ASSETS.FIRE_PANEL}
                alt="Fire Alarm Control Panel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>

          <div className="flex-1 w-full pt-4 lg:pt-6">
            <SectionLabel>{FEATURE_DATA.label}</SectionLabel>

            <h2 className="mt-4 text-[30px] md:text-[36px] lg:text-[48px] font-medium font-host text-text-dark leading-[1.16] tracking-[-0.01em]">
              {FEATURE_DATA.title}
            </h2>

            <p className="mt-6 font-host text-text-muted text-[16px] lg:text-[18px] font-normal leading-[1.58] lg:leading-[1.6] tracking-[-0.01em] max-w-[634px]">
              {FEATURE_DATA.description}
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {FEATURE_DATA.list.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-[8px]">
                  <BsCheckCircleFill
                    className="text-primary flex-shrink-0 bg-white rounded-full"
                    size={24}
                  />
                  <span className="text-[18px] text-text-muted font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
