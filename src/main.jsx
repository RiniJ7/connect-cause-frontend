import React from "react";
import ReactDOM from "react-dom/client";
import UserContextProvider from "./context/UserContext";
// import { AuthContextProvider } from "./context/Auth";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <AuthContextProvider> */}
        <UserContextProvider>
            <App />
        </UserContextProvider>
        {/* </AuthContextProvider> */}
    </React.StrictMode>
);
