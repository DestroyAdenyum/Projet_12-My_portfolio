import React from "react";

import LCpic from "../Assets/Pictures/lc-picture.png";
import { NavLink } from "react-router-dom/dist";

function Home() {
    return (
        <div className="wrapper home">
            <div className="home__title">
                <h2>Joueur 1</h2>
                <p className="choice_text">(Cliquer sur l'image pour choisir)</p>
            </div>
            <section className="home__presentation">
                <NavLink to='/AboutMe' className="home__picture">
                    <img className="player_picture" src={LCpic} alt='player picture' />
                </NavLink>
                <div className="home__informations">
                    <div>
                        <p>Nom :</p>
                        <p className="info">LEVITRE</p>
                    </div>
                    <div>
                        <p>Prénom :</p>
                        <p className="info">Marie-Charlotte</p>
                    </div>
                    <div>
                        <p>Job :</p>
                        <p className="info">Développeuse front-end junior</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;