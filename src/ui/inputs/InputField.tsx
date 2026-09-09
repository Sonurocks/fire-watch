import React from "react";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: "modal" | "light";
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  className = "",
  variant = "modal",
  style,
  ...props
}: InputFieldProps) {
  const isModal = variant === "modal";

  const labelClasses = isModal
    ? "text-text-gray-light font-helvetica text-[14px] font-medium leading-[1.4] tracking-[0.01em] uppercase text-left w-full block"
    : "text-c-565656 font-helvetica text-[12px] sm:text-[14px] font-medium leading-[1.4] tracking-[0.01em] uppercase text-left w-full block";

  const inputBaseClasses = isModal
    ? "w-full h-[52px] bg-modal-input-bg border border-modal-input-border text-white font-helvetica font-normal text-[14px] sm:text-[16px] leading-[1.5] rounded-[6px] px-[16px] py-[14px] focus:border-[#3B82F6] focus:outline-none transition-all placeholder-text-gray-light/60 text-left"
    : "w-full bg-nav-bg text-text-dark font-helvetica font-normal text-[14px] sm:text-[16px] leading-[1.5] rounded-[8px] px-3 sm:px-4 py-2.5 sm:py-3 border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder-c-989898 text-left";

  const errorBorderClass = error ? "border-red-500 focus:border-red-500" : "";

  return (
    <div className={`flex flex-col gap-2 w-full text-left ${className}`}>
      {label && (
        <label htmlFor={name} className={labelClasses}>
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`${inputBaseClasses} ${errorBorderClass}`}
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
