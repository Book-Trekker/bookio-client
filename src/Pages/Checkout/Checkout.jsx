import React from "react";
import { Fragment } from "react";
import Header from "../HomePage/Header/Header";
import PaymentHeader from "../../Shared/PaymentHeader/PaymentHeader";

export default function Checkout() {
  return (
    <Fragment>
      <Header />
      <div>
        <PaymentHeader />
        <div>
          <h2>Checkout</h2>
        </div>
      </div>
    </Fragment>
  );
}
