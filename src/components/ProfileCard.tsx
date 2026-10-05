import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { FiEye, FiMaximize2, FiCompass, FiCpu } from "react-icons/fi";
import "./styles/ProfileCard.css";

type AngleType = "focus" | "perspective" | "tilt";

interface ProfileCardProps {
  compact?: boolean;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ compact = false, className = "" }) => {
  const { identity } = portfolioData;
  const { cvMode, toggleCvMode } = useTheme();
  const [activeAngle, setActiveAngle] = useState<AngleType>("focus");
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`profile-card-wrapper ${cvMode ? "cv-active" : ""} ${compact ? "profile-card-compact" : ""} ${className}`}>
      {/* Outer Glow & Shadow Container */}
      <div className={`profile-card-frame angle-${activeAngle}`}>
        {/* Holographic Glare Layer */}
        <div className="profile-glare" />

        {/* Image Container with Reserved Dimensions */}
        <div className="profile-img-container">
          {!imageError ? (
            <img
              src={identity.portrait}
              alt={identity.alt}
              className={`profile-img img-angle-${activeAngle}`}
              width={420}
              height={560}
              onError={() => setImageError(true)}
              loading="eager"
            />
          ) : (
            <div className="profile-placeholder">
              <span className="placeholder-monogram">{identity.initials}</span>
              <p className="placeholder-note">
                Upload portrait to: <code>public/images/arpit_portrait.jpg</code>
              </p>
            </div>
          )}

          {/* OpenCV Computer Vision HUD Overlay */}
          <div className={`opencv-overlay ${cvMode ? "visible" : ""}`}>
            {/* Scan Laser Line */}
            <div className="cv-scanline" />

            {/* Top Bar Telemetry */}
            <div className="cv-telemetry-bar">
              <span className="cv-tag">
                <FiCpu className="cv-icon-spin" /> CV2.DETECTOR: ACTIVE
              </span>
              <span className="cv-tag fps">FPS: 60.0</span>
            </div>

            {/* Target Face Bounding Box */}
            <div className="cv-target-box">
              <div className="cv-corner top-left" />
              <div className="cv-corner top-right" />
              <div className="cv-corner bottom-left" />
              <div className="cv-corner bottom-right" />
              <div className="cv-box-label">
                <span>AI/ML_DEV: ARPIT SINGH</span>
                <span className="cv-conf">CONF: 99.8%</span>
              </div>

              {/* Facial Landmark Nodes */}
              <div className="cv-landmarks">
                <span className="cv-dot eye-l" title="Left Eye landmark" />
                <span className="cv-dot eye-r" title="Right Eye landmark" />
                <span className="cv-dot nose" title="Nose landmark" />
                <span className="cv-dot mouth" title="Smile landmark" />
                <span className="cv-dot chin" title="Jawline landmark" />
                <svg className="cv-mesh-lines" viewBox="0 0 100 100">
                  <polygon
                    points="32,36 68,36 50,52"
                    fill="none"
                    stroke="var(--accentColor)"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                    opacity="0.8"
                  />
                  <polygon
                    points="32,36 50,52 35,72 50,86"
                    fill="none"
                    stroke="var(--accentColor)"
                    strokeWidth="0.8"
                    opacity="0.6"
                  />
                  <polygon
                    points="68,36 50,52 65,72 50,86"
                    fill="none"
                    stroke="var(--accentColor)"
                    strokeWidth="0.8"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom Coordinate Bar */}
            <div className="cv-coords-bar">
              <span>LOC: 28.3670° N, 79.4304° E</span>
              <span>INFERENCE: 1.1ms</span>
            </div>
          </div>

          {/* Quick Status Tag */}
          <div className="profile-status-pill">
            <span className="status-indicator-dot" />
            <span>AI/ML Developer • Invertis Univ</span>
          </div>
        </div>

        {/* Angle Controls & OpenCV Quick Switch */}
        <div className="profile-controls">
          <div className="angle-buttons" role="tablist" aria-label="Portrait Angle Views">
            <button
              type="button"
              className={`angle-btn ${activeAngle === "focus" ? "active" : ""}`}
              onClick={() => setActiveAngle("focus")}
              title="Focus Crop — Headshot & expression"
            >
              <FiEye className="btn-icon" /> Focus
            </button>
            <button
              type="button"
              className={`angle-btn ${activeAngle === "perspective" ? "active" : ""}`}
              onClick={() => setActiveAngle("perspective")}
              title="Architectural Perspective — High Angle"
            >
              <FiMaximize2 className="btn-icon" /> Perspective
            </button>
            <button
              type="button"
              className={`angle-btn ${activeAngle === "tilt" ? "active" : ""}`}
              onClick={() => setActiveAngle("tilt")}
              title="3D Tilt Angle — Isometric Angle"
            >
              <FiCompass className="btn-icon" /> 3D Tilt
            </button>
          </div>

          <button
            type="button"
            className={`cv-toggle-btn ${cvMode ? "active" : ""}`}
            onClick={toggleCvMode}
            title="Toggle Computer Vision Inspector HUD"
          >
            <FiCpu className="cv-btn-icon" />
            <span>{cvMode ? "CV: ON" : "OpenCV"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
