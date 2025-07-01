import React from "react";
import './Skills.css';

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "Python", level: 80 }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-bar">
          <span>{skill.name}</span>
          <div className="bar">
            <div className="fill" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
