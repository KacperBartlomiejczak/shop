import { getProducts } from "@/lib/getProducts";
import { Product } from "@/types/product";

export default async function Home() {
  let data = await getProducts();

  

  return (
    <main>
      {data.products.map((el: Product) => {
        return (
          <div>
            <img src={el.images[0]} alt={el.title} />
            <p>{el.title}</p>
          </div>
        );
      })}
    </main>
  );
}
