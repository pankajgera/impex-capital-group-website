import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ 
  heading = "Ready To Invest In Commercial Real Estate?",
  text = "Discover how we build wealth through strategic asset management.",
  variant = "default"
}) => {
  // Portfolio variant footer
  if (variant === "portfolio") {
    return (
      <footer className="footer-portfolio">
        <div className="footer-portfolio-content">
          <div className="footer-section">
            <h3 className="footer-section-title">Company</h3>
            <nav className="footer-nav">
              <Link to="/">About Us</Link>
              <Link to="/team">Team</Link>
              <Link to="/investors">Investors</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-section-title">About Us</h3>
            <p className="footer-about-text">
              Impex Capital Group is a real estate investment company that builds, acquires and invests in commercial real estate assets in high growth cities across the US.
            </p>
          </div>
        </div>

        <div className="footer-portfolio-bottom">
          <div className="footer-copyright">
            Copyright 2025 © Impex Capital Group
          </div>
          <div className="footer-contact">
            5251 Westheimer Suite 925, Houston, TX 77056
            <br />
            (1-833-467-3924) | investor_relations@impexcapitalgroup.com
          </div>
        </div>
      </footer>
    );
  }

  // Default footer
  return (
    <footer>
      <div className="footer-cta reveal">
        <h2>{heading}</h2>
        <p className="footer-text">
          {text}
        </p>
        <Link to="/contact" className="btn-gold-outline">
          Contact Our Team
        </Link>
      </div>

      <div className="footer-btm">
        <div>© 2025 Impex Capital Group. All Rights Reserved.</div>
        <div>
          5251 Westheimer Suite 925, Houston, TX 77056
          <br />
          (1-833-467-3924) | investor_relations@impexcapitalgroup.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
