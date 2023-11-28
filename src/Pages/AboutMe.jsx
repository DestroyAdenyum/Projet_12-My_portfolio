import React from "react";

import Collapse from "../Components/Collapse"; 

import PicAboutMe from "../Assets/Pictures/LMC_dessin.webp";

import dataSkills from "../data/dataSkills.json";

function AboutMe() {
  const { skills } = dataSkills;

  const generateSkillsList = (skills) => (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          {skill.name}
          <div className={`progress progress-${skill.progress}`}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${skill.progress}%` }}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={skill.progress}
            >
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return <div className="wrapper aboutme">
    <h1>Fiche du personnage</h1>
    <section className="aboutme__presentation">
      <div className="aboutme__picture">
        <img className="pictureofme" src={PicAboutMe} alt="Portrait de LEVITRE Marie-Charlotte" />
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
        text={generateSkillsList(skills)}
      />
    </section>
    <section className="aboutme__softskills">
      <Collapse
        title='Soft Skills'
        text={
          <ul>
            <li>Autonomie</li>
            <li>Travail d'équipe</li>
            <li>Flexibilité et adaptabilité</li>
            <li>Mémoire</li>
            <li>Curiosité</li>
            <li>Créativité</li>
            <li>Minutie</li>
            <li>Confiance</li>
            <li>Empathie</li>
            <li>Humour</li>
          </ul>
        }
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
              <p>En tant que développeuse, je mets en avant une compétence inestimable : mon courage 
                en face des défis. Telle une héroïne intrépide, je ne plie pas devant l'adversité, mais 
                je m'en remets à de puissants alliés virtuels tels que Google, les forums de développeurs
                et mon fidèle compagnon ChatGPT pour déjouer les embûches qui se dressent sur mon chemin. 
                Mon épée numérique est mon code, affûtée par l'apprentissage continu, et chaque site web 
                que je crée est une quête héroïque accomplie. Tout comme une aventurière je m'efforce de 
                devenir la légendaire développeuse capable de surmonter tous les obstacles dans cet univers 
                épique du développement web.
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
