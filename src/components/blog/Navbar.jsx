import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div style={{backgroundColor:'##9862fe'}} className="container">
      <div className="header">
        <Link className="headertitle" to={"/"}>
          <h2>Blogs</h2>
        </Link>
        <Link to={"/create"}>
          <button className="button">Create a Blog</button>
        </Link>
            
      </div>
    </div>
  );
}

export default Navbar;
