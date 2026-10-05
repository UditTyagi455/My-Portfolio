import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import { filterOptions, portfolioData } from "./utils";
import "./styles.scss";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = (id) => {
    setFilterValue(id);
  };

  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
              className={option.id === filterValue ? "active" : ""}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <img
                  src={item.image}
                  alt={item.projectName || "Portfolio showcase"}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="overlay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <button
                      type="button"
                      onClick={() => window.open(item.projectLink, "_blank")}
                    >
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

