import { portfolioData } from "../data/portfolioData";
import { FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import SectionHeading from "./common/SectionHeading";
import "./styles/Career.css";

const Career = () => {
  const { experience } = portfolioData;

  return (
    <section className="career-section section-container" id="experience">
      <div className="career-container">
        <SectionHeading
          headingKey="EXPERIENCE"
          titleText={
            <>
              Internships <span>&amp; Experience</span>
            </>
          }
          subtitle="Applied Industry Learning"
        />

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot" />
          </div>

          {experience.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.company}</h4>
                  <h5>{exp.role}</h5>
                  {exp.support && <span className="exp-support-tag">{exp.support}</span>}
                </div>
                <div className="exp-date-badge">
                  <FiCalendar className="date-icon" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="exp-meta">
                <span className="meta-loc">
                  <FiMapPin className="meta-icon" /> {exp.location}
                </span>
              </div>

              <ul className="exp-highlights-list">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="highlight-item">
                    <FiCheckCircle className="check-bullet" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
