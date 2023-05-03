import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Outlet } from "react-router-dom";

export const VolunteerProfileLayout = () => {
  const { user, setUser } = useAuth();
  return (
    <div className="volunteer-profile-layout">
      <h1>{user.firstName} - Volunteer Profile</h1>
      <p>This is a paragraph tag inside the VolunteerProfileLayout file</p>
      {/* <nav>
        <NavLink to="/opportunities">View Volunteering Opportunities</NavLink>
      </nav> */}

      <Outlet />
    </div>
  );
};
