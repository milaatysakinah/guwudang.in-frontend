import React from "react";
import {
    Button,
    Form,
    InputGroup,
    Container,
    Col,
    Row,
    Table,
    Spinner,
} from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { GET_ACCOUNT, GET_PRODUCT_STOCK, SEARCH_PRODUCT } from "constants/urls";
import { FaSearch, FaInfoCircle } from "react-icons/fa";
import Cookies from "js-cookie";

const Product = () => {
    const [loading, setLoading] = React.useState(true);
    const [err, setError] = React.useState(false);
    const [product, setProduct] = React.useState();
    const [key, setKey] = React.useState("");
    const [account, setAccount] = React.useState();
    const [userID, setUserID] = React.useState();
    let id;

    const _onSearch = () => {
        setLoading(true);
        axios
            .get(SEARCH_PRODUCT, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("USER")}`,
                },
                params   : {
                    id : userID,
                    search : key,
                }
            })
            .then((res) => {
                setProduct(res.data);
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
              setAccount(res.data.user);
              setLoading(false);

              axios
                //.get(`http://localhost:8000/api/productStock/`, {
                .get(GET_PRODUCT_STOCK, {  
                    headers: {
                        Authorization: `Bearer ${Cookies.get("USER")}`,
                      },
                    params: {
                        id : id,
                    },
                })
                .then((rus) => {
                    setProduct(rus.data);
                    setLoading(false);
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

        
        return () => { };;
    }, []);

    var no = 1;

    return (
        <div>
            <Container fluid>
                <Row>
                        {/* <NavbarTest /> */}
                        <Container>
                            <br /> <br /> <br />
                            <Row>
                                <Col sm={8}><h3>Inventory List</h3></Col>
                                <Col sm={4}>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search Product"
                                            value={key}
                                            onChange={(e) => setKey(e.target.value)}
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary" onClick={_onSearch}><FaSearch /></Button>                                            
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                                <Col sm={12}><hr /></Col>
                                <Col sm={12}>
                                    <Table responsive="xl" borderless>
                                        <thead className="text-center">
                                            <tr>
                                                <th>#</th>
                                                {/* <th>Gambar</th> */}
                                                <th>Nama Produk</th>
                                                {/* <th>Expire Date</th> */}
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
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
                                            ) : product ?.map((p) => {
                                                return (
                                                        <tr>
                                                            <td>{no++}</td>
                                                            <td>{p.product_name}</td>
                                                            <td>{p.price}</td>
                                                            <td>{p?.total|| "0"}</td>
                                                            <td><Link to={`/detailProduct/${p.id}`}><Button>Detail <FaInfoCircle /></Button></Link></td>
                                                        </tr>
                                                    );
                                                })
                                            }
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