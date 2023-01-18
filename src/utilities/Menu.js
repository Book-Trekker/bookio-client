import { BiChevronDown } from "react-icons/bi";

const HeaderMenu = [
  {
    menu: "Shop",
    path: "/job",
    subMenu: [
      { subMenuName: "Job Listing", subMenuPath: "/jobListing" },
      { subMenuName: "Post A Job", subMenuPath: "/jobListing" },
      { subMenuName: "Job Listing", subMenuPath: "/jobListing" },
    ],
  },
  {
    menu: "Blog",
    path: "/blog",
    subMenu: [
      { subMenuName: "Employers Listing", subMenuPath: "/jobListing" },
      { subMenuName: "Employers Details", subMenuPath: "/jobListing" },
      { subMenuName: "Employers Dashboard", subMenuPath: "/jobListing" },
    ],
  },
  {
    menu: "Page",
    path: "/page",
    subMenu: [
      { subMenuName: "Candidates  Listing", subMenuPath: "/jobListing" },
      { subMenuName: "Candidates  Details", subMenuPath: "/jobListing" },
      { subMenuName: "Candidates  Dashboard", subMenuPath: "/jobListing" },
    ],
  },
  {
    menu: "Vendor",
    path: "/vendor",
    subMenu: [
      { subMenuName: "Blog Grid", subMenuPath: "/jobListing" },
      { subMenuName: "Blog Left Sidebar", subMenuPath: "/jobListing" },
      { subMenuName: "Blog Right Sidebar", subMenuPath: "/jobListing" },
      { subMenuName: "Blog Details", subMenuPath: "/jobListing" },
      { subMenuName: "Categories", subMenuPath: "/jobListing" },
      { subMenuName: "Tag", subMenuPath: "/jobListing" },
    ],
  },
];

export default HeaderMenu;
