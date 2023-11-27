import React, { useState } from "react";
import { NavLink } from "react-router-dom/dist";
import NavbarModal from "./NavbarModal";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`Navbar ${isOpen ? "open" : ""}`}>
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <NavbarModal isOpen={isOpen} closeModal={closeModal} />
      <ul>
        <li>
          <NavLink to="/" onClick={closeModal}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutMe" onClick={closeModal}>
            Fiche personnage
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" onClick={closeModal}>
            Haut faits
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" onClick={closeModal}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
