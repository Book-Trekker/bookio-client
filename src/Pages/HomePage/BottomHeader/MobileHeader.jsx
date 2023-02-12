import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const MobileHeader = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div className="md:hidden block">
      <div className="flex  justify-between px-10 items-center py-4">
        <div>
          <span onClick={() => setIsOpenSidebar(true)}>
            <i className="ri-menu-line text-[22px]"></i>
          </span>
          <Sidebar {...{ isOpenSidebar, setIsOpenSidebar }} />
        </div>
        <div>
          <img
            width="200px"
            src="https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/logo-1.png.webp"
            alt=""
          />
        </div>
        <div>
          <span>
            <i className="ri-menu-3-fill text-[22px]"></i>
          </span>
          <span>
            <i className="ri-handbag-line text-[22px] ml-3"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
