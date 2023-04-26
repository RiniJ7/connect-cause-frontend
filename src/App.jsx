//
import { useState } from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
//styles
import "../src/styles/App.css";
import "../src/index.css";
//layout
import RootLayout from "./layouts/RootLayout.jsx";
//pages
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import {ProfilePage} from "./pages/ProfilePage.jsx";
import VolunteerProfileForm from "./Components/VolunteerProfileForm.jsx"
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
            <Route path="profile" element={<ProfilePage />} >
                <Route path="profile" element={<VolunteerProfileForm/>}/>
            </Route>

            {/* this is a catch-all for any pages that don't exist */}
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

function App() {
    // ///// an example
    //     useEffect(() => {
    //         async function getSuperheroes() {
    //           const response = await fetch(`/api/superhero/${id}`);
    //           const superheroData = await response.json();
    //           console.log(superheroData);
    //           setSuperhero(superheroData);
    //         }
    //         getSuperheroes();
    //       }, []);
    // /////

    return (
        <div className="root">
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </div>
    );
}

export default App;
