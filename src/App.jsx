import { useState } from "react";
import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
// import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
