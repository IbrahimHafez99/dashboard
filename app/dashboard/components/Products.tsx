"use client";
import React from "react";
import { useGlobalContext } from "@/app/context/store";
import { categories } from "@/app/utils/data";
import styles from "../dashboard.module.css";
import type { Product } from "@/app/utils/data";
import ProductCard from "./ProductCard";
const Products = () => {
  const { subCategory, category } = useGlobalContext();
  const [filteredCategory] = categories.filter(
    (cat) => cat.category === category
  );
  let products: Product[];
  if ("All" === subCategory)
    products = filteredCategory.subcategories
      .map((sub) => [...sub.products])
      .flatMap((arr) => arr);
  else
    [products] = filteredCategory.subcategories
      .filter((sub) => sub.subcategory === subCategory)
      .map((subcat) => subcat.products);
  return (
    <div className={styles["products-gallery"]}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
