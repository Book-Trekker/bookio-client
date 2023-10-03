import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ApplyCoupon() {
  const [open, setOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleCouponSubmit = () => {
    console.log('Coupon code submitted:', couponCode);
    // Add logic to handle coupon submission
    setOpen(false);
  };

  return (
    <div className="w-full">
      <div className="bg-[#f2f2f2] pt-[18px] pr-[15px] pb-[21px] pl-[15px] text-[#767a79] text-[13px] flex items-center gap-3 justify-center">
        <i className="ri-user-3-line text-2xl"></i>
        <h3>
          {' '}
          HAVE A COUPON?{' '}
          <button
            onClick={handleOpenModal}
            className="text-[#000] font-[600] hover:text-[#064532] transition-all ease-out delay-100"
          >
            {' '}
            CLICK HERE TO ENTER YOUR CODE
          </button>
        </h3>
      </div>

      <Dialog
        open={open}
        handler={handleOpenModal}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Enter Coupon Code</DialogHeader>
        <DialogBody divider>
          <input
            type="text"
            placeholder="Enter your coupon code"
            value={couponCode}
            onChange={handleCouponCodeChange}
            className="w-full border border-gray-300 p-2 rounded-md mb-4"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCloseModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleCouponSubmit}>
            <span>Apply</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
