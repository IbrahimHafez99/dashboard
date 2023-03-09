"use client";
import React from "react";
import { useGlobalContext } from "@/app/context/store";
import styles from "../dashboard.module.css";
import { categories } from "@/app/utils/data";
const SubCategories = () => {
  const { category, subCategory, setSubCategory } = useGlobalContext();
  const [sub] = categories.filter((cat) => cat.category === category);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSubCategory(event.currentTarget.value);
  };
  return (
    <ul className={styles["subcategories-list"]}>
      <li>
        <button
          className={`${
            "All" === subCategory ? styles["active-subcat"] : null
          }`}
          value="All"
          onClick={handleClick}
        >
          All
        </button>
      </li>
      {sub.subcategories.map((cat, index) => (
        <li key={index}>
          <button
            className={`${
              cat.subcategory === subCategory ? styles["active-subcat"] : null
            }`}
            onClick={handleClick}
            value={cat.subcategory}
          >
            {cat.subcategory}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SubCategories;
