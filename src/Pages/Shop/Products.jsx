import React from "react";
import Filtering from "./Filtering/Filtering";

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-12 px-10">
        <div className="col-span-3">
          <Filtering />
        </div>
        <div className="col-span-9">product</div>
      </div>
    </div>
  );
};

export default Products;
