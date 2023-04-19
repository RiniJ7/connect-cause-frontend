import { useEffect, useState } from "react";
import "../src/styles/App.css";
import "../src/index.css";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import HomePage from "./layouts/HomePage.jsx";

function App() {
    const [volunteer, setVolunteer] = useState([]);
    const [loggedInToken, setLoggedInToken] = useState("");
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
        <div>
            <div className="head">
                <Header title="Connect Cause Calgary" subtitle="Your next volunteering opportunity is here.." choice1=" LogOut" choice2="Home" />
            </div>
            <div className="body">
                <HomePage />
                {/* need to put a router here to change content of "div tag" to load new pages  */}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
