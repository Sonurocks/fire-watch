import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_ASSETS,
  CONTACT_INFO,
  EXPLORE_LINKS,
  SOCIAL_LINKS,
} from "./constants";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col font-['Helvetica_Neue']">
      <div className="bg-primary w-full flex justify-center px-5 md:px-[40px] lg:px-[56px] py-16 lg:py-[80px] lg:h-[670px]">
        <div className="w-full ">
          <div className="mb-12">
            <Image
              src={FOOTER_ASSETS.LOGO}
              alt="Fire Watch"
              width={215}
              height={62}
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-14 gap-y-12 lg:gap-0">
            <div className="flex flex-col lg:col-span-3 lg:border-r lg:border-white/20 lg:pr-5">
              <h4 className="text-white text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-8">
                CONTACT US
              </h4>
              <ul className="flex flex-col gap-6">
                {CONTACT_INFO.map((info) => (
                  <li key={info.id} className="flex items-start gap-4">
                    <info.icon className="text-white text-xl flex-shrink-0 mt-1" />
                    <span className="text-text-light/80 text-[16px] font-normal leading-[1.48] whitespace-pre-line">
                      {info.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col lg:col-span-5 lg:border-r lg:border-white/20 lg:px-10">
              <h4 className="text-white text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-8">
                OUR CERTIFICATIONS
              </h4>
              <div className="flex items-center gap-[18px] mb-12">
                <Image
                  src={FOOTER_ASSETS.CERT_LISTED}
                  alt="UL Listed"
                  width={84}
                  height={72}
                  className="object-contain"
                />
                <Image
                  src={FOOTER_ASSETS.CERT_APPROVED}
                  alt="FM Approved"
                  width={84}
                  height={72}
                  className="object-contain"
                />
                <Image
                  src={FOOTER_ASSETS.CERT_NFPA}
                  alt="NFPA"
                  width={84}
                  height={72}
                  className="object-contain"
                />
              </div>

              <h4 className="text-white text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-4">
                RELIABLE FIRE PROTECTION
              </h4>
              <p className="text-text-light/80 text-[16px] font-normal leading-[1.48]">
                Fire watch is a Progressive and Reliable company that offers
                superior fire detection and suppression systems with excellent
                local support.
              </p>
            </div>

            <div className="flex flex-col lg:col-span-3 lg:border-r lg:border-white/20 lg:px-10">
              <h4 className="text-white text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-6">
                EXPLORE FIRE <br /> WATCH
              </h4>
              <ul className="flex flex-col gap-2">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 text-[16px] font-medium leading-none tracking-[-0.01em] hover:text-white/100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col lg:col-span-3 lg:pl-10">
              <h4 className="text-white text-[20px] font-medium leading-[1.48] tracking-[-0.01em] uppercase mb-8">
                FOLLOW US
              </h4>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cta-bg w-full h-[70px] flex justify-center px-5 md:px-[40px] lg:px-[56px] items-center">
        <div className="w-full max-w-[1440px] flex flex-col sm:flex-row items-center justify-start gap-4">
          <p className="text-text-light text-[16px] font-normal leading-[44px] tracking-[0.02em] text-center sm:text-left">
            © 2026 FIRE WATCH All Rights Reserved.
            <span className="hidden sm:inline mx-4">•</span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline mx-4">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
