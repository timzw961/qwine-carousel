"use client";

import { Product } from "../types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    name,
    description,
    imageSrc = product.image, // Fallback to "image" if "imageSrc" is missing
    tag,
    wasPrice,
    currentPrice,
  } = product;

  return (
    <div className={styles.card}>
      {tag && <div className={styles.tag}>{tag.toUpperCase()}</div>}
      <img
        src={`/images/${imageSrc}.webp`}
        alt={name}
        className={styles.image}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.priceSection}>
        {wasPrice && (
          <p className={styles.wasPrice}>
            ${wasPrice.cashPrice.amount} or {wasPrice.pointsPrice.amount} PTS
          </p>
        )}
        <p className={styles.currentPrice}>
          ${currentPrice.cashPrice.amount.toFixed(2)} or{" "}
          {currentPrice.pointsPrice.amount} PTS
        </p>
      </div>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
}
