import React, { useState } from "react";

import Achievement from "../Components/Achievement";

import dataProject from "../data/dataProject.json";

function Projects() {
  const [openAchievementIndex, setOpenAchievementIndex] = useState(-1);

  const handleAchievementClick = (index) => {
    if (index === openAchievementIndex) {
      // Si le même élément est cliqué, fermez-le en réinitialisant l'index
      setOpenAchievementIndex(-1);
    } else {
      // Sinon, ouvrez le nouvel élément en mettant à jour l'index
      setOpenAchievementIndex(index);
    }
  };
 
  return (
    <div className="wrapper projects">
      <h1 className="projects__title">Hauts-Faits</h1>
      <div className='achievements'>
        {dataProject.map((data, id) => (
              <Achievement 
                key={id}
                title={data.title}
                description={data.description}
                skills={data.skills}
                assignments={data.assignments}
                github={data.github}
                picture={data.picture}
                text={data.text}
                site={data.site}
                isOpen={id === openAchievementIndex}
                onAchievementClick={() => handleAchievementClick(id)}
              />
        ))}
      </div>
    </div>
  )
}

export default Projects;
