import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold tracking-[-0.01em] transition-colors";
  const sizeClasses =
    "px-[20px] py-[12px] rounded-[4px] text-[16px] leading-[24px]";

  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-primary text-white hover:bg-primary-hover";
  } else if (variant === "secondary") {
    variantClasses = "bg-gray-800 text-white hover:bg-gray-900";
  } else if (variant === "outline") {
    variantClasses =
      "border-2 border-primary text-primary hover:bg-primary hover:text-white";
  }

  const allClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={allClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
}
