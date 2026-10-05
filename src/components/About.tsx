import { portfolioData } from "../data/portfolioData";
import { FiCompass, FiUsers } from "react-icons/fi";
import SectionHeading from "./common/SectionHeading";
import "./styles/About.css";

const About = () => {
  const { about, identity } = portfolioData;

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Column: Profile Photo Visual Card */}
        <div className="about-visual-col">
          <div className="about-image-card">
            <div className="about-image-frame">
              <img
                src={identity.portrait}
                alt={identity.alt}
                className="about-portrait-img"
                loading="lazy"
                width={380}
                height={480}
              />
              <div className="about-image-overlay-glow" />
              <div className="about-image-badge">
                <span className="badge-pulse" />
                <span>AI/ML Developer • Invertis University</span>
              </div>
            </div>
            <div className="about-card-decorative-bar">
              <span className="deco-tag">B.Tech AI 2023–27</span>
              <span className="deco-tag highlight">9.3 / 10 CGPA</span>
            </div>
          </div>
        </div>

        {/* Right Column: About Content */}
        <div className="about-content-col">
          <SectionHeading
            headingKey="ABOUT ME"
            titleText="ABOUT ME"
            subtitle="Candidate Profile"
          />

          <div className="about-intro-text">
            <p className="about-lead">
              {about.mainText}
            </p>
            <p className="about-body">
              {about.secondParagraph}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="about-grid">
            <div className="about-card">
              <div className="card-header">
                <FiCompass className="card-icon" />
                <h4>Core Interests</h4>
              </div>
              <div className="tag-cloud">
                {about.interests.map((interest, i) => (
                  <span key={i} className="about-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-card">
              <div className="card-header">
                <FiUsers className="card-icon" />
                <h4>Key Strengths</h4>
              </div>
              <div className="tag-cloud">
                {about.strengths.map((strength, i) => (
                  <span key={i} className="about-tag strength-tag">
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Metric Bar */}
          <div className="academic-metric-bar">
            <div className="metric-box">
              <span className="metric-val">9.3</span>
              <span className="metric-lbl">CGPA at Invertis</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <span className="metric-val">2023–27</span>
              <span className="metric-lbl">B.Tech AI Track</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <span className="metric-val">AI/ML</span>
              <span className="metric-lbl">Focus Area</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
