import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";

import "../styles/App.css";

export default function VolunteerProfilePage(props) {
    return (
        <div>
            <main>
                <div className="body">
                    <div>{/* <p>{props.Volunteer.name}</p>  */}</div>
                    <div>
                        <h2>Volunteer Profile</h2>
                    </div>
                </div>
            </main>
        </div>
    );
}
