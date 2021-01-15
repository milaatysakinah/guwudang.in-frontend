import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsFillInboxesFill, BsFillInfoCircleFill } from "react-icons/bs";
import { RiGroupFill } from "react-icons/ri";


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard size="35px" />,
    cName: "nav-text",
  },
  {
    title: "Inventory",
    path: "/product",
    icon: <BsFillInboxesFill size="35px" />,
    cName: "nav-text",
  },
  {
    title: "Partner",
    path: "/partner",
    icon: <RiGroupFill size="35px" />,
    cName: "nav-text",
  },
  {
    title: "Account",
    path: "/accountPage",
    icon: <FaUser size="35px" />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/aboutUs",
    icon: <BsFillInfoCircleFill size="35px" />,
    cName: "nav-text",
  },
];
