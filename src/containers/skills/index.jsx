import React from "react";
import { skillsData } from "./utils";
import { Animate } from "react-simple-animate";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiMobx,
  SiRealm,
  SiFirebase,
} from "react-icons/si";
import {
  FaLaptopCode,
  FaLayerGroup,
  FaProjectDiagram,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaBrain,
  FaBolt,
} from "react-icons/fa";
import "./styles.scss";

const getCategoryIcon = (type) => {
  switch (type) {
    case "web":
      return <FaLaptopCode />;
    case "frameworks":
      return <FaLayerGroup />;
    case "state":
      return <FaProjectDiagram />;
    case "database":
      return <FaDatabase />;
    default:
      return <FaLaptopCode />;
  }
};

const getSkillIcon = (iconKey) => {
  switch (iconKey) {
    case "html5":
      return <SiHtml5 className="skill-brand-icon html-icon" />;
    case "css3":
      return <SiCss3 className="skill-brand-icon css-icon" />;
    case "tailwind":
      return <SiTailwindcss className="skill-brand-icon tailwind-icon" />;
    case "bootstrap":
      return <SiBootstrap className="skill-brand-icon bootstrap-icon" />;
    case "javascript":
      return <SiJavascript className="skill-brand-icon js-icon" />;
    case "typescript":
      return <SiTypescript className="skill-brand-icon ts-icon" />;
    case "react":
      return <SiReact className="skill-brand-icon react-icon" />;
    case "next":
      return <SiNextdotjs className="skill-brand-icon next-icon" />;
    case "reactnative":
      return <FaMobileAlt className="skill-brand-icon rn-icon" />;
    case "node":
      return <SiNodedotjs className="skill-brand-icon node-icon" />;
    case "redux":
      return <SiRedux className="skill-brand-icon redux-icon" />;
    case "mobx":
      return <SiMobx className="skill-brand-icon mobx-icon" />;
    case "realm":
      return <SiRealm className="skill-brand-icon realm-icon" />;
    case "firebase":
      return <SiFirebase className="skill-brand-icon firebase-icon" />;
    case "database":
      return <FaDatabase className="skill-brand-icon db-icon" />;
    case "api":
      return <FaServer className="skill-brand-icon api-icon" />;
    default:
      return <FaBolt className="skill-brand-icon default-icon" />;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        {/* Section Header */}
        <Animate
          play
          duration={0.6}
          delay={0.1}
          start={{ transform: "translateY(-20px)", opacity: 0 }}
          end={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <div className="skills-header">
            <div className="skills-badge">
              <FaBrain className="badge-icon" /> Technical Arsenal
            </div>
            <h2 className="skills-title">Skills & Technical Expertise</h2>
            <p className="skills-subtitle">
              A comprehensive breakdown of my programming stack, frontend architectures, mobile frameworks, state management engines, and cloud persistence layers.
            </p>
          </div>
        </Animate>

        {/* Skills Cards Grid */}
        <div className="skills__grid">
          {skillsData.map((categoryItem, catIdx) => (
            <Animate
              key={catIdx}
              play
              duration={0.7}
              delay={0.15 * (catIdx + 1)}
              start={{ transform: "translateY(30px)", opacity: 0 }}
              end={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <div className="skill-category-card">
                {/* Category Card Header */}
                <div className="category-header">
                  <div className="category-header__icon-box">
                    {getCategoryIcon(categoryItem.iconType)}
                  </div>
                  <div className="category-header__info">
                    <h3 className="category-title">{categoryItem.label}</h3>
                    <p className="category-desc">{categoryItem.description}</p>
                  </div>
                  <span className="category-count-pill">
                    {categoryItem.data.length} Skills
                  </span>
                </div>

                {/* Skill Items List */}
                <div className="skill-items-list">
                  {categoryItem.data.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item-row">
                      <div className="skill-item-info">
                        <div className="skill-brand-wrapper">
                          {getSkillIcon(skill.icon)}
                          <span className="skill-name">{skill.skillName}</span>
                        </div>
                        <div className="skill-meta">
                          <span className="skill-level-pill">{skill.level}</span>
                          <span className="skill-percent-number">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Custom Modern Animated Progress Bar */}
                      <div className="skill-progress-track">
                        <div
                          className="skill-progress-fill"
                          style={{ width: `${skill.percentage}%` }}
                        >
                          <div className="skill-progress-glow" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
