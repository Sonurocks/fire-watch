"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchInput from "@/ui/inputs/SearchInput";
import { searchProducts, SearchResult } from "@/lib/productSearch";
import { PRODUCT_UI_CONSTANTS } from "./constants";

interface ProductSearchProps {
  containerClassName?: string;
  searchInputContainerClassName?: string;
  searchInputClassName?: string;
  dropdownClassName?: string;
  placeholder?: string;
  hideImage?: boolean; 
}

export default function ProductSearch({ 
  containerClassName,
  searchInputContainerClassName,
  searchInputClassName,
  dropdownClassName,
  placeholder,
  hideImage
}: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.trim()) {
      const searchRes = searchProducts(query);
      setResults(searchRes);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  }, [query]);

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        const item = results[selectedIndex];
        router.push(`/products/${item.categorySlug}/${item.subCategorySlug}/${item.productSlug}`);
        setIsOpen(false);
        setQuery("");
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  return (
    <div className={`relative w-full ${containerClassName || ""}`} ref={wrapperRef}>
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (query.trim()) setIsOpen(true);
        }}
        containerClassName={searchInputContainerClassName || "!w-full !max-w-[689px] !h-[60px] !rounded-[14px] !border-search-border !bg-white px-[16px] mx-auto"}
        className={searchInputClassName || "!font-montserrat !font-semibold !text-[16px] !text-search-text !placeholder-[#787878]"}
        placeholder={placeholder || PRODUCT_UI_CONSTANTS.searchPlaceholder}
      />

      {isOpen && (
        <div
          className={
            dropdownClassName ||
            "absolute top-[70px] left-1/2 -translate-x-1/2 w-full max-w-[689px] bg-white rounded-[14px] shadow-xl border border-gray-100 overflow-hidden z-50 flex flex-col py-2 max-h-[360px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400"
          }
        >
          {results.length > 0 ? (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;

              return (
                <Link
                  key={`${item.categorySlug}-${item.subCategorySlug}-${item.productSlug}`}
                  href={`/products/${item.categorySlug}/${item.subCategorySlug}/${item.productSlug}`}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className={`flex items-center gap-3 px-4 py-2 transition-colors border-b border-gray-50 last:border-0 ${
                    isSelected ? "bg-gray-50" : "hover:bg-gray-50"
                  }`}
                >
                  {!hideImage && item.image && (
                    <div className="relative w-[44px] h-[44px] bg-white border border-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.product.name}
                        fill
                        className="object-contain p-1"
                        sizes="44px"
                        quality={100}
                      />
                    </div>
                  )}
                  <div className="flex flex-col min-w-0 justify-center items-start text-left w-full">
                    <div className="text-gray-900 font-montserrat font-medium text-[14px] truncate leading-tight w-full text-left">
                      {item.displayName}
                    </div>
                    {item.partNumber && (
                      <div className="text-gray-500 font-montserrat text-[12px] truncate mt-[2px] w-full text-left">
                        {item.partNumber}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="px-5 py-8 flex flex-col items-center justify-center text-center">
              <span className="text-gray-500 font-montserrat font-medium text-[15px]">No products found</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
