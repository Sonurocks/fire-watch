"use client";

import React, { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { createPortal } from "react-dom";

export interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouModal({
  isOpen,
  onClose,
}: ThankYouModalProps) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  const content = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onPointerDown={onClose}
        aria-hidden="true"
      />

      {/* Modal Box */}
      <div 
        className="relative z-10 w-full max-w-[400px] bg-white rounded-[16px] sm:rounded-[20px] shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <FiX size={20} />
        </button>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 w-full mt-2">
          <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] bg-green-50 rounded-full flex items-center justify-center">
            <BsCheckCircleFill className="text-[#10B981] text-[28px] sm:text-[32px]" />
          </div>
          
          <div className="flex flex-col items-center gap-1.5 text-center">
            <span className="text-[11px] font-bold text-[#545454] uppercase tracking-[0.05em]">
              FIRE WATCH SAFETY NETWORK
            </span>
            <h2 className="font-helvetica text-[22px] sm:text-[24px] font-medium text-[#111111] leading-tight tracking-[-0.01em]">
              Thank You!
            </h2>
          </div>

          <p className="font-helvetica text-[14px] sm:text-[15px] font-normal text-[#545454] leading-[1.6] tracking-[-0.01em] text-center max-w-[320px]">
            Thank you for contacting Fire Watch. Your inquiry has been submitted successfully. Our team will get back to you shortly.
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
