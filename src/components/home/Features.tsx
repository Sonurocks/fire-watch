import Image from "next/image";
import { HOME_ASSETS } from "@/assets";
import SectionLabel from "@/ui/typography/SectionLabel";
import { BsCheckCircleFill } from "react-icons/bs";

const FEATURES_LIST = [
  "Reliable Fire Detection",
  "Certified Safety Solutions",
  "Expert Technical Support",
  "Advanced Detection Technology",
  "24/7 Fire Safety Commitment",
  "Designed for Maximum Protection",
];

export default function Features() {
  return (
    <section className="bg-white w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-15 lg:py-[80px]">
      <div className="w-full ">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-8 xl:gap-[75px]">
          {/* Left: Image */}
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

          {/* Right: Content */}
          <div className="flex-1 w-full pt-4 lg:pt-6">
            <SectionLabel>WHAT WE DO</SectionLabel>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-[42px] xl:text-[52px] font-bold text-gray-900 leading-[1.15] tracking-tight">
              Comprehensive Fire
              <br className="hidden xl:block" /> Detection Solutions
            </h2>

            <p className="mt-6 font-['Host_Grotesk'] text-[#757575] text-[20px] font-normal leading-[1.48] tracking-[-0.01em] max-w-[634px]">
              We provide reliable fire detection and notification solutions
              designed to protect people, property, and critical environments.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {FEATURES_LIST.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-[8px]">
                  <BsCheckCircleFill
                    className="text-primary flex-shrink-0 bg-white rounded-full"
                    size={24}
                  />
                  <span className="text-[18px] text-gray-500 font-medium">
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
