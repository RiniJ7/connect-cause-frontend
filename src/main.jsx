import React from "react";
import ReactDOM from "react-dom/client";
import UserContextProvider from "./context/UserContext";
import AuthProvider from "./providers/AuthProvider";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
