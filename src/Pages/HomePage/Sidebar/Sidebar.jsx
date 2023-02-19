import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import DropDownMenu from "../Header/BottomHeader/BottomHeader";
import menuList from "../../../utilities/Menu";
import SidebarMenu from "./SidebarMenu";

const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
    },
  },
};
const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <motion.div
      animate={{
        width: isOpenSidebar ? "300px" : "0px",
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 10,
        },
      }}
      className="w-[300px] h-screen fixed top-0 overflow-hidden left-0 bg-[#ffff] z-[9999] shadow-lg shadow-[0 1px 12px 2px hsl(0deg 0% 56% / 30%)]"
    >
      {/* <div className="w-full h-screen bg-[#e2070770] fixed top-0 left-0 z-50"></div> */}
      <div
        onClick={() => setIsOpenSidebar(false)}
        className="bg-[#064532] px-5 py-3 cursor-pointer  flex items-center justify-end text-[#fff]"
      >
        <span className="uppercase mr-1">Close</span>

        <i className="ri-close-line text-[20px]"></i>
      </div>
      <div className="p-5">
        {menuList.map((m, index) => {
          if (m.subMenu) {
            return (
              <SidebarMenu
                setIsOpenSidebar={setIsOpenSidebar}
                isOpenSidebar={isOpenSidebar}
                showAnimation={showAnimation}
                key={index}
                m={m}
              />
            );
          } else {
            return (
              <NavLink
                to={m.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{m.icon}</div>
                <AnimatePresence>
                  {isOpenSidebar && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {m.menu}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          }
        })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
