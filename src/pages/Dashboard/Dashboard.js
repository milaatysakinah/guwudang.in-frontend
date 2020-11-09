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
  Container,
  Nav,
  Navbar,
  Jumbotron,
  Row,
  Col,
  Spinner,
  Alert,
  Table,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import MyNavbar from "../Navbar.js";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
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
    return () => {};
  }, []);

  const _onLogout = () => {
    logout();
    history.replace("/");
  };

  const fakeData = [
    {
      name : "Kucing1",
      email : "alfianhaidar@gmail.com",
      number : "081554018883"
    },
    {
      name : "Kucing2",
      email : "alfianhaidar@gmail.com",
      number : "081554018883"
    },
    {
      name : "Kucing3",
      email : "alfianhaidar@gmail.com",
      number : "081554018883"
    },
  ]

  return (
    <div>
      <Container>
        <Row>
          <Col> 
            <Jumbotron style={{backgroundColor:"white", marginTop:"50px", width:"750px", height:"200px", paddingTop:"40px"}}>
                <Row>
                  <Col>
                    <Row style={{paddingLeft:"110px"}}>
                      <FaUser style={{width:"50px", height:"50px"}}/>
                    </Row>
                    <Row style={{paddingLeft:"110px"}}>
                      <p style={{paddingLeft:"5px", paddingTop : "10px", fontWeight:"bold", fontSize:"20px"}}>196</p>
                    </Row>
                    <Row style={{paddingLeft:"85px"}}>
                      <p>Total Costumer</p>
                    </Row>
                  </Col>

                  <Col>
                    <Row style={{paddingLeft:"100px"}}>
                      <FaUser style={{width:"50px", height:"50px"}}/>
                    </Row>
                    <Row style={{paddingLeft:"100px"}}>
                      <p style={{paddingLeft:"5px", paddingTop : "10px", fontWeight:"bold", fontSize:"20px"}}>196</p>
                    </Row>
                    <Row style={{paddingLeft:"75px"}}>
                      <p>Total Costumer</p>
                    </Row>
                  </Col>

                  <Col>
                    <Row style={{paddingLeft:"90px"}}>
                      <FaUser style={{width:"50px", height:"50px"}}/>
                    </Row>
                    <Row style={{paddingLeft:"90px"}}>
                      <p style={{paddingLeft:"5px", paddingTop : "10px", fontWeight:"bold", fontSize:"20px"}}>196</p>
                    </Row>
                    <Row style={{paddingLeft:"65px"}}>
                      <p>Total Costumer</p>
                    </Row>
                  </Col>
                </Row>
            </Jumbotron> 
          </Col>
          <Col>
            <Jumbotron style={{backgroundColor:"#4C9EFF", marginTop:"50px", width:"320px", height:"200px", padding:"0px"}}>
                <Row >
                  <Col style={{paddingTop:"40px", paddingLeft:"30px"}}>
                    <p style={{fontSize:"35px", color:"white"}}>Stock<br/>Capacity</p>
                  </Col>
                  <Col style={{paddingTop:"40px", paddingLeft: "5px", paddingRight: "25px"}}>
                    <p style={{fontSize:"70px", color:"white", fontWeight:"bold"}}>75%</p>
                  </Col>
                </Row>
            </Jumbotron>      
          </Col> 
        </Row>
        <Row style={{marginTop:"-50px"}}>
          <Col>      
              <Jumbotron style={{backgroundColor:"white", marginTop:"50px", width:"750px", height:"400px", padding:"0px", paddingLeft:"20px", paddingTop:"40px", paddingRight:"30px"}}>
                <Table >
                  <thead>
                    <tr>
                      <th></th>
                      <th style={{paddingTop:"20px", textAlign:"center"}}>Monday</th>
                      <th style={{paddingTop:"20px", textAlign:"center"}}>Tuesday</th>
                      <th style={{paddingTop:"20px", textAlign:"center"}}>Wednesday</th>
                      <th style={{paddingTop:"20px", textAlign:"center"}}>Thursday</th>
                      <th style={{paddingTop:"20px", textAlign:"center"}}>Friday</th>
                      <th style={{paddingTop:"20px", textAlign:"center"}}>Saturday</th>
                      <th style={{paddingTop:"20px", textAlign:"center"}}>Sunday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Jumbotron style={{backgroundColor:"green", paddingLeft:"20px", paddingRight:"20px", paddingTop:"10px", paddingBottom:"10px", marginBottom:"0px", color:"white", textAlign:"center"}}>IN</Jumbotron></td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>2</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                    </tr>
                    <tr>
                      <td><Jumbotron style={{backgroundColor:"red", paddingLeft:"20px", paddingRight:"20px", paddingTop:"10px", paddingBottom:"10px", marginTop:"0px", color:"white", textAlign:"center"}}>OUT</Jumbotron></td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>2</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                      <td style={{paddingTop:"20px", textAlign:"center"}}>1</td>
                    </tr>
                  </tbody>
                  </Table>
              </Jumbotron> 
            </Col>
            <Col>
              <Jumbotron style={{backgroundColor:"white", marginTop:"50px", width:"320px", height:"400px", paddingTop:"20px", paddingLeft:"20px"}}>
                  <div id="anchor">
                    <h3>Customer List</h3>
                    <Table borderless size="sm" style={{fontSize:"75%"}}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Number</th>
                        </tr>
                      </thead>
                      <tbody>
                          {fakeData.map((data) => (
                            <tr>
                              <td>{data.name}</td>
                              <td>{data.email}</td>
                              <td>{data.number}</td>
                          </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>
              </Jumbotron>      
            </Col>
        </Row>
      </Container>
      {/* <Container> 
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
        ) : film ? (
          film
            .reduce(function (accumulator, currentValue, currentIndex, array) {
              if (currentIndex % 4 === 0)
                accumulator.push(array.slice(currentIndex, currentIndex + 4));
              return accumulator;
            }, [])
            .map((p) => {
              return (
                <Row className="mb-4">
                  {p.map((value) => {
                    return (
                      <Col>
                        <h5>{value.title}</h5>
                        <p>{value.description}</p>
                      </Col>
                    );
                  })}
                </Row>
              );
            })
        ) : (
          error && <Alert variant="danger">Error bang</Alert>
        )}
      </Container>
      */}
    </div>
  );
};

export default Dashboard;
