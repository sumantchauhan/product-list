import React, { useState } from "react";
import { Input } from "antd";

const AddCart = ({ onTextChange, onDiscountChange, text, discount }) => {
  return (
    <div>
      <div>Text</div>
      <Input value={text} onChange={(e) => onTextChange(e.target.value)} />
      <div>Discount</div>
      <Input
        value={discount}
        onChange={(e) => onDiscountChange(e.target.value)}
      />
    </div>
  );
};

export default AddCart;
