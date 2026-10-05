import React, { useEffect } from "react";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaDownload } from "react-icons/fa";
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
        {/* Welcome Tag */}
        <Animate
          play
          duration={0.8}
          delay={0.1}
          start={{ transform: "translateY(-30px)", opacity: 0 }}
          end={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <div className="home__greeting-badge">
            <span className="wave-icon">👋</span>
            <span>Welcome to my digital space</span>
          </div>
        </Animate>

        {/* Hero Text */}
        <div className="home__text-wrapper">
          <h1 className="home__title">
            Hi, I'm <span className="highlight-name">Udit Tyagi</span>
          </h1>
          <h2 className="home__subtitle">Full Stack & AI Mobile Developer</h2>
          <p className="home__description">
            Passionate about crafting intelligent mobile experiences with React Native,
            high-performance web apps, and modern Generative AI integrations.
          </p>
        </div>

        {/* CTA Buttons & Social Links */}
        <Animate
          play
          duration={1}
          delay={0.3}
          start={{ transform: "translateY(40px)", opacity: 0 }}
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
              >
                <FaLinkedin />
              </button>
              <button
                type="button"
                className="social-icon-btn github"
                onClick={() => handleNavigateSocial("github")}
                title="GitHub"
              >
                <FaGithub />
              </button>
              <button
                type="button"
                className="social-icon-btn twitter"
                onClick={() => handleNavigateSocial("twitter")}
                title="Twitter"
              >
                <FaTwitter />
              </button>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;

