import React from "react";

import Navbar from "../Components/Navbar"

import Logo from "../Assets/Logo/LMCtest.webp";

function Header() {
  return (
    <header className="header">
        <img className="logo" src={Logo} alt="Logo LEVITRE Marie-Charlotte" />
      <Navbar />
    </header>
  );
}

export default Header;
