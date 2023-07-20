import React from "react";
import Products from "./Products";
import "../../style/Shop.css";
import ShopHero from "./ShopHero";
import Header from "../HomePage/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Shop = () => {
  return (
    <section className="shop_">
      <Header />
      <ShopHero />
      <Products />
      <Footer />
    </section>
  );
};

export default Shop;
