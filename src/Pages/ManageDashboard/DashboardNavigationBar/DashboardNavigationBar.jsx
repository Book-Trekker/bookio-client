import { Avatar, Breadcrumbs, Button } from "@material-tailwind/react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import DashboardSubMenu from "../DashboardSubMenu/DashboardSubMenu";

const DashboardNavigationBar = () => {
  const DashNavigation = [
    {
      icon: "ri-home-wifi-line",
      name: "Dashboards",
      path: "/dashboard",
      // subMenu: [
      //   { name: "Analytics", path: "" },
      //   { name: "Analytics", path: "" },
      //   { name: "Analytics", path: "" },
      // ],
    },
    { icon: "ri-user-line", name: "My Profile", path: "/dashboard/my-profile" },
    { icon: "ri-user-line", name: "Order", path: "/dashboard/orders" },
    { icon: "ri-folder-add-line", name: "Create product", path: "/dashboard/create-product" },
    { icon: "ri-list-unordered", name: "Manage order", path: "/dashboard/manage-orders" },
    { icon: "ri-pages-line", name: "Manage product", path: "/dashboard/manage-products" },
    { icon: "ri-user-3-line", name: "Manage users", path: "/dashboard/manage-users" },
    { icon: "ri-bar-chart-line", name: "Total revenue", path: "/dashboard/revenue" },
    { icon: "ri-exchange-dollar-line", name: "Total income", path: "/dashboard/income" },
    { icon: "ri-line-chart-line", name: "Revenue chart", path: "/dashboard/revenue-chart" },
  ];

  return (
    <div
      className="fixed hide_scroll_thambs  top-0 left-0 bottom-0  w-[300px] bg-[#fff] h-screen overflow-x-auto "
    >
      <div className="relative ">
        <div className="sticky top-0 left-0 right-0 z-50">
          <div className="flex items-center p-[20px] gap-x-3 bg-white border-b pb-3 border-gray border-opacity-50">
            <Link to="/">
              <Avatar
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="profile picture"
                withBorder={true}
                className="p-0.5"
              />
            </Link>
            <div>
              <h4 className="font-libre">Welcome,</h4>
              <h2 className="font-libre font-bold">Nazmul Hassan</h2>
            </div>
          </div>
          {/* sales count  */}
          <div className="flex px-[30px] items-center justify-between py-3 border-b bg-white border-gray border-opacity-50">
            <div>
              <p className="font-bold text-gray">Sales</p>
              <p className="font-bold flex justify-center items-center">456</p>
            </div>
            <div>
              <p className="font-bold text-gray">Orders</p>
              <p className="font-bold flex justify-center items-center">456</p>
            </div>
            <div>
              <p className="font-bold text-gray">Revenue</p>
              <p className="font-bold flex justify-center items-center">
                $2.13B
              </p>
            </div>
          </div>
        </div>
        {/* menu List */}
        <div className="flex flex-col justify-center px-[30px]">
          {/* <Link to='/dashboard'>Home</Link>
        <Link to='/dashboard/products'>my Product</Link> */}

          <ul>
            {DashNavigation?.map((n, index) =>
              n.subMenu ? (
                <DashboardSubMenu menu={n} />
              ) : (
                <NavLink to={n?.path}>
                  <li className="py-2 group text-lg hover:text-[#22c55e] transition-all ease-out delay-100 text-[#1a202c]  cursor-pointer border-gray border-opacity-40 flex items-center gap-x-2">
                    <span>
                      <i class={`${n.icon} text-[#1a202c] text-[22px]  transition-all ease-out delay-100 group-hover:text-[#22c55e]`}></i>
                    </span>{" "}
                    {n.name}
                  </li>
                </NavLink>
                
              )
            )}
              <NavLink to="/dashboard">
                  <li className="py-2 group text-lg hover:text-[#22c55e] transition-all ease-out delay-100 text-[#1a202c]  cursor-pointer border-gray border-opacity-40 flex items-center gap-x-2">
                    <span>

                    </span>{" "}
                  Logout
                  </li>
                </NavLink>
          </ul>

          {/* <ul>
            <NavLink to="/dashboard">
              <li className="py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40 flex items-center gap-x-2">
                <span>
                  <i class="ri-user-line text-blue-500"></i>
                </span>{" "}
                My Profile
              </li>
            </NavLink>
            <NavLink to="/dashboard/orders">
              <li className="py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40 flex items-center gap-x-2 ">
                <span>
                  <i class="ri-currency-line text-blue-500"></i>
                </span>{" "}
                Orders
              </li>
            </NavLink>

            <NavLink to="/dashboard/create-product">
              <li className="flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40">
                <span>
                  <i class="ri-folder-add-line text-blue-500"></i>
                </span>{" "}
                Create Product
              </li>
            </NavLink>

            <NavLink to="/dashboard/manage-orders">
              <li className="flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40">
                <span>
                  <i class="ri-list-unordered text-blue-500"></i>
                </span>{" "}
                Manage Orders
              </li>
            </NavLink>

            <NavLink to="/dashboard/manage-products">
              <li className="flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40">
                <span>
                  <i class="ri-pages-line text-blue-500"></i>
                </span>{" "}
                Manage Products
              </li>
            </NavLink>

            <NavLink to="/dashboard/manage-users">
              <li className="flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40">
                <span>
                  <i class="ri-tools-fill text-blue-500"></i>
                </span>{" "}
                Manage Users
              </li>
            </NavLink>

            <NavLink to="/dashboard/revenue">
              <li className="flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40">
                <span>
                  <i class="ri-bar-chart-line text-blue-500"></i>
                </span>{" "}
                Total Revenue
              </li>
            </NavLink>

            <NavLink to="/dashboard/income">
              <li className="flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40">
                <span>
                  <i class="ri-exchange-dollar-line text-blue-500"></i>
                </span>{" "}
                Total Income
              </li>
            </NavLink>

            <NavLink to="/dashboard/revenue-chart">
              <li className="flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40">
                <span>
                  <i class="ri-line-chart-line text-blue-500"></i>
                </span>{" "}
                Revenue Chart
              </li>
            </NavLink>
          </ul> */}
        </div>
        {/* log out button  */}
      </div>
    </div>
  );
};

export default DashboardNavigationBar;
