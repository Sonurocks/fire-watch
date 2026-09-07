"use client";

import React, { useState } from "react";
import { CONTACT_INFO_DATA, GOOGLE_MAPS_EMBED_URL } from "./constants";

export default function ContactSection() {
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <section className="bg-white w-full flex flex-col items-center px-5 md:px-[40px] lg:px-[56px] py-12 md:py-16 lg:py-[80px]">
      <div className="w-full flex flex-col gap-10 md:gap-14 lg:gap-[60px]">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12">
          <div className="w-full lg:w-[377px] flex flex-col gap-4 md:gap-[24px]">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium font-helvetica text-[#111111] leading-tight lg:leading-[1.16] tracking-[-0.01em]">
              {CONTACT_INFO_DATA.title}
            </h2>
            <p className="text-base md:text-[18px] font-normal font-host text-[#757575] leading-[1.6] tracking-[-0.01em]">
              {CONTACT_INFO_DATA.description}
            </p>
          </div>

          <div className="w-full lg:w-[350px] flex flex-col space-y-6 md:space-y-8">
            {CONTACT_INFO_DATA.details.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-black text-xl md:text-[24px] font-medium leading-none lg:leading-[40px] tracking-[0.01em] select-none">
                    &bull;
                  </span>
                  <h3 className="text-xl md:text-[24px] font-medium font-helvetica text-black leading-snug lg:leading-[40px] tracking-[0.01em]">
                    {item.label}
                  </h3>
                </div>

                <div className="mt-1 pl-5 sm:pl-6 flex flex-col space-y-0.5">
                  {item.values.map((val, idx) => {
                    if (item.linkPrefix) {
                      return (
                        <a
                          key={idx}
                          href={`${item.linkPrefix}${val.replace(/\s+/g, "")}`}
                          className="text-base md:text-[20px] font-normal font-helvetica text-black hover:text-primary transition-colors leading-relaxed lg:leading-[34px] tracking-[0.01em] inline-block"
                        >
                          {val}
                        </a>
                      );
                    }
                    return (
                      <span
                        key={idx}
                        className="text-base md:text-[20px] font-normal font-helvetica text-black leading-relaxed lg:leading-[34px] tracking-[0.01em] block"
                      >
                        {val}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={() => setIsMapActive(true)}
          onMouseLeave={() => setIsMapActive(false)}
          className="w-full h-[320px] sm:h-[400px] md:h-[460px] lg:h-[503px] rounded-[10px] overflow-hidden shadow-sm border border-gray-200 relative bg-gray-100 group"
        >
          <iframe
            title="Fire Watch Location Map"
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={`w-full h-full block transition-all ${
              isMapActive ? "pointer-events-auto" : "pointer-events-none"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
