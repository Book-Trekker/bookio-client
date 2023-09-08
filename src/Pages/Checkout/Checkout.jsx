import React from "react";
import { Fragment } from "react";
import Header from "../HomePage/Header/Header";
import PaymentHeader from "../../Shared/PaymentHeader/PaymentHeader";
import CardReturnService from "./CardReturnService/CardReturnService";
import BillingDetails from "./BillingDetails/BillingDetails";

export default function Checkout() {
  return (
    <Fragment>
      <Header />
      <div>
        <PaymentHeader />
        <div>
          <CardReturnService />
          <BillingDetails />
        </div>
      </div>
    </Fragment>
  );
}
