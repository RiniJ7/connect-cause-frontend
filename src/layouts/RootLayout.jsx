import React, { useState, useContext } from "react";
import { useNavigate, NavLink, Outlet, Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import "../styles/App.css";
import { Button } from "@mui/material";
import { FullscreenExit } from "@mui/icons-material";
import { UserContext } from "../context/UserContext.jsx";

// const HomeRef = React.forwardRef((props, ref) => (
//   <div ref={ref}>
//     <NavLink {...props} />
//   </div>
// ));

export default function RootLayout() {
  const { logout, user } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const isValid = await logout();
    if (!isValid) {
      setErrorMessage("Error trying to log out");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="root-layout">
      <header>
        <nav>
          <Link to="/" className="logo" style={{ textDecoration: "none" }}>
            Connect Cause
          </Link>
          <>
            <div style={{ display: "flex" }}>
              {user && (
                <Button variant="outlined" onClick={handleLogout}>
                  Logout
                </Button>
              )}
              {!user && (
                <Button variant="outlined" component={Link} to="/login">
                  Login
                </Button>
              )}
              <Button variant="outlined" component={Link} to="/">
                Home
              </Button>
            </div>
          </>
        </nav>
      </header>
      <main>
        <div className="main-div">
          <Outlet />
        </div>
      </main>

      <footer>
        <p>Copyrights @ Witty Web Wizards"</p>
        <p>
          Website background by{" "}
          <a href="https://www.magicpattern.design/tools/mesh-gradients">Magic Pattern</a>
        </p>
      </footer>
    </div>
  );
}
