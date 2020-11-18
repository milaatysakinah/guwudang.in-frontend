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
//import { GET_FILMS } from "constants/urls";
import { FiLogOut } from "react-icons/fi";

const NavbarTest = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [film, setFilm] = React.useState();

  /*React.useEffect(() => {
    axios
      .get(GET_FILMS)
      .then((res) => {
        setLoading(false);
        setFilm(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });
    return () => {};
  }, []);
*/
  const _onLogout = () => {
    logout();
    history.replace("/login");
  };
  return (
    <Navbar expand="lg">
      <Navbar.Brand
        color="white"
        style={({ paddingTop: "20px" }, { paddingLeft: "20px" })}
      >
        <strong>Welcome Mirose </strong>
        <br />
        <small> Wed, 7 Oct 2020 </small>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Navbar.Brand href="#">
          <FiLogOut
            onClick={_onLogout}
            style={{ width: "50px", height: "50px", marginRight: "20px" }}
          ></FiLogOut>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarTest;
