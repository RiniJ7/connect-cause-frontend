import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Authenticated = (props) => {
  const { children } = props;
  const { user, setLoading } = useAuth();
  if (loading) {
    console.log("loading");

    return <div>Loading...</div>;
  }
  if (!user) {
    console.log("Authenticated: Did not log in");
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default Authenticated;
