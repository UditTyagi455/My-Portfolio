import React, { useState } from "react";
import { filterOptions, portfolioData } from "./utils";
import { FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);

  const handleFilter = (id) => {
    setFilterValue(id);
  };

  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  const getItemCount = (id) => {
    if (id === 1) return portfolioData.length;
    return portfolioData.filter((item) => item.sectionId === id).length;
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__container">
        {/* Section Header */}
        <Animate
          play
          duration={0.6}
          delay={0.1}
          start={{ transform: "translateY(-20px)", opacity: 0 }}
          end={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <div className="portfolio-header">
            <div className="portfolio-badge">
              <FaRocket className="badge-icon" /> Featured Portfolio
            </div>
            <h2 className="portfolio-title">Projects & Client Works</h2>
            <p className="portfolio-subtitle">
              A curated collection of production Next.js platforms, cross-platform React Native mobile applications, and interactive React web solutions.
            </p>
          </div>
        </Animate>

        {/* Filter Navigation Tabs */}
        <div className="portfolio-filter-wrapper">
          <ul className="portfolio-filter-tabs">
            {filterOptions.map((option) => (
              <li
                onClick={() => handleFilter(option.id)}
                key={`filter-${option.id}`}
                className={`filter-pill ${option.id === filterValue ? "active" : ""}`}
              >
                <span>{option.label}</span>
                <span className="filter-count">{getItemCount(option.id)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Cards Grid */}
        <div className="portfolio-grid">
          {filteredPortfolioData.map((item, key) => (
            <Animate
              key={`${item.projectName}-${key}`}
              play
              duration={0.6}
              delay={0.1 * (key + 1)}
              start={{ transform: "translateY(25px)", opacity: 0 }}
              end={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <div className="project-card">
                {/* Image & Category Badge */}
                <div className="project-card__image-container">
                  <img
                    src={item.image}
                    alt={item.projectName}
                    className="project-card__image"
                    loading="lazy"
                  />
                  <div className="project-card__badge-tag">
                    {item.category}
                  </div>
                  {item.featured && (
                    <div className="project-card__featured-pill">
                      Featured
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="project-card__body">
                  <div className="project-card__title-row">
                    <h3 className="project-title">{item.projectName}</h3>
                  </div>

                  <p className="project-tagline">{item.tagline}</p>
                  <p className="project-desc">{item.description}</p>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-stack">
                    {item.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer / Action Button */}
                  {item.projectLink && item.projectLink.trim() !== "" && (
                    <div className="project-card__footer">
                      <a
                        href={item.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn"
                      >
                        <span>Visit Live Platform</span>
                        <FaExternalLinkAlt className="btn-icon" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
