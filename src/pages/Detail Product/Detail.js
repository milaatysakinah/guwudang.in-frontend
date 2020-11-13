import React from "react";
import { Container, Row, Col, Table, Jumbotron } from "react-bootstrap";
import Gambar from "./../../asset/Sepatu.png";
import classes from "./Detail.module.css";

export default function Detail() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={Gambar} className={classes.round} />
          </Col>
          <Col style={{ marginTop: "100px" }}>
            {/*Judul Barang  */}
            <Row className={classes.Text1}>
              <h1 style={{ color: "#707070" }}>Moina Blue</h1>
            </Row>
            {/*Kode Barang*/}
            <Row className={classes.Text2}>
              <h4 style={{ color: "#707070" }}>MH671029</h4>
            </Row>
            {/*Deskripsi*/}
            <Row className={classes.Text3}>
              <h5 style={{ color: "#707070" }}>
                Blue Light Shoes Made by Converse Indonesia, First time Load in
                Warehouse safe carefully in warm place.
              </h5>
            </Row>
            {/*Harga Barang*/}
            <Row className={classes.Text4}>
              <h4 style={{ color: "#707070" }}>IDR 50.000</h4>
            </Row>
            {/*type*/}
            <Row className={classes.Text5}>
              <h4 style={{ color: "#707070" }}>Type : Shoes, Fashion</h4>
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
                  <tr>
                    <td>17 PCS</td>
                    <td></td>
                    <td>31/03/2020</td>
                    <td></td>
                    <td>17/01/2020</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
