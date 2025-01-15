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

  const onlyFourProducts = products.slice(0, 4);
  const onlyTwoProducts = products.slice(0, 2);

  const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className={styles.page}>
      <ProductCarousel products={onlyFourProducts} settings={settings1} />
      <ProductCarousel products={onlyTwoProducts} settings={settings1} />
      <ProductCarousel products={products} settings={settings1} />
      <ProductCarousel products={products} settings={settings2} />
    </main>
  );
};

export default Page;
