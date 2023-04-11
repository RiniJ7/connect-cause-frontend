import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Footer from "./components/Footer.js";
//import SignUp from './Components/SignUp'
//import SignIn from './Components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      {/* <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        
      {/* </div> */} 

      <div>
    
      <h1>Connect Cause Calgary</h1>
      <h3>Your next volunteering opportunity is here..</h3>
      
      </div>
      
<div className="card">
<button><h3>Sign-In</h3></button>
</div>

<div className="card">
<button><h3>Sign-Up</h3></button>
</div>

<p className="logo">About Us: How we help you! etc etc</p>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
  

  {/* <Footer note="Footer Note" /> */}
  </div>
 )

}

export default App
