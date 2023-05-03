import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { Jelly } from "@uiball/loaders";

const Authenticated = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  if (loading) {
    console.log("loading");

    return (
      <div className="form-group">
        <h5 className="loading-text">Loading</h5>
        <br />
        <br />
        <Jelly size={100} speed={0.9} color="black" />
      </div>
    );
  }
  if (!user) {
    console.log("Authenticated: Did not log in");
    return navigate("/login");
  } else {
    return <Outlet />;
  }
};

export default Authenticated;
