import React, { Children } from "react";

const FilterTitle = ({ children }) => {
  return (
    <h3 className="text-[20px] font-semibold text-[#000] FilterTitle">
      {children}
    </h3>
  );
};

export default FilterTitle;
