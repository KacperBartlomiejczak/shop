import ProductCard from "@/components/products/product_card";
import { getProducts } from "@/lib/getProducts";
import { Product } from "@/types/product";

export default async function Home() {
  let data = await getProducts();

  return (
    <main className="min-h-screen p-8">
      
      <div className="container mx-auto h-[75vh] overflow-hidden relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center pb-20">
          {data.products.map((el: Product) => (
            <ProductCard key={el.id} {...el} />
          ))}
        </div>

        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white via-white/80 to-transparent flex items-center justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg">
            Show More
          </button>
        </div>
      </div>
    </main>
  );
}
