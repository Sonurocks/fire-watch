import Image from "next/image";
import { ABOUT_ASSETS } from "@/assets";
import { OUR_MISSION_DATA } from "./constants";

export default function OurMission() {
  return (
    <section className="relative flex w-full justify-center overflow-hidden bg-brand-deep-blue">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ABOUT_ASSETS.MISSION_BG}
          alt="Our Mission Background"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 z-[1] bg-black/40 backdrop-brightness-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full px-5 pb-16 pt-16 md:px-[40px] lg:px-[56px] lg:pb-[95px] lg:pt-[95px]">
        {/* Heading Content */}
        <div className="mx-auto flex w-full max-w-[762px] flex-col items-center gap-4 text-center">
          <span className="font-host text-[13px] font-semibold uppercase tracking-[0.15em] text-white/90">
            {OUR_MISSION_DATA.label}
          </span>

          <h2 className="whitespace-pre-line font-helvetica text-3xl font-medium leading-[1.16] tracking-[-0.01em] text-white md:text-[44px] lg:text-[48px]">
            {OUR_MISSION_DATA.title}
          </h2>

          <p className="max-w-[762px] font-host text-base font-normal leading-[1.48] tracking-[-0.01em] text-text-gray-sub md:text-[20px]">
            {OUR_MISSION_DATA.description}
          </p>
        </div>

        {/* Mission Cards */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:mt-[44px] lg:gap-[24px]">
          {OUR_MISSION_DATA.cards.map((card) => (
            <div
              key={card.id}
              className="
                group relative flex h-[265px] w-full max-w-[252px]
                cursor-pointer items-center justify-center
                rounded-[30px]
                bg-card-light/70
                p-6
                text-text-dark
                shadow-sm
                backdrop-blur-[16px]
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-brand-red
                hover:text-white
                hover:shadow-lg
              "
            >
              <h3
                className="
                  whitespace-pre-line
                  text-center
                  font-helvetica
                  text-xl
                  font-medium
                  leading-[1.38]
                  tracking-[-0.01em]
                  md:text-[28px]
                "
              >
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
