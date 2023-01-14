import React from "react";
import {
  aboutUsData,
  categoriesData,
  helpNeedData,
} from "../../utilities/Footer";
import BottomFooter from "./BottomFooter";
import "./Footer.css";
import FooterExtraInfo from "./FooterExtraInfo";
import FooterSectionHeader from "./FooterSectionHeader";

const Footer = () => {
  return (
    <footer
      style={{ borderTop: "1px solid #EDEDED" }}
      className="w-full sm:pb-0 pb-14 "
    >
      <div>
        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-10 py-5">
            <div className="lg:mb-0 mb-3">
              <FooterSectionHeader>NEED HELP?</FooterSectionHeader>
              <ul>
                {helpNeedData.map((data) => (
                  <li key={data.id} className="text-[#767A79] txt-[13px] mb-2">
                    {data.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:mb-0 mb-3">
              <FooterSectionHeader>ABOUT US</FooterSectionHeader>
              <ul>
                {aboutUsData.map((data) => (
                  <li key={data.id} className="text-[#767A79] txt-[13px] mb-2">
                    {data.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:mb-0 mb-3">
              <FooterSectionHeader>CATEGORIES</FooterSectionHeader>
              <ul>
                {categoriesData.map((data) => (
                  <li key={data.id} className="text-[#767A79] txt-[13px] mb-2">
                    {data.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-0 pt-4">
              <FooterSectionHeader> OUR NEWSLETTER</FooterSectionHeader>
              <div>
                <p className="mb-4 text-[13px] text-[#767A79] ">
                  {" "}
                  Sign up for our latest news and offers:
                </p>
                <form
                  className="h-[50px] px-5  bg-[#f0f0f0] relative"
                  action=""
                >
                  <input
                    placeholder="Your email address..."
                    className="h-full w-[60%] bg-transparent text-[#767a79]"
                    type="text"
                  />
                  <button className="absolute top-0 right-0 bg-[#064532] w-[40%] h-full">
                    <i className="ri-mail-unread-line text-2xl text-white"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <BottomFooter />
          <FooterExtraInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
