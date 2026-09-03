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
      className={`text-primary font-bold text-sm tracking-wider uppercase ${className}`}
    >
      {children}
    </span>
  );
}
