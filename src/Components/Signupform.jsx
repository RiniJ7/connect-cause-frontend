import React, { useState } from "react";
import "../styles/App.css";

export function Signupform(props) {
    const [errorMessage, setErrorMessage] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const volunteer = {
        firstName,
        lastName,
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
                props.setLoggedInToken(volunteerData.token);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="signup-container">
            <h3>{props.title}</h3>
            <form className="form" onSubmit={signUpVolunteer}>
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
                    <input type="text" id="email" placeholder="Enter your email" name="email" required onChange={(event) => setEmail(event.target.value)} />
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
                    <button className="form-submit-btn" type="submit" title="submit" />
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                </div>
            </form>
        </div>
    );
}
