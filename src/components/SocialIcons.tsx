import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import { portfolioData } from "../data/portfolioData";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  const { identity } = portfolioData;

  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <span>
          <a
            href={identity.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href={identity.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Verified LinkedIn Profile"
            title="LinkedIn Profile (Verified)"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href={`mailto:${identity.email}`}
            aria-label="Send Email"
            title="Send Email"
          >
            <MdMailOutline />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href={identity.resumeUrl}
        download="Arpit_Singh_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        title="Download Resume"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
