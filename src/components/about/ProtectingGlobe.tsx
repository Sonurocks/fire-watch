import Image from "next/image";
import { ABOUT_ASSETS } from "@/assets";
import { GLOBE_DATA } from "./constants";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ProtectingGlobe() {
  return (
    <section className="relative w-full bg-brand-deep-blue hidden md:flex flex-col justify-end min-h-[500px] lg:min-h-[684px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <div className="relative w-full aspect-[1216/684] min-w-[1024px] max-w-[1440px]">
          <Image
            src={ABOUT_ASSETS.GLOBE_BG}
            alt="Globe Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />

          {GLOBE_DATA.locations.map((loc) => (
            <div
              key={loc.id}
              className={`absolute group cursor-pointer ${
                loc.type === "pin" ? "z-30" : "z-10"
              }`}
              style={{ 
                left: loc.left, 
                top: loc.top,
                transform: "translate(-50%, -100%)"
              }}
            >
              {loc.type === "pin" ? (
                <div
                  className={`relative z-10 text-brand-red drop-shadow-md ${
                    loc.id === "usa-head-office"
                      ? "text-3xl md:text-[42px]"
                      : "text-xl md:text-[26px]"
                  }`}
                >
                  <FaMapMarkerAlt />
                  <div className={`absolute top-full mt-2 w-[80px] h-[60px] pointer-events-none ${loc.lineDirection === 'right' ? 'left-[50%]' : 'right-[50%]'}`}>
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 80 60" fill="none">
                      {loc.lineDirection === 'right' ? (
                        <>
                          <path 
                            d="M0 0 L0 50 L80 50" 
                            stroke="white" 
                            strokeWidth="1.5"
                            className="transition-[stroke-dashoffset] duration-[600ms] ease-out group-hover:![stroke-dashoffset:0px]"
                            style={{ strokeDasharray: "140px", strokeDashoffset: "140px" }}
                          />
                          <circle 
                            cx="0" cy="0" r="2.5" fill="white"
                            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          />
                          <circle 
                            cx="80" cy="50" r="2.5" fill="white"
                            className="opacity-0 transition-opacity duration-300 group-hover:delay-[500ms] group-hover:opacity-100"
                          />
                        </>
                      ) : (
                        <>
                          <path 
                            d="M80 0 L80 50 L0 50" 
                            stroke="white" 
                            strokeWidth="1.5"
                            className="transition-[stroke-dashoffset] duration-[600ms] ease-out group-hover:![stroke-dashoffset:0px]"
                            style={{ strokeDasharray: "140px", strokeDashoffset: "140px" }}
                          />
                          <circle 
                            cx="80" cy="0" r="2.5" fill="white"
                            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          />
                          <circle 
                            cx="0" cy="50" r="2.5" fill="white"
                            className="opacity-0 transition-opacity duration-300 group-hover:delay-[500ms] group-hover:opacity-100"
                          />
                        </>
                      )}
                    </svg>

                    <div className={`absolute top-[50px] -translate-y-2 w-max text-left opacity-0 transition duration-300 group-hover:delay-[600ms] group-hover:translate-x-0 group-hover:opacity-100 cursor-default pointer-events-none ${
                      loc.lineDirection === 'right' 
                        ? 'left-[80px] ml-3 translate-x-2' 
                        : 'right-[80px] mr-3 -translate-x-2'
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
                <div className="relative w-[16.48px] h-[18.82px] transition-transform duration-300 group-hover:scale-110">
                  <Image src={ABOUT_ASSETS.MAP_LOGO} alt={loc.label} fill className="object-contain" />
                  
                  <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-tooltip-bg text-brand-deep-blue text-[9px] font-semibold py-1 px-2 rounded shadow-lg pointer-events-none whitespace-nowrap">
                    {loc.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-tooltip-bg" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full px-5 md:px-[40px] lg:px-[56px] pb-12 lg:pb-[62px] pt-[200px] lg:pt-[493px] pointer-events-none">
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
