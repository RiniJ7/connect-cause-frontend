import React from "react";
import "./Signupform.css";

export default function Signupform(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <button className="button">{props.firstname}</button>
      <button className="button">{props.lastname}</button>
      <button className="button">{props.username}</button>
      <button className="button">{props.email}</button>
      <button className="button">{props.password}</button>      
    </div>
  );
}
