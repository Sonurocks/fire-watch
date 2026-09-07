import Image from "next/image";
import SectionLabel from "@/ui/typography/SectionLabel";
import { OUR_STORY_DATA } from "./constants";
import { HOME_ASSETS } from "@/assets"; // Fallback image if needed

export default function OurStory() {
  return (
    <section className="bg-white w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-16 md:py-[100px] lg:py-[120px]">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[80px]">
        <div className="flex-1 w-full max-w-[680px] flex flex-col gap-6">
          <div>
            <SectionLabel>{OUR_STORY_DATA.label}</SectionLabel>
            <h2 className="mt-6 text-4xl lg:text-[48px] font-medium font-helvetica text-gray-900 leading-[1.16] tracking-[-0.01em]">
              {OUR_STORY_DATA.title}
            </h2>
          </div>

          <div className="flex flex-col space-y-[30px] lg:space-y-[50px] mt-2 lg:mt-4">
            {OUR_STORY_DATA.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base md:text-[18px] font-normal font-host text-text-muted leading-[1.6] tracking-[-0.01em]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[560px] flex-shrink-0 relative rounded-[12px] overflow-hidden shadow-sm aspect-[560/460]">
          <Image
            src={OUR_STORY_DATA.image}
            alt="Our Story"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}
