import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar.js";
import Home from "./Home.js";
import sidebar from './Sidebar.module.css';

const Dash = props => {


    return (
         <Container fluid>
                <Row>
                    <Col xs={2} className={sidebar.sidebarWrapper}>      
                      <Sidebar />
                    </Col>
                    <Col xs={10} className={sidebar.pageContentWrapper} style={{padding:"0"}}>
                        <Home />
                    </Col> 
                </Row>

            </Container>
        );
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard