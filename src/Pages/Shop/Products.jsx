import React from "react";
import Filtering from "./Filtering/Filtering";
import ProductHeader from "./ProductHeader";

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-12 px-10">
        <div className="col-span-3">
          <Filtering />
        </div>
        <div className="col-span-9">
          <ProductHeader />
        </div>
      </div>
    </div>
  );
};

export default Products;
