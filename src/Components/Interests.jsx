//I followed this youtube demo to pick the check box concept : https://www.youtube.com/watch?v=UdMSUam0Fe8

//local imports

import { useState } from "react";
import "../styles/App.css";
import { Button } from "@mui/material";

//declaring the function // we might use this in '/Components/VolunteerProfileForm.jsx'

export function AllInterests() {
  //declaring use state as an empty array instead of empty string.
  //here useState returns an array of interests instead of a string

  const [interests, setInterests] = useState([]);

  // checks if the event is set

  const setCheckBox = (event) => {
    const interest = event.target.value;

    // to see the interest selected in console
    console.log(interest);

    //filtering out duplication of interest which is already in the array
    // without this condition every checking and un checking with add the same interest to the new array which is sent to back end
    if (interests.includes(interest)) {
      let newInterests = interests.filter((val) => val !== interest);
      setInterests([...newInterests]);
    } else {
      // the new interests array now includes both previously selected and newly selected array elements
      setInterests([...interest, interests]);
    }
  };
  //the fields for individual check box

  return (
    <>
      <fieldset>
        <legend>Choose your interests</legend>
        <input
          className="form-box"
          type="checkbox"
          name="interest1"
          value="interest1"
          onChange={setCheckBox}
        />

        <input
          className="form-box"
          type="checkbox"
          name="interest2"
          value="interest2"
          onChange={setCheckBox}
        />

        <input
          className="form-box"
          type="checkbox"
          name="interest3"
          value="interest3"
          onChange={setCheckBox}
        />

        <input
          className="form-box"
          type="checkbox"
          name="interest4"
          value="interest4"
          onChange={setCheckBox}
        />

        <input
          className="form-box"
          type="checkbox"
          name="interest5"
          value="interest5"
          onChange={setCheckBox}
        />

        <input
          className="form-box"
          type="checkbox"
          name="interest6"
          value="interest6"
          onChange={setCheckBox}
        />

        <Button type="submit">Submit</Button>
      </fieldset>
    </>
  );
}
