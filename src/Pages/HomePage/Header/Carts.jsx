import React from "react";

const Carts = ({ setShowShoppingCart }) => {
  return (
    <div
      onClick={() => setShowShoppingCart(true)}
      className="addToCart relative"
    >
      <span className="text-3xl text-primary hover:text-secondary cursor-pointer">
        <i class="ri-shopping-cart-line text-4xl"></i>
      </span>
      <div className="cart_count absolute w-7 h-7 bg-secondary rounded-full right-[-3px] top-[-10px] text-white flex items-center justify-center">
        17
      </div>
    </div>
  );
};

export default Carts;
