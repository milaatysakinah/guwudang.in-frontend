/*
  Ini halaman home, gak ada yg istimewa disini
*/

import React from "react";
import { Button, Container, Nav, Navbar, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "./Navbar.js";

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Hello, world!</h1>
          <p>Jadi ini ceritanya contoh sederhana implementasi React</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
