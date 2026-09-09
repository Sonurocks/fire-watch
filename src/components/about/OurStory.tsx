import Image from "next/image";
import SectionLabel from "@/ui/typography/SectionLabel";
import { OUR_STORY_DATA } from "./constants";

export default function OurStory() {
  return (
    <section className="bg-white w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-12 md:py-16 lg:py-[120px]">
      <div className="w-full flex flex-col md:flex-row md:items-start lg:items-center justify-between gap-8 md:gap-8 lg:gap-[60px] xl:gap-[80px]">
        <div className="flex-1 w-full max-w-[680px] flex flex-col gap-4 md:gap-6">
          <div>
            <SectionLabel>{OUR_STORY_DATA.label}</SectionLabel>
            <h2 className="mt-4 md:mt-6 text-[30px] md:text-[36px] lg:text-[48px] font-medium font-helvetica text-text-dark leading-[1.16] tracking-[-0.01em] max-w-[641px]">
              {OUR_STORY_DATA.title}
            </h2>
          </div>

          <div className="flex flex-col space-y-[20px] md:space-y-[24px] lg:space-y-[50px] mt-2 lg:mt-4">
            {OUR_STORY_DATA.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base md:text-[16px] lg:text-[18px] font-normal font-host text-text-muted leading-[1.6] tracking-[-0.01em]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[320px] lg:w-[460px] xl:w-[560px] flex-shrink-0 relative rounded-[12px] overflow-hidden shadow-sm aspect-[560/460]">
          <Image
            src={OUR_STORY_DATA.image}
            alt="Our Story"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 320px, 560px"
          />
        </div>
      </div>
    </section>
  );
}
