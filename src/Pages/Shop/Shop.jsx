import React from "react";
import Products from "./Products";
import "../../style/Shop.css";
const Shop = () => {
  return (
    <section className="shop_">
      <ShopHero />
      <Products />
    </section>
  );
};

export default Shop;
