import React from "react";
import "../../styles/Footer.css";

export default function Header(props) {
    return (
        <div className="footer">
            <h1 className="font">{props.note}</h1>
        </div>
    );
}
