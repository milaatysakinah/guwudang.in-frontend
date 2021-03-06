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
  FormControl,
  InputGroup,
  Container,
  Col,
  Row,
  Table,
  Spinner,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import { logout } from "utils/auth";
import axios from "axios";
import { GET_PARTNER, SEARCH_PARTNER, GET_ACCOUNT } from "constants/urls";
import { FaSearch } from "react-icons/fa";
import Cookies from "js-cookie";
// import { IconName } from "react-icons/bi";

const Partner = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [partner, setPartner] = React.useState();
  const [key, setKey] = React.useState("");
  const [account, setAccount] = React.useState();
  const [userID, setUserID] = React.useState();
  let id;

  const _onSearch = () => {
    setLoading(true);
    axios
      .get(SEARCH_PARTNER, {
        headers: {
          Authorization: `Bearer ${Cookies.get("USER")}`,
        },
        params: {
          search: key,
          id: userID,
        },
      })
      .then((res) => {
        setPartner(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });
  };

  React.useEffect(() => {
    axios
      .get(GET_ACCOUNT, {
        headers: {
          Authorization: `Bearer ${Cookies.get("USER")}`,
        },
      })
      .then((res) => {
        id = `${res.data.user.id}`;
        setUserID(id);
        axios
          //.get(`http://localhost:8000/api/searchPartnerByUserID/`, {
            .get(GET_PARTNER, {
            headers: {
              Authorization: `Bearer ${Cookies.get("USER")}`,
            },
            params: {
              id: id,
            },
          })
          .then((rus) => {
            setLoading(false);
            setPartner(rus.data);
          })
          .catch((errr) => {
            setLoading(false);
            setError(true);
            console.warn(errr);
          });
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });

    return () => {};
  }, []);

  var no = 1;

  return (
    <div>
      <Container style={{marginTop: "150px"}} >
        <Row>
          <Col sm={8}>
            <h3>List Partner</h3>
          </Col>
          <Col sm={4}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search Partner"
                aria-label="Search Partner"
                aria-describedby="basic-addon2"
                type="text"
                placeholder="Search Partner"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={_onSearch}>
                  <FaSearch />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm={12}>
            <hr />
          </Col>
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
                {loading ? (
                  <tr>
                    <td colspan={6}>
                      <Spinner
                        animation="border"
                        variant="primary"
                        className="d-flex justify-content-center ml-auto mr-auto"
                      >
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </td>
                  </tr>
                ) : (
                  partner?.map((p) => {
                    return (
                      <tr>
                        <td>{no++}</td>
                        <td>{p.name}</td>
                        <td>{p.phone_number}</td>
                        <td>{p.address}</td>
                        <td>{p.email}</td>
                        <td></td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partner;
