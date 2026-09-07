import SectionLabel from "@/ui/typography/SectionLabel";
import { WHO_WE_ARE_DATA } from "./constants";

export default function WhoWeAre() {
  return (
    <section className="bg-brand-blue w-full flex items-center justify-center px-5 md:px-[40px] lg:px-[56px] py-16 md:py-[100px] lg:py-[120px] lg:min-h-[736px]">
      <div className="w-full flex flex-col items-center text-center max-w-[875px]">
        <SectionLabel>{WHO_WE_ARE_DATA.label}</SectionLabel>

        <h2 className="mt-6 text-4xl md:text-[48px] font-medium font-helvetica text-white leading-[1.2] tracking-[-0.01em] max-w-[740px] mx-auto">
          {WHO_WE_ARE_DATA.title}
        </h2>

        <div className="mt-6 flex flex-col space-y-[30px]">
          {WHO_WE_ARE_DATA.paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-base md:text-[18px] font-normal font-host text-white leading-[1.6] tracking-[-0.01em]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
