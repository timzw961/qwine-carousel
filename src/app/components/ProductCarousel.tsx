"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductCarousel.module.css";

export const dynamic = "force-dynamic";

export type SliderSettings = Settings & {
  className?: string;
};

interface ProductCarouselProps {
  products: Product[];
  settings: SliderSettings;
}

export const ProductCarousel = ({
  products,
  settings,
}: ProductCarouselProps) => {
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
