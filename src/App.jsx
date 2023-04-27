import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//providers
import { useAuth } from "./providers/AuthProvider.jsx";

import Authenticated from "./Components/Authenticated.jsx";
//styles
import "../src/styles/App.css";
import "../src/index.css";
//layouts
import RootLayout from "./layouts/RootLayout.jsx";
import { CompanyProfileLayout } from "./layouts/CompanyProfileLayout";
import { VolunteerProfileLayout } from "./layouts/VolunteerProfileLayout.jsx";
import HelpLayout from "./layouts/HelpLayout";
import OpportunitiesLayout from "./layouts/OpportunitiesLayout";
//pages
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { VolunteerProfilePage } from "./pages/VolunteerProfilePage.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

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

function App() {
  const { logout, user } = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <>
          <Route index element={<LoginPage />} />
          {/* <Route element={<Authenticated />}> */}
          {/* <Authenticated> */}
          <Route path="profile/volunteer" element={<VolunteerProfileLayout />}>
            <Route element={<VolunteerProfilePage />} />
          </Route>
          <Route path="profile/company" element={<CompanyProfileLayout />}>
            <Route />
          </Route>
          <Route path="opportunities" element={<OpportunitiesLayout />}>
            <Route />
          </Route>
          {/* </Authenticated> */}
          {/* </Route> */}
        </>
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* this is a catch-all for any pages that don't exist */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <div className="root">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
