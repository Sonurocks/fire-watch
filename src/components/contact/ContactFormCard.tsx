"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CONTACT_ASSETS } from "@/assets";
import SubmitButton from "@/ui/buttons/SubmitButton";

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative w-full flex justify-center items-center py-12 md:py-16 lg:py-[80px] px-5 flex-col md:px-[40px] lg:px-[56px] overflow-hidden min-h-[830px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={CONTACT_ASSETS.HERO_BG}
          alt="Contact Section Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 z-[1] bg-black/40 backdrop-brightness-95" />
      </div>

      <div
        className="relative z-10 w-full max-w-[1278px] xl:min-h-[692px] rounded-[20px] sm:rounded-[28px] xl:rounded-[35px] overflow-hidden flex flex-col xl:flex-row shadow-2xl bg-transparent"
        style={{
          boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="relative z-20 w-full xl:flex-1 xl:max-w-[600px] flex flex-col gap-5 sm:gap-6 xl:gap-[24px] p-5 sm:p-8 xl:py-[48px] xl:pl-[48px] xl:pr-[24px] bg-transparent">
          <div className="flex flex-col gap-3 md:gap-4 max-w-[543px]">
            <h2 className="font-helvetica text-2xl sm:text-3xl md:text-[40px] xl:text-[48px] font-medium text-[#111111] leading-tight xl:leading-[1.16] tracking-[-0.01em]">
              Contact Us
            </h2>
            <p className="font-helvetica text-sm sm:text-base md:text-[18px] font-normal text-[#545454] leading-[1.6] tracking-[-0.01em] max-w-[543px]">
              Have questions about our certified fire detection systems,
              technical support, or system installations? Contact our dedicated
              safety today.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5 md:gap-[24px] w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[24px] w-full">
              <div className="flex flex-col gap-2">
                <label className="font-helvetica text-[12px] sm:text-[14px] font-medium leading-[1.4] tracking-[0.01em] text-[#565656] uppercase">
                  FULL NAME
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full bg-[#F5F5F5] text-[#111111] font-helvetica text-[14px] sm:text-[16px] leading-[1.5] rounded-[8px] px-3 sm:px-4 py-2.5 sm:py-3 border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder-[#989898]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-helvetica text-[12px] sm:text-[14px] font-medium leading-[1.4] tracking-[0.01em] text-[#565656] uppercase">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@company.com"
                  required
                  className="w-full bg-[#F5F5F5] text-[#111111] font-helvetica text-[14px] sm:text-[16px] leading-[1.5] rounded-[8px] px-3 sm:px-4 py-2.5 sm:py-3 border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder-[#989898]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[24px] w-full">
              <div className="flex flex-col gap-2">
                <label className="font-helvetica text-[12px] sm:text-[14px] font-medium leading-[1.4] tracking-[0.01em] text-[#565656] uppercase">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 (559) 000-0000"
                  className="w-full bg-[#F5F5F5] text-[#111111] font-helvetica text-[14px] sm:text-[16px] leading-[1.5] rounded-[8px] px-3 sm:px-4 py-2.5 sm:py-3 border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder-[#989898]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-helvetica text-[12px] sm:text-[14px] font-medium leading-[1.4] tracking-[0.01em] text-[#565656] uppercase">
                  SYSTEM / INQUIRY TYPE
                </label>
                <input
                  type="text"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  placeholder="e.g. Commercial Fire Alarm"
                  className="w-full bg-[#F5F5F5] text-[#111111] font-helvetica text-[14px] sm:text-[16px] leading-[1.5] rounded-[8px] px-3 sm:px-4 py-2.5 sm:py-3 border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder-[#989898]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-helvetica text-[12px] sm:text-[14px] font-medium leading-[1.4] tracking-[0.01em] text-[#565656] uppercase">
                DETAILED MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your facility or technical support requirements..."
                required
                className="w-full bg-[#F5F5F5] text-[#111111] font-helvetica text-[14px] sm:text-[16px] leading-[1.5] rounded-[8px] px-3 sm:px-4 py-2.5 sm:py-3 border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder-[#989898] resize-none"
              />
            </div>

            <div className="mt-1 w-full">
              <SubmitButton isSubmitted={isSubmitted}>
                Send Message
              </SubmitButton>
            </div>
          </form>
        </div>

        <div
          className="relative z-10 h-[250px] sm:h-[350px] md:h-[400px] xl:h-[630px] xl:w-[566px] flex-shrink-0 bg-transparent rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] m-[12px] sm:m-[16px] md:m-[24px] xl:m-[31px] xl:ml-auto"
          style={{
            boxShadow: "0 0 0 9999px #ffffff",
          }}
        />
      </div>
    </section>
  );
}
