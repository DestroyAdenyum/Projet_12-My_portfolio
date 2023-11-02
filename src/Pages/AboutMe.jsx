import React from "react";

import Collapse from "../Components/Collapse"; 

import LCPicAboutMe from "../Assets/Pictures/lc-picture.png";

function AboutMe() {
  return <div className="wrapper aboutme">
    <h2>Fiche du personnage</h2>
    <section className="aboutme__presentation">
      <div className="aboutme__picture">
        <img className="pictureofme" src={LCPicAboutMe} alt="Lara Croft" />
      </div>
      <div className="aboutme__details">
        <p>Nom :</p>
        <p className="info">LEVITRE</p>
        <p>Prénom :</p>
        <p className="info">Marie-Charlotte</p>
        <p>Classe :</p>
        <p className="info">Développeuse web - intégrateur web</p>
      </div>
    </section>
    <section className="aboutme__skills">
      <Collapse
        title='Compétences'
        text='HTML5
        CSS
        SASS
        Javascript
        REACT
        REDUX
        SEO
        Gestion de projet '
      />
    </section>
    <section className="aboutme__story">
      <Collapse 
        title='Histoire'
        text={
            <>
              <p>Mon voyage dans le monde du développement web a débuté en mars 2023, 
                avec OpenClassrooms pour guide. Armée de détermination et de curiosité, j'ai 
                entrepris une formation intensive en développement web et intégration web, 
                avec pour seules armes mon clavier, mon écran et une soif insatiable de 
                connaissances. Mon objectif ? Maîtriser l'art de la création web.
              </p>
              <p>Avant de me lancer dans cette nouvelle aventure, j'ai porté une autre casquette 
                pendant près de 8 ans : celle d'agent de sécurité. La sécurité était mon credo, et 
                la vigilance mon arme. Chaque jour était une quête pour maintenir l'ordre et la 
                protection, et chaque défi relevé était un pas de plus vers la maîtrise.
              </p>
              <p>Mais, un jour, j'ai décidé que mon parcours devait évoluer. J'ai laissé derrière 
                moi le monde des gardiens pour m'immerger dans l'univers du développement web.
              </p>
              <p>Chaque projet réalisé au cours de cette formation a été une étape de ma 
                progression, un combat remporté dans cette aventure. Chaque ligne de code a 
                été une épée affûtée, chaque site web une quête accomplie. J'ai exploré des 
                donjons d'information, escaladé des montagnes de CSS, et navigué sur des rivières 
                de données.
              </p>
            </>
            }
      />
    </section>
  </div>;
}

export default AboutMe;
