import React from "react";
import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";
import classes from "./AccountPage.module.css";
import { useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";

const AccountPage = () => {
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
    history.replace("/login");
  };

  const fakeData = [
    {
      username : "Kucing1",
      companyName : "PT. Converse Indonesia",
      email : "alfianhaidar@gmail.com",
      password : "kucing1ganti"
    },
  ]

  return (
    <div>
      <Container fluid>
        <Row>
          <Col style={{height: "60vh"}}>
            <Container fluid>
              <Row style={{marginTop: "40px"}}>
                <Container>
                  <Row>
                    <Col>
                      <Image
                        className={classes.profilePicture}
                        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        roundedCircle
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row >
                        <p className={classes.cardTitle}>Username</p>
                      </Row>
                      <Row>
                        <Card className={classes.cardBody}>
                          <Card.Body>
                            {fakeData.map((data) => (
                              <p>{data.username}</p>
                            ))}
                          </Card.Body>
                        </Card>
                      </Row>
                    </Col>

                    <Col>
                      <Row >
                        <p className={classes.cardTitle}>Company Name</p>
                      </Row>
                      <Row>
                        <Card className={classes.cardBody}>
                          <Card.Body>
                          {fakeData.map((data) => (
                              <p>{data.companyName}</p>
                            ))}
                          </Card.Body>
                        </Card>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                        <Row >
                          <p className={classes.cardTitle}>Email</p>
                        </Row>
                        <Row>
                          <Card className={classes.cardBody}>
                            <Card.Body>
                            {fakeData.map((data) => (
                              <p>{data.email}</p>
                            ))}
                            </Card.Body>
                          </Card>
                        </Row>
                      </Col>
                    <Col>
                    <Col>
                        <Row >
                          <p className={classes.cardTitle}>Password</p>
                        </Row>
                        <Row>
                          <Card className={classes.cardBody}>
                            <Card.Body>
                            {fakeData.map((data) => (
                              <p>{data.password}</p>
                            ))}
                            </Card.Body>
                          </Card>
                        </Row>
                      </Col>
                    </Col>
                  </Row>
                  <Row>
                  <Button className={classes.logoutBtn} variant="primary" onClick={_onLogout}>
                      Logout
                    </Button>
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
