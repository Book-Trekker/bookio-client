import { Checkbox, Input, Button } from "@material-tailwind/react";
import React from "react";
import ApplyCoupon from "../ApplyCoupon/ApplyCoupon";
import ReturningCustomer from "../ReturnlngCustomer/ReturningCustomer";

export default function CardReturnService() {

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  mx-auto px-10  gap-8 mt-10 ">
        <ReturningCustomer />
        <ApplyCoupon />
    </div>
  );
}
