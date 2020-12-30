import React from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
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
    </div>
  );
};
export default Home;