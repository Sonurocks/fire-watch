import Image from "next/image";
import React from "react";
import Button from "@/ui/buttons/Button";

interface BannerProps {
  title: React.ReactNode;
  description: string;
  bgImage: string;
  buttonText?: string;
  buttonLink?: string;
  heightClass?: string;
}

export default function Banner({
  title,
  description,
  bgImage,
  buttonText,
  buttonLink,
  heightClass = "min-h-[600px] lg:min-h-0 lg:h-[840px]",
}: BannerProps) {
  return (
    <section className={`relative w-full ${heightClass} flex items-center bg-hero-bg overflow-hidden`}>
      <div className="absolute inset-0 z-0 flex justify-center">
        <div className="w-full h-full relative">
          <Image
            src={bgImage}
            alt="Page Background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/10 z-10 lg:hidden"></div>
        </div>
      </div>

      <div className="relative z-20 w-full flex justify-center px-4 md:px-[30px] pt-24 lg:pt-[120px]">
        <div className="w-full px-5 md:px-[55px]">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.01em] leading-[1.12]">
            {title}
          </h1>
          <p className="mt-6 lg:mt-8 text-base md:text-lg lg:text-[22px] text-white max-w-[580px] font-medium leading-[1.4]">
            {description}
          </p>
        
          {buttonText && buttonLink && (
            <div className="mt-8 lg:mt-12">
              <Button href={buttonLink}>
                {buttonText}
              </Button>
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
