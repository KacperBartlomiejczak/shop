import { Product } from "@/types/product";
import Image from "next/image";

import Link from "next/link";
import ProductCardDetails from "./productCardDetails";

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
      <ProductCardDetails
        id={id}
        title={title}
        price={price}
        category={category}
      />
    </div>
  );
}
