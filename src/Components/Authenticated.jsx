import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Authenticated = (props) => {
  const { children } = props;
  const { user, loading } = useAuth();
  if (loading) {
    console.log("loading");

    return <div>Loading...</div>;
  }
  if (!user) {
    console.log("before");
    loading = false;
    return <Navigate to="/" />;
  } else {
    console.log("after");

    return children;
  }
};

export default Authenticated;
