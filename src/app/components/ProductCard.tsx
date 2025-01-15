"use client";

import React from "react";
import { Product } from "../types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const {
    name,
    description,
    imageSrc = product.image, // Fallback to "image" if "imageSrc" is missing
    tag,
    wasPrice,
    currentPrice,
  } = product;

  const addToCart = async () => {
    // add to cart functionality
  };

  return (
    <div className={styles.card}>
      {tag && <div className={styles.tag}>{tag.toUpperCase()}</div>}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <img
        src={`/images/${imageSrc}.webp`}
        alt={name}
        className={styles.image}
      />

      <div className={styles.priceSection}>
        {wasPrice ? (
          <>
            <div className={styles.priceWrapper}>
              <p className={styles.wasPrice}>
                ${wasPrice.cashPrice.amount.toFixed(2)}
              </p>
              <p className={styles.salePrice}>
                ${currentPrice.cashPrice.amount.toFixed(2)}
              </p>
            </div>
            <div className={styles.pointsPriceAndButtonSection}>
              <div className={styles.pointsWrapper}>
                <p>
                  Or{" "}
                  <span className={styles.salePrice}>
                    {" "}
                    {currentPrice.pointsPrice.amount} PTS{" "}
                  </span>
                </p>
                <p className={styles.wasPrice}>
                  {wasPrice.pointsPrice.amount} PTS
                </p>
              </div>
              <button className={styles.button}>
                <span className={styles.addToCart}>
                  ADD{" "}
                  <img
                    src="/cart.svg"
                    alt="Cart Icon"
                    className={styles.cartIcon}
                  />
                </span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.priceWrapper}>
              <p className={styles.currentPrice}>
                ${currentPrice.cashPrice.amount.toFixed(2)}
              </p>
            </div>
            <div className={styles.pointsPriceAndButtonSection}>
              <p>
                Or{" "}
                <span className={styles.currentPoints}>
                  {currentPrice.pointsPrice.amount} PTS{" "}
                </span>
              </p>
              <button className={styles.button} onClick={addToCart}>
                <span className={styles.addToCart}>
                  ADD{" "}
                  <img
                    src="/cart.svg"
                    alt="Cart Icon"
                    className={styles.cartIcon}
                  />
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
