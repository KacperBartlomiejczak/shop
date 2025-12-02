import { getSingleProduct } from "@/lib/getProducts";
import { Product } from "@/types/product";


import { ShoppingCart, Star } from "lucide-react"; 
import { GalaxyButton } from "@/components/ui/galaxy_button";
import ReturnToMain from "@/components/product_detail/returnToMain";

import ProductDetailsImages from "@/components/product_detail/productDetailsImages";

interface ProductProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: ProductProps) {
  const { id } = await params;
  const product: Product = await getSingleProduct(id);

  return (
    <div className="min-h-screen w-full bg-white py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <ReturnToMain />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ProductDetailsImages product={product} />

          <div className="flex flex-col">
            <nav className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-medium">
              Sklep / {product.category} / {product.title}
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">(4.9 / 5.0)</span>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-8">
              ${product.price}
            </div>

            <div className="prose prose-sm text-gray-600 leading-relaxed mb-10">
              <p>{product.description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="mt-auto">
              <GalaxyButton
                className="w-full sm:w-auto px-12 py-4 h-14 text-lg"
                icon={ShoppingCart}
              >
                Add to Cart
              </GalaxyButton>

              <p className="text-xs text-center sm:text-left text-gray-400 mt-4">
                Darmowa dostawa od $50 • 30 dni na zwrot
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
