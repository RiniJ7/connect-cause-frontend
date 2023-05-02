import React, { useState } from "react";
// import "./Signinform.css";
import { Button, ButtonGroup, Stack } from "@mui/material";

export function CompanySigninForm(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const company = {
    email,
    password,
  };

  const signInCompany = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/authenticate/signin/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(company),
      });
      if (!response.ok) {
        console.log("You encountered an error");
        const error = await response.json();
        setErrorMessage(error.message);
      } else {
        const userData = await response.json();
        console.log("response data is: ", userData);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={signInCompany}>
        <h3>{props.title}</h3>
        <br />
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            placeholder="Enter a password"
            name="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <Button className="form-submit-btn" type="submit" title="submit">
            Sign In
          </Button>
          <br />
          <p>
            Don't have an account?&nbsp;
            <a
              onClick={() => {
                props.setSignupSelected(true);
                props.setSigninSelected(false);
              }}
            >
              Create One
            </a>
          </p>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}
