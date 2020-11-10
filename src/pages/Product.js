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
import Sidebar from "./Sidebar/Sidebar";
import sidebar from "./Sidebar/Sidebar.module.css";
import Home from "./Home.js";
// import { IconName } from "react-icons/bi";

const Product = () => {
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
        return () => { };;
    }, []);

    return (
        <div>
            <Container fluid>
                <Row>
                    {/* <Col xs={2} className={sidebar.sidebarWrapper}>
                        <Sidebar />
                    </Col> */}
                    {/* <Col xs={10} className={sidebar.pageContentWrapper} style={{ padding: "0" }}> */}

                        {/* <NavbarTest /> */}
                        <br/><br/><br/>
                        <Container>
                            <Row>
                                <Col sm={8}><h3>Inventory List</h3></Col>
                                <Col sm={4}>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Search Product"
                                            aria-label="Search Product"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary"><FaSearch /></Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                                <Col sm={12}><hr /></Col>
                                <Col sm={12}>
                                    <Table responsive="xl" className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Gambar</th>
                                                <th>Nama Produk</th>
                                                <th>Expire Date</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><Image src="holder.js/300x300" roundedCircle /></td>
                                                <td>MH671029 - Moina</td>
                                                <td>21 December 2020</td>
                                                <td>50.000,00</td>
                                                <td>89</td>
                                                <td><Button>Detail <FaInfoCircle /></Button></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td><Image src="holder.js/300x300" roundedCircle /></td>
                                                <td>MH671029 - Moina</td>
                                                <td>21 December 2020</td>
                                                <td>50.000,00</td>
                                                <td>89</td>
                                                <td><Button>Detail <FaInfoCircle /></Button></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td><Image src="holder.js/300x300" roundedCircle /></td>
                                                <td>MH671029 - Moina</td>
                                                <td>21 December 2020</td>
                                                <td>50.000,00</td>
                                                <td>89</td>
                                                <td><Button>Detail <FaInfoCircle /></Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row><Col><hr /></Col></Row>

                        </Container>

                    {/* </Col> */}
                </Row>

            </Container>
        </div> 
    );
};

export default Product;
