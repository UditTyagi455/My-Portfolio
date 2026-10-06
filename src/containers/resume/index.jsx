import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import "./styles.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      {/* <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      /> */}
      <div className="timeline">
        {/* Experience Section */}
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>

          {/* Fallback / Mobile Cards */}
          <div className="show-me">
            {data.experience.map((item, index) => (
              <div key={index} className="resume-card">
                <div className="resume-card__header">
                  <h3 className="resume-card__title">{item.title}</h3>
                  <h4 className="resume-card__subtitle">
                    <FaMapMarkerAlt className="icon-sub" /> {item.subTitle}
                  </h4>
                  <div className="resume-card__date-badge">
                    <FaCalendarAlt className="icon-calendar" /> {item.timeLine}
                  </div>
                </div>

                {item.skills && (
                  <div className="resume-card__skills">
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="resume-card__description-list">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Desktop Vertical Timeline */}
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color)"
            className="mobile-mode"
          >
            {data.experience.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="timeline__experience__vertical-timeline-component resume-timeline-element"
                contentStyle={{
                  background: "rgba(24, 24, 24, 0.75)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  color: "var(--selected-theme-sub-text-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                  borderRadius: "14px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
                  padding: "24px 28px",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid var(--selected-theme-main-color)",
                }}
                date={item.timeLine}
                iconStyle={{
                  background: "#121212",
                  color: "var(--selected-theme-main-color)",
                  boxShadow: "0 0 0 4px var(--selected-theme-main-color), inset 0 2px 0 rgba(0, 0, 0, 0.2), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
                }}
                icon={<MdWork />}
              >
                <div className="timeline-content-inner">
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="role-title">{item.title}</h3>
                    <h4 className="company-title">
                      <FaMapMarkerAlt className="icon-sub" /> {item.subTitle}
                    </h4>
                  </div>

                  {item.skills && (
                    <div className="resume-card__skills">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="vertical-timeline-element-description-wrapper">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Education Section */}
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>

          {/* Fallback / Mobile Cards */}
          <div className="show-me">
            {data.education.map((item, index) => (
              <div key={index} className="resume-card">
                <div className="resume-card__header">
                  <h3 className="resume-card__title">{item.stream}</h3>
                  <h4 className="resume-card__subtitle">
                    <FaMapMarkerAlt className="icon-sub" /> {item.title}, {item.subTitle}
                  </h4>
                  <div className="resume-card__date-badge">
                    <FaCalendarAlt className="icon-calendar" /> {item.timeLine}
                  </div>
                </div>

                <div className="resume-card__grade-badge">
                  <FaCode className="icon-code" /> {item.description}
                </div>

                {item.skills && (
                  <div className="resume-card__skills">
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {item.highlights && (
                  <ul className="resume-card__description-list">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Vertical Timeline */}
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color)"
            className="mobile-mode"
          >
            {data.education.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="timeline__education__vertical-timeline-component resume-timeline-element"
                contentStyle={{
                  background: "rgba(24, 24, 24, 0.75)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  color: "var(--selected-theme-sub-text-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                  borderRadius: "14px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
                  padding: "24px 28px",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid var(--selected-theme-main-color)",
                }}
                date={item.timeLine}
                iconStyle={{
                  background: "#121212",
                  color: "var(--selected-theme-main-color)",
                  boxShadow: "0 0 0 4px var(--selected-theme-main-color), inset 0 2px 0 rgba(0, 0, 0, 0.2), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
                }}
                icon={<FaGraduationCap />}
              >
                <div className="timeline-content-inner">
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="role-title">{item.stream}</h3>
                    <h4 className="company-title">
                      <FaMapMarkerAlt className="icon-sub" /> {item.title}, {item.subTitle}
                    </h4>
                  </div>

                  <div className="resume-card__grade-badge">
                    <FaCode className="icon-code" /> {item.description}
                  </div>

                  {item.skills && (
                    <div className="resume-card__skills">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.highlights && (
                    <ul className="vertical-timeline-element-description-wrapper">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;

