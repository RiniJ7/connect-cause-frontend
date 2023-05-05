import React, { useContext, useState } from "react";
import "../styles/App.css";
import { Button } from "@mui/material";
import { AllInterests } from "./Interests.jsx";
import { useAuth } from "../providers/AuthProvider";

export default function VolunteerProfileForm(props) {
  //setting initial state of the error message and profile page fields to empty string
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const { user, setUser } = useAuth();

  const volunteerProfileDetails = {
    _id: user.userType,
    firstName,
    lastName,
    aboutMe,
    linkedIn,
    profilePicture,
  };

  const createUserProfile = async (event) => {
    event.preventDefault(); //prevents from rerouting to /? (legacy functionality for sending form data in browsers)
    try {
      //fetch the one connect to the user profile
      const response = await fetch("api/volunteers/:_id", {
        // const response = await fetch(`api/volunteers/:${_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(volunteerProfileDetails),
      });
      if (!response.ok) {
        console.log("You encountered an error");
        const error = await response.json();
        setErrorMessage(error.message);
      } else {
        const newUserProfile = await response.json();
        console.log("response data is: ", newUserProfile);
        setUser({
          ...user,
          newUserProfile,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="width-style">
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
            </form>

            <div className="form-group">
              {/* // what does this do */}
              <Button className="form-submit-btn" type="submit" onClick={createUserProfile}>
                Submit your profile
              </Button>

              <br />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
