//
import { useState } from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
//styles
import "../src/styles/App.css";
import "../src/index.css";
//layout
import RootLayout from "./layouts/RootLayout";
//pages
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import VolunteerProfilePage from "./pages/VolunteerProfile";

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div>Dang!</div>;
}
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="profile" element={<VolunteerProfilePage />} />

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
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
