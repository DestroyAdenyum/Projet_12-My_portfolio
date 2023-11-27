import React from "react";

function AchievementAssignments({ assignments }) {
  return (
    <div className="bottom assignments">
        <ul className="assignments__list">
          {assignments.map((assignment, index) => (
            <li key={index} className="assignment">
              <i className="fa-solid fa-check"></i> {assignment}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default AchievementAssignments;
