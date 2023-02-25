import React from "react";

const FooterExtraInfo = () => {
  return (
    <div className="flex items-center justify-between px-5 md:px-10 py-2 sm:flex-row flex-col   ">
      <div className="flex  items-center sm:mb-0 mb-3">
        <ul className="flex flex-wrap items-center gap-3">
          <li className="border-b md:border-b-0 sm:mr-6 mr-2 hover:text-[#064532] text-[#767A79] cursor-pointer">
            Terms of Use
          </li>
          <li className="border-b md:border-b-0 sm:mr-6 mr-2 hover:text-[#064532] text-[#767A79] cursor-pointer">
            Copyright & Trademark
          </li>
          <li className="border-b md:border-b-0 sm:mr-6 mr-2 hover:text-[#064532] text-[#767A79] cursor-pointer">
            Policy
          </li>
          <li className="border-b md:border-b-0 sm:mr-6 mr-2 hover:text-[#064532] text-[#767A79] cursor-pointer">
            Sitemap
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[#767A79]">© 2021 Bookio. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterExtraInfo;
