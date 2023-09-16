import React from "react";
import { Fragment } from "react";
import Header from "../HomePage/Header/Header";
import PaymentHeader from "../../Shared/PaymentHeader/PaymentHeader";
import CartTotals from "./CartTotals/CartTotals";
import CardProducts from "./CardProducts/CardProducts";
import Footer from "../../Shared/Footer/Footer";

export default function Card() {
  return (
    <Fragment>
      <Header />
      <div>
        <PaymentHeader />
        <div className="grid grid-cols-12 px-5 gap-5 mt-14">
          <div className="col-span-12 lg:col-span-8">
              <CardProducts />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <CartTotals />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
