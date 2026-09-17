"use client";

import React from "react";
import Image from "next/image";
import { CONTACT_ASSETS } from "@/assets";
import ContactForm from "./ContactForm";

export default function ContactFormCard() {

  return (
    <section className="relative w-full flex justify-center items-center pt-8 md:pt-10 lg:pt-[60px] pb-12 md:pb-16 lg:pb-[60px] px-5 flex-col md:px-[40px] lg:px-[56px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={CONTACT_ASSETS.HERO_BG}
          alt="Contact Section Background"
          fill
          className="object-cover object-top"
          quality={100}
        />
      </div>

      <div
        className="relative z-10 w-full max-w-[1278px] xl:min-h-[692px]  rounded-[20px] sm:rounded-[28px] xl:rounded-[35px] overflow-hidden flex flex-col xl:flex-row shadow-2xl bg-white"
        style={{
          boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Form Container (Only element visible on mobile, tablet, and medium screens; left side on xl) */}
        <div className="relative z-20 w-full xl:flex-1 xl:max-w-[600px] flex flex-col gap-5 sm:gap-6 xl:gap-[24px] p-6 sm:p-10 xl:py-[34px] xl:pl-[48px] xl:pr-[24px] bg-white">
          <div className="flex flex-col gap-3 md:gap-4 max-w-[543px]">
            <h2 className="font-helvetica text-[30px] md:text-[36px] lg:text-[48px] font-medium text-text-dark leading-[1.16] tracking-[-0.01em]">
              Contact Us
            </h2>
            <p className="font-helvetica text-[16px] lg:text-[18px] font-normal text-c-545454 leading-[1.58] lg:leading-[1.6] tracking-[-0.01em] max-w-[543px]">
              Have questions about our certified fire detection systems,
              technical support, or system installations? Contact our dedicated
              safety consultants today.
            </p>
          </div>

          <ContactForm variant="card" />
        </div>

        <div className="hidden xl:block relative z-10 xl:h-auto xl:self-stretch xl:w-[566px] flex-shrink-0 rounded-[25px] xl:m-[31px] xl:ml-auto  overflow-hidden">
          <Image
            src={CONTACT_ASSETS.FORM_IMG}
            alt="Fire Watch Contact Form Image"
            fill
            className="object-cover object-[100%_55%]"
            quality={100}
            sizes="566px"
          />
        </div>
      </div>
    </section>
  );
}
