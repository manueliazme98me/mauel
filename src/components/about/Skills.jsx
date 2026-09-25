import React from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", percent: 95 },
      { name: "JavaScript", percent: 95 },
      { name: "HTML5", percent: 95 },
      { name: "CSS3", percent: 95 },
      { name: "PHP", percent: 85 },
      { name: "Python", percent: 80 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", percent: 95 },
      { name: "Next.js", percent: 95 },
      { name: "Laravel", percent: 80 },
      { name: "WordPress", percent: 90 },
      { name: "Tailwind CSS", percent: 95 },
      { name: "Bootstrap", percent: 95 },
      { name: "Responsive Design", percent: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", percent: 95 },
      { name: "Express", percent: 95 },
      { name: "Django", percent: 85 },
      { name: "Java/Spring", percent: 80 },
      { name: "FastAPI", percent: 90 },
      { name: "OpenAI API", percent: 85 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", percent: 95 },
      { name: "MySQL", percent: 90 },
      { name: "MongoDB", percent: 95 },
      { name: "Redis", percent: 85 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "GitLab CI/CD", percent: 90 },
      { name: "AWS", percent: 85 },
      { name: "Docker", percent: 80 },
      { name: "Kubernetes", percent: 85 },
    ],
  },
];

const getSkillColor = (percent) => {
  if (percent >= 95) return "#d31f1f";
  if (percent >= 90) return "#ddda29";
  if (percent >= 85) return "#17e7cb";
  return "#311de6";
};

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
                        background: getSkillColor(skill.percent),
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
