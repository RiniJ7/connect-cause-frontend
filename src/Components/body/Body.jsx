import React from "react";
import "./Body.css";

export default function Header(props) {
  return (
    <div className="body">
      <button>{props.signin}</button>
      <button>{props.signup}</button>
      
    </div>
  );
}