import React from "react";
import type { Metadata } from "next";
import styles from "./dashboard.module.css";
import SearchField from "../components/SearchField";
import { FaEdit, FaPlus } from "react-icons/fa";
import Categories from "./components/Categories";
import SubCategories from "./components/SubCategories";
import Products from "./components/Products";
import ProductsTable from "./components/ProductsTable";
import Summary from "./components/Summary";
import Buttons from "./components/Buttons";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles["selection-section"]}>
          <select
            className={`${styles.select} search-field`}
            name="cars"
            id="cars"
          >
            <option value="volvo" selected>
              default
            </option>
            <option value="saab">Seeb</option>
            <option value="mercedes">Mawaleh</option>
            <option value="audi">Muscat</option>
          </select>
          <button className={styles.button}>
            <FaEdit className="edit" />
          </button>
          <button className={styles.button}>
            <FaPlus />
          </button>
        </div>
        <SearchField />
        <div className="tab">
          <ProductsTable />
        </div>
        <Summary />
        <Buttons />
      </div>
      <div className={styles.right}>
        <div className={styles.type}>
          <button>category</button>
          <button>brand</button>
        </div>
        <Categories />
        <SubCategories />
        <Products />
      </div>
    </main>
  );
}
