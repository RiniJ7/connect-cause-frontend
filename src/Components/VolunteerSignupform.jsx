import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../providers/AuthProvider.jsx";

import { Button } from "@mui/material";
import "../styles/App.css";

export function VolunteerSignupform(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { login, user } = useAuth();

  const signUpVolunteer = async (event) => {
    event.preventDefault(); //prevents from rerouting to /? (legacy functionality for sending form data in browsers)
    try {
      const response = await fetch("/api/authenticate/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: password,
          modelType: "Volunteer",
        }),
      });
      if (!response.ok) {
        console.log("You encountered an error");
        const error = await response.json();
        setErrorMessage(error.message);
      } else {
        const volunteerData = await response.json();
        // console.log("response data is: ", volunteerData);
        // console.log(`token is ${volunteerData.token}`);
        setUser({ ...user, token: volunteerData.token });
        navigate("/profile/volunteer");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log("user context", user);

  return (
    <div className="form-container">
      <form className="form" onSubmit={signUpVolunteer}>
        <h3>{props.title}</h3>
        <br />
        {/* <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your first name"
            name="name"
            value={userState.firstName}
            required
            onChange={(e) => setUserState({ ...userState, firstName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            name="lastName"
            value={userState.lastName}
            required
            onChange={(e) => setUserState({ ...userState, lastName: e.target.value })}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            placeholder="Enter a password"
            name="password"
            value={password}
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
