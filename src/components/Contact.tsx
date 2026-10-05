import React, { useState, FormEvent } from "react";
import { portfolioData } from "../data/portfolioData";
import {
  MdArrowOutward,
  MdCopyright,
  MdMailOutline,
  MdPhone,
  MdLocationOn,
  MdSend,
} from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionHeading from "./common/SectionHeading";
import "./styles/Contact.css";

const Contact: React.FC = () => {
  const { identity, education } = portfolioData;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    error: string | null;
  }>({
    submitted: false,
    error: null,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormStatus({
        submitted: false,
        error: "Please complete all required fields (Name, Email, Message).",
      });
      return;
    }

    // Since this is a client-side portfolio without a private backend email server endpoint,
    // open the user's mail client directly with properly encoded subject and body to guarantee delivery!
    const subjectEncoded = encodeURIComponent(
      formState.subject.trim() || `Portfolio Contact from ${formState.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    window.location.href = `mailto:${identity.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setFormStatus({
      submitted: true,
      error: null,
    });
  };

  return (
    <footer className="contact-section section-container" id="contact">
      <div className="contact-container">
        <SectionHeading
          headingKey="CONTACT"
          titleText={
            <>
              Let's <span>Connect</span>
            </>
          }
          subtitle="Get In Touch"
        />

        <div className="contact-grid">
          {/* Direct Details & Profiles Column */}
          <div className="contact-info-col">
            <div className="contact-card">
              <h4>Direct Contact</h4>
              <div className="contact-methods">
                <a
                  href={`mailto:${identity.email}`}
                  className="contact-method-link"
                  data-cursor="disable"
                  title="Send Email to Arpit Singh"
                >
                  <div className="method-icon-box">
                    <MdMailOutline />
                  </div>
                  <div className="method-text">
                    <span className="method-label">Email</span>
                    <span className="method-val">{identity.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${identity.phone}`}
                  className="contact-method-link"
                  data-cursor="disable"
                  title="Call Arpit Singh"
                >
                  <div className="method-icon-box">
                    <MdPhone />
                  </div>
                  <div className="method-text">
                    <span className="method-label">Phone</span>
                    <span className="method-val">{identity.phone}</span>
                  </div>
                </a>

                <div className="contact-method-link static-method">
                  <div className="method-icon-box">
                    <MdLocationOn />
                  </div>
                  <div className="method-text">
                    <span className="method-label">Location</span>
                    <span className="method-val">{identity.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h4>Profiles & Social</h4>
              <div className="social-links-grid">
                <a
                  href={identity.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social-btn"
                >
                  <div className="social-left">
                    <FaGithub />
                    <span>GitHub</span>
                  </div>
                  <MdArrowOutward />
                </a>

                <a
                  href={identity.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social-btn"
                >
                  <div className="social-left">
                    <FaLinkedinIn />
                    <span>LinkedIn (Verified)</span>
                  </div>
                  <MdArrowOutward />
                </a>
              </div>
            </div>

            <div className="contact-card education-mini-card">
              <h4>Education Summary</h4>
              <p className="edu-summary-line">
                <strong>{education[0].degree}</strong>
                <br />
                {education[0].institution}, {education[0].location}
                <br />
                <span>{education[0].period} • {education[0].score}</span>
              </p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-col">
            <div className="contact-card form-card">
              <h4>Send a Direct Message</h4>
              <p className="form-subtext">
                Have an AI/ML opportunity or want to collaborate on a project? Send a message directly.
              </p>

              <form onSubmit={handleSubmit} className="portfolio-contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    data-cursor="disable"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    data-cursor="disable"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="e.g. AI/ML Developer Role / Project Discussion"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    data-cursor="disable"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    data-cursor="disable"
                  />
                </div>

                {formStatus.error && (
                  <div className="form-alert error">
                    <span>{formStatus.error}</span>
                  </div>
                )}

                {formStatus.submitted && (
                  <div className="form-alert success">
                    <span>Email client opened! You can now send the message directly to {identity.email}.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  data-cursor="disable"
                >
                  <span>Send Message</span>
                  <MdSend className="btn-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="contact-footer-bottom">
          <div className="footer-credits">
            <span>Portfolio of <strong>{identity.name}</strong> • AI/ML Developer</span>
          </div>
          <div className="footer-copyright">
            <MdCopyright /> 2026 {identity.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
