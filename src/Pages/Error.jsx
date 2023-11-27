import React from "react";
import { NavLink } from "react-router-dom/dist";

function Error() {
  return (
    <div className="wrapper error">
      <h1 className="error__number">404</h1>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to={"/"} className="error__nav">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}

export default Error;
