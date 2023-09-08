import React from "react";
import { Fragment } from "react";
import Header from "../HomePage/Header/Header";
import PaymentHeader from "../../Shared/PaymentHeader/PaymentHeader";

export default function OrderTracking() {
  return (
    <Fragment>
      <Header />
      <div>
        <PaymentHeader />
        <div>
          <h2>order tracking</h2>
        </div>
      </div>
    </Fragment>
  );
}
