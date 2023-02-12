import { useEffect, useRef, useState } from "react";
// import BlogImage from "../assets/images/blog-img1.jpg";
import styles from "../../../style/headers.module.css";
import menuList from "../../../utilities/Menu";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import DropDownMenu from "./DropDownMenu";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";

const Header = ({ sideDrawer, setSideDrawer }) => {
  const [profile, setProfile] = useState(false);
  const [active, setActive] = useState(false);
  const [navSticky, setNavSticky] = useState(false);
  const handleProfile = () => {
    setProfile((prev) => !prev);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setProfile(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 65) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    });
  }, []);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div className="mb-5 md:block hidden">
        <div className="flex justify-between items-center container mx-auto px-10">
          <div className="flex items-center">
            <button className="bg-[#064532] text-[#fff] flex items-center gap-2 px-6 py-3 ">
              <CgMenuRight className="rotate-[180deg] mr-3 text-[20px]" /> All
              Departments
              <BiChevronDown className="text-[20px]" />
            </button>
            <div>
              <div
                className={` ${styles.HeaderMenu} flex text-light_gray_white items-center gap-8 font-normal text-[1.2rem] ml-10 `}
              >
                {menuList.map((m, index) => {
                  if (m.subMenu) {
                    return <DropDownMenu key={index} m={m} />;
                  } else {
                    return (
                      <div
                        key={index}
                        className="py-3 text-[16px] text-[#064532] font-semibold"
                      >
                        <Link key={m.menu} href="/">
                          {m.menu}
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#205091] text-[#fff] px-3 mr-2 rounded-[20px] text-[14px]">
              Notice!
            </button>
            <span>Covid 19 Update: We are open for business</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
