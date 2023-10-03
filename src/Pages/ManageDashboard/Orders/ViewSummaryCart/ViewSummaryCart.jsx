import React from "react";

const ViewSummaryCart = ({ bgColor  , iconBgColor, total, label, icon }) => {
  return (
    <div>
      <div
      style={{backgroundColor: bgColor}}
        className={`flex justify-between items-center  p-5 rounded-lg `}
      >
        <div>
          <h3 className="text-[1.5rem] font-[600] text-white">{total}</h3>
          <span className="text-[.8rem] font-[500] text-white">{label}</span>
        </div>
        <div>
          <h3
          style={{backgroundColor: iconBgColor}}
          className=" w-[50px] h-[50px] rounded-full flex items-center justify-center">
            <i className={`${icon} text-[1.5rem] text-white`}></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ViewSummaryCart;
