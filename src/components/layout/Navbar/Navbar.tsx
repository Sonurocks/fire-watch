"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./constants";
import { NAVBAR_ASSETS } from "@/assets";
import SearchInput from "@/ui/inputs/SearchInput";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-[19px] left-0 right-0 z-40 flex justify-center w-full px-5 md:px-[40px] lg:px-[56px]">
        <div className="relative bg-nav-bg rounded-[100px] w-full h-[56px] md:h-[60px] lg:h-[72px] px-5 md:px-[28px] py-[8px] flex items-center justify-between shadow-sm">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={NAVBAR_ASSETS.LOGO}
              alt="Fire Watch Logo"
              width={194}
              height={56}
              className="w-[150px] md:w-[194px] h-auto"
              priority
              unoptimized
            />
          </Link>

          <div className="hidden lg:flex items-center justify-center flex-1 gap-5 xl:gap-9 px-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/'));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={
                    isActive
                      ? "text-primary font-bold text-[16px] leading-none tracking-[-0.01em] underline decoration-2 underline-offset-4 whitespace-nowrap"
                      : "text-nav-text hover:text-primary transition-colors font-bold text-[16px] leading-none tracking-[-0.01em] hover:underline hover:decoration-2 hover:underline-offset-4 whitespace-nowrap"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center flex-shrink-0 pr-2">
            <SearchInput />
          </div>

          <div className="lg:hidden flex items-center pr-2">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-800 hover:text-primary focus:outline-none transition-colors"
              aria-label="Open menu"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-50 shadow-2xl p-6 lg:hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src={NAVBAR_ASSETS.LOGO}
                    alt="Fire Watch Logo"
                    width={150}
                    height={43}
                    className="w-[130px] h-auto"
                    priority
                    unoptimized
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-primary focus:outline-none p-2 bg-gray-100 rounded-full transition-colors flex-shrink-0"
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/'));
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={
                        isActive
                          ? "block text-primary font-bold text-xl leading-none tracking-[-0.01em]"
                          : "block text-nav-text hover:text-primary transition-colors font-bold text-xl leading-none tracking-[-0.01em]"
                      }
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
