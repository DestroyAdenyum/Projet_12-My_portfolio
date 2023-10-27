import React from "react";
import { NavLink } from "react-router-dom/dist";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <NavLink to='/'>
                    <h1>Hello world !</h1>
                </NavLink>
            </div>
            <nav>
                <ul className="header__links">
                    <li>
                        <NavLink to='/'>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/AboutMe'>À propos du joueur</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Projects'>Projets</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
