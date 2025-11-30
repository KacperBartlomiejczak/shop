import { Product } from "@/types/product";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({
  title,
  price,
  category,
  images,
}: Product) {
  return (
    <div className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full max-w-[260px] mx-auto border border-gray-100">
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
      <div className="flex flex-col p-3 gap-2 grow">
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
        <button className="mt-auto flex items-center justify-center gap-2 w-full h-9 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded text-xs font-bold transition-colors cursor-pointer">
          <ShoppingCart size={14} />
          Add
        </button>
      </div>
    </div>
  );
}
