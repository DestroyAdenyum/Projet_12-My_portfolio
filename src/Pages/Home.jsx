import React from "react";

import LCpic from "../Assets/Pictures/lc-picture.png";
import { NavLink } from "react-router-dom/dist";

function Home() {
  return (
    <div className="wrapper home">
      <div className="home__title">
        <h2>Sélection du personnage</h2>
        <p className="choice_text">Prêt à rejoindre l'aventure ? 
        Cliquez sur mon avatar et embarquez dans le jeu de la création web. 
        Le prochain niveau vous attend, et je suis prête à le relever avec vous, 
        avec la sagesse acquise grâce aux défis surmontés.</p>
      </div>
      <section className="home__presentation">
        <NavLink to="/AboutMe" className="home__picture">
          <img className="player_picture" src={LCpic} alt="Personnage numéro un : LEVITRE Marie-Charlotte" />
        </NavLink>
      </section>
    </div>
  );
}

export default Home;
