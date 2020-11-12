import React from 'react'
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import Gambar from './../../asset/DetailProduct.PNG'

export default function Detail() {
    return (
        <div>
            <Container>
            <Row>
            <img src={Gambar}/>
            </Row>
            </Container>
        </div>
    )
}
