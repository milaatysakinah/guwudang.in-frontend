// import React from "react";
// import {Nav} from "react-bootstrap";
// import { withRouter } from "react-router";
//import mySidebar from '../Sidebar.module.css'

import React, { Component } from "react";
import { Button, Container, Nav, Navbar, Jumbotron } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./../../asset/LogoGPutih.png";
import { FaUser, FaRegListAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiBarChartLine } from "react-icons/ri";
import { BsFillInboxesFill } from "react-icons/bs";
import classes from "./Sidebar.module.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  render() {
    return (
      <div
        className={classes.Sidebar}
        data-color={this.props.color}
        data-image={this.props.image}
      >
        <div className={classes.sidebarWrapper}>
          <div className={classes.textContent}>
            <a href="#" className="simple-text logo-mini">
              <div className={classes.logoImg}>
                <img
                  style={({ width: "50px" }, { height: "50px" })}
                  src={logo}
                  alt="logo_image"
                />
                <p className={classes.textContent}>Guwudang.in</p>
              </div>
            </a>

            <a href="/dashboard" className="simple-text logo-mini">
              <div className={classes.titleContent}>
                <MdDashboard style={{ color: "white", fontSize: "35px" }} />
                <p className={classes.titleText}>
                  Dashboard
                </p>
              </div>
            </a>

            <p className={classes.contentType}>
              Product
            </p>

            <a href="/home" className="simple-text logo-mini">
              <div className={classes.titleContent}>
                <BsFillInboxesFill className={classes.logoSet}/>
                <p className={classes.titleText}>
                  Inventory
                </p>
              </div>
            </a>

            <p className={classes.contentType}>
              Business
            </p>

            <a href="#" className="simple-text logo-mini">
              <div className={classes.titleContent}>
                <FaUser className={classes.logoSet}/>
                <p className={classes.titleText}>
                  Partners
                </p>
              </div>
            </a>

            <a href="/accountPage" className="simple-text logo-mini">
            <div className={classes.titleContent}>
                <FaUser className={classes.logoSet}/>
                <p className={classes.titleText}>
                  Account
                </p>
              </div>
            </a>
              
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
