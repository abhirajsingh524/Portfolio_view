import React, { createContext, useContext, useState } from "react";
import { FiChevronDown, FiChevronUp, FiTerminal, FiX } from "react-icons/fi";
import { portfolioData, HeadingNote } from "../../data/portfolioData";
import "./SectionHeading.css";

// Shared Context so only one heading note is expanded across the portfolio at any time
interface HeadingContextType {
  activeHeading: string | null;
  toggleHeading: (headingKey: string) => void;
  closeHeading: () => void;
}

const HeadingContext = createContext<HeadingContextType>({
  activeHeading: null,
  toggleHeading: () => {},
  closeHeading: () => {},
});

export const HeadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  const toggleHeading = (headingKey: string) => {
    setActiveHeading((prev) => (prev === headingKey ? null : headingKey));
  };

  const closeHeading = () => setActiveHeading(null);

  return (
    <HeadingContext.Provider
      value={{ activeHeading, toggleHeading, closeHeading }}
    >
      {children}
    </HeadingContext.Provider>
  );
};

export const useHeadingContext = () => useContext(HeadingContext);

interface SectionHeadingProps {
  headingKey: string; // Key in portfolioData.headingExplanations
  titleText?: React.ReactNode; // Optional custom JSX title (e.g. Featured <span>Projects</span>)
  subtitle?: string; // Subtitle pill text (e.g. Portfolio Showcase)
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  headingKey,
  titleText,
  subtitle,
  align = "left",
  className = "",
}) => {
  const { activeHeading, toggleHeading, closeHeading } = useHeadingContext();
  const note: HeadingNote | undefined =
    portfolioData.headingExplanations[headingKey];

  const isExpanded = activeHeading === headingKey;

  return (
    <div
      className={`section-heading-wrapper align-${align} ${className}`}
    >
      {subtitle && <span className="section-pre-badge">{subtitle}</span>}

      <div className="section-title-interactive-row">
        <button
          type="button"
          className="section-title-btn"
          onClick={() => toggleHeading(headingKey)}
          aria-expanded={isExpanded}
          title="Click to toggle developer note"
        >
          <h2 className="section-title-text">
            {titleText || headingKey}
          </h2>

          <span className={`heading-indicator-badge ${isExpanded ? "active" : ""}`}>
            <FiTerminal className="badge-code-icon" />
            <span className="badge-label">dev note</span>
            {isExpanded ? (
              <FiChevronUp className="badge-chevron" />
            ) : (
              <FiChevronDown className="badge-chevron" />
            )}
          </span>
        </button>
      </div>

      {/* Comment-style developer note card */}
      {isExpanded && note && (
        <div
          className="heading-comment-card"
          role="region"
          aria-label={`Developer note for ${note.title}`}
        >
          <div className="comment-card-header">
            <span className="comment-card-title">
              <span className="comment-syntax">//</span> {note.title}
            </span>
            <button
              type="button"
              className="comment-card-close"
              onClick={closeHeading}
              aria-label="Close developer note"
            >
              <FiX />
            </button>
          </div>

          <ul className="comment-points-list">
            <li>
              <span className="point-bullet">•</span>
              <span className="point-text">{note.point1}</span>
            </li>
            <li>
              <span className="point-bullet">•</span>
              <span className="point-text">{note.point2}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
