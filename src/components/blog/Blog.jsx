import React, { useMemo, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const defaultBlogPosts = [
  {
    id: "paul-nextjs-ai-race-plan-builder",
    client_name: "Paul",
    image: "img/blog/paul.jpg",
    rating: 5,
    title: "Next.js AI Race Plan Builder",
    description:
      "Great service and amazing progress made with excellent communication. The quality of the work has been great and I been kept informed the whole time. Great partner to work with.",
    skills: ["JavaScript", "CSS", "HTML5", "Next.js"],
  },
  {
    id: "Eric-high-quality",
    client_name: "Eric",
    image: "img/blog/Eric.jpg",
    rating: 5,
    title: "high-quality website design and development",
    description:
      "The final site is beautiful, polished, and thoughtfully designed, and they did a great job translating the brand direction into a refined digital experience. Communication throughout the process was professional and responsive, and I’m very pleased with the result. I would gladly recommend him for high-quality website design and development.",
    skills: ["PHP", "JavaScript", "Website Design", "Graphic Design"],
  },
  {
    id: "Eric-full-stack",
    client_name: "Manuel",
    image: "img/blog/manuel.jpg",
    rating: 5,
    title: "Full Stack Developer | Next.js | OpenAI LLM Integration | AI Matchmaking Platform",
    description:
      "He is reliable, professional, and easy to work with. It’s reassuring to know you can count on them. I really appreciate their commitment and would happily recommend them.",
    skills: [ "JavaScript", "Website Design", "Full Stack Development", "Next.js", "OpenAI", "AI Integration"],
  },
  {
    id: "Martinez-Full-Stack",
    client_name: "Mia Martinez",
    image: "img/blog/martinez.jpg",
    rating: 4,
    title: "Full‑Stack Developers Needed for Modern Media Platform  -- 3",
    description:
      "It couldn't be better everything is perfect. Fast and excellent quality of both work and communication They delivered excellent work and was responsive throughout the project. Great experience working. He was knowledgeable, reliable, and completed the work efficiently. Highly recommended.  It couldn't be better everything is perfect. Fast and excellent quality of both work and communication They delivered excellent work and was responsive throughout the project. Great experience working. He was knowledgeable, reliable, and completed the work efficiently. Highly recommended.",
    skills: ["PHP", "JavaScript", "Website Design", "Node.js", "HTML", "CSS"],
  },
  {
    id: "kacper-Simplified-Admin",
    client_name: "Kacper",
    image: "img/blog/kacper.jpg",
    rating: 4,
    title: "Simplified Admin Panel Development",
    description:
      "Excellent work and very professional attitude. The freelancer understood the requirements quickly, delivered high-quality results, and respected the timeline. I’m very satisfied with the outcome and highly recommend them.",
    skills: ["PHP", "JavaScript", "Website Design", "Graphic Design", "HTML", "CSS"],
  },
  {
    id: "john-Full-Stack",
    client_name: "John Edward",
    image: "img/blog/john.jpg",
    rating: 5,
    title: "Full-Stack Developer for Learning Management System",
    description:
      "I’m really glad I worked with her. She understood what I needed quickly and made the whole process easy. Everything went smoothly, and the final result turned out exactly how I wanted. I’d definitely work with her again.",
    skills: ["PHP", "JavaScript", "Website Design", "Node.js", "HTML", "CSS"],
  },
  {
    id: "brett-bean-chicago",
    client_name: "Brett",
    image: "img/blog/brett.jpg",
    rating: 4,
    title: "Bean Chicago",
    description:
      "Very happy, as with new projects there is a lot of back and forth. High recommended.",
    skills: ["PHP", "JavaScript", "Website Design", "Graphic Design", "HTML", "CSS"],
  },
  {
    id: "Mario-NG-Updation",
    client_name: "Mario",
    image: "img/blog/mario.jpg",
    rating: 5,
    title: "NG Car Sales Website Updation",
    description:
      "Fantastic service yet again.",
    skills: ["PHP", "JavaScript", "HTML", "CSS", "React"],
  },
  {
    id: "Ehsan-Next.js",
    client_name: "Ehsan",
    image: "img/blog/ehsan.jpg",  
    rating: 4,
    title: "Testing completed",
    description:
      "The test and review are done very well based on the requirements.",
     skills: ["PHP", "JavaScript", "HTML", "CSS", "Next.js"],
  },
];

const renderStars = (rating) => {
  const value = Math.round(rating || 0);

  return Array.from({ length: 5 }, (_, index) => (
    <span
      key={`${index}-${rating}`}
      className={index < value ? "text-warning" : "text-muted"}
      aria-hidden="true"
    >
      ★
    </span>
  ));
};

const truncateText = (text, maxLength = 110) => {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;
};

const Blog = ({ posts = defaultBlogPosts }) => {
  const [activePost, setActivePost] = useState(null);

  const selectedSkills = useMemo(
    () => (activePost?.skills || []).map((skill) => skill.trim()).filter(Boolean),
    [activePost]
  );

  return (
    <>
      {posts.map((post, index) => (
        <div key={post.id} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
          <article
            className="post-container"
            onClick={() => setActivePost(post)}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="post-content">
              <div className="blog-card-meta">
                <div className="blog-card-author">
                  <img
                    src={post.image}
                    alt={post.client_name}
                    className="blog-card-avatar"
                    style={{
                      width: "90px",
                      height: "90px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.15)",
                      flexShrink: 0,
                    }}
                  />
                  <span className="blog-card-name open-sans-font text-uppercase text-white-50">
                    {post.client_name}
                  </span>
                </div>

                <div
                  className="blog-card-rating text-warning"
                  aria-label={`Rated ${post.rating} out of 5`}
                  title={`${post.rating} out of 5`}
                >
                  {renderStars(post.rating)}
                </div>
              </div>

              <div className="entry-header">
                <h3>{post.title}</h3>
              </div>

              <div className="entry-content open-sans-font">
                <p>{truncateText(post.description, 110)}</p>
              </div>
            </div>
          </article>
        </div>
      ))}

      {activePost && (
        <Modal
          isOpen={Boolean(activePost)}
          onRequestClose={() => setActivePost(null)}
          contentLabel={activePost.title}
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={() => setActivePost(null)}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>

            <div className="box_inner blog-post">
              <div className="blog-modal-content">
                <div className="blog-modal-meta">
                  <div className="blog-modal-author">
                    <img
                      src={activePost.image}
                      alt={activePost.client_name}
                      className="blog-modal-avatar"
                      style={{
                        width: "52px",
                        height: "52px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.15)",
                        flexShrink: 0,
                      }}
                    />
                    <div className="text-uppercase text-white-50">{activePost.client_name}</div>
                  </div>

                  <div className="blog-modal-rating text-warning fs-5">
                    {renderStars(activePost.rating)}
                  </div>
                </div>

                <h3 className="text-uppercase mb-3">{activePost.title}</h3>
                <p className="open-sans-font">{activePost.description}</p>

                <div className="mt-4">
                  <h6 className="text-uppercase mb-3 text-warning">Skills</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedSkills.map((skill) => (
                      <span key={`${activePost.id}-${skill}`} className="blog-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Blog;
