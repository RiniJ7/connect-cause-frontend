import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Authenticated = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  if (loading) {
    console.log("loading");

    return <div>Loading...</div>;
  }
  if (!user) {
    console.log("Authenticated: Did not log in");
    return navigate("/login");
  } else {
    return <Outlet />;
  }
};

export default Authenticated;
