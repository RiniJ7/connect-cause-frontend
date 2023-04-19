import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Stack } from "@mui/material";

export default function Header(props) {
    return (
        <div>
            <header>
                <nav>
                    <h1>{props.title}</h1>

                    <Button className="Button">{props.choice1}</Button>
                    <Button className="Button">
                        <Link to="/">{props.choice2}</Link>
                    </Button>

                    <div>
                        <h4>{props.subtitle}</h4>
                    </div>
                </nav>
            </header>
        </div>
    );
}
