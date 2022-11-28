import React from "react";
import Product from "./Product";
import prod1 from "../Assets/prod1.jpg";
import prod2 from "../Assets/prod2.jpg";
import prod3 from "../Assets/prod3.jpg";
import prod4 from "../Assets/prod4.jpg";
import prod5 from "../Assets/prod5.jpg";

const Products = () => {
  return (
    <div className="flex max-w-6xl mx-auto space-x-3">
      <Product productimg={prod1} />
      <Product productimg={prod2} />
      <Product productimg={prod3} />
      <Product productimg={prod4} />
      <Product productimg={prod5} />
    </div>
  );
};

export default Products;
