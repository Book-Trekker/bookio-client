import React from "react";

const CartItem = ({ img, title }) => {
  return (
    <div className="wisht_list_card  w-full">
      <div className=" flex items-center">
        <div className="flex p-3 justify-between w-full">
          <div>
            <img className="w-20" src={img} alt="wishlist/book" />
          </div>
          <div className="pl-3 flex  flex-col justify-between py-3">
            <div>
              <h4 className="font-lato font-semibold">{title}</h4>
              <p className="text-gray text-small">June 19, 2022</p>
            </div>
            <div>
              <h3>Qty: 77</h3>
            </div>
          </div>
          <div className="flex items-center flex-col justify-between py-3">
            <span className="text-[#F1592B] font-semibold border border-[#F1592B] px-2 rounded-md">
              $656
            </span>
            <button className="text-[#1F92CD] font-semibold">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
