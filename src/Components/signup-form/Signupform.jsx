import React, { useState } from "react";
import "./Signupform.css";

export function Signupform(props) {
    const [errorMessage, setErrorMessage] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const volunteer = {
        firstName,
        lastName,
        username,
        email,
        password,
    };

    const signUpVolunteer = async (event) => {
        event.preventDefault(); //prevents from rerouting to /? (legacy functionality for sending form data in browsers)
        try {
            const response = await fetch("api/authenticate/signup/volunteer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(volunteer),
            });
            if (!response.ok) {
                console.log("You encountered an error");
                const error = await response.json();
                setErrorMessage(error.message);
            } else {
                const volunteerData = await response.json();
                console.log("response data is: ", volunteerData);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="header">
            <h1>{props.title}</h1>
            <form onSubmit={signUpVolunteer}>
                <label>First Name:</label>
                <input onChange={(event) => setFirstName(event.target.value)} />
                <label>Last Name:</label>
                <input onChange={(event) => setLastName(event.target.value)} />
                <label>Username:</label>
                <input onChange={(event) => setUsername(event.target.value)} />
                <label>Email:</label>
                <input onChange={(event) => setEmail(event.target.value)} />
                <label>Password:</label>
                <input onChange={(event) => setPassword(event.target.value)} />

                <input type="submit" title="submit" />
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>

            {/* <button className="button">{props.firstname}</button>
            <button className="button">{props.lastname}</button>
            <button className="button">{props.username}</button>
            <button className="button">{props.email}</button>
            <button className="button">{props.password}</button> */}
        </div>
    );
}
