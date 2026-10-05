import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaCopy,
  FaCheck,
  FaUser,
  FaCommentDots,
  FaTag
} from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("udittyagi455@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const submitForm = async (e) => {
    if (e) e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !description.trim()) {
      setErrorMsg("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://portfolio-662e4-default-rtdb.firebaseio.com/contact-us.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim() || "General Inquiry",
            description: description.trim(),
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setDescription("");
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setErrorMsg("Failed to send message. Please try again or email directly.");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setErrorMsg("Network error. Please try reaching out directly via email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />

      <div className="contact__content">
        <div className="contact__header-wrapper">
          <h3 className="contact__header-text">Let's Connect</h3>
          <p className="contact__sub-header-text">
            Have an idea for an AI-powered product, mobile application, or full-stack solution?
            Let's discuss how we can build something extraordinary together.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left Info Panel */}
          <Animate
            play
            duration={0.8}
            delay={0.1}
            start={{ transform: "translateX(-40px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            <div className="contact__info-card">
              {/* Availability Badge */}
              <div className="availability-badge">
                <span className="pulse-dot"></span>
                <span>Available for Full-Time & Freelance Projects</span>
              </div>

              <div className="info-items">
                {/* Email Item */}
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Email</span>
                    <a
                      href="mailto:udittyagi455@gmail.com"
                      className="info-value"
                    >
                      udittyagi455@gmail.com
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                  >
                    {copied ? <FaCheck className="copied-icon" /> : <FaCopy />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                {/* Phone Item */}
                <div className="info-item">
                  <div className="info-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Call / WhatsApp</span>
                    <a href="tel:+918171634510" className="info-value">
                      +91 8171634510
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Location</span>
                    <span className="info-value">
                      Sector-12, Noida, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="social-links-section">
                <h4 className="social-title">Follow & Connect</h4>
                <div className="social-icons-wrapper">
                  <a
                    href="https://www.linkedin.com/in/udit-tyagi-bb8057170/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn linkedin"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/UditTyagi455"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn github"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://twitter.com/UditTya35971107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn twitter"
                    title="Twitter"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </Animate>

          {/* Right Form Panel */}
          <Animate
            play
            duration={0.8}
            delay={0.2}
            start={{ transform: "translateX(40px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            <div className="contact__form-card">
              <h3 className="form-card-title">Send A Message</h3>
              <p className="form-card-subtitle">
                Fill out the form below and I'll respond within 24 hours.
              </p>

              {submitted && (
                <div className="success-banner">
                  <FaCheckCircle className="success-icon" />
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. I'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="error-banner">
                  <p>{errorMsg}</p>
                </div>
              )}

              <form onSubmit={submitForm} className="contact-form">
                <div className="input-group">
                  <label htmlFor="name">
                    <FaUser className="input-icon" /> Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">
                    <FaEnvelope className="input-icon" /> Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="subject">
                    <FaTag className="input-icon" /> Subject / Project Type
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. AI Integration, Mobile App, Freelance"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="input-group full-width">
                  <label htmlFor="description">
                    <FaCommentDots className="input-icon" /> Message *
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    placeholder="Tell me about your project, questions, or ideas..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="btn-content">
                      <span className="spinner"></span> Sending...
                    </span>
                  ) : (
                    <span className="btn-content">
                      <FaPaperPlane className="send-icon" /> Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Contact;

