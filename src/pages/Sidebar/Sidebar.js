// import React from "react";
// import {Nav} from "react-bootstrap";
// import { withRouter } from "react-router";
//import mySidebar from '../Sidebar.module.css'

import React, { Component } from "react";
import { Button, Container, Nav, Navbar, Jumbotron } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./../../asset/LogoGPutih.png";
import { FaUser, FaRegListAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { RiBarChartLine } from 'react-icons/ri';
import { BsFillInboxesFill } from 'react-icons/bs';


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
            <div className="logo-img" style={{paddingTop:"10px", paddingBottom:"20px", display:"flex", flexDirection:"row"}}>
              <img style={{width: "50px"}, {height: "50px"}} src={logo} alt="logo_image" />
              <p style={{WebkitTextFillColor: "white", paddingTop:"20px", paddingLeft:"20px", fontSize:"25px", fontWeight:"bold"}} className="simple-text logo-normal"> Guwudang.in </p>
            </div>
          </a>
          
          <a
            href="#"
            className="simple-text logo-mini"
          >
            <div style={{paddingTop: "30px" , display:"flex", flexDirection:"row"}}>
              <MdDashboard style={{color:"white", fontSize:"35px"}}/>
              <p style={{WebkitTextFillColor: "white", paddingLeft:"20px", fontSize:"20px"}}>
                Dashboard
              </p>
            </div>
          </a>

          <a
            href="#"
            className="simple-text logo-mini"
          >
            <div style={{paddingTop: "30px", display:"flex", flexDirection:"row"}}>
              <RiBarChartLine style={{color:"white", fontSize:"35px"}}/>
              <p style={{WebkitTextFillColor: "white", paddingLeft:"20px", fontSize:"20px"}}>
                Report
              </p>
            </div>
          </a>
          
          <p style={{paddingTop: "40px", color:"lightgray", fontSize:"20px"}}>Product</p>
          
          <a
            href="#"
            className="simple-text logo-mini"
          >
            <div style={{paddingTop: "10px", display:"flex", flexDirection:"row"}}>
              <BsFillInboxesFill style={{color:"white", fontSize:"35px"}}/>
              <p style={{WebkitTextFillColor: "white", paddingLeft:"20px", fontSize:"20px"}}>
                Inventory
              </p>
            </div>
          </a>

          <a
            href="#"
            className="simple-text logo-mini"
          >
            <div style={{paddingTop: "30px", display:"flex", flexDirection:"row"}}>
              <FaRegListAlt style={{color:"white", fontSize:"35px"}}/>
              <p style={{WebkitTextFillColor: "white", paddingLeft:"20px", fontSize:"20px"}}>
                Invoice
              </p>
            </div>
          </a>

          <p style={{paddingTop: "40px", color:"lightgray", fontSize:"20px"}}>Business</p>
          
          <a
            href="#"
            className="simple-text logo-mini"
          >
            <div style={{paddingTop: "10px", display:"flex", flexDirection:"row"}}>
              <FaUser style={{color:"white", fontSize:"35px"}}/>
              <p style={{WebkitTextFillColor: "white", paddingLeft:"20px", fontSize:"20px"}} href="#">
                Partners
              </p>
            </div>
          </a>

          <a
            href="#"
            className="simple-text logo-mini"
          >
            <div style={{paddingTop: "30px", display:"flex", flexDirection:"row"}}>
              <FaUser style={{color:"white", fontSize:"35px"}}/>
              <p style={{WebkitTextFillColor: "white", paddingLeft:"20px", fontSize:"20px"}}>
                Account
              </p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;