import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Signupform } from "../components/Signupform.jsx";
import { Signinform } from "../components/Signinform.jsx";
import { useState } from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";

import "../styles/App.css";

export default function HomePage(props) {
    const [signupSelected, setSignupSelected] = useState([false]);
    const [signinSelected, setSigninSelected] = useState([false]);

    let [ButtonName1, setButtonName1] = useState("");
    let [ButtonName2, setButtonName2] = useState("");

    ButtonName1 = "Sign In";
    ButtonName2 = "Sign Up";
    return (
        <div>
            <main>
                <div>
                    <h2>Volunteer Signup</h2>
                    {/* <Button>{props.signin}</Button> */}
                    <Button
                        onClick={() => {
                            setSigninSelected(!signinSelected);
                        }}
                    >
                        {ButtonName1}
                    </Button>
                    <Button
                        onClick={() => {
                            setSignupSelected(!signupSelected);
                        }}
                    >
                        {ButtonName2}
                    </Button>
                    <Routes>
                        <Route path="/home" element={<p></p>} />
                        {signinSelected == true && <Route path="/" element={<Signinform setLoggedInToken={setLoggedInToken} title="Sign In" />} />}

                        <Route path="/home" element={<p></p>} />
                        {signupSelected == true && <Route path="/" element={<Signupform setLoggedInToken={setLoggedInToken} title="Sign Up Today" />} />}
                    </Routes>
                </div>
            </main>
        </div>
    );
}
