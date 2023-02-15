import React, { useState } from "react";
import { pageSizes } from "../../utilities/Filtering";

const ProductHeader = () => {
  const [showPerPageMenu, setShowPerPageMenu] = useState(false);
  const [showSortingMenu, setShowSortingMenu] = useState(false);
  const [pageSize, setPageSize] = useState(12);

  const handleSetPageSize = (size) => {
    setPageSize(size);
    setShowPerPageMenu(false);
  };
  const handleSetSorting = (size) => {
    setPageSize(size);
    setShowSortingMenu(false);
  };
  return (
    <div>
      <div>
        <h3 className="text-[22px] font-semibold mb-2">Shop</h3>
        <div className="bg-[#F3F3F3] py-3 px-3 flex justify-between items-center">
          <div className="inline-flex items-center relative bg-[#fff] px-4 py-1 cursor-pointer">
            <h3 onClick={() => setShowPerPageMenu((prev) => !prev)}>
              Show <span className="ml-2"> {pageSize}</span>{" "}
            </h3>
            <ul
              className={
                showPerPageMenu ? "showPerPageMenu active" : "showPerPageMenu"
              }
            >
              {pageSizes.map((size, index) => (
                <li
                  onClick={() => handleSetPageSize(size)}
                  className="px-[15px] py-1 text-[1rem]"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="inline-flex items-center relative bg-[#fff] px-4 py-1 cursor-pointer">
              <h3
                className="flex items-center"
                onClick={() => setShowSortingMenu((prev) => !prev)}
              >
                Default Sorting <i className="ri-arrow-down-s-line"></i>
              </h3>
              <ul
                className={
                  showSortingMenu ? "showPerPageMenu active" : "showPerPageMenu"
                }
              >
                {pageSizes.map((size, index) => (
                  <li
                    onClick={() => handleSetSorting(size)}
                    className="px-[15px] py-1 text-[1rem]"
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
