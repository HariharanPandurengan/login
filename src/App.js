import React from "react"
import './App.css';
import Login from "./Components/Login"
import Register from "./Components/Register";
import Home from "./Components/Home";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="Register" element={<Register></Register>} />
        <Route path="Home" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
