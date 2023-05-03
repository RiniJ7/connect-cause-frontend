import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const [user, setUser] = useState();
  const { children } = props;
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const userResponse = await fetch("/api/authenticate/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (userResponse.ok) {
      const userData = await userResponse.json();
      setUser(userData);
      // set the token to a cookie

      return true;
    } else {
      setUser(null);
      return false;
    }
  };

  const logout = async () => {
    const logoutResponse = await fetch("/api/authenticate/logout", { method: "POST" });
    if (logoutResponse.ok) {
      setUser(null);
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const userResponse = await fetch("/api/authenticate");
      if (userResponse.ok) {
        const userData = await userResponse.json();
        setUser(userData);
        return true;
      } else {
        setUser(null);
        return false;
      }
      setLoading(false);
    };
    getUser();
  }, []);

  const contextValue = {
    logout,
    login,
    user,
    setUser,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
