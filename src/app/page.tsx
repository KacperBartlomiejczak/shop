import ProductCard from "@/components/products/product_card";
import { getProducts } from "@/lib/getProducts";
import { Product } from "@/types/product";

export default async function Home() {
  let data = await getProducts();

  return (
    <main className="min-h-screen p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {data.products.map((el: Product) => (
        <ProductCard key={el.id} {...el} />
      ))}
    </main>
  );
}
