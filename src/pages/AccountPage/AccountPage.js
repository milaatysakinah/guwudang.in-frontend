import React from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import classes from "./AccountPage.module.css";
import { useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_ACCOUNT } from "constants/urls";
import Cookies from "js-cookie";

const AccountPage = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [account, setAccount] = React.useState();

  React.useEffect(() => {
    axios
      .get(GET_ACCOUNT, {
        headers: {
          Authorization: `Bearer ${Cookies.get("USER")}`,
        },
      })
      .then((res) => {
        setAccount(res.data.user);
        setLoading(false);
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

  return (
    <div>
      <Container fluid style={{marginTop: "150px"}}>
        <Row className="justify-content-center">
          <Col style={{ height: "60vh" }}>
            <Container fluid>
              <Row style={{ marginTop: "40px" }}>
                <Container>
                  
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
                    <Row>
                    <Col>
                      <Image
                        className={classes.profilePicture}
                        src={account?.profile_picture}
                        roundedCircle
                      />
                    </Col>
                  </Row>
                      <Row>
                        <Col>
                          <Row>
                            <p className={classes.cardTitle}>Username</p>
                          </Row>
                          <Row>
                            <Card className={classes.cardBody}>
                              <Card.Body>{account?.username}</Card.Body>
                            </Card>
                          </Row>
                        </Col>
                        <Col>
                          <Row>
                            <p className={classes.cardTitle}>Company Name</p>
                          </Row>
                          <Row>
                            <Card className={classes.cardBody}>
                              <Card.Body>{account?.company_name}</Card.Body>
                            </Card>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <p className={classes.cardTitle}>Email</p>
                          </Row>
                          <Row>
                            <Card className={classes.cardBody}>
                              <Card.Body>{account?.email}</Card.Body>
                            </Card>
                          </Row>
                        </Col>
                        <Col>
                          <Row>
                            <p className={classes.cardTitle}>Phone Number</p>
                          </Row>
                          <Row>
                            <Card className={classes.cardBody}>
                              <Card.Body>{account?.username}</Card.Body>
                            </Card>
                          </Row>
                        </Col>
                      </Row>
                    </>
                  )}
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
