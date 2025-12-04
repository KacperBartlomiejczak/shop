"use client";

import ShowMoreButton from "./showMoreButton";
import ProductCard from "./productCard";
import { Product } from "@/types/product";
import { useState } from "react";

import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [isClicked, setIsClicked] = useState(false);
  products = products.slice(0, -3)
  const clickHandler = () => {
    setIsClicked((state) => !state);
  };
  return (
    <main className="min-h-screen p-8 bg-gray-50/50">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ height: "75vh" }}
          animate={{ height: isClicked ? "auto" : "75vh" }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20">
            {products.map((el: Product) => (
              <ProductCard key={el.id} {...el} />
            ))}
          </div>
        </motion.div>

        <ShowMoreButton onClick={clickHandler} isClicked={isClicked} />
      </div>
    </main>
  );
}
