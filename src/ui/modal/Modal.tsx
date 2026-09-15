"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  titleClassName?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
  closeButtonClassName?: string;
  zIndex?: number;
  maxWidth?: string;
  className?: string;
  noPadding?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  titleClassName = "",
  children,
  size = "lg",
  showCloseButton = true,
  closeButtonClassName = "text-modal-text-muted",
  zIndex = 50,
  maxWidth,
  className = "",
  noPadding = false,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is the standard React pattern for avoiding SSR hydration mismatch on portals.
    // The state is explicitly set post-hydration to allow createPortal to run securely on the client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const getSizeClass = () => {
    if (maxWidth) return "";
    switch (size) {
      case "sm":
        return "max-w-[400px]";
      case "md":
        return "max-w-[600px]";
      case "lg":
        return "max-w-[800px]";
      case "xl":
        return "max-w-[1082px]";
      case "full":
        return "max-w-[95vw]";
      default:
        return "max-w-[1082px]";
    }
  };

  const bgClass = className.includes("bg-") ? "" : "bg-white text-text-dark";
  const paddingClass =
    className.includes("p-") ||
    className.includes("px-") ||
    className.includes("py-")
      ? ""
      : noPadding
      ? "p-0"
      : "p-4 sm:p-8 md:p-[48px]";

  const portalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto"
          style={{ zIndex }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onPointerDown={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-0"
            aria-hidden="true"
          />

          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`
              relative z-10 w-full ${getSizeClass()}
              ${bgClass} ${paddingClass} rounded-[16px] sm:rounded-[20px] md:rounded-[24px] shadow-2xl my-auto
              max-h-[92vh] overflow-y-auto custom-scrollbar
              ${className}
            `}
            style={maxWidth ? { maxWidth } : undefined}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
          >
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between">
                {title ? (
                  <h2
                    id="modal-title"
                    className={`text-xl font-bold ${titleClassName}`}
                  >
                    {title}
                  </h2>
                ) : (
                  <div />
                )}

                {showCloseButton && (
                  <button
                    onClick={onClose}
                    type="button"
                    className={`absolute top-3 right-3 sm:top-5 sm:right-5 md:top-[25px] md:right-[24px] w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] md:w-[55px] md:h-[55px] rounded-full flex items-center justify-center cursor-pointer ${closeButtonClassName}`}
                    aria-label="Close modal"
                  >
                    <FiX className="text-[20px] sm:text-[24px] md:text-[28px]" />
                  </button>
                )}
              </div>
            )}

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(portalContent, document.body);
}
