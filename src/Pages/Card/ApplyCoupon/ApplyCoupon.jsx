import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyCoupon() {
  const [email, setEmail] = React.useState("");
  const [applyCoupon, setApplyCoupon] = useState(false);
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="w-full overflow-hidden">
      <div className="bg-[#f2f2f2] pt-[18px] relative z-50 pr-[15px] pb-[21px] pl-[15px] text-[#767a79] text-[13px] flex items-center gap-3 justify-center">
        <i class="ri-user-3-line text-2xl"></i>
        <h3>
          {" "}
          HAVE A COUPON?{" "}
          <button
            onClick={() => setApplyCoupon((prev) => !prev)}
            className="text-[#000] font-[600] hover:text-[#064532] transition-all ease-out delay-100"
          >
            {" "}
            CLICK HERE TO ENTER YOUR CODE
          </button>
        </h3>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -400 }}
        animate={{
          opacity: applyCoupon ? 1 : 0,
          y: applyCoupon ? 0 : -400,
        }}
        transition={{ type: "spring", stiffness: 100 }}
        className="mb-20"
      >
        <p className="text-[13px] text-center my-6">
          If you have a coupon code, <br /> please apply it below.
        </p>
        <div className="grid  grid-cols-1 gap-5 mt-6 w-full">
          <div className="relative flex w-full  ">
            <Input
              type="email"
              label="Email Address"
              value={email}
              onChange={onChange}
              className="pr-20 "
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              disabled={!email}
              className="!absolute right-1 top-1 rounded bg-[#000]"
            >
              Apply Coupon
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
