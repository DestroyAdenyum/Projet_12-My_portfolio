import React from "react";

import LMCPic from "../Assets/Pictures/LMC_dessin.webp";
import { NavLink } from "react-router-dom/dist";

function Home() {
  return (
    <div className="wrapper home">
      <div className="home__title">
        <h1>Sélection du personnage</h1>
        <p className="choice_text">Prêt à rejoindre l'aventure ? 
        Cliquez sur mon avatar et embarquez dans le jeu de la création web. 
        Le prochain niveau vous attend, et je suis prête à le relever avec vous, 
        avec la sagesse acquise grâce aux défis surmontés.</p>
      </div>
      <section className="home__presentation">
        <NavLink to="/AboutMe" className="home__picture">
          <img className="player_picture" src={LMCPic} alt="Personnage numéro un : LEVITRE Marie-Charlotte" />
        </NavLink>
      </section>
    </div>
  );
}

export default Home;
