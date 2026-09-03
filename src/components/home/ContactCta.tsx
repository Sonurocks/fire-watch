import SectionLabel from "@/ui/typography/SectionLabel";
import Button from "@/ui/buttons/Button";
import { BsArrowRight } from "react-icons/bs";

export default function ContactCta() {
  return (
    <section className="bg-cta-bg w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] min-h-[398px] items-center">
      <div className="w-full flex flex-col items-center text-center max-w-[800px]">
        <SectionLabel className="mb-4 text-primary">
          FIRE WATCH SAFETY NETWORK
        </SectionLabel>

        <h2 className="text-4xl md:text-[48px] font-semibold text-white leading-[1.2] tracking-[-0.01em] mb-6">
          Get In Touch
        </h2>

        <p className="text-base md:text-[18px] text-gray-300 leading-[1.6] max-w-[650px] mb-10">
          Have questions about our certified fire detection systems, technical
          support, or system installations? Contact our dedicated safety
          consultants today.
        </p>

        <Button
          href="/contact"
          className="w-full sm:w-[240px] h-[56px] flex items-center justify-center gap-[10px]"
        >
          Send Message <BsArrowRight className="text-lg" />
        </Button>
      </div>
    </section>
  );
}
