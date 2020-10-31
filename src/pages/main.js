import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import { withRouter } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home.js";
import sidebar from "./Sidebar/Sidebar.module.css";
import myNavbar from "./Navbar";

const Dash = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10} className={sidebar.pageContentWrapper}>
          <myNavbar />
          <Home />
        </Col>
      </Row>
    </Container>
  );
};
const Dashboard = withRouter(Dash);
export default Dashboard;
