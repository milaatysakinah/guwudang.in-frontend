import React from "react";
import { Button, Container, Form, Alert, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { login } from "utils/auth";
import axios from "axios";
import { LOGIN } from "constants/urls";
import classes from "./Login.module.css";

const Home = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    if (email || password) {
      setError(false);
    }
    return () => {};
  }, [email, password]);

  const _onSubmit = () => {
    axios
      .post(LOGIN, {
        email: email,
        password: password,
      })
      .then((res) => {
        login({
          token: res.data.token,
        });
        history.push("/dashboard");
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <div className={classes.body}>
      <h1 style={{ paddingTop: "70px" }} className={classes.outboxTitle}>
        <b>
          Welcome <br />
          to Guwudang.in
        </b>
      </h1>
      <Col>
        <Row>
        <Container className="mt-2">
        <Form className={classes.authInner}>
          <h3 className={classes.inboxTitle}>Sign In with email</h3>
          {error && <Alert variant="danger">Email atau Password <br /> yang anda masukkan salah</Alert>}
          <div>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                style={{ borderRadius: "20px" }}
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                style={{ borderRadius: "20px" }}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              className={classes.button}
              style={{
                borderRadius: "20px",
                backgroundColor: "#1F6CB0",
                marginBottom: "100px",
              }}
              variant="primary"
              onClick={_onSubmit}
            >
              LOGIN
            </Button>
          </div>
        </Form>
      </Container>
        </Row>
        <Row className="justify-content-center">
            <a href="https://drive.google.com/drive/u/0/folders/1WmttgvafI3H9pqnqfyPB6jQN2ZqSREdi">
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="250" height="100" alt="logo"/>
            </a>
        </Row>
        <Row className="justify-content-center">
            <a href="https://drive.google.com/drive/u/0/folders/1WmttgvafI3H9pqnqfyPB6jQN2ZqSREdi">
              <img src="https://v6f7u6f8.rocketcdn.me/wp-content/uploads/2019/06/windows-button.png" width="250" height="100" alt="logo"/>
            </a>
        </Row>
      </Col>
      
    </div>
  );
};
export default Home;