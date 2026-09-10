import { BsCheckCircleFill } from "react-icons/bs";

interface ProductFeaturesProps {
  features: string[] | undefined;
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <section className="w-full bg-c-f9f9f9">
      <div className="w-full mx-auto py-[60px] lg:py-[80px] px-5 md:px-[40px] lg:px-[56px]">
        <h3 className="text-[22px] md:text-[26px] font-host font-semibold text-primary uppercase leading-[1.48] tracking-[-0.01em] mb-[40px]">
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[30px] lg:gap-x-[40px]">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-row items-start gap-[20px]">
              <BsCheckCircleFill className="text-primary mt-[4px] shrink-0" size={24} />
              <p className="text-[16px] md:text-[18px] font-helvetica font-medium text-[#525252] leading-[1.4] flex-grow">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
