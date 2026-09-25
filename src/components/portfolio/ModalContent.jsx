import React, { useMemo, useState, useEffect } from "react";

const ModalContent = ({ project }) => {
    const {
        title,
        client,
        description,
        achievements = [],
        skills = [],
        previewLabel,
        previewUrl,
        image,
        contentImages,
    } = project || {};

    const [activeIndex, setActiveIndex] = useState(0);

    const slides = useMemo(() => {
        if (Array.isArray(contentImages) && contentImages.length > 0) {
            return contentImages;
        }

        if (image) {
            return [image];
        }

        return [];
    }, [contentImages, image]);

    const achievementList = Array.isArray(achievements)
        ? achievements
        : typeof achievements === "string"
            ? achievements
                .split(/\n|•|-/)
                .map((item) => item.trim())
                .filter(Boolean)
            : [];

    const skillList = Array.isArray(skills)
        ? skills
        : typeof skills === "string"
            ? skills
                .split(/\s*•\s*|\n|,/) 
                .map((item) => item.trim())
                .filter(Boolean)
            : [];

    useEffect(() => {
        setActiveIndex(0);
    }, [project?.id]);

    useEffect(() => {
        if (slides.length <= 1) return undefined;

        const intervalId = setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [slides.length]);

    const goToSlide = (direction) => {
        if (slides.length <= 1) return;

        setActiveIndex((currentIndex) => {
            const nextIndex = (currentIndex + direction + slides.length) % slides.length;
            return nextIndex;
        });
    };

    const currentImage = slides[activeIndex] || image;

    if (!project) return null;

    return (
        <div className="slideshow">
            <figure>
                {currentImage && (
                    <div className="portfolio-gallery-carousel">
                        {slides.length > 1 && (
                            <button
                                type="button"
                                className="carousel-arrow carousel-arrow-left"
                                onClick={() => goToSlide(-1)}
                                aria-label="Previous project image"
                            >
                                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                            </button>
                        )}

                        <div className="portfolio-gallery-frame">
                            <img
                                key={`${title}-${activeIndex}`}
                                src={currentImage}
                                alt={title || "Portfolio project"}
                                className="portfolio-gallery-image"
                            />
                        </div>

                        {slides.length > 1 && (
                            <button
                                type="button"
                                className="carousel-arrow carousel-arrow-right"
                                onClick={() => goToSlide(1)}
                                aria-label="Next project image"
                            >
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </button>
                        )}
                    </div>
                )}

                <figcaption>
                    <h3>{title}</h3>
                    <div className="portfolio-modal-content">
                        <div className="portfolio-modal-rows">
                            <div className="portfolio-modal-info-panel">
                                <div className="portfolio-modal-meta-item">
                                    <strong>{client}</strong>
                                    <p className="portfolio-modal-description">{description}</p>
                                </div>
                            </div>

                            <div className="portfolio-modal-info-panel">
                                <ul className="portfolio-modal-list">
                                    {achievementList.map((item, index) => (
                                        <li key={`${item}-${index}`}>
                                            <span className="portfolio-checkmark">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="portfolio-modal-info-panel">
                                <div className="portfolio-modal-skill-list">
                                    {skillList.map((skill, index) => (
                                        <span key={`${skill}-${index}`} className="portfolio-skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {previewUrl && (
                            <div className="portfolio-preview-action">
                                <a
                                    className="portfolio-preview-button"
                                    href={previewUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="portfolio-preview-icon">
                                        <i className="fa fa-eye" aria-hidden="true" />
                                    </span>
                                    <span className="portfolio-preview-text">{previewLabel}</span>
                                    <span className="portfolio-preview-arrow" aria-hidden="true">→</span>
                                </a>
                            </div>
                        )}
                    </div>
                </figcaption>
            </figure>
        </div>
    );
};

export default ModalContent;
