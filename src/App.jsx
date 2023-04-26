import { UserContext } from "react";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
//styles
import "../src/styles/App.css";
import "../src/index.css";
//layout
import RootLayout from "./layouts/RootLayout.jsx";
//pages
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VolunteerProfilePage from "./pages/VolunteerProfilePage.jsx";
import { VolunteerProfileLayout } from "./layouts/VolunteerProfileLayout.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import { CompanyProfileLayout } from "./layouts/CompanyProfileLayout";
import OpportunitiesLayout from "./layouts/OpportunitiesLayout";

const theme = createTheme({
    palette: {
        primary: {
            light: "#83c5be",
            main: "#006d77",
            dark: "#e29578",
            contrastText: "#ffddd2",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    color: "#e29578",
                    borderColor: "#e29578",
                    fontFamily: [
                        "-apple-system",
                        "BlinkMacSystemFont",
                        '"Segoe UI"',
                        "Roboto",
                        '"Helvetica Neue"',
                        "Arial",
                        "sans-serif",
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                    ].join(","),
                    "&:hover": {
                        color: "#ffddd2",
                        borderColor: "#ffddd2",
                    },
                },
            },
        },
    },
});

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="profile/volunteer" element={<VolunteerProfileLayout />}>
                <Route path="" />
            </Route>
            <Route path="profile/company" element={<CompanyProfileLayout />}>
                <Route />
            </Route>
            <Route path="opportunities" element={<OpportunitiesLayout />}>
                <Route />
            </Route>
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            {/* this is a catch-all for any pages that don't exist */}
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

function App() {
    return (
        <div className="root">
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </div>
    );
}

export default App;
