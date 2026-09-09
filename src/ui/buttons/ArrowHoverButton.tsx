import React from "react";

interface ArrowHoverButtonProps {
  text?: string;
  className?: string;
}

export default function ArrowHoverButton({ text = "View More", className = "" }: ArrowHoverButtonProps) {
  return (
    <div className={`h-[36px] min-w-[36px] rounded-[70px] bg-primary text-white flex items-center justify-center overflow-hidden transition-all duration-300 ease-out group-hover:min-w-[105px] pt-[6px] pb-[6px] pl-[9px] pr-[9px] ${className}`}>
      <span className="text-[12px] font-semibold whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-300 ease-out flex items-center group-hover:mr-[10px]">
        {text}
      </span>
      <span className="text-sm font-bold flex-shrink-0 flex items-center justify-center">→</span>
    </div>
  );
}
