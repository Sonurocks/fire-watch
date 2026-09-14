"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ABOUT_ASSETS } from "@/assets";
import { GLOBE_DATA } from "./constants";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ProtectingGlobe() {
  const [activePin, setActivePin] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 768) {
      scrollRef.current.scrollLeft = 460;
    }
  }, []);

  return (
    <section className="relative w-full bg-brand-deep-blue flex flex-col justify-end min-h-[576px] lg:min-h-[800px] overflow-hidden">
      
      <div 
        ref={scrollRef}
        className="absolute inset-0 w-full h-full z-0 overflow-x-auto md:overflow-visible md:flex md:items-center md:justify-center [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <div className="relative h-full w-[1024px] sm:w-[1200px] md:w-full md:h-auto aspect-[1206/684] md:max-w-[1440px] flex-shrink-0">
          <Image
            src={ABOUT_ASSETS.MAP_BG_LG}
            alt="Globe Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />

          {GLOBE_DATA.locations.map((loc) => (
            <div
              key={loc.id}
              className={`absolute ${
                activePin === loc.id ? "z-50" : loc.type === "pin" ? "z-30" : "z-10"
              } hover:z-50 has-[:hover]:z-50 transform -translate-x-1/2 -translate-y-full origin-bottom`}
              style={{ left: loc.left, top: loc.top }}
            >
              {loc.type === "pin" ? (
                <div 
                  className="relative group cursor-pointer w-max scale-[0.65] md:scale-100 origin-bottom"
                  onClick={() => setActivePin(activePin === loc.id ? null : loc.id)}
                >
                  <div
                    className={`relative z-10 text-brand-red drop-shadow-md w-max ${
                      loc.id === "usa-head-office"
                        ? "text-3xl md:text-[42px]"
                        : "text-xl md:text-[26px]"
                    }`}
                  >
                    <FaMapMarkerAlt />
                  </div>
                  <div className={`absolute top-full mt-2 w-[55px] h-[40px] pointer-events-none ${loc.lineDirection === 'right' ? 'left-[50%]' : 'right-[50%]'}`}>
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 80 60" fill="none">
                      {loc.lineDirection === 'right' ? (
                        <>
                          <path 
                            d="M0 0 L0 50 L80 50" 
                            stroke="white" 
                            strokeWidth="1.5"
                            className={`transition-[stroke-dashoffset] duration-[600ms] ease-out group-hover:![stroke-dashoffset:0px] ${activePin === loc.id ? "![stroke-dashoffset:0px]" : ""}`}
                            style={{ strokeDasharray: "140px", strokeDashoffset: "140px" }}
                          />
                          <circle 
                            cx="0" cy="0" r="2.5" fill="white"
                            className={`opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activePin === loc.id ? "!opacity-100" : ""}`}
                          />
                          <circle 
                            cx="80" cy="50" r="2.5" fill="white"
                            className={`opacity-0 transition-opacity duration-300 group-hover:delay-[500ms] group-hover:opacity-100 ${activePin === loc.id ? "!opacity-100 !delay-0" : ""}`}
                          />
                        </>
                      ) : (
                        <>
                          <path 
                            d="M80 0 L80 50 L0 50" 
                            stroke="white" 
                            strokeWidth="1.5"
                            className={`transition-[stroke-dashoffset] duration-[600ms] ease-out group-hover:![stroke-dashoffset:0px] ${activePin === loc.id ? "![stroke-dashoffset:0px]" : ""}`}
                            style={{ strokeDasharray: "140px", strokeDashoffset: "140px" }}
                          />
                          <circle 
                            cx="80" cy="0" r="2.5" fill="white"
                            className={`opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activePin === loc.id ? "!opacity-100" : ""}`}
                          />
                          <circle 
                            cx="0" cy="50" r="2.5" fill="white"
                            className={`opacity-0 transition-opacity duration-300 group-hover:delay-[500ms] group-hover:opacity-100 ${activePin === loc.id ? "!opacity-100 !delay-0" : ""}`}
                          />
                        </>
                      )}
                    </svg>

                    <div className={`absolute w-max text-left opacity-0 transition duration-300 group-hover:delay-[600ms] group-hover:translate-x-0 group-hover:opacity-100 ${activePin === loc.id ? "!translate-x-0 !opacity-100 !delay-0" : ""} cursor-default pointer-events-none ${
                      loc.lineDirection === 'right' 
                        ? 'left-[60px] ml-3 translate-x-2' 
                        : loc.id === 'usa-head-office'
                          ? 'right-[60px] mr-3 -translate-x-2 md:left-[-15px] md:right-auto md:mr-0 md:translate-x-0 xl:right-[60px] xl:left-auto xl:mr-3 xl:-translate-x-2'
                          : 'right-[60px] mr-3 -translate-x-2'
                    }`}>
                      {loc.title && (
                        <p className="text-brand-red font-semibold text-[14px] mb-1 drop-shadow-sm">
                          {loc.title}
                        </p>
                      )}
                      <p className="text-white text-[10px] whitespace-pre-line leading-[1.6] drop-shadow-sm">
                        {loc.label}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div 
                  className="relative group cursor-pointer w-[16.48px] h-[18.82px] scale-[0.65] md:scale-100 origin-center"
                  onClick={() => setActivePin(activePin === loc.id ? null : loc.id)}
                >
                  <Image src={ABOUT_ASSETS.MAP_LOGO_SVG} alt={loc.label} fill className="object-contain pointer-events-none" />
                  
                  <div className={`absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 ${activePin === loc.id ? "!opacity-100" : ""} transition-opacity duration-300 bg-tooltip-bg text-black text-[9px] font-semibold py-1 px-2 rounded shadow-lg pointer-events-none whitespace-nowrap z-50`}>
                    {loc.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-tooltip-bg" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full px-5 md:px-[40px] lg:px-[56px] pb-12 pt-[250px] lg:pb-[62px] lg:pt-[493px] pointer-events-none">
        <div className="flex flex-col gap-[16px] max-w-[562px] pointer-events-auto">
          <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-medium font-helvetica text-white leading-[1.16] tracking-[-0.01em] md:whitespace-nowrap">
            {GLOBE_DATA.title}
          </h2>
          <p className="text-base md:text-[18px] font-normal font-helvetica text-text-gray-light leading-[1.6] tracking-[-0.01em]">
            {GLOBE_DATA.description}
          </p>
        </div>
      </div>
    </section>
  );
}
