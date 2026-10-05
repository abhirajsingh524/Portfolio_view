import { portfolioData } from "../data/portfolioData";
import { FiCompass, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { TbAtom2 } from "react-icons/tb";
import "./styles/Research.css";

const Research = () => {
  const { research } = portfolioData;

  return (
    <section className="research-section section-container" id="research">
      <div className="research-container">
        <div className="section-title-wrap">
          <span className="section-subtitle">Exploratory Investigation</span>
          <h2>
            Academic <span>Research</span>
          </h2>
        </div>

        <div className="research-card">
          <div className="research-card-glow" />

          <div className="research-content-wrap">
            <div className="research-header">
              <div className="research-title-block">
                <div className="research-badge-row">
                  <span className="academic-label">
                    <TbAtom2 className="atom-icon" /> {research.label}
                  </span>
                  <span className="research-date">
                    <FiCalendar className="date-icon" /> {research.period}
                  </span>
                </div>
                <h3>{research.title}</h3>
                <h4 className="research-category">{research.category}</h4>
              </div>

              <div className="research-atom-graphic">
                <div className="atom-orbital orbit-1" />
                <div className="atom-orbital orbit-2" />
                <div className="atom-orbital orbit-3" />
                <div className="atom-nucleus">
                  <TbAtom2 />
                </div>
              </div>
            </div>

            <p className="research-desc">{research.description}</p>

            <div className="research-highlights-box">
              <div className="highlights-title">
                <FiCompass className="h-icon" />
                <span>Core Research Inquiries & Findings</span>
              </div>
              <ul className="research-list">
                {research.highlights.map((item, idx) => (
                  <li key={idx} className="research-item">
                    <FiCheckCircle className="check-bullet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="research-footer-note">
              <span>
                Note: This inquiry represents an academic research project studying theoretical foundations and architectural simulations; it does not claim a published paper or deployed quantum hardware.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
