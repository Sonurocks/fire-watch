"use client";

import React from "react";
import Modal from "@/ui/modal/Modal";
import ContactForm from "./ContactForm";
import SectionLabel from "@/ui/typography/SectionLabel";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({
  isOpen,
  onClose,
}: ContactFormModalProps) {
  const contactItems = [
    {
      id: "emergency",
      icon: FiPhone,
      title: "24/7 Monitoring & Emergency",
      value: "+1 (559) 425 0042",
      href: "tel:+15594250042",
    },
    {
      id: "tech-support",
      icon: FiMail,
      title: "Technical Support",
      value: "info@fire-watch.co",
      href: "mailto:info@fire-watch.co",
    },
    {
      id: "headquarters",
      icon: FiMapPin,
      title: "Our Headquarters",
      value: "22982 La Cadena Dr. Suite\n211 Laguna Hills, CA 92653 – USA",
      href: "#",
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="1082px"
      showCloseButton={true}
      className="bg-modal-bg border border-modal-border rounded-[16px] sm:rounded-[20px] md:rounded-[24px] flex flex-col items-center text-center p-4 sm:p-6 md:p-[48px] pt-8 sm:pt-10 md:pt-[48px]"
    >
      <SectionLabel color="text-primary" className="mb-2 sm:mb-3 text-center">
        FIRE WATCH SAFETY NETWORK
      </SectionLabel>

      <h2 className="text-white font-helvetica text-[24px] sm:text-[32px] md:text-[48px] font-medium leading-[1.16] tracking-[-0.01em] mb-2 sm:mb-4">
        Get In Touch
      </h2>

      <p className="text-text-gray-light font-helvetica text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5] md:leading-[1.6] tracking-[-0.01em] max-w-[650px] mb-5 sm:mb-8 text-center">
        Have questions about our certified fire detection systems, technical
        support, or system installations? Contact our dedicated safety
        consultants today.
      </p>

      {/* Responsive Contact Info Bar Section */}
      <div className="w-full max-w-[952px] p-3 sm:p-4 mb-5 sm:mb-8 grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 text-left items-center">
        {contactItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3 px-1 sm:px-2">
            <div className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-[20px] sm:rounded-[22px] border border-modal-input-border bg-modal-input-bg flex items-center justify-center text-white shrink-0">
              <item.icon className="text-[16px] sm:text-[18px]" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-helvetica font-medium text-[14px] sm:text-[16px] leading-[1.4] tracking-[0%]">
                {item.title}
              </span>
              <span className="text-text-gray-light font-helvetica font-normal text-[13px] sm:text-[14px] leading-[1.5] tracking-[-0.01em] whitespace-pre-line break-words">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      <ContactForm variant="modal" onSuccess={onClose} />
    </Modal>
  );
}
