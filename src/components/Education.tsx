import { portfolioData } from "../data/portfolioData";
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import SectionHeading from "./common/SectionHeading";
import "./styles/Education.css";

const Education = () => {
  const { education } = portfolioData;

  return (
    <section className="education-section section-container" id="education">
      <div className="education-container">
        <SectionHeading
          headingKey="EDUCATION"
          titleText={
            <>
              Academic <span>Education</span>
            </>
          }
          subtitle="Foundations & Milestones"
        />

        <div className="education-timeline">
          {education.map((item, index) => (
            <div className="education-card" key={index}>
              <div className="education-marker">
                <div className="marker-dot" />
                <div className="marker-line" />
              </div>

              <div className="education-card-content">
                <div className="education-header">
                  <div className="degree-wrap">
                    <h3>{item.degree}</h3>
                    <h4 className="institution-name">{item.institution}</h4>
                  </div>
                  <div className="score-pill">
                    <FiAward className="score-icon" />
                    <span>{item.score}</span>
                  </div>
                </div>

                <div className="education-meta">
                  <span className="meta-item">
                    <FiCalendar className="meta-icon" /> {item.period}
                  </span>
                  <span className="meta-item">
                    <FiMapPin className="meta-icon" /> {item.location}
                  </span>
                </div>

                {item.coursework && item.coursework.length > 0 && (
                  <div className="coursework-container">
                    <div className="coursework-title">
                      <FiBookOpen className="cw-icon" />
                      <span>Relevant Coursework:</span>
                    </div>
                    <div className="coursework-tags">
                      {item.coursework.map((course, cIdx) => (
                        <span key={cIdx} className="cw-tag">
                          {course}
                        </span>
                      ))}
                    </div>
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

export default Education;
