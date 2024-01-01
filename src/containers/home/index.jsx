import React, { useEffect } from "react";
import { Animate } from "react-simple-animate";
import { FaLinkedin,FaGithub,FaTwitter } from "react-icons/fa";
import "./styles.scss";
import MyPdf from '../../resume/udit_resume.pdf';
import { Link } from "react-router-dom";
import { getAnalytics, logEvent } from "firebase/analytics";

const Home = () => {

  useEffect(() => {
    const analytics  = getAnalytics();
    logEvent(analytics, 'home-page', {
      name: "udit tyagi"
    });
  },[])

  function handleNavigateLinkedin(socalLogin) {
    if(socalLogin === "github"){

      window.open(
        "https://github.com/UditTyagi455",
        "_blank"
      );
    }
    if(socalLogin === "linkedin"){

      window.open(
        "https://www.linkedin.com/in/udit-tyagi-bb8057170/",
        "_blank"
      );
    }
    if(socalLogin === "twitter"){
      window.open(
        "https://twitter.com/UditTya35971107",
        "_blank"
      );
    }
  }

  const downloadResume = () => {
    const analytics  = getAnalytics();
    logEvent(analytics, 'resume-download', {
      name: "udit tyagi"
    })
  }

  const hireMe = () => {
    const analytics  = getAnalytics();
    logEvent(analytics, 'hireme', {
      name: "udit tyagi"
    });
  }

  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Udit Tyagi.
          <br />
          Full Stack Mobile Developer
        </h1>
      </div>
      <Animate
        play={false}
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__Buttons">
          <div className="contact-me__buttons-wrapper">
          <Link to={"/Udit-Tyagi/contact"} onClick={() => hireMe()}>Hire Me</Link>
          </div>
          <div className="contact-me__buttons-wrapper">
            <a href={MyPdf} download="Udit-Resume.pdf" onClick={() => downloadResume()}>Download resume</a>
          </div>
          </div>
        
          
          {/* socail icons */}
          <div className="contact-me__social_icons">
          <div className="contact-me__socials-wrapper">
            <FaLinkedin onClick={() => handleNavigateLinkedin("linkedin")} size={32} />
          </div>
          <div className="contact-me__socials-wrapper">
            <FaGithub onClick={() => handleNavigateLinkedin("github")} size={32} />
          </div>
          <div className="contact-me__socials-wrapper">
            <FaTwitter onClick={() => handleNavigateLinkedin("twitter")} size={32} />
          </div>
          </div>
          </div>
    
      </Animate>
    </section>
  );
};

export default Home;
