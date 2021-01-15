import React from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_ACCOUNT } from "constants/urls";
import { FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";

const NavbarTest = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [account, setAccount] = React.useState();

  React.useEffect(() => {
    axios
      .get(GET_ACCOUNT, {
        headers: {
          Authorization: `Bearer ${Cookies.get("USER")}`,
        },
      })
      .then((res) => {
        setAccount(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });
    return () => {};
  }, []);

  var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  var today = new Date();
  var date =
    days[today.getDay()] +
    ", " +
    today.getDate() +
    " " +
    months[today.getMonth()] +
    " " +
    today.getFullYear();

  const _onLogout = () => {
    logout();
    history.replace("/login");
  };
  return (
    <Navbar expand="lg">
    <Row md={10}>
      <Col md={2}>
      <Navbar.Brand
        color="white"
        style={({ paddingTop: "20px" }, { paddingLeft: "20px" })}
      >
        <strong style={{fontSize: "28px"}} >Welcome, {account?.username} </strong>
        <br />
        <small style={{fontSize: "18px"}}> {date} </small>
        {/* <small> Wed, 7 Oct 2020 </small> */}
      </Navbar.Brand>
      </Col>
      <Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Navbar.Brand href="#">
          <FiLogOut
          
            size="40px"
            onClick={_onLogout}
            style={{ marginLeft: "1100px", marginTop: "20px" }}
          ></FiLogOut>
        </Navbar.Brand>
      </Navbar.Collapse>
      </Col>
    </Row>
    
      
      
    </Navbar>
  );
};

export default NavbarTest;
