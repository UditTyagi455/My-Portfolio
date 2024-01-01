import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";

import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">🚀 Passionate React Developer with 2 Years of Experience</h3>
            <p>
            Hi there! 👋 I'm Udit Tyagi, a dedicated Mobile App developer with a focus on React Native and React.js. Over the past two years, I've been immersed in the world of front-end development, creating seamless and intuitive user experiences that leave a lasting impression.
            </p>
            <h3 className="developerContent">What I Bring to the Table:</h3>
            <p><b>🌐 React Mastery:</b> My expertise lies in harnessing the power of React and React Native to build robust and scalable applications. From crafting responsive web interfaces to developing cross-platform mobile apps, I thrive on turning ideas into reality.</p>
            <p><b>⚙️ Technical Proficiency:</b>  Proficient in the latest tools and technologies, I leverage my skills in HTML, CSS, and JavaScript to architect solutions that not only meet but exceed client expectations.</p>
            <p><b>🛠️ Problem Solver:</b>   I enjoy the challenges that coding presents, and I take pride in my ability to find innovative solutions. Every project is an opportunity to learn and grow, and I approach each one with enthusiasm and a commitment to excellence.</p>
            <p><b>👥 Collaborative Spirit:</b> I understand the importance of effective collaboration in the development process. Whether working with cross-functional teams or collaborating closely with clients, I value open communication and teamwork to achieve project success.</p>
            <h3 className="developerContent">Projects That Define Me:</h3>
            <p><b>📱 Mobile Excellence:</b>  Developed cutting-edge mobile applications using React Native, ensuring a seamless user experience across iOS and Android platforms.</p>
            <p><b>💻 Web Wonders:</b>  Designed and implemented responsive web applications with React.js, showcasing a keen eye for design and a commitment to user-centric solutions.</p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDatabase
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <DiAndroid size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var(--selected-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
