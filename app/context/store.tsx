"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type Item = {
  id: number;
  productName: string;
  quantity: number;
  selected: boolean;
  amount: number;
};

const GlobalContext = createContext<{
  items: Item[];
  setItems: Dispatch<SetStateAction<Item[]>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  subCategory: string;
  setSubCategory: Dispatch<SetStateAction<string>>;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}>({
  items: [],
  setItems: () => {},
  category: "Electronics",
  setCategory: () => {},
  subCategory: "All",
  setSubCategory: () => {},
  amount: 0,
  setAmount: () => {},
});
export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [items, setItems] = useState<Item[] | []>([]);
  const [category, setCategory] = useState<string>("Electronics");
  const [subCategory, setSubCategory] = useState<string>("All");
  return (
    <GlobalContext.Provider
      value={{
        items,
        setItems,
        amount,
        setAmount,
        category,
        setCategory,
        subCategory,
        setSubCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

//a hook that returns the GlobalContext values after its being consumed by useContext
export const useGlobalContext = () => useContext(GlobalContext);
