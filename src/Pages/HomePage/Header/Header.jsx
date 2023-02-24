import React, { useState } from "react";
import MobileHeader from "./BottomHeader/MobileHeader";
import MIddleHeder from "./MIddleHeder";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader/BottomHeader";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  return (
    <section className="main_header">
      <MobileHeader {...{ showShoppingCart, setShowShoppingCart }} />
      <TopHeader />
      <MIddleHeder {...{ showShoppingCart, setShowShoppingCart }} />
      <BottomHeader />
      <ShoppingCart {...{ showShoppingCart, setShowShoppingCart }} />
    </section>
  );
};

export default Header;
