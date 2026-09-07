import { QUOTE_DATA } from "./constants";

export default function QuoteSection() {
  return (
    <section className="bg-white w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-20 lg:py-[120px]">
      <div className="w-full flex flex-col items-center text-center max-w-[956px]">
        <h3 className="text-2xl md:text-[32px] font-medium font-helvetica text-primary leading-[1.41] tracking-[-0.01em]">
          {QUOTE_DATA.quote}
        </h3>

        <div className="w-[1px] h-[40px] bg-primary/40 my-8"></div>

        <p className="text-primary font-bold text-[14px] lg:text-[16px] tracking-wider uppercase font-helvetica">
          {QUOTE_DATA.author}
        </p>
      </div>
    </section>
  );
}
