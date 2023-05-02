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
        <div className="flex-container">
          <div>
            <input
              className="form-group"
              type="checkbox"
              name="interest1"
              value="interest1"
              placeholder="interest1"
              onChange={setCheckBox}
            />
            <label htmlFor="interest1"> Interest1 </label>
          </div>
          <div>
            <input
              className="form-group"
              type="checkbox"
              name="interest2"
              value="interest2"
              placeholder="interest2"
              onChange={setCheckBox}
            />
            <label htmlFor="interest2"> Interest2 </label>
          </div>
          <div>
            <input
              className="form-group"
              type="checkbox"
              name="interest3"
              value="interest3"
              placeholder="interest3"
              onChange={setCheckBox}
            />
            <label htmlFor="interest3"> Interest3 </label>
          </div>
        </div>

        <div className="flex-container">
          <div>
            <input
              className="form-group"
              type="checkbox"
              name="interest4"
              value="interest4"
              placeholder="interest4"
              onChange={setCheckBox}
            />
            <label htmlFor="interest4"> Interest4 </label>
          </div>
          <div>
            <input
              className="form-group"
              type="checkbox"
              name="interest5"
              value="interest5"
              background
              placeholder="interest5"
              onChange={setCheckBox}
            />
            <label htmlFor="interest5"> Interest5 </label>
          </div>
          <div>
            <input
              className="form-group"
              type="checkbox"
              name="interest6"
              value="interest6"
              onChange={setCheckBox}
            />

            <label htmlFor="interest6"> Interest6 </label>
          </div>
        </div>
        {/* <Button type="submit">Submit</Button> */}
      </fieldset>
    </>
  );
}
