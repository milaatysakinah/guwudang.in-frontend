import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import { withRouter } from "react-router";
import Sidebar from "./Sidebar/Sidebar2";
import Home from "./Home.js";
import sidebar from "./Sidebar/Sidebar.module.css";
import MyNavbar from "./Navbar.js";
import MyDasboard from "./Dashboard/Dashboard.js";

const main = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col className={sidebar.slideSidebar} style={{position: "fixed", zIndex: "100"}}>
          <Sidebar />
        </Col>
        <Col
          
          className={sidebar.pageContentWrapper}
          style={{ paddingTop: "40px", paddingBottom: "100px", marginLeft: "300px" }}
        >
          <MyNavbar />
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default main;
