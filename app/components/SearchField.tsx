import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";

const SearchField = () => {
  return (
    <div className="search-field">
      <div className="search-icons">
        <FaSearch />
      </div>
      <input type="text" placeholder="Search" />
      <div className="search-icons">
        <FaMicrophone />
      </div>
    </div>
  );
};

export default SearchField;
