import Image from "next/image";
import SectionLabel from "@/ui/typography/SectionLabel";
import { OUR_CULTURE_DATA } from "./constants";

export default function OurCulture() {
  return (
    <section className="relative w-full bg-bg-light flex justify-center overflow-hidden font-helvetica">
      <div className="relative z-10 w-full mx-auto px-5 md:px-[40px] lg:px-[56px] py-16 lg:py-[80px] flex flex-col items-center">
        <div className="w-full max-w-[554px] mx-auto text-center flex flex-col items-center gap-[16px]">
          <SectionLabel>{OUR_CULTURE_DATA.label}</SectionLabel>
          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-medium text-text-dark leading-[1.16] tracking-[-0.01em] font-helvetica whitespace-pre-line">
            {OUR_CULTURE_DATA.title}
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-[24px] mt-12 lg:mt-[60px] justify-items-center">
          {OUR_CULTURE_DATA.items.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[325px] h-[370px] bg-white rounded-[20px] p-[28px] pt-[30px] pb-[30px] flex flex-col items-center justify-between shadow-[0_-8px_19px_rgba(222,222,222,0.1)] border border-[#F0F0F0] transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="w-[96px] h-[96px] rounded-full bg-icon-circle-bg flex items-center justify-center flex-shrink-0">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title.replace("\n", " ")}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="w-full h-[174px] flex flex-col justify-between items-center text-center">
                <h3 className="text-xl md:text-[25px] font-medium font-helvetica text-text-dark tracking-[0.01em] whitespace-pre-line leading-[34px]">
                  {card.title}
                </h3>
                <p className="text-base md:text-[18px] font-medium font-helvetica text-text-dark leading-[28px] tracking-[0.01em]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
