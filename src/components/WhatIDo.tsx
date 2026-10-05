import React, { useState } from "react";
import SectionHeading from "./common/SectionHeading";
import {
  FiCpu,
  FiLayers,
  FiMessageSquare,
  FiEye,
  FiBarChart2,
  FiCheckCircle,
} from "react-icons/fi";
import "./styles/WhatIDo.css";

interface ExpertiseDomain {
  id: string;
  headingKey: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const EXPERTISE_DOMAINS: ExpertiseDomain[] = [
  {
    id: "ml",
    headingKey: "MACHINE LEARNING",
    title: "MACHINE LEARNING",
    subtitle: "Predictive Modeling & Applied Statistics",
    description:
      "Developing supervised and unsupervised machine learning pipelines, feature engineering, hyperparameter tuning, model evaluation, and turning raw datasets into actionable predictive foresight.",
    icon: <FiCpu className="domain-card-icon" />,
    tags: [
      "Python",
      "Scikit-learn",
      "Predictive Modeling",
      "Feature Engineering",
      "Cross-Validation",
      "Hyperparameter Tuning",
    ],
  },
  {
    id: "genai",
    headingKey: "GENERATIVE AI",
    title: "GENERATIVE AI",
    subtitle: "LLMs, RAG & Semantic Retrieval",
    description:
      "Designing contextual conversational assistants, dense vector embedding search with FAISS, prompt engineering templates, and source-grounded response generation pipelines.",
    icon: <FiLayers className="domain-card-icon" />,
    tags: [
      "LLMs",
      "RAG Architecture",
      "FAISS Vector Search",
      "Semantic Retrieval",
      "Prompt Engineering",
      "Context Grounding",
    ],
  },
  {
    id: "nlp",
    headingKey: "NLP",
    title: "NATURAL LANGUAGE PROCESSING",
    subtitle: "Text & Acoustic Speech Intelligence",
    description:
      "Building text preprocessing pipelines, tokenization, intent classification, and acoustic voice processing including MFCC spectrogram analysis and multilingual translation.",
    icon: <FiMessageSquare className="domain-card-icon" />,
    tags: [
      "NLP",
      "Speech Processing",
      "Tokenization",
      "Intent Classification",
      "Librosa",
      "SpeechBrain",
      "Seq2Seq",
    ],
  },
  {
    id: "cv",
    headingKey: "COMPUTER VISION",
    title: "COMPUTER VISION",
    subtitle: "CNNs, Video Processing & Object Tracking",
    description:
      "Engineering visual recognition systems using Convolutional Neural Networks, OpenCV video processing, bounding box regression, and multi-class image diagnostics.",
    icon: <FiEye className="domain-card-icon" />,
    tags: [
      "Convolutional Neural Networks",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Object Tracking",
      "Image Classification",
    ],
  },
  {
    id: "ds",
    headingKey: "DATA SCIENCE",
    title: "DATA SCIENCE & ANALYTICS",
    subtitle: "EDA, Predictive Insights & Dashboards",
    description:
      "Executing end-to-end exploratory data analysis, statistical validation, cohort churn modeling, sales forecasting, and communicating KPIs through interactive business dashboards.",
    icon: <FiBarChart2 className="domain-card-icon" />,
    tags: [
      "Pandas",
      "NumPy",
      "EDA",
      "Statistical Analysis",
      "Tableau",
      "Power BI",
      "XGBoost",
    ],
  },
];

const WhatIDo: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>("ml");

  const currentDomain =
    EXPERTISE_DOMAINS.find((d) => d.id === activeDomainId) ||
    EXPERTISE_DOMAINS[0];

  return (
    <section className="whatIDO section-container" id="what-i-do">
      <div className="what-container">
        {/* Section Heading with Clickable Comment Note */}
        <SectionHeading
          headingKey="MACHINE LEARNING"
          titleText={
            <>
              AI &amp; Machine Learning <span>Expertise</span>
            </>
          }
          subtitle="Specialized Disciplines"
        />

        {/* 5-Domain Interactive Grid */}
        <div className="expertise-layout">
          {/* Domain Selection Tabs / Pills */}
          <div className="expertise-tabs-list" role="tablist">
            {EXPERTISE_DOMAINS.map((domain) => {
              const isActive = domain.id === activeDomainId;
              return (
                <button
                  key={domain.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`expertise-nav-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveDomainId(domain.id)}
                >
                  <div className="nav-btn-icon-box">{domain.icon}</div>
                  <div className="nav-btn-text">
                    <span className="nav-btn-title">{domain.title}</span>
                    <span className="nav-btn-subtitle">{domain.subtitle}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Domain Showcase Card */}
          <div className="expertise-detail-card">
            <div className="detail-card-header">
              <div className="detail-header-left">
                <div className="detail-icon-badge">{currentDomain.icon}</div>
                <div>
                  <SectionHeading
                    headingKey={currentDomain.headingKey}
                    titleText={currentDomain.title}
                    subtitle="Domain Overview"
                  />
                  <h4 className="detail-subtitle">{currentDomain.subtitle}</h4>
                </div>
              </div>
            </div>

            <p className="detail-description">{currentDomain.description}</p>

            <div className="detail-toolset-block">
              <span className="toolset-label">Core Competencies &amp; Toolset</span>
              <div className="toolset-tags-row">
                {currentDomain.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="toolset-badge">
                    <FiCheckCircle className="badge-check" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
