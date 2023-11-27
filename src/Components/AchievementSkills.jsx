import React from "react";

function AchievementSkills({ skills }) {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <ul key={index} className="skills__list">
          <li className="skill">
            {skill}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default AchievementSkills;
