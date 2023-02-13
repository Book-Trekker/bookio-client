import { BiChevronDown } from "react-icons/bi";

const HeaderMenu = [
  {
    menu: "Shop",
    path: "/shop"
  },
  {
    menu: "Blog",
    path: "/blog"
  },
  {
    menu: "About Us",
    path: "/about"
  },
  {
    menu: "Contact Us",
    path: "/contact"
  },
  {
    menu: "Vendor",
    path: "",
    subMenu: [
      { subMenuName: "Product Author", subMenuPath: "/author" },
      { subMenuName: "Store List", subMenuPath: "/store-list" },
      { subMenuName: "Store Details", subMenuPath: "/store-details" }
    ],
  },
];

export default HeaderMenu;
