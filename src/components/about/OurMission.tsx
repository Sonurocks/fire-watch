import Image from "next/image";
import { ABOUT_ASSETS } from "@/assets";
import { OUR_MISSION_DATA } from "./constants";
import SectionLabel from "@/ui/typography/SectionLabel";

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
          <SectionLabel color="text-white/90" className="font-host !font-semibold !tracking-[0.15em] !text-[13px] md:!text-[13px] lg:!text-[13px]">
            {OUR_MISSION_DATA.label}
          </SectionLabel>

          <h2 className="whitespace-pre-line font-helvetica text-3xl font-medium leading-[1.16] tracking-[-0.01em] text-white md:text-[44px] lg:text-[48px]">
            {OUR_MISSION_DATA.title}
          </h2>

          <p className="max-w-[762px] font-host text-base font-normal leading-[1.48] tracking-[-0.01em] text-text-gray-sub md:text-[20px]">
            {OUR_MISSION_DATA.description}
          </p>
        </div>

        {/* Mission Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6 md:gap-3 xl:gap-[24px] lg:mt-[44px]">
          {OUR_MISSION_DATA.cards.map((card) => (
            <div
              key={card.id}
              className="
                group relative flex w-full h-[220px] md:h-[200px] lg:h-[220px] xl:h-[265px] max-w-[340px] md:max-w-full
                cursor-pointer items-center justify-center
                rounded-[30px] lg:rounded-[20px] xl:rounded-[30px]
                bg-card-light/70
                p-6 lg:p-4 xl:p-6
                text-text-dark
                shadow-sm
                backdrop-blur-[16px]
                transition-[background-color,transform,box-shadow,color]
                hover:scale-[1.03]
                hover:bg-brand-red
                hover:text-white
                hover:shadow-lg
                hover:[clip-path:polygon(40px_0,100%_0,100%_100%,0_100%,0_40px)]
                hover:rounded-tl-none
              "
            >
              <h3
                className="
                  whitespace-pre-line
                  text-center
                  font-helvetica
                  font-medium
                  leading-[1.38]
                  tracking-[-0.01em]
                  text-[20px]
                  md:text-[16px]
                  lg:text-[18px]
                  xl:text-[28px]
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
