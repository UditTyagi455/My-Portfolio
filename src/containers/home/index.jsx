import React, { useEffect } from "react";
import { Animate } from "react-simple-animate";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaDownload,
  FaReact,
  FaBrain,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import ProfileImg from "../../images/profile.png";
import "./styles.scss";
import Mypdf from "../../resume/udit_resume.pdf";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const analytics = getAnalytics();
      logEvent(analytics, "home-page", {
        name: "udit tyagi",
      });
    } catch (e) {
      // analytics fallback
    }
  }, []);

  function handleNavigateSocial(socialType) {
    if (socialType === "github") {
      window.open("https://github.com/UditTyagi455", "_blank");
    }
    if (socialType === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/udit-tyagi-bb8057170/",
        "_blank"
      );
    }
    if (socialType === "twitter") {
      window.open("https://twitter.com/UditTya35971107", "_blank");
    }
  }

  const downloadResume = () => {
    try {
      const analytics = getAnalytics();
      logEvent(analytics, "resume-download", {
        name: "udit tyagi",
      });
    } catch (e) {
      // analytics fallback
    }
  };

  const hireMe = () => {
    try {
      const analytics = getAnalytics();
      logEvent(analytics, "hireme", {
        name: "udit tyagi",
      });
    } catch (e) {
      // analytics fallback
    }
    navigate("/My-Portfolio/contact");
  };

  return (
    <section className="home" id="home">
      <div className="home__content-container">
        {/* Left / Main Text Column */}
        <div className="home__left-content">
          {/* Welcome Tag */}
          <Animate
            play
            duration={0.8}
            delay={0.1}
            start={{ transform: "translateY(-20px)", opacity: 0 }}
            end={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <div className="home__greeting-badge">
              <span className="wave-icon">👋</span>
              <span>Full Stack & AI Mobile Developer</span>
            </div>
          </Animate>

          {/* Hero Text */}
          <div className="home__text-wrapper">
            <h1 className="home__title">
              Hi, I'm <span className="highlight-name">Udit Tyagi</span>
            </h1>
            <h2 className="home__subtitle">Software Engineer & Mobile Specialist</h2>
            <p className="home__description">
              Specializing in <strong>React Native</strong>, <strong>Next.js</strong>, and <strong>Generative AI solutions</strong>. With 4+ years of industry experience, I build intuitive cross-platform applications and scalable digital products.
            </p>
          </div>

          {/* CTA Buttons & Social Links */}
          <Animate
            play
            duration={0.8}
            delay={0.3}
            start={{ transform: "translateY(30px)", opacity: 0 }}
            end={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <div className="home__actions-wrapper">
              <div className="home__cta-buttons">
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={hireMe}
                >
                  <FaPaperPlane className="btn-icon" />
                  <span>Hire Me</span>
                </button>

                <a
                  href={Mypdf}
                  download="Udit-Resume.pdf"
                  className="btn btn--secondary"
                  onClick={downloadResume}
                >
                  <FaDownload className="btn-icon" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="home__social-links">
                <button
                  type="button"
                  className="social-icon-btn linkedin"
                  onClick={() => handleNavigateSocial("linkedin")}
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </button>
                <button
                  type="button"
                  className="social-icon-btn github"
                  onClick={() => handleNavigateSocial("github")}
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </button>
                <button
                  type="button"
                  className="social-icon-btn twitter"
                  onClick={() => handleNavigateSocial("twitter")}
                  title="Twitter"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </button>
              </div>
            </div>
          </Animate>
        </div>

        {/* Right Column / Glowing Profile Photo with floating badges */}
        <div className="home__right-content">
          <Animate
            play
            duration={0.9}
            delay={0.2}
            start={{ transform: "scale(0.85)", opacity: 0 }}
            end={{ transform: "scale(1)", opacity: 1 }}
          >
            <div className="home__profile-card">
              {/* Outer Glow Ring */}
              <div className="home__profile-glow-ring" />

              {/* Avatar Image Frame */}
              <div className="home__profile-img-wrapper">
                <img
                  src={ProfileImg}
                  alt="Udit Tyagi - Full Stack & Mobile Developer"
                  className="home__profile-img"
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="floating-badge badge-rn" title="React Native">
                <FaReact className="badge-icon react-spin" />
                <span>React Native</span>
              </div>

              <div className="floating-badge badge-next" title="Next.js">
                <SiNextdotjs className="badge-icon" />
                <span>Next.js</span>
              </div>

              <div className="floating-badge badge-ai" title="AI & Intelligence">
                <FaBrain className="badge-icon" />
                <span>AI & GenAI</span>
              </div>

              <div className="floating-badge badge-exp" title="Experience">
                <span className="exp-count">4+ Yrs</span>
                <span className="exp-label">Experience</span>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Home;
