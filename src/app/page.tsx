import styles from "./page.module.css";
import ProductCard from "./components/ProductCard";
import { Product } from "./types";
import data from "../../public/data.json";

export const dynamic = "force-dynamic";

const Page = async () => {
  const products: Product[] = data.data.search.products as Product[];

  return (
    <div className={styles.page}>
      <main>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </main>
    </div>
  );
};

export default Page;
