import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO, EXPLORE_LINKS, SOCIAL_LINKS } from "./constants";
import { FOOTER_ASSETS } from "@/assets";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col font-helvetica">
      <div className="bg-primary w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-12 md:py-16 lg:py-[80px]">
        <div className="w-full">
          <div className="mb-8 md:mb-12">
            <Image
              src={FOOTER_ASSETS.LOGO}
              alt="Fire Watch"
              width={215}
              height={62}
              className="object-contain w-[160px] md:w-[215px] h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-14 gap-y-8 md:gap-y-12 lg:gap-0">
            <div className="flex flex-col lg:col-span-3 lg:border-r lg:border-white/20 lg:pr-3 xl:pr-5">
              <h4 className="text-white text-[18px] md:text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-4 md:mb-8">
                CONTACT US
              </h4>
              <ul className="flex flex-col gap-4 md:gap-[38px] lg:gap-6 xl:gap-[38px] h-full">
                {CONTACT_INFO.map((info) => (
                  <li key={info.id} className="flex items-start gap-3 md:gap-4">
                    <info.icon className="text-white text-lg md:text-xl flex-shrink-0 mt-1" />
                    <span className="text-text-light/80 text-[15px] md:text-[16px] font-normal leading-[1.48] whitespace-pre-line">
                      {info.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col lg:col-span-5 lg:border-r lg:border-white/20 lg:px-4 xl:px-10 h-full flex-grow">
              <h4 className="text-white text-[18px] md:text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-4 md:mb-8">
                OUR CERTIFICATIONS
              </h4>
              <div className="flex flex-wrap items-center gap-3 sm:gap-[18px] lg:gap-3 xl:gap-[18px] mb-8 lg:mb-12">
                <Image
                  src={FOOTER_ASSETS.CERT_LISTED}
                  alt="UL Listed"
                  width={84}
                  height={72}
                  className="object-contain w-[70px] sm:w-[84px] lg:w-[70px] xl:w-[84px] h-auto"
                />
                <Image
                  src={FOOTER_ASSETS.CERT_APPROVED}
                  alt="FM Approved"
                  width={84}
                  height={72}
                  className="object-contain w-[70px] sm:w-[84px] lg:w-[70px] xl:w-[84px] h-auto"
                />
                <Image
                  src={FOOTER_ASSETS.CERT_NFPA}
                  alt="NFPA"
                  width={84}
                  height={72}
                  className="object-contain w-[70px] sm:w-[84px] lg:w-[70px] xl:w-[84px] h-auto"
                />
              </div>

              <div className="mt-auto">
                <h4 className="text-white text-[18px] md:text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-3 md:mb-4">
                  RELIABLE FIRE PROTECTION
                </h4>
                <p className="text-text-light/80 text-[15px] md:text-[16px] font-normal leading-[1.48]">
                  Fire watch is a Progressive and Reliable company that offers
                  superior fire detection and suppression systems with excellent
                  local support.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:col-span-3 lg:border-r lg:border-white/20 lg:px-4 xl:px-10">
              <h4 className="text-white text-[18px] md:text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-4 md:mb-6">
                EXPLORE FIRE <br className="hidden sm:block" /> WATCH
              </h4>
              <ul className="flex flex-col gap-2.5 md:gap-2">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 text-[15px] md:text-[16px] font-medium leading-none tracking-[-0.01em] hover:text-white/100 transition-colors py-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col lg:col-span-3 lg:pl-4 xl:pl-10">
              <h4 className="text-white text-[18px] md:text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-4 md:mb-8">
                FOLLOW US
              </h4>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                  >
                    <social.icon className="text-lg sm:text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cta-bg w-full min-h-[70px] py-4 flex justify-center px-5 md:px-[40px] lg:px-[56px] items-center">
        <div className="w-full max-w-[1440px] flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2">
          <div className="text-text-light text-sm sm:text-[16px] font-normal leading-relaxed sm:leading-[44px] tracking-[0.02em] flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-center sm:text-left">
            <span>© 2026 FIRE WATCH All Rights Reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">&bull;</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
