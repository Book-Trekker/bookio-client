import React from "react";
import { TopFooterData } from "../utilities/DemoData";

const TopFooterCard = ({ data }) => {
  return (
    <div>
      <div className="flex ">
        <div className="mr-5">
          <img width={50} src={data.image} alt="" />
        </div>
        <div>
          <h3 className="text-[#064532] font-semibold text-[17px] ">
            Bookio Press
          </h3>
          <p className="text-[#777] text-[14px]">Publish your book with B&N</p>
          <a
            href={data.link}
            className="flex items-center text-[#F1592B] hover:text-[#1D4532] transition-all delay-200 ease-in"
          >
            Learn more <i className="ri-arrow-right-s-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopFooterCard;
