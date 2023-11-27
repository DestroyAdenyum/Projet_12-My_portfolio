import React from "react";

import AchievementAssignments from "./AchievementAssignment";
import AchievementModal from "./AchievementModal";
import AchievementSkills from "./AchievementSkills";

function Achievement({
  title,
  assignments,
  skills,
  description,
  github,
  picture,
  text,
  site,
  isOpen,
  onAchievementClick,
}) {

  function toggleCard() {
    onAchievementClick();
  }

  function openGithubLink() {
    window.open(github, "_blank");
  }

  return (
    <article className={`card ${isOpen ? "open" : ""}`} onClick={toggleCard}>
      <div className="info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <AchievementSkills skills={skills} />
        <AchievementAssignments assignments={assignments} />
      </div>
      <div className="group">
        <div className="members">
          <span className="current">
            Accompli <i className="fa-solid fa-medal"></i>
          </span>
        </div>
        <div className="bottom">
          <button className="simple" onClick={openGithubLink}>
            Lien GitHub <i className="fa-brands fa-github"></i>
          </button>
          <AchievementModal title={title} picture={picture} text={text} site={site} />
        </div>
      </div>
    </article>    
  );
}

export default Achievement;
