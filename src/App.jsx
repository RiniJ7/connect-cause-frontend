import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Components/header/Header.jsx";
import Footer from "./Components/footer/Footer.jsx";
//import SignUp from './Components/SignUp'
//import SignIn from './Components/SignIn'

function App() {
  
  return (
    <div className="App">
      <div >
      <Header title= "Connect Cause Calgary" subtitle = "Your next voluteering opportunity is here.." choice1 = " LogOut" choice2 = "Home"/>
      </div>
      
<div className="card">
<button><h3>Sign-In</h3></button>
</div>

<div className="card">
<button><h3>Sign-Up</h3></button>
</div>

<p className="logo">About Us: How we help you! etc etc</p>

<div>
  <Footer note="Copyrights @ Witty Web Wizards" />
</div>     
  </div>
  
 )
}

export default App
