import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const DropDownMenu = ({ m }) => {
  return (
    <div className="relative z-50 group inline-block py-3">
      <div className="hover:text-light_green flex items-center text-[16px] text-[#064532] font-semibold">
        {m.menu} <BiChevronDown />
      </div>
      <motion.div className="absolute text-light_black top-12  left-0 w-[230px] transform  opacity-0 shadow-lg  skew-y-12  bg-light_white flex flex-col    group-hover:visible rounded-lg  transition-all ease-linear delay-100 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:skew-y-0">
        {m.subMenu?.map((sub, index) => (
          <div
            className="pb-3 px-2 py-2 border-b-2 border-[#69696911] font-medium text-light_gray_white"
            key={index}
          >
            <Link href={sub.subMenuPath}>{sub.subMenuName}</Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DropDownMenu;
