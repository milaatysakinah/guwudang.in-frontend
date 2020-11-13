/*
  Ini halaman login, sebenernya gak sehat cara setstate kayak gini, harusnya pake useReducer
  karena tiap setState itu komponennya rerender (ngefek ke performa nanti). 
  Cuman karena biar simpel ya gini dulu aja gpp (useReducer agak mbingungi)
*/

import React from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { login } from "utils/auth";
import LoginBox from "./Login.module.css";
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
    <div className={LoginBox.body}>
      <h1 style={{ paddingTop: "70px" }} className={LoginBox.outboxTitle}>
        <b>
          Welcome <br />
          to Guwudang.in
        </b>
      </h1>
      <Container className="mt-2">
        <Form className={LoginBox.authInner}>
          <h3 className={LoginBox.inboxTitle}>Sign In with email</h3>
          <Alert variant="primary">
            <span className={classes.font}>Email: </span>
            kucing1@gmail.com,
            <span className={classes.font}> Password: </span>
            kucing1
          </Alert>
          {error && <Alert variant="danger">Salah bos</Alert>}
          <div className="auth-inner">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="&#xF007; Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                className="rounded mb-200"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={_onSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Home;
