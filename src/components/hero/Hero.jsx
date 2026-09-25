import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Index from "../../components/about/index";
import Social from "../Social";

const heroContent = {
  heroImage: "img/hero/dark.jpg",
  heroMobileImage: "img-mobile",
  heroTitleName: "Manuel Diaz",
  heroDesignations: ["FullStack Developer", "AI Integration"],
  heroDescriptions: `I help startups build and improve SaaS, marketplace, and AI-powered web applications using React, Next.js, Node.js, and modern product-focused technologies.
My focus is not just writing clean code, but building products that are stable, fast, and easy to scale.`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [designationIndex, setDesignationIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = heroContent.heroDesignations[designationIndex];
    let typingTimeout;
    let pauseTimeout;

    const typingSpeed = isDeleting ? 80 : 120;
    typingTimeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentText.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);

        if (nextText === currentText) {
          pauseTimeout = setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const nextText = currentText.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setDesignationIndex((prevIndex) => (prevIndex + 1) % heroContent.heroDesignations.length);
        }
      }
    }, typingSpeed);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [displayedText, isDeleting, designationIndex]);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage
              })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={`img/hero/${heroContent.heroMobileImage}.jpg`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="my portrait"
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}
              <span className="hero-designation" aria-live="polite">
                {displayedText}
              </span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <div className="hero-actions">
              <button className="button" onClick={toggleModalOne}>
                <span className="button-text">{heroContent.heroBtn}</span>
                <span className="button-icon fa fa-arrow-right"></span>
              </button>
              <Social className="hero-social" />
            </div>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
