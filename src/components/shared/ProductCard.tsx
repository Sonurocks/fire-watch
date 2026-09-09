import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProductCard({
  id,
  title,
  description,
  image,
  link,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col h-full min-h-[564px] rounded-[12px] p-6 lg:p-[40px] transition-all duration-300 bg-transparent hover:bg-brand-dark hover:shadow-lg">
      <div className="text-[18px] font-normal font-host leading-[1.48] tracking-[-0.01em] mb-6 text-text-accent-red group-hover:text-white transition-colors duration-300">
        {id}
      </div>

      <div className="relative w-full h-[200px] md:h-[240px] xl:h-[279px] mb-8 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-[16px] lg:text-[20px] font-medium font-host mb-4 text-text-dark group-hover:text-white leading-[1.44] lg:leading-[1.48] tracking-[-0.01em] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[16px] lg:text-[18px] font-host font-normal leading-[1.58] lg:leading-[1.6] tracking-[-0.01em] mb-8 text-text-muted group-hover:text-text-gray-hover transition-colors duration-300">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center gap-2 font-semibold font-host text-[18px] leading-[1.48] tracking-[-0.01em] transition-colors duration-300 text-primary hover:text-primary-hover group-hover:text-white group-hover:hover:text-gray-200 mt-auto cursor-pointer"
        >
          Explore Products <BsArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
}
