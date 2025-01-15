import styles from "./page.module.css";
import ProductCarousel from "./components/ProductCarousel";
import { Product } from "./types";

export const dynamic = "force-dynamic";

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:3000/data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.data.search.products as Product[];
};

const Page = async () => {
  let products: Product[] = [];

  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <main className={styles.page}>
      <ProductCarousel products={products} />
    </main>
  );
};

export default Page;
