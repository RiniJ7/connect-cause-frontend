import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./Components/header/Header.jsx";
import Footer from "./Components/footer/Footer.jsx";
//import SignUp from './Components/SignUp'
//import SignIn from './Components/SignIn'
const volunteerSignupTestObject = {
    first_name: "Test",
    last_name: "Lastname",
    username: "tester",
    email: "test@gmail.com",
    password: "notsecurepassword",
};
// console.log(JSON.stringify(volunteerSignupTestObject));
function App() {
    const [volunteer, setVolunteer] = useState([]);

    const signUpVolunteer = async () => {
        const response = await fetch("api/authenticate/signup/volunteer", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            method: "POST",
            mode: "cors",
            body: JSON.stringify(volunteerSignupTestObject),
        });
        const volunteerData = await response.json();
        setVolunteer(volunteerData);
    };

    return (
        <div className="App">
            <div>
                <Header title="Connect Cause Calgary" subtitle="Your next voluteering opportunity is here.." choice1=" LogOut" choice2="Home" />
            </div>

            <div className="card">
                <button>
                    <h3>Sign-In</h3>
                </button>
            </div>

            <div className="card">
                <button onClick={signUpVolunteer}>
                    <h3>Sign-Up</h3>
                </button>
            </div>

            <p className="logo">About Us: How we help you! etc etc</p>

            <div>
                <Footer note="Copyrights @ Witty Web Wizards" />
            </div>
        </div>
    );
}

export default App;
