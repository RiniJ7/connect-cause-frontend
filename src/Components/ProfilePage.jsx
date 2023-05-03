import React, {useState, useContext} from 'react';
import "../styles/App.css";
import { Button } from "@mui/material";
import { UserContext } from "../context/UserContext.jsx";
import { AllInterests } from "./Interests.jsx";

export default function ProfilePage(props) {

  return (
    
<div className="profilepage-container">
      <main>
        <div>
          <form className="form" onSubmit={createUserProfile}>
            <h3>{props.title}</h3>
            <br />

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                name="firstName"
                value={firstName}
                required
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                name="lastName"
                value={lastName}
                required
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="About Me">About Me</label>
              <input
                type="text"
                id="aboutMe"
                placeholder="Tell about yourself"
                name="aboutMe"
                value={aboutMe}
                required
                onChange={(event) => setAboutMe(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Profile Picture">Profile Picture</label>
              <input
                type="text"
                id="profilePicture"
                placeholder="Please paste the file path of your image"
                name="profilePicture"
                value={profilePicture}
                onChange={(event) => setProfilePicture(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="LinkedIn">LinkedIn</label>
              <input
                type="text"
                id="LinkedIn"
                placeholder="Please paste the file path of your LinkedIn"
                name="LinkedIn"
                value={linkedIn}
                onChange={(event) => setLinkedIn(event.target.value)}
              />
            </div>

            <div>
              <AllInterests />
            </div>

    <div>ProfilePage</div>
  )

}

