import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet, NavLink } from "react-router-dom";

export const VolunteerProfileLayout = () => {
  const { userState, setUserState } = useContext(UserContext);
  return (
    <div className="volunteer-profile-layout">
      <h2>Volunteer Profile</h2>
      <p>This is a paragraph tag inside the VolunteerProfileLayout file</p>
      {/* <nav>
        <NavLink to="/opportunities">View Volunteering Opportunities</NavLink>
      </nav> */}

      <Outlet />
    </div>
  );
};
