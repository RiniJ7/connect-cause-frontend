import React, { useState } from "react"; 
import "./Signinform.css";

export function Signinform(props) {
  const [errorMessage, setErrorMessage] = useState();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("api/authenticate/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usernameOrEmail,
          password,
        }),
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
    <div className="header">
      <h3>{props.title}</h3>
      <form onSubmit={signIn}>
        <label>Username or Email:</label>
        <input
          onChange={(event) => setUsernameOrEmail(event.target.value)}
        />
        <label>Password:</label>
        <input onChange={(event) => setPassword(event.target.value)} />

        <input type="submit" value="Log In" />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
}