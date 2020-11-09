import React from "react";
import { Col, Container, Nav, Row, Image, Card } from "react-bootstrap";
import classes from "./AccountPage.module.css";

const AccountPage = () => {
  return (
    <div style={{ backgroundColor: "#dde5f1" }}>
      <Container fluid>
        <Row style={{ backgroundColor: "#dde5f1" }}>
          <Col md={10}>
            <Container fluid>
              <Row>
                <Container style={{ height: "100vh" }}>
                  <Row>
                    <Col style={{ justifySelf: "center" }, {}}>
                      <Image
                        className={classes.profilePicture}
                        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        roundedCircle
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <p>Username</p>
                      </Row>
                      <Row>
                        <Card className={classes.card}>
                          <Card.Body>
                            Mirose
                          </Card.Body>
                        </Card>
                      </Row>
                    </Col>

                    <Col>
                      <Card border="dark" className={classes.card}>
                        <Card.Header>Company Name</Card.Header>
                        <Card.Body>
                          <Card.Title>PT.Converse Indonesia</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card border="dark" className={classes.card}>
                        <Card.Header>Email</Card.Header>
                        <Card.Body>
                          <Card.Title>Mirose@gmail.com</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card border="dark" className={classes.card}>
                        <Card.Header>Password</Card.Header>
                        <Card.Body>
                          <Card.Title>PT.Converse Indonesia</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AccountPage;
