"use client";

import React, { useState } from "react";
import { CONTACT_INFO_DATA, GOOGLE_MAPS_EMBED_URL } from "./constants";

export default function ContactSection() {
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <section className="bg-white w-full flex flex-col items-center px-5 md:px-[40px] lg:px-[56px] py-12 md:py-16 lg:py-[80px]">
      <div className="w-full flex flex-col gap-10 md:gap-14 lg:gap-[60px]">
        <div className="w-full flex flex-col lg:flex-row items-start gap-6 lg:gap-12">

          <div className="w-full lg:w-[320px] xl:w-[377px] flex-shrink-0 flex flex-col gap-3 md:gap-5">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] font-medium font-helvetica text-text-dark leading-[1.16] tracking-[-0.01em]">
              {CONTACT_INFO_DATA.title}
            </h2>
            <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-normal font-host text-text-muted leading-[1.58] lg:leading-[1.6] tracking-[-0.01em]">
              {CONTACT_INFO_DATA.description}
            </p>
          </div>

          <div className="w-full flex-1 bg-c-f7f7f7 rounded-[14px] p-5 sm:p-6 flex flex-col sm:flex-row sm:justify-between">
            {CONTACT_INFO_DATA.details.map((item, index) => (
              <div
                key={item.id}
                className={[
                  "flex flex-col flex-1 min-w-0 py-4 sm:py-0 sm:px-6",
                  index === 0 ? "sm:pl-0" : "",
                  index === CONTACT_INFO_DATA.details.length - 1 ? "sm:pr-0" : "",
                  index !== 0 ? "border-t border-gray-200 sm:border-t-0" : "",
                ].join(" ")}
              >
                <div className="flex items-center gap-1.5 mb-2 flex-nowrap">
                  <span className="text-black font-medium font-helvetica select-none flex-shrink-0 text-[14px] md:text-[16px] xl:text-[20px] leading-none">
                    &bull;
                  </span>
                  <h3 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] font-medium font-helvetica text-black leading-[1.4] xl:leading-[40px] tracking-[0.01em]">
                    {item.label}
                  </h3>
                </div>

                <div className="pl-4 flex flex-col gap-0.5">
                  {item.values.map((val, idx) => {
                    if (item.linkPrefix) {
                      return (
                        <a
                          key={idx}
                          href={`${item.linkPrefix}${val.replace(/\s+/g, "")}`}
                          className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[18px] font-normal font-helvetica text-c-252525 hover:text-primary transition-colors leading-[1.6] xl:leading-[34px] tracking-[0.01em] inline-block break-all"
                        >
                          {val}
                        </a>
                      );
                    }
                    return (
                      <span
                        key={idx}
                        className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[18px] font-normal font-helvetica text-c-252525 leading-[1.6] xl:leading-[34px] tracking-[0.01em] block"
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
          className="w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[503px] rounded-[10px] overflow-hidden shadow-sm border border-gray-200 relative bg-gray-100"
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
