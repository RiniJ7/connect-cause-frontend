import React from "react";
import ReactDOM from "react-dom/client";
import UserContextProvider from "./context/UserContext";
import AuthProvider from "./providers/AuthProvider";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserContextProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </UserContextProvider>
    </React.StrictMode>
);
