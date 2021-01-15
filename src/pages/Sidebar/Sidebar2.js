import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import "./Sidebar2.css";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import logoText from "./../../asset/LogoText.png";

function Sidebar2() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <nav className={"nav-menu active"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars
                style={({ color: "#f5f5f5" }, { paddingRight: "50px" })}
              />
            </Link>
          </li>
          <Link to="/dashboard">
            <img src={logoText} className="logo-text"></img>
          </Link>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span style={{ marginLeft: "30px" }}>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar2;
