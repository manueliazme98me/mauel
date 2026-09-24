import React from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", percent: 95, color: "#8a5cf6" },
      { name: "JavaScript", percent: 90, color: "#f7c948" },
      { name: "HTML5", percent: 90, color: "#ff7b54" },
      { name: "CSS3", percent: 85, color: "#4cc9f0" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", percent: 95, color: "#61dafb" },
      { name: "Redux", percent: 80, color: "#764abc" },
      { name: "styled-components", percent: 82, color: "#db7093" },
      { name: "Bootstrap", percent: 88, color: "#7952b3" },
      { name: "Responsive Design", percent: 90, color: "#20c997" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "REST APIs", percent: 92, color: "#3ddc97" },
      { name: "Node.js", percent: 88, color: "#68a063" },
      { name: "Express", percent: 85, color: "#f5f5f5" },
      { name: "Java/Spring", percent: 78, color: "#eb4d5c" },
      { name: "Microservices", percent: 76, color: "#ff9f43" },
      { name: "JWT", percent: 84, color: "#ffd166" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Jest", percent: 86, color: "#c21325" },
      { name: "Playwright", percent: 90, color: "#52b788" },
      { name: "E2E Testing", percent: 88, color: "#f4a261" },
      { name: "Test Automation", percent: 92, color: "#00c2a8" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Git", percent: 92, color: "#f05033" },
      { name: "GitLab CI/CD", percent: 90, color: "#fc6d26" },
      { name: "Release Automation", percent: 88, color: "#45b7d1" },
    ],
  },
  {
    category: "Internationalization",
    skills: [
      { name: "i18n", percent: 84, color: "#7b61ff" },
      { name: "Localization", percent: 82, color: "#00a6fb" },
      { name: "BabelEdit", percent: 80, color: "#ffd166" },
    ],
  },
  {
    category: "Analytics",
    skills: [
      { name: "Google Analytics", percent: 82, color: "#f9a826" },
      { name: "User Behavior Analysis", percent: 88, color: "#4ecdc4" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="col-12">
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <h4 className="skill-group-title">{group.category}</h4>

            <div className="skill-group-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-meta">
                    <span>{skill.name}</span>
                    <strong>{skill.percent}%</strong>
                  </div>

                  <div className="skill-bar">
                    <span
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.percent}%`,
                        background: skill.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
