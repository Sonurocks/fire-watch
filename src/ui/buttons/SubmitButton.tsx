import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isSubmitted?: boolean;
}

export default function SubmitButton({
  children = "Send Message",
  isSubmitted = false,
  className = "",
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={`
        w-full h-[56px]
        flex items-center justify-center gap-[10px]
        px-[32px] py-[16px]
        rounded-[6px]
        bg-primary hover:bg-c-990000
        text-white font-helvetica font-medium text-[16px] leading-[24px]
        transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer
        disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {isSubmitted ? (
        <span>Message Sent Successfully!</span>
      ) : (
        <>
          <span>{children}</span>
          <BsArrowRight className="text-[18px] flex-shrink-0" />
        </>
      )}
    </button>
  );
}
