"use client";

import React from "react";
import styles from "./AddToCartButton.module.css";

export const AddToCartButton = () => {
  const addToCart = async () => {
    // add to cart functionality
  };

  return (
    <button className={styles.button} onClick={addToCart}>
      <span className={styles.addToCart}>
        ADD <img src="/cart.svg" alt="Cart Icon" className={styles.cartIcon} />
      </span>
    </button>
  );
};

export default AddToCartButton;
