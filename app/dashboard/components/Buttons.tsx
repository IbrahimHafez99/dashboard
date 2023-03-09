"use client";
import React from "react";
import { useGlobalContext } from "@/app/context/store";

const Buttons = () => {
  const { items, setItems, setAmount } = useGlobalContext();
  let amo = 0;
  const handleDelete = () => {
    const remainedItems = items.filter((item) => {
      if (item.selected === false) {
        amo += item.amount;
        return item;
      }
    });
    setItems(remainedItems);
    setAmount(amo);
  };
  return (
    <div className="bottom">
      <div className="buttons">
        <button onClick={handleDelete}>Delete</button>
        <button>Save the order</button>
        <button>Orders</button>
      </div>
      <button className="last">PAY NOW</button>
    </div>
  );
};

export default Buttons;
