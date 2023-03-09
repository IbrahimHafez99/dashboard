"use client";
import React from "react";
import { useGlobalContext } from "@/app/context/store";
const Summary = () => {
  const { amount } = useGlobalContext();
  return (
    <div className="summary">
      <div className="col">
        <span>Estimated Tax (6%)</span>
        <span>0.365</span>
      </div>
      <div className="col">
        <span>Shipping Charge(+)</span>
        <span>0.000</span>
      </div>
      <div className="col">
        <span>Discount(-)</span>
        <span>0.000</span>
      </div>
      <div className="col">
        <span>Total Amount</span>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default Summary;
