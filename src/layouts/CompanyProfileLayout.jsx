import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export const CompanyProfileLayout = () => {
  const { user } = useAuth();
  return (
    <div className="company-profile-layout">
      <h1>{user.name} - Profile Page</h1>
      <p>This is a paragraph tag inside the CompanyProfileLayout file</p>
      {/* <nav>
        <NavLink to="Opportunities">View Companying Opportunities</NavLink>
      </nav> */}{" "}
      {/*  this should be on the navbar */}
      <Outlet />
    </div>
  );
};
