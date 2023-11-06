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
      <div class='center list flex-column'>
        {dataProject.map((data, id) => (
              <Achievement 
                key={id}
                title={data.title}
                description={data.description}
                isOpen={id === openAchievementIndex}
                onAchievementClick={() => handleAchievementClick(id)}
              />
        ))}
      </div>
    </div>
  )
}

export default Projects;
