import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <span
      className={`text-primary font-medium text-[14px] md:text-[14px] tracking-[-0.1px] uppercase ${className} font-helvetica`}
    >
      {children}
    </span>
  );
}
