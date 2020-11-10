/*
  Ini halaman dashboard, sebenernya gak sehat cara setstate kayak gini, harusnya pake useReducer
  karena tiap setState itu komponennya rerender (ngefek ke performa nanti). 
  Cuman karena biar simpel ya gini dulu aja gpp (useReducer agak mbingungi)

  Disini pas baru render component, fungsi didalam useEffect kepanggil, dia ngefetch API dari API-nya
  Studio Ghibli (disclaimer: aku bukan wibu). Fetchnya pake axios biar gampang, terus render sesuai
  kondisi state film / error / loading pake inline conditional.
*/

import React from "react";
import {
  Button,
  // Form,
  FormControl,
  InputGroup,
  Image,
  Container,
  // Nav,
  // Navbar,
  Col,
  Row,
  Table,
  // Jumbotron,
  // Row,
  // Col,
  // Spinner,
  // Alert,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import { FaSearch, FaInfoCircle } from "react-icons/fa";
import NavbarTest from "./Navbar.js";
// import { IconName } from "react-icons/bi";

const Partner = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [film, setFilm] = React.useState();

  React.useEffect(() => {
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
    return () => {};;
  }, []);

  // const _onLogout = () => {
  //   logout();
  //   history.replace("/");
  // };

  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}><h3>List Partner</h3></Col>
          <Col sm={4}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search Partner"
                aria-label="Search Partner"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary"><FaSearch /></Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm={12}><hr/></Col>
          <Col sm={12}>
            <Table responsive="xl" className="table table-borderless">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Partner</th>
                  <th>No Telepon</th>
                  <th>Alamat</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Milati Rohmatus</td>
                  <td>086618279</td>
                  <td>Jl Angkasa Sidoarjo</td>
                  <td>milaaty@gmail.com</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Haidar</td>
                  <td>086618279</td>
                  <td>Jl Anggur Surabaya</td>
                  <td>haidar@gmail.com</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Izzat</td>
                  <td>086618279</td>
                  <td>Jl Bali Sidoarjo</td>
                  <td>izzat@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row><Col><hr/></Col></Row>
        
      </Container>
    </div>
  );
};

export default Partner;