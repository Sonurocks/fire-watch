import React from "react";

export interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: "modal" | "light";
}

export default function TextareaField({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  rows = 4,
  className = "",
  variant = "modal",
  style,
  ...props
}: TextareaFieldProps) {
  const isModal = variant === "modal";

  const labelClasses = isModal
    ? "text-text-gray-light font-helvetica text-[14px] font-medium leading-[1.4] tracking-[0.01em] uppercase text-left w-full block"
    : "text-c-565656 font-helvetica text-[12px] sm:text-[14px] font-medium leading-[1.4] tracking-[0.01em] uppercase text-left w-full block";

  const textareaBaseClasses = isModal
    ? "w-full bg-modal-input-bg border border-modal-input-border text-white font-helvetica font-normal text-[14px] sm:text-[16px] leading-[1.5] rounded-[6px] px-[16px] py-[14px] focus:border-[#3B82F6] focus:outline-none transition-all placeholder-text-gray-light/60 resize-none text-left"
    : "w-full bg-nav-bg text-text-dark font-helvetica font-normal text-[14px] sm:text-[16px] leading-[1.5] rounded-[8px] px-3 sm:px-4 py-2.5 sm:py-3 border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder-c-989898 resize-none text-left";

  const errorBorderClass = error ? "border-red-500 focus:border-red-500" : "";

  return (
    <div className={`flex flex-col gap-2 w-full text-left ${className}`}>
      {label && (
        <label htmlFor={name} className={labelClasses}>
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`${textareaBaseClasses} ${errorBorderClass}`}
        style={style}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-400 font-helvetica mt-0.5 text-left">
          {error}
        </span>
      )}
    </div>
  );
}
