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
    title: "Raiffeisen Bank Online",
    category: "FRONTEND",
    projectType: "Website",
    client: "Raiffeisen Bank Online",
    description: "Raiffeisen Business Online (RBO) — digital banking platform designed for businesses and entrepreneurs, serving Raiffeisen Bank’s business customer base.",
    achievements: [
      "Developed and enhanced customer-facing digital banking applications, delivering scalable solutions for customer onboarding, loan application workflows, and account management features.",
      "Improved user experience and application conversion flows by analyzing user behavior with Google Analytics and implementing data-driven UX enhancements.",
      "Built and maintained enterprise frontend solutions using React and TypeScript while integrating with Java/Spring microservices to support financial products and banking workflows.",
      "Improved engineering efficiency by optimizing GitLab CI/CD workflows, strengthening documentation practices, and streamlining development processes.",
      "Enhanced frontend quality and maintainability through UI component library improvements, bug resolution, automated testing, and reusable architecture.",
      "Supported team productivity and knowledge sharing by mentoring new developers, contributing to Scrum activities, and driving technical discussions."
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Redux",
      "Styled Components",
      "Jest",
      "GitLab CI/CD",
      "Agile"
    ],
    previewLabel: "View Project Details",
    image: "img/projects/RaiffeisenBankOnline.jpg",
    contentImages: [
      "img/projects/RaiffeisenBankOnline.jpg",
      "img/projects/RaiffeisenBankOnline-1.jpg",
      "img/projects/RaiffeisenBankOnline-2.jpg",
      "img/projects/RaiffeisenBankOnline-3.jpg",
    ],
    previewUrl: "https://raiffeisen.ua/en/aem/biznesu/onlain-servisy/raiffeisen-business-online.html",
  },
  {
    id: 3,
    title: "University Chanllenging - BeautyConnect",
    category: "FRONTEND",
    projectType: "React.js",
    client: "BeautyConnect",
    description: "Full-stack beauty service automation platform with React, Node.js, and REST APIs, featuring secure authentication, online booking, admin management, and responsive user experiences.",
    achievements: [
      "Awarded recognition in a university-wide technology competition",
      "Architected and developed a scalable React frontend",
      "Built a secure authentication and API integration system",
      "Developed a comprehensive admin management platform",
      "Implemented dynamic booking and review features",
      "Designed a mobile-first responsive interface",
      "Collaborated with backend developers",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Responsive Layouts",
      "Node.js",
      "Responsive Layouts",
      "Git / GitHub",
    ],
    previewLabel: "View Project Details",
    image: "img/projects/BeautyConnect.jpg",
    contentImages: [
      "img/projects/BeautyConnect.jpg",
      "img/projects/BeautyConnect-1.jpg",
      "img/projects/BeautyConnect-2.jpg",
      "img/projects/BeautyConnect-3.jpg",
      "img/projects/BeautyConnect-4.jpg",
      "img/projects/BeautyConnect-5.jpg",
      "img/projects/BeautyConnect-6.jpg",
    ],
    previewUrl: "",
  },
  {
    id: 4,
    title: "First Indexed - MED",
    category: "FULLSTACK",
    projectType: "WordPress",
    client: "First Indexed Company",
    description: "",
    achievements: [
      "Delivered a comprehensive product experience platform by developing product pages, application guides, and educational resources for Total Contact Cast Kits.",
      "Improved customer engagement and communication workflows through the implementation of interactive sample request, inquiry, and contact forms.",
      "Enhanced website usability and accessibility by optimizing navigation structure and creating a seamless user journey across products, resources, and support content.",
      "Streamlined healthcare information access by integrating reimbursement guidance, CPT codes, insurance resources, and clinical references into an organized digital experience.",
      "Built scalable frontend solutions with reusable components and maintainable architecture to support future product and content expansion."
    ],
    skills: [
      "HTML",
      "CSS",
      "PHP",
      "UI Design",
      "WordPress"
    ],
    previewLabel: "View Project Details",
    image: "img/projects/m-medusa.jpg",
    contentImages: [
      "img/projects/m-medusa.jpg",
      "img/projects/m-medusa-1.jpg",
    ],
    previewUrl: "https://m-medusa.com/",
  },
  {
    id: 5,
    title: "São Paulo - Website",
    category: "FULLSTACK",
    projectType: "WordPress",
    client: "São Paulo, Brazil",
    description: "Web site development, with online registration, login and payment gateway. Both front end and backend. Fully responsive and mobile compatible.",
    achievements: [],
    skills: [
      "HTML",
      "CSS",
      "PHP",
      "UI Design",
      "WordPress"
    ],
    previewLabel: "View Project Details",
    image: "img/projects/blessa.jpg",
    contentImages: [
      "img/projects/blessa.jpg",
      "img/projects/blessa-1.jpg",
      "img/projects/blessa-2.jpg",
    ],
    previewUrl: "https://blessa.com.br/",
  },
  {
    id: 6,
    title: "Learning Management Systems (LMS)",
    category: "FULLSTACK",
    projectType: "React / Angular",
    client: "",
    description: "LMS & Application Features :Learning Management Systems (LMS), Course Management, Content Management Systems (CMS), Student Information Systems, Online Quiz & Assessment Platforms, Assignment Management,- Progress Tracking, Analytics Dashboards, Role-Based Access Control (RBAC)",
    achievements: [
      "Designed and developed a scalable Learning Management System (LMS) supporting teacher, student, and administrator workflows for digital education management.",
      "Built comprehensive teacher and student modules enabling course management, content delivery, online assessments, assignment submission, and real-time learning progress tracking.",
      "Implemented an advanced admin platform for managing institutions, users, courses, permissions, and system-wide analytics.",
      "Developed data-driven dashboards and reporting features to provide insights into student performance, engagement, and academic progress.",
      "Created secure and scalable application architecture with role-based access control, optimized workflows, and maintainable frontend components.",
      "Enhanced user experience through intuitive navigation and responsive design, ensuring accessibility across desktop, tablet, and mobile devices."
    ],
    skills: [
      "React.js / Angular",
      "TypeScript",
      "HTML5",
      "Responsive Web Design",
      "Learning Management Systems (LMS)"
    ],
    previewLabel: "View Project Details",
    image: "img/projects/lms.jpg",
    contentImages: [
      "img/projects/lms.jpg",
      "img/projects/lms.jpg",
    ],
    previewUrl: "https://app.digitalliteracykp.edu.pk/",
  },
  {
    id: 7,
    title: "OfficeStock",
    category: [ "ECOMMERCE", "FRONTEND" ],
    projectType: "Laravel",
    client: "",
    description: "",
    achievements: [],
    skills: [
      "PHP",
      "Laravel",
    ],
    previewLabel: "View Project Details",
    image: "img/projects/officestock.jpg",
    contentImages: [
      "img/projects/officestock.jpg",
      "img/projects/officestock-1.jpg",
      "img/projects/officestock-2.jpg",
    ],
    previewUrl: "https://officestock.com/",
  },
  {
    id: 8,
    title: "Zeshack - Ecommerce",
    category: [ "ECOMMERCE", "FRONTEND" ],
    projectType: "Shopify",
    client: "",
    description: "I design Shopify stores that not only look stunning but are optimized to drive sales and conversions. Every element is crafted with user experience, branding, and performance in mind to help your online business succeed.",
    achievements: [],
    skills: [],
    previewLabel: "View Project Details",
    image: "img/projects/zeshack.jpg",
    contentImages: [
      "img/projects/zeshack.jpg",
      "img/projects/zeshack-1.jpg",
      "img/projects/zeshack-2.jpg",
      "img/projects/zeshack-3.jpg",
      "img/projects/zeshack-4.jpg",
    ],
    previewUrl: "https://zeshack.com/",
  },
  {
    id: 9,
    title: "popovleather - Ecommerce",
    category: [ "ECOMMERCE", "FRONTEND" ],
    projectType: "Shopify",
    client: "",
    description: "Beautiful website design for fashion industry with all ecommerce features including secure checkout and payment process. The website technology is Shopify.",
    achievements: [],
    skills: [],
    previewLabel: "View Project Details",
    image: "img/projects/popovleather.jpg",
    contentImages: [
      "img/projects/popovleather.jpg",
      "img/projects/popovleather-1.jpg",
      "img/projects/popovleather-2.jpg",
      "img/projects/popovleather-3.jpg",
      "img/projects/popovleather-4.jpg",
    ],
    previewUrl: "https://www.popovleather.com/",
  },
  {
    id: 10,
    title: "Plane - Landing Page",
    category: "FRONTEND",
    projectType: "next.js",
    client: "",
    description: "",
    achievements: [],
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "Next.js",
    ],
    previewLabel: "View Project Details",
    image: "img/projects/plane.jpg",
    contentImages: [
      "img/projects/plane.jpg",
      "img/projects/plane-1.jpg",
      "img/projects/plane-2.jpg",
      "img/projects/plane-3.jpg",
      "img/projects/plane-4.jpg",
    ],
    previewUrl: "https://plane.so/",
  },
];

const tabFilters = ["ALL", "FULLSTACK", "FRONTEND", "ECOMMERCE"];

const getProjectCategories = (project) => {
  const rawCategories = Array.isArray(project?.categories)
    ? project.categories
    : Array.isArray(project?.category)
      ? project.category
      : [project?.category];

  return rawCategories
    .filter(Boolean)
    .map((category) => String(category).toUpperCase());
};

const Portfolio = ({ projects = portfolioData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const activeFilter = tabFilters[activeTabIndex];

    if (activeFilter === "ALL") return projects;

    return projects.filter((project) =>
      getProjectCategories(project).includes(activeFilter)
    );
  }, [activeTabIndex, projects]);

  const closeModal = () => setSelectedProject(null);

  return (
    <>
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
    </>
  );
};

export default Portfolio;
