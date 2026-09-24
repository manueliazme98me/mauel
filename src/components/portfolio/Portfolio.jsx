import React, { useMemo, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalContent from "./ModalContent";

Modal.setAppElement("#root");

const portfolioData = [
  {
    id: 1,
    title: "McGraw Hill - Smartbook",
    category: "FULLSTACK",
    projectType: "Website",
    client: "McGraw Hill company",
    description: "Smartbook 2.0 — learning tool designed for pre-lecture preparation. Used by 400,000 users daily.",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Architected and guided frontend development strategy since 2024.",
      "Achieved 2 consecutive years of VPAT accessibility compliance.",
      "Migrated the platform to an NX monorepo, reducing duplication by 20%.",
      "Improved release efficiency by reducing deployment time by 40%.",
      "Replaced Protractor with Playwright, increasing test reliability by 3x and speed by 10x.",
      "Built an i18n localization pipeline to streamline translation workflows."
    ],
    skills: [
      "TypeScript",
      "JavaScript",
      "Angular",
      "React",
      "NX Monorepo",
      "Frontend Architecture",
      "Design Systems",
      "WCAG/VPAT Accessibility",
      "Playwright",
      "Jest",
      "CI/CD",
      "Git",
      "Webpack",
      "Babel",
      "i18n",
      "Performance Optimization",
      "Enterprise Application Development"
    ],
    previewLabel: "View Project Details",
    image: "img/projects/McGraw-smartbook.jpg",
    contentImages: [
      "img/projects/McGraw-smartbook.jpg",
      "img/projects/McGraw-smartbook-1.JPG",
      "img/projects/McGraw-smartbook-2.JPG",
      "img/projects/McGraw-smartbook-3.JPG",
      "img/projects/McGraw-smartbook-4.JPG",
      "img/projects/McGraw-smartbook-5.JPG",
      "img/projects/McGraw-smartbook-6.JPG",
    ],
    previewUrl: "https://www.mheducation.com/highered/digital-products/connect/student-tools/smartbook.html",
  },
  {
    id: 2,
    title: "Youtube Project",
    category: "FULLSTACK",
    projectType: "Website",
    client: "Creative Studio",
    description: "Short-form video experience focused on discovery, storytelling, and engagement.",
    technologies: ["After Effects", "Premiere Pro"],
    achievements: [
      "Produced campaign assets for digital distribution.",
      "Improved engagement through story-driven video editing.",
      "Delivered a responsive visual experience for web promotion."
    ],
    skills: [
      "Video Editing",
      "After Effects",
      "Premiere Pro",
      "Motion Graphics",
      "Storyboarding"
    ],
    previewLabel: "View Project Details",
    image: "img/projects/RaiffeisenBankOnline.jpg",
    contentImages: [
      "img/projects/RaiffeisenBankOnline.jpg",
      "img/projects/RaiffeisenBankOnline.jpg",
      "img/projects/RaiffeisenBankOnline.jpg",
      "img/projects/RaiffeisenBankOnline.jpg",
    ],
    previewUrl: "https://www.youtube.com",
  },
  {
    id: 3,
    title: "Slider Project",
    category: "FULLSTACK",
    projectType: "Website",
    client: "Studio North",
    description: "Brand-forward promotional landing page built to highlight a premium visual campaign.",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Created a polished landing experience for a client showcase.",
      "Improved visual storytelling with interactive content blocks.",
      "Designed a crisp, high-conversion front-end flow."
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI Design",
      "Responsive Layouts"
    ],
    previewLabel: "View Project Details",
    image: "img/projects/BeautyConnect.jpg",
    contentImages: [
      "img/projects/BeautyConnect.jpg",
      "img/projects/BeautyConnect.jpg",
      "img/projects/BeautyConnect.jpg",
      "img/projects/BeautyConnect.jpg",
    ],
    previewUrl: "https://www.behance.net",
  },
];

const tabFilters = ["ALL", "FULLSTACK", "WEB DESIGN", "MOBILE APP", "GRAPHIC DESIGN", "UI/UX"];

const Portfolio = ({ projects = portfolioData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeTabIndex === 0) return projects;
    return projects.filter((project) => project.category === tabFilters[activeTabIndex]);
  }, [activeTabIndex, projects]);

  const closeModal = () => setSelectedProject(null);

  return (
    <Tabs selectedIndex={activeTabIndex} onSelect={setActiveTabIndex}>
      <TabList className="portfolio-tab-list">
        {tabFilters.map((tab) => (
          <Tab key={tab}>{tab}</Tab>
        ))}
      </TabList>

      <div className="portfolio-tab-content">
        {tabFilters.map((tab, index) => (
          <TabPanel key={tab}>
            {index === activeTabIndex && (
              <ul className="row grid justify-content-center">
                {filteredProjects.map((project, projectIndex) => (
                  <li
                    key={project.id}
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay={projectIndex * 100}
                  >
                    <figure onClick={() => setSelectedProject(project)}>
                      <img src={project.image} alt={project.title} />
                      <div className="hover-content-wrapper">
                        <span className="content-title">{project.title}</span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            )}
          </TabPanel>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={Boolean(selectedProject)}
          onRequestClose={closeModal}
          contentLabel={selectedProject.title}
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={closeModal}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>

            <div className="box_inner portfolio">
              <ModalContent project={selectedProject} />
            </div>
          </div>
        </Modal>
      )}
    </Tabs>
  );
};

export default Portfolio;
