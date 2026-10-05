import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase, FaMobileAlt, FaBrain, FaLaptopCode, FaCode, FaCheckCircle, FaUserCheck } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import { personalData, expertiseData, statsData } from "./utils";
import "./styles.scss";

const getExpertiseIcon = (iconName) => {
  switch (iconName) {
    case "mobile":
      return <FaMobileAlt className="exp-icon" />;
    case "ai":
      return <FaBrain className="exp-icon" />;
    case "web":
      return <FaLaptopCode className="exp-icon" />;
    case "code":
      return <FaCode className="exp-icon" />;
    default:
      return <FaCheckCircle className="exp-icon" />;
  }
};

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        {/* Left / Center Content */}
        <div className="about__content__left">
          {/* Profile Overview Card */}
          <Animate
            play
            duration={0.8}
            delay={0.1}
            start={{ transform: "translateX(-40px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            <div className="about-hero-card">
              <div className="badge-wrapper">
                <span className="hero-badge">
                  <FaUserCheck className="badge-icon" /> Full Stack & AI Mobile Developer
                </span>
              </div>
              <h3 className="about-title">
                Passionate Developer Crafting High-Performance Mobile & AI Applications
              </h3>
              <p className="about-intro">
                Hi there! 👋 I'm <strong>Udit Tyagi</strong>, a dedicated Software Engineer specializing in <strong>React Native</strong>, <strong>Next.js/React</strong>, and <strong>Generative AI solutions</strong>. With over 2 years of hands-on industry experience, I build intuitive cross-platform applications and intelligent digital workflows that elevate user experiences.
              </p>
            </div>
          </Animate>

          {/* Key Expertise Grid */}
          <Animate
            play
            duration={0.8}
            delay={0.2}
            start={{ transform: "translateY(30px)", opacity: 0 }}
            end={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <div className="expertise-section">
              <h3 className="section-subtitle">What I Bring to the Table</h3>
              <div className="expertise-grid">
                {expertiseData.map((item, idx) => (
                  <div key={idx} className="expertise-card">
                    <div className="expertise-card__icon-wrapper">
                      {getExpertiseIcon(item.icon)}
                    </div>
                    <div className="expertise-card__content">
                      <h4 className="expertise-title">{item.title}</h4>
                      <p className="expertise-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Animate>

          {/* Personal Info Grid */}
          <Animate
            play
            duration={0.8}
            delay={0.3}
            start={{ transform: "translateY(30px)", opacity: 0 }}
            end={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <div className="personal-info-section">
              <h3 className="section-subtitle">Personal Details</h3>
              <div className="personal-info-grid">
                {personalData.map((item, key) => (
                  <div key={key} className="personal-info-item">
                    <span className="info-label">{item.label}</span>
                    <span className="info-val">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        </div>

        {/* Right Content / Tech Orbit & Stats */}
        <div className="about__content__right">
          <Animate
            play
            duration={0.8}
            delay={0.2}
            start={{ transform: "translateX(40px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            <div className="tech-orbit-wrapper">
              <h4 className="orbit-title">Core Technology Stack</h4>
              <div className="tech-orbit-circle">
                <div className="orbit-center">
                  <span>Full-Stack</span>
                  <span className="orbit-center-ai">& AI</span>
                </div>

                <div className="orbit-node node-1" title="Apple iOS">
                  <DiApple size={36} />
                </div>
                <div className="orbit-node node-2" title="Databases & Cloud">
                  <FaDatabase size={30} />
                </div>
                <div className="orbit-node node-3" title="Android">
                  <DiAndroid size={36} />
                </div>
                <div className="orbit-node node-4" title="AI & Web Development">
                  <FaDev size={32} />
                </div>
              </div>

              {/* Stats highlights */}
              <div className="stats-badges-container">
                {statsData.map((stat, sIdx) => (
                  <div key={sIdx} className="stat-badge">
                    <span className="stat-count">{stat.count}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;

