import React from "react";
import { FaBlackTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import PageHeaderContent from "../../components/pageHeaderContent";
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
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <div className="show-me">
            {data.experience.map((item) => {
              return (
                <div
                  style={{
                    border: "1.5px solid var(--selected-theme-main-color)",
                    padding: "25px",
                    margin: 15,
                  }}
                >
                  <div syle={{ color: "white" }}>
                    <h3 style={{ color: "var(--selected-theme-main-color)", fontSize: "20px" }}>
                      {item.title}
                    </h3>
                    <h4 style={{ color: "white", fontSize: "15px" }}>
                      {item.subTitle}
                    </h4>
                  </div>
                  <ul className="vertical-timeline-element-description-wrapper">
                    {item.description.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          color: "white",
                          fontSize: "15px",
                          marginTop: "15px",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color)"
            className="mobile-mode"
          >
            {data.experience.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-component"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-main-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                date={item.timeLine}
                iconStyle={{
                  background: "#181818",
                  color: "var(--selected-theme-main-color)",
                }}
                icon={<MdWork />}
              >
                <div>
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <ul className="vertical-timeline-element-description-wrapper">
                    {item.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>

          <div className="show-me">
            {data.education.map((item) => {
              return (
                <div
                  style={{
                    border: "1.5px solid var(--selected-theme-main-color)",
                    padding: "20px",
                    margin: 15,
                  }}
                >
                  <div syle={{ color: "white" }}>
                    <h3 style={{ color: "var(--selected-theme-main-color)", fontSize: "20px" }}>
                      {item.title}
                    </h3>
                    <h4 style={{ color: "white", fontSize: "15px" }}>
                      {item.subTitle}
                    </h4>
                  </div>
                  <p
                    style={{ color: "white", fontSize: "15px", marginTop: 15 }}
                  >
                    {item.stream}
                  </p>
                  <p style={{ color: "white", fontSize: "15px" }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color)"
            className="mobile-mode"
          >
            {data.education.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__education__vertical-timeline-component"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-main-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                date="2020 - 2022"
                iconStyle={{
                  background: "#181818",
                  color: "var(--selected-theme-main-color)",
                }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h4>
                    {item.title},{item.subTitle}
                  </h4>
                  {/* <h4>{item.subTitle}</h4> */}
                </div>
                <p className="vertical-timeline-element-stream-wrapper">
                  {item.stream}
                </p>
                <p className="vertical-timeline-element-description-wrapper">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
