import React, { useState } from "react";
import { portfolioData, CertificationItem } from "../data/portfolioData";
import { FiCalendar, FiHash, FiAward } from "react-icons/fi";
import "./styles/Certifications.css";

const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [filter, setFilter] = useState<"all" | "certification" | "internship" | "participation">("all");

  const filteredItems = certifications.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <section className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <div className="section-title-wrap">
          <span className="section-subtitle">Credentials & Development</span>
          <h2>
            Certifications <span>& Training</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="cert-filter-row">
          <button
            type="button"
            className={`cert-filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
            data-cursor="disable"
          >
            All Credentials ({certifications.length})
          </button>
          <button
            type="button"
            className={`cert-filter-btn ${filter === "certification" ? "active" : ""}`}
            onClick={() => setFilter("certification")}
            data-cursor="disable"
          >
            Certifications
          </button>
          <button
            type="button"
            className={`cert-filter-btn ${filter === "internship" ? "active" : ""}`}
            onClick={() => setFilter("internship")}
            data-cursor="disable"
          >
            Virtual Internships
          </button>
          <button
            type="button"
            className={`cert-filter-btn ${filter === "participation" ? "active" : ""}`}
            onClick={() => setFilter("participation")}
            data-cursor="disable"
          >
            Quiz Participation
          </button>
        </div>

        <div className="certifications-grid">
          {filteredItems.map((item: CertificationItem, index: number) => (
            <div className={`cert-card type-${item.type}`} key={index}>
              <div className="cert-card-top">
                <span className={`cert-type-pill pill-${item.type}`}>
                  {item.type === "certification"
                    ? "Professional Certification"
                    : item.type === "internship"
                    ? "Virtual Internship"
                    : "National Participation"}
                </span>

                {item.date && (
                  <span className="cert-date">
                    <FiCalendar className="cal-icon" /> {item.date}
                  </span>
                )}
              </div>

              <div className="cert-body">
                <h3>{item.title}</h3>
                <h4 className="cert-issuer">
                  <FiAward className="issuer-icon" /> {item.issuer}
                </h4>

                {item.credentialId && (
                  <div className="credential-id-box">
                    <FiHash className="hash-icon" />
                    <span>Credential ID: <code>{item.credentialId}</code></span>
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

export default Certifications;
