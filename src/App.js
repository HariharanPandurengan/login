import React from "react"
import './App.css';
import Login from "./Components/Login"
import Register from "./Components/Register";
import {Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="Register" element={<Register></Register>} />
      </Routes>
    </>
  );
}

export default App;
