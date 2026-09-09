import Link from "next/link";
import Image from "next/image";
import ArrowHoverButton from "@/ui/buttons/ArrowHoverButton";

export interface GridCardProps {
  idText: string;
  title: string;
  image?: string | null;
  href: string;
  buttonText?: string;
}

export default function GridCard({
  idText,
  title,
  image,
  href,
  buttonText = "View More",
}: GridCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-c-f1f1f1 rounded-[10px] transition-all duration-300 relative overflow-hidden h-[389px] w-full max-w-[328px] mx-auto "
    >
      {/* Top Left Number */}
      <div className="absolute top-[30px] left-[30px] text-[14px] font-medium font-host text-primary">
        {idText}
      </div>

      {/* Exactly Centered Image using responsive translation */}
      <div className="absolute top-[91px] left-1/2 -translate-x-1/2 w-full max-w-[206px] px-4 h-[212px] group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
        {image ? (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 206px"
              unoptimized
            />
          </div>
        ) : (
          <div className="text-brand-red opacity-50 text-6xl">
            ⚙️
          </div>
        )}
      </div>

      {/* Bottom Content Frame exactly from Figma, but responsive width */}
      <div className="absolute top-[327px] left-[13px] right-[13px] h-[64px] flex flex-row items-center justify-between py-[10px]">
        <h3 className="font-medium text-sm lg:text-[15px] font-host text-text-dark line-clamp-2 pr-2">
          {title}
        </h3>
        <ArrowHoverButton text={buttonText} className="flex-shrink-0" />
      </div>
    </Link>
  );
}
