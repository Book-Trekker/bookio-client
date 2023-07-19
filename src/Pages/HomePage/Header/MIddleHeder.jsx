import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import Carts from "./Carts";
import ShoppingCart from "./ShoppingCart";
import DropDownMenu from "./BottomHeader/DropDownMenu";
import styles from "../../../style/headers.module.css";
import menuList from "../../../utilities/Menu";

const MIddleHeder = ({ showShoppingCart, setShowShoppingCart }) => {
  const [navSticky, setNavSticky] = useState(false);
  const [profile, setProfile] = useState(false);

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
    <div className="hidden md:block">
      <section className="middle_header px-10 py-3 items-center">
        <div className="brand w-[80%]">
          <Link to="/">
            <img src={logo} alt="/brand-logo" />
          </Link>
        </div>

        <div className="custom_nav_link flex justify-center">
          <div
            className={` ${styles.HeaderMenu} flex text-light_gray_white items-center gap-14 font-lato text-[1rem] font-light  cursor-pointer `}
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
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active custom_link" : "custom_link"
                      }
                      key={m.menu}
                      to={m.path}
                    >
                      {m.menu}
                    </NavLink>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="cart flex justify-between items-center">
          <Carts {...{ showShoppingCart, setShowShoppingCart }} />
          <div>
            <button className="border-[1px] border-light-green-200 rounded-md px-5 py-2">Sign In</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MIddleHeder;
