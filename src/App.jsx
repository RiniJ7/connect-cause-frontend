import { useState } from "react";
import "../src/styles/App.css";
import Header from "./Components/page-structure/Header.jsx";
import Footer from "./Components/page-structure/Footer.jsx";
import Body from "./Components/page-structure/Body.jsx";

function App() {
    const [volunteer, setVolunteer] = useState([]);

    return (
        <div className="App">
            {/* Header  */}
            <div>
                <Header title="Connect Cause Calgary" subtitle="Your next voluteering opportunity is here.." choice1=" LogOut" choice2="Home" />
            </div>

            {/* Body */}

            <Body signin="Sign In" signup="Sign Up" />

            {/* Footer */}
            <div>
                <Footer note="Copyrights @ Witty Web Wizards" />
            </div>
        </div>
    );
}

export default App;
