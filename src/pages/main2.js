import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import { withRouter } from "react-router";
import Sidebar from "./Sidebar/Sidebar3";
import Home from "./Home.js";
import sidebar from "./Sidebar/Sidebar.module.css";
import MyNavbar from "./Navbar.js";
import MyDasboard from "./Dashboard/Dashboard.js";

const main = (props) => {
  return (
    <div className="app">
      <Row>
        <Col>
          <Sidebar />
        </Col>

        <Row className={sidebar.flexContainer}>
          <Col md={12}>
            <MyNavbar />
            {props.children}
          </Col>
        </Row>
      </Row>
    </div>
  );
};

const testMain = (props) => {
  return (
    <div className={sidebar.App}>
      <Sidebar />
      <div className={sidebar.Content} style={{ width: "100vw" }}>
        <MyNavbar />
        {props.children}
      </div>
    </div>
  );
};

export default testMain;
