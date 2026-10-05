import React from "react";
import { portfolioData } from "../data/portfolioData";
import { FiAward } from "react-icons/fi";
import { GiTrophy } from "react-icons/gi";
import SectionHeading from "./common/SectionHeading";
import "./styles/Achievements.css";

const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  return (
    <section className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <SectionHeading
          headingKey="ACHIEVEMENTS"
          titleText={
            <>
              Key <span>Achievements</span>
            </>
          }
          subtitle="Honors & Competitions"
        />

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achieve-icon-wrapper">
                {index === 0 ? (
                  <GiTrophy className="achieve-icon gold" />
                ) : (
                  <FiAward className="achieve-icon" />
                )}
              </div>
              <div className="achieve-info">
                <h3>{item.title}</h3>
                <span className="achieve-platform">{item.platform}</span>
                <p className="achieve-highlight">{item.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
