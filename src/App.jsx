import { useState } from "react";
import "./App.css";
import Header from "./Components/header/Header.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Body from "./Components/body/Body.jsx";
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


          {/* Header  */}
            <div>
                <Header title="Connect Cause Calgary" subtitle="Your next voluteering opportunity is here.." choice1=" LogOut" choice2="Home" />
            </div>



          {/* Body */}
          
          
            <Body signin= "Sign In" signup = "Sign Up" /> 
  
            

        

          {/* Footer */}
            <div>
                <Footer note="Copyrights @ Witty Web Wizards" />
            </div>
        </div>
    );
}

export default App;
