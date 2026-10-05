import React from "react";
import { portfolioData } from "../data/portfolioData";
import {
  FiCode,
  FiCpu,
  FiLayers,
  FiMessageSquare,
  FiBarChart2,
  FiTool,
  FiCloud,
} from "react-icons/fi";
import "./styles/TechnicalSkills.css";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Programming":
      return <FiCode />;
    case "Machine Learning":
      return <FiCpu />;
    case "Deep Learning":
      return <FiLayers />;
    case "NLP and Generative AI":
      return <FiMessageSquare />;
    case "Data Analysis and Visualization":
      return <FiBarChart2 />;
    case "Development Tools":
      return <FiTool />;
    case "Cloud and Databases":
      return <FiCloud />;
    default:
      return <FiCode />;
  }
};

const TechnicalSkills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section className="tech-skills-section section-container" id="skills">
      <div className="tech-skills-container">
        <div className="section-title-wrap">
          <span className="section-subtitle">Core Capabilities</span>
          <h2>
            Technical <span>Skills</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((cat, index) => (
            <div className="skill-category-card" key={index}>
              <div className="skill-card-top">
                <div className="cat-icon-badge">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3>{cat.category}</h3>
              </div>

              <div className="skills-pill-container">
                {cat.skills.map((skill, sIdx) => (
                  <div className="skill-pill" key={sIdx}>
                    <span className="skill-name">{skill.name}</span>
                    {skill.level && (
                      <span className={`skill-level-tag level-${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
