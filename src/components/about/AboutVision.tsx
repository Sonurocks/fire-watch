import SectionLabel from "@/ui/typography/SectionLabel";
import { OUR_VISION_DATA } from "./constants";

export default function AboutVision() {
  return (
    <section className="relative w-full bg-bg-light flex justify-center">
      <div className="absolute bottom-0 left-0 w-full h-[40%] md:h-[261px] bg-primary z-0"></div>

      <div className="relative z-10 w-full px-5 md:px-[40px] lg:px-[56px] pt-10 lg:pt-[60px] pb-16 lg:pb-[60px]">
        <div className="w-full flex flex-col items-center text-center max-w-[634px] mx-auto">
          <SectionLabel>{OUR_VISION_DATA.label}</SectionLabel>
          <h2 className="mt-4 text-[30px] md:text-[36px] lg:text-[48px] font-medium font-helvetica text-text-dark leading-[1.16] tracking-[-0.01em]">
            {OUR_VISION_DATA.title}
          </h2>
          <p className="mt-4 text-[16px] lg:text-[18px] font-normal font-host text-text-muted leading-[1.58] lg:leading-[1.6] tracking-[-0.01em]">
            {OUR_VISION_DATA.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4 mt-16 lg:mt-[80px]">
          {OUR_VISION_DATA.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[20px] px-6 py-8 lg:px-[28px] lg:py-[50px] flex flex-col items-center text-center gap-4 lg:gap-0 justify-between h-full min-h-[280px] lg:min-h-[336px] shadow-[0_-7px_16px_rgba(222,222,222,0.1),0_-30px_30px_rgba(222,222,222,0.09),0_-67px_40px_rgba(222,222,222,0.05),0_-118px_47px_rgba(222,222,222,0.01)]"
            >
              <h3 className="text-[16px] lg:text-[20px] font-medium font-helvetica text-text-dark leading-[1.44] lg:leading-[1.48] tracking-[0.01em]">
                {card.title}
              </h3>
              <p className="text-[16px] lg:text-[18px] font-medium font-helvetica text-text-dark leading-[1.58] lg:leading-[1.6] tracking-[0.01em]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
