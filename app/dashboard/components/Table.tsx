"use client";
import React, { useState } from "react";
// import "./Table.css";

const Table = () => {
  const [rows, setRows] = useState([
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    { id: 1,product: 'Lenovo', quantity: 1, selected: false, amount: 10 },
    
  ]);

  const handleQuantityChange = (id: number, value: number) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        const newQuantity = Math.max(0, row.quantity + value);
        return { ...row, quantity: newQuantity };
      }
      return row;
    });
    setRows(newRows);
  };

  const handleSelectChange = (id: number) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, selected: !row.selected };
      }
      return row;
    });
    setRows(newRows);
  };

  return (
    <div className="table">
      <div className="row header">
        <div className="cell">#</div>
        <div className="cell">Product</div>
        <div className="cell">Quantity</div>
        <div className="cell">Select</div>
        <div className="cell">Amount</div>
      </div>
      {rows.map((row) => (
        <div className="row" key={row.id}>
          <div className="cell">{row.id}</div>
          <div className="cell">{row.product}</div>
          <div className="cell quantity">
            <button onClick={() => handleQuantityChange(row.id, -1)}>-</button>
            <span>{row.quantity}</span>
            <button onClick={() => handleQuantityChange(row.id, 1)}>+</button>
          </div>
          <div className="cell">
            <button
              className={`select ${row.selected ? "selected" : ""}`}
              onClick={() => handleSelectChange(row.id)}
            >
              <i className="fa fa-check"></i>
            </button>
          </div>
          <div className="cell">{row.amount * row.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
