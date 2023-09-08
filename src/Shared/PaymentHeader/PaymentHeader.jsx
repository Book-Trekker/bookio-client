

import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./PaymentHeader.css"



export default function PaymentHeader() {
    const location = useLocation();

  return (
    <div>
      <div className="mt-14">
        <ul className="flex items-center  justify-center gap-10 text-[1.5rem] font-semibold">
          <li className={location.pathname === "/card" ? "paymentHeader active": "paymentHeader "}>
            <Link to="/card">SHOPPING CART(1)</Link>
          </li>
          <li className={location.pathname === "/checkout" ? "paymentHeader active": "paymentHeader "}>
            <Link to="/checkout">CHECKOUT</Link>
          </li>
          <li className={location.pathname === "/order-tracking" ? "paymentHeader active": "paymentHeader "}>
            <Link to="/order-tracking"> ORDER TRACKING</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
