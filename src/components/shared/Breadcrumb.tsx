import Link from "next/link";
import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex flex-row flex-wrap items-center gap-[4px] ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        const content = item.isActive || isLast || !item.href ? (
          <span className="font-host font-semibold text-[16px] leading-[1.48] tracking-[-0.01em] text-primary">
            {item.label}
          </span>
        ) : (
          <Link
            href={item.href}
            className="font-host font-semibold text-[16px] leading-[1.48] tracking-[-0.01em] text-c-6f6f6f hover:text-text-dark transition-colors"
          >
            {item.label}
          </Link>
        );

        return (
          <React.Fragment key={index}>
            {content}
            {!isLast && (
              <span className="font-host font-semibold text-[16px] leading-[1.48] tracking-[-0.01em] text-c-6f6f6f mx-[2px]">
                /
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
