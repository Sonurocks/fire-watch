"use client";

import React, { useState } from "react";
import InputField from "@/ui/inputs/InputField";
import TextareaField from "@/ui/inputs/TextareaField";
import SubmitButton from "@/ui/buttons/SubmitButton";

export interface ContactFormProps {
  variant?: "modal" | "card";
  onSuccess?: () => void;
}

export default function ContactForm({
  variant = "modal",
  onSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Detailed Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitted(true);

    if (onSuccess) {
      onSuccess();
    }

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    }, 3000);
  };

  const fieldVariant = variant === "modal" ? "modal" : "light";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[952px] flex flex-col gap-5 md:gap-[24px] text-left"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[24px] w-full">
        <InputField
          label="FULL NAME"
          name="fullName"
          placeholder="e.g. John Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
          error={errors.fullName}
          variant={fieldVariant}
        />

        <InputField
          label="EMAIL ADDRESS"
          name="email"
          type="email"
          placeholder="e.g. john@company.com"
          value={formData.email}
          onChange={handleChange}
          required
          error={errors.email}
          variant={fieldVariant}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[24px] w-full">
        <InputField
          label="PHONE NUMBER"
          name="phone"
          type="tel"
          placeholder="e.g. +1 (555) 000-0000"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          variant={fieldVariant}
        />

        <InputField
          label="SYSTEM / INQUIRY TYPE"
          name="inquiryType"
          placeholder="e.g. Commercial Fire Alarm"
          value={formData.inquiryType}
          onChange={handleChange}
          error={errors.inquiryType}
          variant={fieldVariant}
        />
      </div>

      <div className="w-full">
        <TextareaField
          label="DETAILED MESSAGE"
          name="message"
          rows={4}
          placeholder="Tell us about your facility or technical support requirements..."
          value={formData.message}
          onChange={handleChange}
          required
          error={errors.message}
          variant={fieldVariant}
        />
      </div>

      <div className="w-full pt-1">
        {variant === "modal" ? (
          <button
            type="submit"
            className="w-full h-[56px] rounded-[6px] bg-[#BD0000] hover:bg-[#A30000] text-[#FFFFFF] font-helvetica font-medium text-[16px] leading-[24px] tracking-[-0.01em] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            {isSubmitted ? (
              <span>Message Sent Successfully!</span>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        ) : (
          <SubmitButton isSubmitted={isSubmitted}>
            Send Message
          </SubmitButton>
        )}
      </div>
    </form>
  );
}
