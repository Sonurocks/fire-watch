"use client";

import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import InputField from "@/ui/inputs/InputField";
import TextareaField from "@/ui/inputs/TextareaField";
import SubmitButton from "@/ui/buttons/SubmitButton";
import ThankYouModal from "./ThankYouModal";
import { validateField, ContactFormData } from "@/lib/contactValidation";

export interface ContactFormProps {
  variant?: "modal" | "card";
  onSuccess?: () => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  variant = "modal",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  // Honeypot field — invisible to users, catches bots
  const [honeypot, setHoneypot] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const isSubmittingRef = useRef(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const fields = ["fullName", "email", "phone", "inquiryType", "message"] as Array<keyof ContactFormData>;

    fields.forEach((key) => {
      let cleaned = formData[key];
      if (key === "fullName" || key === "inquiryType") {
        cleaned = cleaned.replace(/\s+/g, " ").trim();
      } else {
        cleaned = cleaned.trim();
      }
      
      const errorMsg = validateField(key, cleaned);
      if (errorMsg) {
        newErrors[key] = errorMsg;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "phone") {
      value = value.replace(/[^\d+]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (hasSubmitted || errors[name]) {
      let cleaned = value;
      if (name === "fullName" || name === "inquiryType") {
        cleaned = cleaned.replace(/\s+/g, " ").trim();
      } else {
        cleaned = cleaned.trim();
      }
      
      const errorMsg = validateField(name, cleaned);
      if (errorMsg) {
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }

    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (isSubmittingRef.current || status === "submitting") return;

    if (!validate()) return;

    isSubmittingRef.current = true;
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, botcheck: honeypot }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        setTimeout(() => {
          setIsSuccessModalOpen(true);
        }, 150);

        // Clear form only after confirmed success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
        });
        setHoneypot("");

        // Reset success state after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else if (res.status === 422 && result.errors) {
        // Server-side validation errors
        setErrors(result.errors);
        setStatus("idle");
      } else {
        setStatus("error");
        toast.error(
          result.message || "Failed to send message. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    } finally {
      isSubmittingRef.current = false;
    }
  };

  const isSubmitting = status === "submitting";
  const isSubmitted = status === "success";

  const fieldVariant = variant === "modal" ? "modal" : "light";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-5 md:gap-[24px] text-left"
        noValidate
      >
        {/* Honeypot — hidden from real users, catches bots */}
        <input
          type="text"
          name="botcheck"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="new-password"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            width: 0,
            height: 0,
            opacity: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[24px] w-full">
          <div className="min-h-[90px]">
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
          </div>

          <div className="min-h-[90px]">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[24px] w-full">
          <div className="min-h-[90px]">
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
          </div>

          <div className="min-h-[90px]">
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
        </div>

        <div className="w-full min-h-[172px]">
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
              disabled={isSubmitting}
              className="w-full h-[56px] rounded-[6px] bg-[#BD0000] hover:bg-[#A30000] text-[#FFFFFF] font-helvetica font-medium text-[16px] leading-[24px] tracking-[-0.01em] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitted ? (
                <span>Message Sent Successfully!</span>
              ) : isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          ) : (
            <SubmitButton isSubmitted={isSubmitted} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </SubmitButton>
          )}
        </div>
      </form>

      <ThankYouModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </>
  );
}
