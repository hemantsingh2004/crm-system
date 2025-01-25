import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Entry.style.css";
import { Login } from "../../components/login/Login.comp";
import { PasswordReset } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please enter email and password");
    }
    // TODO: call login API
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter email");
    }
    // TODO: call reset password API
  };

  const formSwitcher = formType => {
    setFormLoad(formType);
  }

  return (
    <div className="entry-page bg-info">
      {formLoad === "login" ? (
        <Container className="form-box w-50">
          <Login
            handleOnChange={handleOnChange}
            email={email}
            password={password}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          />
        </Container>
      ) : (
        <Container className="form-box w-50">
          <PasswordReset
            handleOnChange={handleOnChange}
            email={email}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
          />
        </Container>
      )}
    </div>
  );
};

export default Entry;