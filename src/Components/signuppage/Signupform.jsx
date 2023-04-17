import React from "react";
import "./Signupform.css";

export default function Signupform(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <button className="button">{props.email}</button>
      <button className="button">{props.password1}</button>
      <button className="button">{props.password2}</button>
      <button className="button">{props.confirm}</button>     
    </div>
  );
}
