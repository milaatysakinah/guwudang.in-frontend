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
        <Container>
          <Link to="/">
            <Navbar.Brand color="white">
              <strong>Welcome Mirose </strong><br/>
              <small> Wed, 7 Oct 2020 </small>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Image src="holder.js/240x240" roundedCircle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

);
};

export default NavbarTest;