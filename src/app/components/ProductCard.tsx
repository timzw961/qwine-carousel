import React from "react";
import { Product } from "../types";
import styles from "./ProductCard.module.css";
import AddToCartButton from "./ui/button/AddToCartButton";

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

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

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
        <div className={styles.priceWrapper}>
          {wasPrice ? (
            <>
              <p className={styles.wasPrice}>
                {formatPrice(wasPrice.cashPrice.amount)}
              </p>
              <p className={styles.salePrice}>
                {formatPrice(currentPrice.cashPrice.amount)}
              </p>
            </>
          ) : (
            <p className={styles.currentPrice}>
              {formatPrice(currentPrice.cashPrice.amount)}
            </p>
          )}
        </div>

        <div className={styles.pointsPriceAndButtonSection}>
          <div className={styles.pointsWrapper}>
            {" "}
            <p>
              Or{" "}
              <span
                className={wasPrice ? styles.salePrice : styles.currentPoints}
              >
                {currentPrice.pointsPrice.amount} PTS{" "}
              </span>
            </p>
            {wasPrice && (
              <p className={styles.wasPrice}>
                {wasPrice.pointsPrice.amount} PTS
              </p>
            )}
          </div>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
