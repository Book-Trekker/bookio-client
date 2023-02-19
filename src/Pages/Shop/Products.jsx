import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsMinecartLoaded } from "react-icons/bs";
import { shopProductData } from "../../utilities/shopData";
import Filtering from "./Filtering/Filtering";
import MobileFiltering from "./Filtering/MobileFiltering";
import Product from "./Product";
import ProductHeader from "./ProductHeader";

const Products = () => {
  const [showMobileFiltering, setShowMobileFiltering] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12 px-10">
        <div className="lg:col-span-3 lg:block hidden">
          <Filtering />
        </div>
        <div className=" col-span-12 lg:col-span-9">
          <ProductHeader {...{ showMobileFiltering, setShowMobileFiltering }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">
            {shopProductData.map((p) => (
              <Product />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <MobileFiltering {...{ showMobileFiltering, setShowMobileFiltering }} />
      </div>
    </div>
  );
};

export default Products;
