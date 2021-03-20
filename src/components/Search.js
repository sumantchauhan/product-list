import React from "react";
import { Input } from "antd";

const { Search } = Input;

const ProductSearch = ({ onSearch, onInputChange }) => {
  return (
    <div>
      <Search
        placeholder="input name, product or mobile"
        enterButton="Search"
        size="large"
        onChange={(e) => onInputChange(e.target.value)}
        onSearch={onSearch}
      />
    </div>
  );
};

export default ProductSearch;
