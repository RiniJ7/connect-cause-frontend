import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
            <nav>
                <button className="button">{props.choice1}</button>
                <button className="button">
                    <Link to="/">{props.choice2}</Link>
                </button>
            </nav>

            <div>
                <h2>{props.subtitle}</h2>
            </div>
        </div>
    );
}
