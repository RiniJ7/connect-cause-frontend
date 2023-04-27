import React, { useState, useContext } from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { useAuth } from "../providers/AuthProvider";

export function VolunteerSigninForm(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { userState, setUserState } = useContext(UserContext);

  const volunteer = {
    email,
    password,
  };

  const signInVolunteer = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("api/authenticate/volunteer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(volunteer),
      });
      if (!response.ok) {
        console.log("You encountered an error");
        const error = await response.json();
        setErrorMessage(error.message);
      } else {
        const userData = await response.json();

        console.log("response data is: ", userData);
        setUserState({ ...userState, token: userData.token });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={signInVolunteer}>
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
