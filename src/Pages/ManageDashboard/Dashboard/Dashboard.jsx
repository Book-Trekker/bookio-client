import { Avatar, Breadcrumbs, Button } from "@material-tailwind/react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import DashboardNavigationBar from "../DashboardNavigationBar/DashboardNavigationBar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

export const Dashboard = () => {
  return (
    <section className="w-full grid grid-cols-12">
      <div className="col-span-3">
        <DashboardNavigationBar />
      </div>
        <div className="col-span-9">
          <div>
            <DashboardHeader />
            <div className="mt-5 p-3">
            <Outlet />
            </div>
          </div>
      </div>
    </section>
  );
};
