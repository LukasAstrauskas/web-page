import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet /> */}
      <span>
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
      </span>
      <Routes>
        {/* <Route path="/" element={<Greet />}></Route> */}
        <Route path="" element={<Greet />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
