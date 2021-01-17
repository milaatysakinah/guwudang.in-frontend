import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { AboutUsData } from "./AboutUsData";
import photoHaidar from "./asset/Haidar.jpg";
import photoHakim from "./asset/Hakim.jpg";
import photoMilati from "./asset/Milati.JPG";
import photoIzzat from "./asset/Izzat.png";
import photoRifki from "./asset/Rifki.png";
import sponsorHive from "./asset/logo-virtuahive-300dpi.png";
import sponsorRasyid from "./asset/logo-rasyidtechnologies-300dpi.png";
import sponsorPTI from "./asset/PTI.png";
import sponsorMaulidan from "./asset/logo-maulidangames-landscape-300dpi.png";
import supportSindika from "./asset/logo-sinergiDimensiInformatika.png";
import supportInstitute from "./asset/logo-rasyidinstitute-300dpi.png";
import supportTrust from "./asset/trustmedis.png";
import supportProfilku from "./asset/logo_profilku-for_light_bg.png";
import supportAlterra from "./asset/Alterra-Logo---Full-Colour-2000x2000.png";

const AboutUs = () => {

    return(
        <div style={{marginTop: "150px", backgroundColor: "#dde5f1"}}>
            <Row className="justify-content-center">
                <p style={{fontWeight: "bold", fontSize: "50px", fontFamily: "'Montserrat', sans-serif;", marginBottom: "30px"}}>About Us</p>
                
                
            </Row>
            <Row className="justify-content-center">
            <p style={{fontWeight: "bold", fontSize: "25px", fontFamily: "'Montserrat', sans-serif;"}}> Developer Team</p>
            </Row>
            <Row className="justify-content-center">
                <Col>
                <Card style={{ width: '18rem', marginLeft: "200px" }}>
                    <Card.Img variant="top" src={photoHaidar} />
                    <Card.Body>
                        <Card.Title>Alfian Haidar</Card.Title>
                        <Card.Text>
                        Developer
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem', marginLeft: "120px" }}>
                    <Card.Img variant="top" src={photoMilati} />
                    <Card.Body>
                        <Card.Title>Milati Rohmatus Sakinah</Card.Title>
                        <Card.Text>
                        Product Owner
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem', marginLeft: "60px" }}>
                    <Card.Img variant="top" src={photoIzzat} />
                    <Card.Body>
                        <Card.Title>Muhammad Izzat</Card.Title>
                        <Card.Text>
                        Developer
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row className="justify-content-center" style={{marginTop: "40px"}} >
                <Col md={2}>
                
                </Col>
                <Col md={4}>
                <Card style={{ width: '18rem', marginLeft: "200px" }}>
                    <Card.Img variant="top" src={photoHakim} />
                    <Card.Body>
                        <Card.Title>Hakim Akbaru Sulthony</Card.Title>
                        <Card.Text>
                        Developer
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card style={{ width: '18rem', marginLeft: "120px" }}>
                    <Card.Img variant="top" src={photoRifki} />
                    <Card.Body>
                        <Card.Title>Rifqi Fajar Ramdani</Card.Title>
                        <Card.Text>
                        Developer
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={2}>
                </Col>
            </Row>
            <Row>
                <Col>
                <Row style={{marginTop: "200px", marginLeft: "60px"}}>
                    <Col md={6} style={{fontWeight: "bold", fontSize: "20px", fontFamily: "'Montserrat', sans-serif;"}}>
                        <p>Sponsored By</p>
                    </Col>
                    <Col md={6} style={{fontWeight: "bold", fontSize: "20px", fontFamily: "'Montserrat', sans-serif;"}}>
                        <p>Supported By</p>
                    </Col>
                    
                    
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <img src={sponsorHive} width="250px" style={{marginLeft: "40px"}} />
                            </Col>
                            <Col>
                                <img src={sponsorRasyid} width="250px" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <img src={sponsorPTI} width="200px" style={{marginLeft: "70px"}} />
                            </Col>
                            <Col>
                                <img src={sponsorMaulidan} width="300px" style={{marginTop: "80px"}}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <img src={supportSindika} width="200px" style={{marginLeft: "40px"}} />
                            </Col>
                            <Col>
                                <img src={supportInstitute} width="250px" />
                            </Col>
                        </Row>
                        <Row style={{marginTop: "40px"}}>
                            <Col>
                                <img src={supportTrust} width="250px" style={{marginLeft: "40px"}} />
                            </Col>
                            <Col>
                                <img src={supportProfilku} width="250px" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src={supportAlterra} width="250px" style={{marginLeft: "40px"}} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row style={{marginTop: "100px", marginLeft: "60px"}}>
                        <p style={{fontWeight: "bold", fontSize: "20px", fontFamily: "'Montserrat', sans-serif;"}} >Our Teacher, Reviewer, and Mentors</p>
                    </Row>
                    <Row style={{marginLeft: "60px", fontSize: "20px", fontFamily: "'Montserrat', sans-serif;"}}>
                    Umi Sa'adah (Dosen Teknik Informatika PENS) <br />
                    Desy Intan Permatasari (Dosen Teknik Informatika PENS) <br />
                    Andhik Ampuh Yunanto (Dosen Teknik Informatika PENS) <br />
                    Maulidan Bagus Afridian Rasyid (Founder Maulidan Games & Rasyid Technologies) <br />
                    Willy Achmat Fauzi (CEO Sindika) <br />
                    Verent Flourencia Irene (UX Designer Maulidan Games) <br />
                    Mayshella Ainun Wakhidah (Mahasiswa Teknik Informatika PENS) <br />
                    Andika Ahmad Ramadhan (Mahasiswa Teknik Informatika PENS) <br />
                    Fandi Ahmad (Mahasiswa Teknik Informatika PENS) <br />
                    Ardian Kristya Pratama (Mobile Developer AlinaMed & Ikkat Inovasi Teknologi) <br />
                    Angga Pradipta Kurnia Putra (CTO AlinaMed & Mobile Developer Ikkat Inovasi Teknologi) <br />
                    Muhammad Alif Pradipta ADP (Mobile Developer Sindika) <br />
                    Rafly Arief Kanza (Owner & Full Stack Developer punggawastudio.com) <br />
                    Ahmad Jarir At Thobari (Software Engineer Rasyid Technologies) <br />
                    Ajie Dibyo Respati (Mahasiswa Teknik Informatika PENS) <br />
                    Achmad Zulkarnain (CEO & Co-Founder TrustMedis) <br />
                    Arie Affianto (Founder Profilku Mobile & Samsung Developer Warrior) <br />
                    Tegar Imansyah ( Software RnD in System Architect Alterra) <br />
                    {/* - */} <br />
                    {/* - */} <br />
                    {/* - */} <br />
                    {/* - */} <br />
                    {/* - */} <br />
                    </Row>
                </Col>
            </Row>
        </div>
    );

};
export default AboutUs;