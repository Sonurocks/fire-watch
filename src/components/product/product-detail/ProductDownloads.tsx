import Image from "next/image";
import { Document } from "../types";

interface ProductDownloadsProps {
  documents: Document[] | undefined;
}

export function ProductDownloads({ documents }: ProductDownloadsProps) {
  if (!documents || documents.length === 0) return null;

  return (
    <section className="w-full bg-white">
      <div className="w-full mx-auto py-[60px] lg:pt-[128px] lg:pb-[80px] px-5 md:px-[40px] lg:px-[56px]">
        <h3 className="text-[26px] font-host font-semibold text-primary uppercase leading-[1.48] tracking-[-0.01em] mb-[40px]">
          DOWNLOAD
        </h3>
        
        <div className="flex flex-wrap justify-center md:justify-start lg:justify-between gap-[24px] lg:gap-0">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] xl:w-[420px] max-w-[420px] min-h-[353px] rounded-[20px] border-[1.4px] border-c-d5d5d5 bg-white flex flex-col px-[25px] shrink-0"
            >
              <div className="mt-[28px] mx-auto w-[79px] h-[105px] relative shrink-0">
                <Image
                  src="/assets/product/pdflogo-v2.webp"
                  alt="PDF Icon"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="mt-[17px] mb-[30px] flex flex-col gap-[16px] max-w-[279px]">
                <h4 className="text-[22px] font-bold text-black font-sans leading-tight line-clamp-2">
                  {doc.title}
                </h4>
                <p className="text-[16px] text-c-555555 font-sans leading-normal line-clamp-2">
                  Download the {doc.title.toLowerCase()}
                </p>
              </div>

              <a
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto mb-[25px] w-full h-[52px] bg-primary text-white flex justify-center items-center font-sans font-semibold text-[16px] rounded-[6px] transition-colors hover:bg-c-8d2b22"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
