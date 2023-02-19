import React, { useEffect } from "react";
import Filtering from "./Filtering";
import { AnimatePresence, motion } from "framer-motion";

const MobileFiltering = ({ showMobileFiltering, setShowMobileFiltering }) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowMobileFiltering(false);
    });
  });
  return (
    <AnimatePresence>
      <motion.div
        animate={{
          x: showMobileFiltering ? "0px" : "100%",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 15,
          },
        }}
        onClick={() => setShowMobileFiltering(false)}
        className="w-full h-screen fixed cursor-pointer  z-10    top-0 left-0 bottom-0 bg-[#000000be]"
      ></motion.div>
      <motion.div
        animate={{
          width: showMobileFiltering ? "350px" : "0",
          x: showMobileFiltering ? "0px" : "-50px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="bg-[#fff] shadow-lg fixed top-0 left-0 bottom-0 z-50  p-3 overflow-y-scroll "
      >
        <div className="flex justify-end">
          <div
            onClick={() => setShowMobileFiltering(false)}
            className="flex items-center uppercase cursor-pointer "
          >
            <span className="text-[12px]">Close</span>
            <i className="ri-close-line text-[20px]"></i>
          </div>
        </div>
        <div className="mt-4">
          <Filtering />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileFiltering;
