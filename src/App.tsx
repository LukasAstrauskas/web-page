import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import { Route, Routes } from "react-router-dom";
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
      <Routes>
        {/* <Route path="/" element={<Greet />}></Route> */}
        <Route path="/web-page" element={<Greet />}></Route>
        <Route path="web-page/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
