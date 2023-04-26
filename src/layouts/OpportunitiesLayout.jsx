import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const OpportunitiesLayout = () => {
    return (
        <div className="opportunities-layout">
            <h2>View all the available volunteering opportunities</h2>

            <Outlet />
        </div>
    );
};

export default OpportunitiesLayout;
