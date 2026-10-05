import { PropsWithChildren } from "react";
import { portfolioData } from "../data/portfolioData";
import ProfileCard from "./ProfileCard";
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { FiDownload, FiArrowDownRight, FiMail } from "react-icons/fi";
import { smoother } from "./Navbar";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const { identity } = portfolioData;

  const scrollTo = (targetId: string) => {
    if (smoother && window.innerWidth > 1024) {
      smoother.scrollTo(targetId, true, "top top");
    } else {
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="landing-section" id="landingDiv">
      <div className="landing-container">
        {/* Mobile profile card (rendered above hero content on mobile screens) */}
        <div className="hero-profile-mobile">
          <ProfileCard />
        </div>

        {/* Hero Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-pulse" />
            <span className="hero-location">
              <FaMapMarkerAlt className="loc-icon" /> {identity.location}
            </span>
          </div>

          <div className="landing-intro">
            <h2>Hello, I'm</h2>
            <h1>
              {identity.firstName}{" "}
              <span className="hero-last-name">{identity.lastName}</span>
            </h1>
          </div>

          <div className="hero-headline">
            <h3>{identity.headline}</h3>
          </div>

          <p className="hero-bio">{identity.introduction}</p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollTo("#work")}
              data-cursor="disable"
            >
              <span>View Projects</span>
              <FiArrowDownRight className="btn-icon" />
            </button>

            <a
              href={identity.resumeUrl}
              download="Arpit_Singh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              data-cursor="disable"
            >
              <FiDownload className="btn-icon" />
              <span>Download Resume</span>
            </a>

            <button
              type="button"
              className="btn btn-tertiary"
              onClick={() => scrollTo("#contact")}
              data-cursor="disable"
            >
              <FiMail className="btn-icon" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Quick Links */}
          <div className="hero-social-links">
            <span className="social-label">Connect:</span>
            <a
              href={identity.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-social-icon"
              aria-label="GitHub Profile"
              data-cursor="disable"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href={identity.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-social-icon verified-linkedin"
              aria-label="Verified LinkedIn Profile"
              data-cursor="disable"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
              <span className="verified-badge" title="Verified Profile">✓</span>
            </a>
          </div>
        </div>

        {/* Hero Right: Profile Card beside hero introduction on desktop */}
        <div className="hero-profile-desktop">
          <ProfileCard />
        </div>
      </div>

      {/* Render 3D Background Character */}
      {children}
    </section>
  );
};

export default Landing;
