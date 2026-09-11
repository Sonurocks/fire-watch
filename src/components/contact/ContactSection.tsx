"use client";

import React, { useState } from "react";
import { CONTACT_INFO_DATA, GOOGLE_MAPS_EMBED_URL } from "./constants";

export default function ContactSection() {
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <section className="bg-white w-full flex flex-col items-center px-5 md:px-10 lg:px-14 py-12 md:py-16 ">
      <div className="w-full flex flex-col gap-10  ">
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium font-helvetica text-text-dark leading-[1.16] tracking-[-0.01em] text-center">
            {CONTACT_INFO_DATA.title}
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-normal font-host text-text-muted leading-[1.58] tracking-[-0.01em] text-center max-w-[420px]">
            {CONTACT_INFO_DATA.description}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {CONTACT_INFO_DATA.details.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 rounded-2xl bg-c-f7f7f7 px-5 py-4 sm:py-5 md:min-h-[180px] xl:min-h-[216px]"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(160deg, var(--color-contact-card-from) 0%, var(--color-contact-card-to) 100%)",
                }}
              >
                {item.icon}
              </div>

              <div className="flex flex-col items-center gap-2 w-full">
                <h3 className="font-medium font-helvetica text-black text-[18px] lg:text-[20px] xl:text-[24px] leading-[1.4] xl:leading-[40px] tracking-[0.01em] text-center">
                  {item.label}
                </h3>
                <div className="flex flex-col items-center gap-0.5">
                  {item.values.map((val, idx) => {
                    if (item.linkPrefix) {
                      return (
                        <a
                          key={idx}
                          href={`${item.linkPrefix}${val.replace(/\s+/g, "")}`}
                          className="text-c-252525 font-normal font-helvetica text-[14px] lg:text-[15px] xl:text-[18px] leading-[1.6] xl:leading-[30px] tracking-[0.01em] text-center hover:text-primary transition-colors break-all"
                        >
                          {val}
                        </a>
                      );
                    }
                    return (
                      <span
                        key={idx}
                        className="text-c-252525 font-normal font-helvetica text-[14px] lg:text-[15px] xl:text-[18px] leading-[1.6] xl:leading-[30px] tracking-[0.01em] text-center block"
                      >
                        {val}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
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
