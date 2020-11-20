import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Spinner,
  Jumbotron,
} from "react-bootstrap";
import Gambar from "./../../asset/Sepatu.png";
import classes from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PRODUCT_DETAIL, GET_PRODUCT } from "constants/urls";

const Detail = () => {
  const [loading, setLoading] = React.useState(true);
  const [err, setError] = React.useState(false);
  const [product, setProduct] = React.useState();
  const [productDetail, setProductDetail] = React.useState();
  const [productType, setProductType] = React.useState();
  const { id } = useParams();
  var type = 0;

  React.useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        type = res.data.product_type_id;
        console.log(type);
        setLoading(false);

        axios
          .get(`http://localhost:8000/api/productType/${type}`)
          .then((res) => {
            console.log(res.data);
            setProductType(res.data);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setError(true);
            console.warn(err);
          });
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });

    console.log(id);
    axios
      .get(PRODUCT_DETAIL, {
        params: {
          search: id,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProductDetail(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });
  }, []);

  return (
    <div>
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
      ) : (
        <>
          <Container>
            <Row>
              <Col>
                <img src={Gambar} className={classes.round} />
              </Col>

              <Col style={{ marginTop: "100px" }}>
                {/*Judul Barang  */}
                <Row className={classes.Text1}>
                  <h1 style={{ color: "#707070" }}>{product?.product_name}</h1>
                </Row>
                {/*Kode Barang*/}
                <Row className={classes.Text2}>
                  <h4 style={{ color: "#707070" }}>ID : {product?.id}</h4>
                </Row>
                {/*Deskripsi*/}
                <Row className={classes.Text3}>
                  <h5 style={{ color: "#707070" }}>{product?.description}</h5>
                </Row>
                {/*Harga Barang*/}
                <Row className={classes.Text4}>
                  <h4 style={{ color: "#707070" }}>Rp. {product?.price}</h4>
                </Row>
                {/*type*/}
                <Row className={classes.Text5}>
                  <h4 style={{ color: "#707070" }}>
                    Type : {productType?.product_type_name}
                  </h4>
                </Row>
                {/*Table*/}
                <Row>
                  <Table responsive="sm" borderless>
                    <thead
                      style={{
                        borderBottom: "solid",
                        borderBottomColor: "#707070",
                      }}
                      className="text-center"
                    >
                      <tr>
                        <th>Stock</th>
                        <th></th>
                        <th>Expired Date</th>
                        <th></th>
                        <th>In Date</th>
                      </tr>
                    </thead>

                    <tbody className="text-center">
                      {productDetail?.map((p) => {
                        return (
                          <tr>
                            <td>{p?.product_quantity}</td>
                            <td></td>
                            <td>{p?.exp_date}</td>
                            <td></td>
                            <td>{p?.in_date}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    {/* <tbody className="text-center"> 
                                        <tr>
                                            <td>17 PCS</td>
                                            <td></td>
                                            <td>31/03/2020</td>
                                            <td></td>
                                            <td>17/01/2020</td>
                                        </tr>
                                    </tbody>*/}
                  </Table>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}
      ;
    </div>
  );
};

export default Detail;