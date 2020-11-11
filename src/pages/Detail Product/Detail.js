import React from 'react'
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import Gambar from './../../asset/LogoBiru.png'

export default function Detail() {
    return (
        <div>
            <Container>
            <Row>
                <Col>
                <img src={Gambar}/>
                </Col>
                <Col>
                {/*Belajar bebs  */}
                    <Row>
                        
                    </Row>

                    <Row>

                    </Row>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
