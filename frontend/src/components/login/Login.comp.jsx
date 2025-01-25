import React from "react";
import { use } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Login = ({
  handleOnChange,
  email,
  password,
  handleOnSubmit,
  formSwitcher,
}) => {
  return (
    <Container className="text-start">
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form className="fs-4" autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                value={password}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("reset")} className="fs-6">
            Forget Password
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
