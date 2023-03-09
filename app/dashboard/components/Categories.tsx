"use client";
import React, { useState } from "react";
import { categories } from "@/app/utils/data";
import styles from "../dashboard.module.css";
import { useGlobalContext } from "@/app/context/store";

const Categories = () => {
  const { category, setCategory, setSubCategory } = useGlobalContext();
  const handleActiveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.value);
    setSubCategory("All")
  };
  return (
    <div className={styles.categories}>
      {categories.map((cat, index) => (
        <button
          className={`${styles["category-button"]} ${
            category === cat.category ? `${styles["category-active"]}` : null
          }`}
          key={index}
          onClick={handleActiveClick}
          value={cat.category}
        >
          {cat.category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
