import Image from "next/image";

interface ProductDetailImageProps {
  image: string | null;
  name: string;
}

export function ProductDetailImage({ image, name }: ProductDetailImageProps) {
  return (
    <div className="w-full lg:w-[455px] shrink-0 flex flex-col items-center">
      <div className="w-full h-[400px] lg:h-[536px] relative flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 455px"
            unoptimized
          />
        ) : (
          <div className="text-primary opacity-50 text-6xl font-host">No Image</div>
        )}
      </div>
    </div>
  );
}
