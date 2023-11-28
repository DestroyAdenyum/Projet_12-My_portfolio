import React from "react";

import Navbar from "../Components/Navbar"

import Logo from "../Assets/Logo/LMCtest.webp";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to='/'>
        <img className="logo" src={Logo} alt="Logo LEVITRE Marie-Charlotte" />
      </NavLink>
      <Navbar />
    </header>
  );
}

export default Header;
