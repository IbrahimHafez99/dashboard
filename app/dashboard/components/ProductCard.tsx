"use client";
import React, { useEffect } from "react";
import styles from "../dashboard.module.css";
import Image from "next/image";
import { Product } from "../../utils/data";
import { useGlobalContext } from "@/app/context/store";
type ProductCard = {
  product: Product;
  key: number;
};
const ProductCard = ({ key, product }: ProductCard) => {
  const { items, setItems, setAmount } = useGlobalContext();
  useEffect(() => {
    console.log(items);
  }, [items]);
  const handleProductClick = () => {
    if (product.availability) {
      setItems((prev) => [
        ...prev,
        {
          id:
            prev[prev.length - 1] === undefined
              ? 0
              : prev[prev.length - 1].id + 1,
          productName: product.title,
          quantity: 0,
          selected: false,
          amount: product.price,
        },
      ]);
      setAmount((prev) => prev + product.price);
    }
  };
  return (
    <div
      className={styles["card-wrapper"]}
      key={key}
      onClick={handleProductClick}
    >
      <div className={styles["card-img"]}>
        <Image
          className={styles["product-image"]}
          src={product.imageUrl}
          alt={product.title}
          height={320}
          width={320}
        />
      </div>
      <h5>{product.title}</h5>
      <span>
        {product.price} {product.currency}
      </span>
      {product.availability ? (
        <img style={{ width: "15px" }} src={product.icon} alt="icon" />
      ) : (
        <span style={{ color: "red", fontSize: "smaller" }}>Not Available</span>
      )}
    </div>
  );
};

export default ProductCard;
