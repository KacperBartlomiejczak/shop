"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface currentImageProps {
  product: Product;
}

export default function ProductDetailsImages({ product }: currentImageProps) {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  const currentImageHandler = (index: number) => {
    setCurrentImage(product.images[index]);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-square w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={currentImage}
              alt={product.title}
              fill
              className="object-contain hover:scale-105 transition-transform duration-500"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {product.images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {product.images.map((el, index) => (
            <button
              key={index}
              className={cn(
                "relative w-20 h-20 shrink-0 border-2 border-transparent hover:border-purple-500 rounded-lg overflow-hidden transition-all bg-gray-50",
                currentImage === el
                  ? "border-purple-500"
                  : "border-transparent hover:border-purple-300"
              )}
              onClick={() => currentImageHandler(index)}
            >
              <Image
                src={el}
                alt={`Photo of ${product.title} nr ${index}`}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
