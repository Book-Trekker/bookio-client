import { Checkbox, Input } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
export default function ReturningCustomer() {
  const [returningCustomer, setReturningCustomer] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="bg-[#f2f2f2] pt-[18px] relative z-50 pr-[15px] pb-[21px] pl-[15px] text-[#767a79] text-[13px] flex items-center gap-3 justify-center">
        <i class="ri-user-3-line text-2xl"></i>
        <h3>
          {" "}
          RETURNING CUSTOMER?{" "}
          <button
            onClick={() => setReturningCustomer((prev) => !prev)}
            className="text-[#000] font-[600] hover:text-[#064532] transition-all ease-out delay-100"
          >
            CLICK HERE TO LOGIN
          </button>
        </h3>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -400 }}
        animate={{
          opacity: returningCustomer ? 1 : 0,
          y: returningCustomer ? 0 : -400,
        }}
        transition={{ type: "spring", stiffness: 100 }}
        >
        <p className="text-[13px] text-center my-6">
          If you have shopped with us before, please enter your details below.
          If you are a new customer, please proceed to the Billing section.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-6">
          <Input label="Username or email" />
          <Input label="password" type="password" />
        </div>
        <div className="flex items-center justify-end">
          <h3 className="flex items-center">
            <Checkbox defaultChecked /> Remember me
          </h3>
        </div>
        <button className="px-[50px] bg-[#000] w-full text-white py-4 uppercase my-6">
          Login
        </button>
      </motion.div>
    </div>
  );
}
