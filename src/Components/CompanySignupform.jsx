import React, { useState } from "react";
import "../styles/App.css";
import { Button, ButtonGroup, Stack } from "@mui/material";

export function CompanySignupform(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const company = {
    firstName,
    lastName,
    email,
    password,
  };

  const signUpCompany = async (event) => {
    event.preventDefault(); //prevents from rerouting to /? (legacy functionality for sending form data in browsers)
    try {
      const response = await fetch("/api/authenticate/signup/company", {
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
        const companyData = await response.json();
        console.log("response data is: ", companyData);
        props.setLoggedInToken(companyData.token);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={signUpCompany}>
        <h3>{props.title}</h3>
        <br />
        <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your first name"
            name="name"
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            name="lastName"
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
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
            Sign Up
          </Button>
          <br />
          <p>
            Already have an account?&nbsp;
            <a
              onClick={() => {
                props.setSigninSelected(true);
                props.setSignupSelected(false);
              }}
            >
              Log In
            </a>
          </p>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}
