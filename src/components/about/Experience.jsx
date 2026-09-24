import React, { useState } from "react";

const experienceContent = [
  {
    year: "2024 - 2026",
    company: "McGraw Hill",
    position: "Software Engineer",
    location: "Copenhagen, Denmark",
    period: "APR 2024 — JUN 2026",
    summary:
      "SmartBook 2.0 — learning tool designed for pre-lecture preparation. Used by 400,000 users daily.",
    paragraphs: [
      "Designed frontend architecture and technical direction for SmartBook 2.0, focused on maintainability, accessibility, testing, localization and delivery speed.",
      "Built user-facing experiences for course prep, personalized learning dashboards, and reusable UI systems that improved engagement across devices.",
    ],
    tools: ["React", "TypeScript", "Node", "Jest", "GitLab CI/CD"],
    image: "img/experience/McGraw-smartbook.jpg",
    link: "https://www.mheducation.com/highered/connect/smartbook.html",
    accent: "#7c4dff",
  },
  {
    year: "2021 - 2023",
    company: "Raiffeisen Bank Online",
    position: "Frontend Engineer",
    location: "Moscow, Russia",
    period: "JUN 2021 — APR 2023",
    summary:
      "Raiffeisen Business Online (RBO) — digital banking platform designed for businesses and entrepreneurs.",
    paragraphs: [
      "Developed and maintained customer-facing financial applications including customer onboarding, loan application flows, and account management features supporting digital banking workflows.",
      "Improved performance and reliability across critical user journeys while collaborating with product and backend teams to launch new capabilities efficiently.",
    ],
    tools: ["React", "TypeScript", "Redux", "Jest", "Java/Spring"],
    image: "img/experience/RaiffeisenBankOnline.jpg",
    link: "https://raiffeisen.ua/en/aem/biznesu/onlain-servisy/raiffeisen-business-online.html",
    accent: "#7c4dff",
  },
  {
    year: "2020",
    company: "University Tech Challenge",
    position: "Frontend Developer",
    location: "",
    period: "2018 — 2020",
    summary:
      "Developed a beauty service automation platform as part of a three-person developer team to streamline booking and service operations.",
    paragraphs: [
      "Built a scalable booking and reservation workflow that simplified service management, client communication and admin operations.",
      "Architected the frontend using React with reusable components, responsive layouts, secure authentication flows, and API-driven integrations with backend services.",
    ],
    tools: ["React", "JavaScript", "Bootstrap", "CSS", "Node.js"],
    image: "img/experience/BeautyConnect.jpg",
    link: "",
    accent: "#7c4dff",
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = experienceContent[activeIndex];

  return (
    <div className="experience-modern">
      <div className="experience-timeline" aria-label="Experience timeline">
        <div className="experience-timeline-line" />

        {experienceContent.map((item, index) => (
          <button
            key={item.company}
            type="button"
            className={`experience-node ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${item.position} at ${item.company}`}
            style={{ "--node-accent": item.accent }}
          >
            <span className="experience-node-pulse" />
          </button>
        ))}
      </div>

      <div className="experience-labels">
        {experienceContent.map((item, index) => (
          <button
            key={`${item.company}-label`}
            type="button"
            className={`experience-label ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="experience-label-year">{item.year}</span>
            <span className="experience-label-company">{item.company}</span>
            <span className="experience-label-role">{item.position}</span>
          </button>
        ))}
      </div>

      <div className="experience-detail">
        <div className="experience-intro">
          <h3>{activeItem.position}</h3>
          <p className="experience-company-line">
            {activeItem.company} <span>{activeItem.location}</span>
          </p>
          <div className="experience-date">{activeItem.period}</div>

          <p className="experience-summary">{activeItem.summary}</p>

          {activeItem.paragraphs.map((paragraph, index) => (
            <p className="experience-text" key={`${activeItem.company}-paragraph-${index}`}>
              {paragraph}
            </p>
          ))}

          <div className="experience-cta-group">
            <a
              href={activeItem.link}
              target="_blank"
              rel="noreferrer"
              className="experience-cta"
            >
              View {activeItem.company} <span>↗</span>
            </a>
          </div>

          <div className="experience-tags">
            {activeItem.tools.map((tool) => (
              <span className="experience-tag" key={`${activeItem.company}-${tool}`}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="experience-visual" aria-hidden="true">
          <img
            src={process.env.PUBLIC_URL + activeItem.image}
            alt={`${activeItem.company} project preview`}
            className="experience-visual-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
