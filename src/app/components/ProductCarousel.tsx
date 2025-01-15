"use client";

import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductCarousel.module.css";

export const dynamic = "force-dynamic";

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };

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
