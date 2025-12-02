import { getSingleProduct } from "@/lib/getProducts";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link"; // Import Link
import { ShoppingCart, Star, ArrowLeft } from "lucide-react"; // Import ArrowLeft
import { GalaxyButton } from "@/components/ui/galaxy_button";

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
        {/* Przycisk Powrotu */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
        >
          <div className="p-2 bg-gray-50 rounded-full group-hover:bg-purple-100 transition-colors">
            <ArrowLeft
              size={16}
              className="group-hover:text-purple-700 transition-colors"
            />
          </div>
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 p-8">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((el, index) => (
                  <button
                    key={index}
                    className="relative w-20 h-20 shrink-0 border-2 border-transparent hover:border-purple-500 rounded-lg overflow-hidden transition-all bg-gray-50"
                  >
                    <Image
                      src={el}
                      alt={`Thumbnail ${index}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

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
