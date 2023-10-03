import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div>
      <div className="bg-[#F5F7F6] h-16 p-2">
        <h2 className="font-lato font-bold text-xl text-gray flex items-center gap-x-2">
          {" "}
          <span>
            <i class="ri-arrow-left-line text-blue-500 font-bold"></i>
          </span>{" "}
          Dashboard
        </h2>
        <Breadcrumbs className="bg-transparent m-0 p-0">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="blue"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <h3 className="text-gray opacity-50">Dashboard</h3>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default DashboardHeader;
