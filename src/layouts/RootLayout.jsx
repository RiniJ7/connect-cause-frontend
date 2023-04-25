import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import "../styles/App.css";
import { Button } from "@mui/material";

const HomeRef = React.forwardRef((props, ref) => (
    <div ref={ref}>
        <NavLink {...props} />
    </div>
));

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <Link to="/" className="logo" style={{ textDecoration: "none" }}>
                        Connect Cause
                    </Link>

                    <div style={{ display: "flex" }}>
                        <Button variant="outlined" component={HomeRef} to="/">
                            Home
                        </Button>
                        <Button variant="outlined">Logout</Button>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Copyrights @ Witty Web Wizards"</p>
                <p>
                    Website background by <a href="https://www.magicpattern.design/tools/mesh-gradients">Magic Pattern</a>
                </p>
            </footer>
        </div>
    );
}
