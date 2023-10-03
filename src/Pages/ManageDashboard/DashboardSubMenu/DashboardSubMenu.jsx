import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DashboardSubMenu = ({ menu }) => {
  const [isSubTrue, setIsSubTrue] = useState(false);
  return (
    <div>
      <ul>
        <NavLink to="/dashboard">
          <li
            onClick={() => setIsSubTrue((prev) => !prev)}
            className="py-2 relative text-lg text-[#1a202c]  border-dotted hover:bg-[#00000012] border-gray border-opacity-40 flex items-center gap-x-2"
          >
            <span>
              <i class={`${menu.icon} text-[#1a202c] text-[22px]`}></i>
            </span>{" "}
            {menu.name}
          </li>
        </NavLink>

       
          <AnimatePresence>
            <motion.ul
              initial={{ opacity: 0,  height: 0 }}
              animate={{ opacity: isSubTrue ? 1: 0, height: isSubTrue ? "auto": 0 }}
              transition={{ ease: "linear", duration: 0.5, stiffness: 100, type: "spring"}}
              className=""
            >
              {menu.subMenu?.map((m) => (
                <NavLink to="/dashboard">
                  <li className="text-lg   hover:bg-[#00000012] border-gray border-opacity-40 flex items-center gap-x-2">
                    {m.name}
                  </li>
                </NavLink>
              ))}
            </motion.ul>
          </AnimatePresence>
   
      </ul>
    </div>
  );
};

export default DashboardSubMenu;
