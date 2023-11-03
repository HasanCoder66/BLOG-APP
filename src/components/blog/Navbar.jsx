import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const [modal , setModal] = useState(false)

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }
  
  return (
    <div style={{backgroundColor:'##9862fe'}} className="container">
      <div className="header">
        <Link className="headertitle" to={"/"}>
          <h2>Blogs</h2>
        </Link>
        <Link >
          <button className="button" onClick={ () => setModal(true)}>Create a Blog</button>
        </Link>
      </div>
    </div>
  );
  
}

export default Navbar;




function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}