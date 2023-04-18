import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Signupform } from "../signup-form/Signupform";
import { useState } from "react";

export default function Header(props) {
    const [signupSelected, setSignupSelected] = useState([false]);
    const [loggedInToken, setLoggedInToken] = useState("");

    return (
        <div className="main">
            <>
                <h2>Volunteer Signup</h2>
                <Routes>
                    <Route path="/home" element={<p></p>} />
                    {signupSelected == true && <Route path="/" element={<Signupform setLoggedInToken={setLoggedInToken} title="Sign Up Today" />} />}
                </Routes>
                {/* <button>{props.signin}</button> */}
                <button
                    onClick={() => {
                        setSignupSelected(!signupSelected);
                    }}
                >
                    {props.signup}
                </button>
                <button
                    onClick={() => {
                        setSignupSelected(!signupSelected);
                    }}
                >
                    {props.signup}
                </button>
            </>
        </div>
    );
}
