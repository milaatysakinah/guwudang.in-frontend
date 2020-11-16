import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import { withRouter } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home.js";
import sidebar from "./Sidebar/Sidebar.module.css";
import MyNavbar from "./Navbar.js";
import MyDasboard from "./Dashboard/Dashboard.js";

const main = (props) => {
  console.log(props);
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10} className={sidebar.pageContentWrapper} style={{paddingTop:"40px"}}>
          <MyNavbar />
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default main;
