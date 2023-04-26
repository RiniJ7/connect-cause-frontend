import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet, NavLink } from "react-router-dom";

export const CompanyProfileLayout = () => {
    const { firstName } = useContext(UserContext);
    return (
        <div className="company-profile-layout">
            <h2>{firstName}'s Profile</h2>
            <p>This is a paragraph tag inside the CompanyProfileLayout file</p>
            <nav>
                <NavLink to="Opportunities">View Companying Opportunities</NavLink>
            </nav>

            <Outlet />
        </div>
    );
};
