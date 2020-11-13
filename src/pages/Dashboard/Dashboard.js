/*
  Ini halaman dashboard, sebenernya gak sehat cara setstate kayak gini, harusnya pake useReducer
  karena tiap setState itu komponennya rerender (ngefek ke performa nanti). 
  Cuman karena biar simpel ya gini dulu aja gpp (useReducer agak mbingungi)

  Disini pas baru render component, fungsi didalam useEffect kepanggil, dia ngefetch API dari API-nya
  Studio Ghibli (disclaimer: aku bukan wibu). Fetchnya pake axios biar gampang, terus render sesuai
  kondisi state film / error / loading pake inline conditional.
*/

import React from "react";
import { Container, Jumbotron, Row, Col, Table,Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_PARTNER } from "constants/urls";
import { FaUser } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [partner, setPartner] = React.useState();

  React.useEffect(() => {
    axios
      .get(GET_PARTNER)
      .then((res) => {
        setLoading(false);
        setPartner(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });
    return () => {};
  }, []);

  const _onLogout = () => {
    logout();
    history.replace("/");
  };

  const fakeData = [
    {
      name: "Kucing1",
      email: "alfianhaidar@gmail.com",
      number: "081554018883",
    },
    {
      name: "Kucing2",
      email: "alfianhaidar@gmail.com",
      number: "081554018883",
    },
    {
      name: "Kucing3",
      email: "alfianhaidar@gmail.com",
      number: "081554018883",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Jumbotron
              className={classes.jumbotron}
              style={{ backgroundColor: "white" }}
            >
              <Row>
                <Col>
                  <Row className={classes.topLeftBoxRow}>
                    <FaUser className={classes.iconSize} />
                  </Row>
                  <Row className={classes.topLeftBoxRow}>
                    <p className={classes.topLeftBoxCount}>196</p>
                  </Row>
                  <Row className={classes.topLeftBoxDesc}>
                    <p>Total Costumer</p>
                  </Row>
                </Col>

                <Col>
                  <Row className={classes.topLeftBoxRow}>
                    <RiFileList3Fill className={classes.iconSize} />
                  </Row>
                  <Row className={classes.topLeftBoxRow}>
                    <p className={classes.topLeftBoxCount}>234</p>
                  </Row>
                  <Row className={classes.topLeftBoxDesc}>
                    <p>Total Invoice Created</p>
                  </Row>
                </Col>

                <Col>
                  <Row className={classes.topLeftBoxRow}>
                    <MdLocalShipping className={classes.iconSize} />
                  </Row>
                  <Row className={classes.topLeftBoxRow}>
                    <p className={classes.topLeftBoxCount}>196</p>
                  </Row>
                  <Row className={classes.topLeftBoxDesc}>
                    <p>Total Shipping</p>
                  </Row>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron
              style={{
                backgroundColor: "#4C9EFF",
                marginTop: "50px",
                width: "320px",
                height: "200px",
                padding: "0px",
              }}
            >
              <Row>
                <Col style={{ paddingTop: "40px", paddingLeft: "30px" }}>
                  <p style={{ fontSize: "35px", color: "white" }}>
                    Total
                    <br />
                    Product
                  </p>
                </Col>
                <Col
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "5px",
                    paddingRight: "25px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "70px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    118
                  </p>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
        <Row style={{ marginTop: "-50px" }}>
          <Col>
            <Jumbotron
              style={{
                backgroundColor: "white",
                marginTop: "50px",
                width: "750px",
                height: "400px",
                padding: "0px",
                paddingLeft: "20px",
                paddingTop: "40px",
                paddingRight: "30px",
              }}
            >
              <h2 style={{ paddingBottom: "20px", fontWeight: "bold" }}>
                Weekly Shipping Report
              </h2>
              <Table>
                <thead>
                  <tr>
                    <th></th>
                    <th className={classes.table}>Monday</th>
                    <th className={classes.table}>Tuesday</th>
                    <th className={classes.table}>Wednesday</th>
                    <th className={classes.table}>Thursday</th>
                    <th className={classes.table}>Friday</th>
                    <th className={classes.table}>Saturday</th>
                    <th className={classes.table}>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Jumbotron
                        style={{
                          backgroundColor: "green",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          marginBottom: "0px",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        IN
                      </Jumbotron>
                    </td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>2</td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Jumbotron
                        style={{
                          backgroundColor: "red",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          marginTop: "0px",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        OUT
                      </Jumbotron>
                    </td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>2</td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>1</td>
                    <td className={classes.table}>1</td>
                  </tr>
                </tbody>
              </Table>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron
              style={{
                backgroundColor: "white",
                marginTop: "50px",
                width: "320px",
                height: "400px",
                paddingTop: "20px",
                paddingLeft: "20px",
              }}
            >
              <div id="anchor">
                <h3 style={{ paddingBottom: "20px", fontWeight: "bold" }}>
                  Partner List
                </h3>
                <Table borderless size="sm" style={{ fontSize: "75%" }}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number</th>
                    </tr>
                  </thead>
                  <tbody>
                  {loading ? (
                    <Row>
                      <Col>
                        <Spinner
                          animation="border"
                          variant="primary"
                          className="d-flex justify-content-center ml-auto mr-auto"
                        >
                          <span className="sr-only">Loading...</span>
                        </Spinner>
                      </Col>
                    </Row>
                  ) : partner?.map((p) => {
                    return (
                            <tr>
                              <td>{p.name}</td>
                              <td>{p.email}</td>
                              <td>{p.phone_number}</td>
                            </tr>
                          );
                        })
                      }
                  </tbody>
                </Table>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
