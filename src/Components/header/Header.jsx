import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <button className="button">{props.choice1}</button>
      <button className="button">{props.choice2}</button>
      <div>
      <h2>{props.subtitle}</h2>
      </div>
    </div>
  );
}
