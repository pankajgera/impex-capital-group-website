import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  /* Scroll Reveal Animation */
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.company ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Here you would typically send the data to a server
    console.log("Form submitted:", formData);

    // Show success message
    alert("Thank you for your message! We will get back to you soon.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO ===== */}
      <header className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-content">
          <span className="hero-subtitle">Get In Touch</span>
          <h1>Contact Us</h1>
        </div>
      </header>

      {/* ===== CONTACT INFO SECTION ===== */}
      <section className="contact-info-section reveal">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <h3>Get To Us</h3>
            <p>5251 Westheimer Suite 925</p>
            <p>Houston, TX 77056</p>
          </div>
          <div className="contact-info-card">
            <i className="fas fa-phone contact-icon"></i>
            <h3>Call Us</h3>
            <p>1-833-IMPEX-CG</p>
            <p>(1-833-467-3924)</p>
          </div>
          <div className="contact-info-card">
            <i className="fas fa-envelope contact-icon"></i>
            <h3>Email Us</h3>
            <p>General Enquiry</p>
            <p>
              <a href="mailto:investor_relations@impexcapitalgroup.com">
                investor_relations@impexcapitalgroup.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="contact-form-section reveal">
        <div className="contact-form-container">
          <div className="form-header">
            <h2>Contact Us</h2>
            <h4>Fill below form field for general enquiry</h4>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Your Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
};

export default Contact;

