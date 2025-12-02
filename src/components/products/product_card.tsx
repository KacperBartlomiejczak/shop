import { Product } from "@/types/product";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { GalaxyButton } from "../ui/galaxy_button";

export default function ProductCard({
  id,
  title,
  price,
  category,
  images,
}: Product) {
  return (
    <div className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full max-w-[260px] mx-auto border border-gray-100">
      <Link href={`/product/${id}`}>
        <div className="relative w-full aspect-square bg-white p-2">
          {images && images.length > 0 ? (
            <Image
              src={images[0]}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : null}
        </div>
      </Link>
      <div className="flex flex-col p-3 gap-2 grow">
        <Link href={`/product/${id}`}>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider text-center">
            {category}
          </p>
          <h3
            className="font-semibold text-gray-800 text-sm text-center line-clamp-1"
            title={title}
          >
            {title}
          </h3>
          <p className="text-base font-bold text-center text-gray-900">
            ${price}
          </p>
        </Link>
        <GalaxyButton icon={ShoppingCart} className="px-4 p-2 w-auto">
          Add to card
        </GalaxyButton>
      </div>
    </div>
  );
}
