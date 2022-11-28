import React from "react";

const Product = ({ productimg, text }) => {
  return (
    <div className="pt-12">
      <img src={productimg} alt="" className="w-56" />
      <h1>{text}</h1>
    </div>
  );
};

export default Product;
