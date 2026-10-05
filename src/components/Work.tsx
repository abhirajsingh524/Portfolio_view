import React, { useState, useMemo, useEffect } from "react";
import { portfolioData, Project, ProjectCategory } from "../data/portfolioData";
import SectionHeading from "./common/SectionHeading";
import {
  MdOpenInNew,
  MdClose,
  MdAutoAwesome,
  MdFilterList,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import {
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiTrendingUp,
  FiBookOpen,
  FiAlertCircle,
  FiZap,
} from "react-icons/fi";
import "./styles/Work.css";

const CATEGORIES: ProjectCategory[] = [
  "ALL",
  "AI / MACHINE LEARNING",
  "GENERATIVE AI",
  "NLP",
  "COMPUTER VISION",
  "DATA SCIENCE / ANALYTICS",
  "FULL STACK AI",
  "AUTOMATION / ROBOTICS",
];

const Work: React.FC = () => {
  const { projects } = portfolioData;

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  // Featured Projects (Flagship AI Implementations)
  const featuredProjects = useMemo(() => {
    return projects.filter((p) => p.isFeatured);
  }, [projects]);

  // Filtered Projects for Explore All
  const filteredAllProjects = useMemo(() => {
    if (activeCategory === "ALL") return projects;
    return projects.filter(
      (p) =>
        p.category === activeCategory ||
        p.additionalCategories?.includes(activeCategory)
    );
  }, [projects, activeCategory]);

  const renderProjectCard = (project: Project, isFeaturedSection = false) => {
    return (
      <div
        className={`project-card ${isFeaturedSection ? "featured-card" : ""}`}
        key={project.id}
      >
        {/* Project Visual */}
        <div className="project-card-image-box">
          <img
            src={project.image}
            alt={`${project.title} AI Architecture visual`}
            className="project-illustration-img"
            loading="lazy"
            width={400}
            height={250}
          />
          <div className="project-card-badge-row">
            <span className="card-cat-badge">{project.category}</span>
            <span className={`difficulty-badge diff-${project.difficulty.toLowerCase()}`}>
              {project.difficulty}
            </span>
          </div>
          {project.sihTheme && (
            <div className="sih-theme-tag" title={project.sihTheme}>
              <FiZap className="sih-icon" />
              <span>{project.sihTheme}</span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="project-card-body">
          <div className="project-headings">
            <div className="title-row">
              <h3 className="project-title">{project.title}</h3>
              {project.isFeatured && (
                <span className="featured-pill" title="Featured Flagship Project">
                  <MdAutoAwesome /> Flagship
                </span>
              )}
            </div>
            <h4 className="project-subtitle">{project.subtitle}</h4>
          </div>

          <p className="project-desc">{project.description}</p>

          {/* Technology Badges */}
          <div className="project-tools-wrap">
            <span className="tools-label">Technologies</span>
            <div className="tech-tag-row">
              {project.technologies.slice(0, 5).map((tech, tIdx) => (
                <span key={tIdx} className="tech-badge">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="tech-badge more-badge">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="project-card-footer">
            <button
              type="button"
              className="view-details-btn"
              onClick={() => setSelectedProject(project)}
            >
              <span>View Details</span>
              <MdAutoAwesome className="btn-icon" />
            </button>

            <div className="quick-links-group">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="quick-icon-btn"
                  title="Live Demo"
                  aria-label={`Open live demo for ${project.title}`}
                >
                  <MdOpenInNew />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="quick-icon-btn"
                  title="Source Code"
                  aria-label={`Open source code for ${project.title}`}
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="work-section section-container" id="work">
      <div className="work-container">
        {/* ==================================================
            FEATURED AI PROJECTS AREA
            ================================================== */}
        <div className="featured-projects-block">
          <SectionHeading
            headingKey="FEATURED PROJECTS"
            titleText={
              <>
                Featured <span>AI Projects</span>
              </>
            }
            subtitle="Flagship Implementations"
          />

          <div className="projects-grid featured-grid">
            {featuredProjects.map((project) => renderProjectCard(project, true))}
          </div>
        </div>

        {/* ==================================================
            EXPLORE ALL PROJECTS (WITH DOMAIN FILTERS)
            ================================================== */}
        <div className="all-projects-block" id="all-projects">
          <SectionHeading
            headingKey="ALL PROJECTS"
            titleText={
              <>
                Explore <span>All Projects</span>
              </>
            }
            subtitle="Complete Project Library"
          />

          {/* Category Filter Controls */}
          <div className="category-filter-wrapper">
            <div className="filter-header-bar">
              <span className="filter-lead-label">
                <MdFilterList /> Filter by Domain:
              </span>
              <span className="filter-count-badge">
                Showing {filteredAllProjects.length} of {projects.length}
              </span>
            </div>

            <div className="category-pills-row" role="tablist">
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`cat-filter-btn ${isSelected ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="projects-grid all-projects-grid">
            {filteredAllProjects.map((project) => renderProjectCard(project, false))}
          </div>
        </div>
      </div>

      {/* ==================================================
          COMPACT DYNAMIC PROJECT DETAILS PANEL / MODAL
          ================================================== */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-wrap">
                <div className="modal-badge-group">
                  <span className="modal-cat-tag">
                    {selectedProject.category}
                  </span>
                  <span className={`difficulty-badge diff-${selectedProject.difficulty.toLowerCase()}`}>
                    {selectedProject.difficulty}
                  </span>
                  {selectedProject.sihTheme && (
                    <span className="modal-sih-tag">
                      {selectedProject.sihTheme}
                    </span>
                  )}
                </div>
                <h3 id="modal-project-title" className="modal-heading">
                  {selectedProject.title}
                </h3>
                <h4 className="modal-subheading">
                  {selectedProject.subtitle}
                </h4>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <MdClose />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="modal-body-scroll">
              {/* Architecture Graphic */}
              <div className="modal-visual-frame">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} architecture`}
                  className="modal-img"
                />
              </div>

              {/* Problem & Solution Dual Columns */}
              <div className="modal-problem-solution-grid">
                <div className="modal-panel-box problem-box">
                  <div className="panel-box-header">
                    <FiAlertCircle className="panel-box-icon text-amber" />
                    <h5>Problem</h5>
                  </div>
                  <p>{selectedProject.problem}</p>
                </div>

                <div className="modal-panel-box solution-box">
                  <div className="panel-box-header">
                    <FiCheckCircle className="panel-box-icon text-teal" />
                    <h5>Solution</h5>
                  </div>
                  <p>{selectedProject.solution}</p>
                </div>
              </div>

              {/* AI/ML Approach & Model */}
              <div className="modal-info-section">
                <div className="section-mini-header">
                  <FiCpu className="mini-icon" />
                  <h5>AI / ML Approach &amp; Pipeline</h5>
                </div>
                <div className="model-callout">
                  <strong>Architecture / Model: </strong>
                  <span>{selectedProject.aiModel}</span>
                </div>
                <p className="detail-paragraph">{selectedProject.approach}</p>
              </div>

              {/* Implementation Details */}
              <div className="modal-info-section">
                <div className="section-mini-header">
                  <FiCode className="mini-icon" />
                  <h5>Implementation &amp; Data Flow</h5>
                </div>
                <p className="detail-paragraph">{selectedProject.implementation}</p>
              </div>

              {/* Key Features List */}
              <div className="modal-info-section">
                <div className="section-mini-header">
                  <FiZap className="mini-icon" />
                  <h5>Documented Key Features</h5>
                </div>
                <ul className="modal-features-list">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <li key={idx}>
                      <FiCheckCircle className="list-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results & Impact */}
              <div className="modal-info-section">
                <div className="section-mini-header">
                  <FiTrendingUp className="mini-icon" />
                  <h5>Result &amp; Practical Impact</h5>
                </div>
                <p className="detail-paragraph impact-text">{selectedProject.result}</p>
              </div>

              {/* Technical Concept Demonstrated */}
              <div className="modal-info-section">
                <div className="section-mini-header">
                  <FiBookOpen className="mini-icon" />
                  <h5>Concept Demonstrated &amp; Learnings</h5>
                </div>
                <p className="detail-paragraph learning-text">{selectedProject.learning}</p>
              </div>

              {/* Complete Technology Stack Badges */}
              <div className="modal-tech-stack-wrap">
                <span className="modal-stack-label">Complete Technology Stack</span>
                <div className="modal-stack-pills">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="modal-footer">
              <div className="modal-links-row">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-action-btn demo-btn"
                  >
                    <MdOpenInNew />
                    <span>Live Demo</span>
                  </a>
                )}
                {selectedProject.repoUrl && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-action-btn repo-btn"
                  >
                    <FaGithub />
                    <span>View Repository</span>
                  </a>
                )}
                {!selectedProject.demoUrl && !selectedProject.repoUrl && (
                  <span className="prototype-note">
                    Student / Research Implementation
                  </span>
                )}
              </div>

              <button
                type="button"
                className="modal-close-action"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
