import Sidebar from "@/components/Sidebar/Sidebar";
import { getProducts } from "@/lib/getProducts";

import ProductGrid from "@/components/products/productGrid";

export default async function Home() {
  let data = await getProducts();
  console.log(data.products);
  return (
    <>
      <Sidebar />
      <ProductGrid products={data.products} />
    </>
  );
}
