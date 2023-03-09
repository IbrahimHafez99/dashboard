"use client";
import { useGlobalContext } from "@/app/context/store";
import React from "react";
import styles from "../dashboard.module.css";

const ProductsTable = () => {
  const { items, setItems } = useGlobalContext();
  return (
    <div className={styles.table}>
      <div className={styles.thead}>
        <h4 className={styles.tcell}>#</h4>
        {items.map((_, index) => (
          <div className={styles.tcell} key={index}>
            {index}
          </div>
        ))}
      </div>
      <div className={styles.thead}>
        <h4 className={styles.tcell}>Product</h4>
        {items.map((element, index) => (
          <div className={styles.tcell} key={index}>
            {element.productName}
          </div>
        ))}
      </div>
      <div className={styles.thead}>
        <h4 className={styles.tcell}>Quantity</h4>
        {items.map((element, index) => (
          <div className={styles.tcell} key={index}>
            {element.quantity}
          </div>
        ))}
      </div>
      <div className={styles.thead}>
        <h4 className={styles.tcell}>Select</h4>
        {items.map((element, index) => (
          <div className={styles.tcell} key={index}>
            <input
              type="checkbox"
              checked={element.selected}
              onChange={() => {
                setItems((prev) =>
                  prev.map((ele) => {
                    if (ele.id === element.id)
                      return { ...ele, selected: !ele.selected };
                    return ele;
                  })
                );
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.thead}>
        <h4 className={styles.tcell}>Amount</h4>
        {items.map((element, index) => (
          <div className={styles.tcell} key={index}>
            {element.amount}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsTable;
