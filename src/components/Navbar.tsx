import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useTheme } from "../context/ThemeContext";
import { portfolioData } from "../data/portfolioData";
import { FiSun, FiCpu, FiMenu, FiX, FiCheck } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const { identity } = portfolioData;
  const { theme, cycleTheme, cvMode, toggleCvMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a, .mobile-nav-drawer a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const section = element.getAttribute("data-href");
        if (section) {
          if (window.innerWidth > 1024) {
            e.preventDefault();
            smoother.scrollTo(section, true, "top top");
          } else {
            setMobileMenuOpen(false);
          }
        }
      });
    });

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERTISE", href: "#what-i-do" },
    { name: "PROJECTS", href: "#work" },
    { name: "EDUCATION", href: "#education" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "RESEARCH", href: "#research" },
    { name: "HONORS", href: "#achievements" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header className="header">
        <div className="nav-left">
          <a href="/#" className="navbar-title" data-cursor="disable" title="Arpit Singh Portfolio">
            <span className="logo-initials">{identity.initials}</span>
            <span className="logo-name">{identity.name}</span>
          </a>

          <a
            href={identity.linkedinUrl}
            className="navbar-connect"
            data-cursor="disable"
            target="_blank"
            rel="noreferrer"
            title="Verified LinkedIn Profile"
          >
            <FaLinkedinIn className="nav-in-icon" />
            <span>linkedin.com/in/arpitsinghii</span>
            <span className="nav-verified-badge" title="Verified Profile">
              <FiCheck />
            </span>
          </a>
        </div>

        {/* Desktop Nav Items */}
        <ul className="nav-links-desktop">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a data-href={link.href} href={link.href} data-cursor="disable">
                <HoverLinks text={link.name} />
              </a>
            </li>
          ))}
        </ul>

        {/* Theme and CV mode interactive controls */}
        <div className="nav-actions">
          <button
            type="button"
            className="theme-switch-btn"
            onClick={cycleTheme}
            title={`Current Theme: ${theme}. Click to switch theme.`}
            data-cursor="disable"
          >
            <FiSun className="theme-icon" />
            <span className="theme-pill-label">{theme.replace("-", " ")}</span>
          </button>

          <button
            type="button"
            className={`cv-switch-btn ${cvMode ? "active" : ""}`}
            onClick={toggleCvMode}
            title="Toggle Computer Vision Inspector HUD"
            data-cursor="disable"
          >
            <FiCpu className="cv-nav-icon" />
            <span className="cv-nav-label">CV HUD</span>
          </button>

          {/* Mobile Hamburger toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            data-cursor="disable"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                data-href={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-bottom">
          <a
            href={identity.resumeUrl}
            download="Arpit_Singh_Resume.pdf"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="landing-circle1" />
      <div className="landing-circle2" />
      <div className="nav-fade" />
    </>
  );
};

export default Navbar;
