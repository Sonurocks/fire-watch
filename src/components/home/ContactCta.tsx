"use client";

import { useState } from "react";
import SectionLabel from "@/ui/typography/SectionLabel";
import Button from "@/ui/buttons/Button";
import { BsArrowRight } from "react-icons/bs";
import { CONTACT_CTA_DATA } from "./constants";
import ContactFormModal from "@/components/contact/ContactFormModal";

export default function ContactCta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-cta-bg w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] min-h-[398px] items-center">
        <div className="w-full flex flex-col items-center text-center max-w-[800px]">
          <SectionLabel className="mb-4 text-primary">
            {CONTACT_CTA_DATA.label}
          </SectionLabel>

          <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-medium font-host text-white leading-[1.16] tracking-[-0.01em] mb-6">
            {CONTACT_CTA_DATA.title}
          </h2>

          <p className="text-base md:text-[18px] text-gray-300 leading-[1.6] max-w-[650px] mb-10">
            {CONTACT_CTA_DATA.description}
          </p>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-[240px] h-[56px] flex items-center justify-center gap-[10px] cursor-pointer"
          >
            {CONTACT_CTA_DATA.buttonText} <BsArrowRight className="text-lg" />
          </Button>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
