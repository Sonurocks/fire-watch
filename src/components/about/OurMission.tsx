import Image from "next/image";
import { ABOUT_ASSETS } from "@/assets";
import { OUR_MISSION_DATA } from "./constants";

export default function OurMission() {
  return (
    <section className="relative w-full bg-brand-deep-blue flex justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={ABOUT_ASSETS.MISSION_BG}
          alt="Our Mission Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-90 z-[1]" />
      </div>

      <div className="relative z-10 w-full mx-auto px-5 md:px-[40px] lg:px-[56px] pt-16 lg:pt-[95px] pb-16 lg:pb-[95px]">
        <div className="w-full flex flex-col items-center text-center max-w-[762px] mx-auto gap-4">
          <span className="text-[13px] font-semibold text-white/90 tracking-[0.15em] uppercase font-host">
            {OUR_MISSION_DATA.label}
          </span>
          
          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-medium text-white leading-[1.16] tracking-[-0.01em] font-helvetica whitespace-pre-line">
            {OUR_MISSION_DATA.title}
          </h2>
          
          <p className="text-base md:text-[20px] text-text-gray-sub leading-[1.48] tracking-[-0.01em] font-normal font-host max-w-[762px]">
            {OUR_MISSION_DATA.description}
          </p>
        </div>

        <div className="mt-10 lg:mt-[44px] flex flex-wrap items-center justify-center gap-6 lg:gap-[24px]">
          {OUR_MISSION_DATA.cards.map((card) => (
            <div
              key={card.id}
              style={
                card.isRed
                  ? { clipPath: "polygon(35px 0, 100% 0, 100% 100%, 0 100%, 0 35px)" }
                  : undefined
              }
              className={`relative w-full max-w-[252px] h-[265px] flex items-center justify-center p-6 transition-transform duration-300 hover:scale-[1.03] cursor-pointer ${
                card.isRed
                  ? "bg-brand-red text-white shadow-lg rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px]"
                  : "bg-card-light/70 backdrop-blur-[16px] text-text-dark rounded-[30px] shadow-sm hover:bg-card-light/85"
              }`}
            >
              <h3 className="text-xl md:text-[28px] font-medium font-helvetica text-center whitespace-pre-line leading-[1.38] tracking-[-0.01em]">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
