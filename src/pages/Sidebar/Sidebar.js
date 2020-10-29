// import React from "react";
// import {Nav} from "react-bootstrap";
// import { withRouter } from "react-router";
// import sidebar from '../pages/Sidebar.module.css'

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../asset/LogoGPutih.png";


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
        style={{marginTop: "30px"}}
      >
          {this.props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )}
        <div className="logo">
          <a
            href="#"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img style={{width: "80px"}, {height: "80px"}} src={logo} alt="logo_image" />
              <a style={{marginLeft: "16px"}, {marginInlineStart: "32px"}, {fontWeight: "bold"}, {WebkitTextFillColor: "white"} } href="#" className="simple-text logo-normal"> Guwudang.in </a>
            </div>
          </a>
          <div>
            <a style={{WebkitTextFillColor: "white"}} href="#">
              Dashboard
            </a>
          </div>
          <div>
            <a style={{WebkitTextFillColor: "white"}} href="#">
              Inventory
            </a>
          </div>
          <div>
            <a style={{WebkitTextFillColor: "white"}} href="#">
              Invoice
            </a>
          </div>
          <div>
            <a style={{WebkitTextFillColor: "white"}} href="#">
              Partners
            </a>
          </div>
          <div>
            <a style={{WebkitTextFillColor: "white"}} href="#">
              Account
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;