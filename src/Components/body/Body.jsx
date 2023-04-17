import React from "react";
import "./Body.css";
import { Link, Route, Routes } from "react-router-dom";
import { Signupform } from "../signup-form/Signupform";
import { useState } from "react";

export default function Header(props) {
    const [signupSelected, setSignupSelected] = useState([false]);
    return (
        <div className="body">
            <>
                <Routes>
                    <Route path="/home" element={<p></p>} />
                    {signupSelected == true && <Route path="/" element={<Signupform />} />}
                </Routes>
                {/* <button>{props.signin}</button> */}
                <button
                    onClick={() => {
                        console.log("clicked it!");
                        setSignupSelected(!signupSelected);
                        console.log(typeof signupSelected);
                    }}
                >
                    {props.signup}
                </button>
            </>
        </div>
    );
}
