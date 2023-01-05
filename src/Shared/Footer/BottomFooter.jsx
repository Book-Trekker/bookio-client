import React from "react";

const BottomFooter = () => {
  return (
    <div
      style={{
        borderTop: "1px solid #EDEDED",
        borderBottom: "1px solid #EDEDED",
      }}
      className="flex items-center justify-between sm:flex-row  flex-col px-10 sm:py-2 py-5  "
    >
      <div className="flex  items-center sm:mb-0 mb-5">
        <span
          style={{ border: "1px solid #EDEDED" }}
          className="w-[40px] h-[40px]  rounded-full flex items-center justify-center  hover:bg-[#064532] group mr-2"
        >
          <i className="ri-twitter-fill text-[#064532] group-hover:text-white"></i>
        </span>
        <span
          style={{ border: "1px solid #EDEDED" }}
          className="w-[40px] h-[40px]  rounded-full flex items-center justify-center  hover:bg-[#064532] group mr-2"
        >
          <i class="ri-instagram-line"></i>
        </span>
        <span
          style={{ border: "1px solid #EDEDED" }}
          className="w-[40px] h-[40px]  rounded-full flex items-center justify-center  hover:bg-[#064532] group mr-2"
        >
          <i class="ri-facebook-line"></i>
        </span>
        <span
          style={{ border: "1px solid #EDEDED" }}
          className="w-[40px] h-[40px]  rounded-full flex items-center justify-center  hover:bg-[#064532] group mr-2"
        >
          <i class="ri-youtube-line"></i>
        </span>
      </div>
      <div>
        <img
          src="https://wpbingosite.com/wordpress/bookio/wp-content/uploads/2020/06/paymet.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default BottomFooter;
