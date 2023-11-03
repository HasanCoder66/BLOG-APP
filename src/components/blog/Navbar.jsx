import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Home from "../home/Home";
function Navbar() {
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="header">
        <Link className="headertitle" to={"/"}>
          <h2>Tech Blogs App</h2>
        </Link>
  <Link to={"/"}> <button style={{color:"white" , border:'2px solid white', cursor:"pointer"}}> Home</button></Link>
      </div>
        <h4 className="heading"> Create You Own Blogs!</h4>
    </div>
  );
}

export default Navbar;
