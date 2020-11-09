import React from "react";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Image,
  Container,
  Nav,
  Navbar,
  Col,
  Row,
  Table,
  // Row,
  // Col,
  // Spinner,
  // Alert,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import { FaSearch } from "react-icons/fa";

const NavbarTest = () => {
  return (
    <Navbar expand="lg">
        <Navbar.Brand color="white" style={{paddingTop: "20px"}, {paddingLeft: "20px"}}>
          <strong>Welcome Mirose </strong>
          <br />
          <small> Wed, 7 Oct 2020 </small>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Image src="holder.js/240x240" roundedCircle />z
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarTest;
