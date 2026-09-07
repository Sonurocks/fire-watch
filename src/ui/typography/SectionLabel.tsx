import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export default function SectionLabel({
  children,
  className = "",
  color = "text-primary",
}: SectionLabelProps) {
  return (
    <span
      className={`${color} font-medium text-[14px] md:text-[18px] leading-[1.48] tracking-[-0.01em] uppercase ${className} font-helvetica`}
    >
      {children}
    </span>
  );
}
