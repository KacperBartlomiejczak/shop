import { useAppStore } from "@/store/useAppStore";
import { GalaxyButton } from "../ui/galaxy_button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardDetails {
  id: number;
  category: string;
  title: string;
  price: number;
}

export default function ProductCardDetails({
  id,
  category,
  title,
  price,
}: ProductCardDetails) {
  return (
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
  );
}
