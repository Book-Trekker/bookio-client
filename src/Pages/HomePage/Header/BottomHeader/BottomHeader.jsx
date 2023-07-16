import { useEffect, useRef, useState } from "react";
// import BlogImage from "../assets/images/blog-img1.jpg";
import styles from "../../../../style/headers.module.css";
import menuList from "../../../../utilities/Menu";
import { Link, NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import DropDownMenu from "./DropDownMenu";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import "../../../../style/Global.css";

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
      <div className="mb-5 w-[60%] mx-auto">
        <div className="search m-2 bg-grayDark">
          <div class="sm:flex rounded shadow-sm flex justify-center items-center text-gray">
            <input
              type="text"
              placeholder="Search product..."
              class="py-3 bg-grayDark px-4 pr-11 block w-full shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative dark:text-gray-400 focus:outline-none"
            />
            <span className=" hover:bg-primary h-[50px] w-[60px] flex justify-center items-center">
              <i class="ri-search-line text-secondary text-2xl"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
