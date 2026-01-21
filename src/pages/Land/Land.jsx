import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Land.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import seniorLivingImg from "../../assets/images/Seniorliving.png";

const Land = () => {
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

  /* Navbar Scroll Effect - Glassmorphism on scroll */
  useEffect(() => {
    const onScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Investment Benefits Animation - Elegant scroll-triggered animations */
  useEffect(() => {
    const animateInvestmentBenefits = () => {
      const allSections = document.querySelectorAll(".info-section");
      
      allSections.forEach((section) => {
        const subtitle = section.querySelector(".section-subtitle");
        if (subtitle && subtitle.textContent.trim() === "Why Choose This Asset Class") {
          const cards = section.querySelectorAll(".info-card");
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (sectionTop < windowHeight - 150) {
            cards.forEach((card, index) => {
              if (!card.classList.contains("animate-in")) {
                setTimeout(() => {
                  card.classList.add("animate-in");
                }, index * 150);
              }
            });
          }
        }
      });
    };
    
    window.addEventListener("scroll", animateInvestmentBenefits);
    window.addEventListener("load", animateInvestmentBenefits);

    return () => {
      window.removeEventListener("scroll", animateInvestmentBenefits);
      window.removeEventListener("load", animateInvestmentBenefits);
    };
  }, []);

  // Properties Data
  const properties = [
    { "name": "Grand Parkway Land", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2020/12/grand-parkway.jpg" },
    { "name": "Katy Boardwalk", "location": "Katy, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2020/12/boardwalk-web.jpg" },
    { "name": "Cimarron Hills Georgetown TX", "location": "Georgetown, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/09/828ab293c8ffeeb93bce7bfb7e5d85cc-cc_ft_960.jpg" },
    { "name": "Cimarron, Georgetown, Tx", "location": "Georgetown, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/03/801597818-0377d1ffeb6588c54a0a05b5c53fd56dbd599d92bc63672ae0d07175d175cb25-d.webp" },
    { "name": "Lakeside Estates Georgetown, TX", "location": "Georgetown, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/10/images.jpeg" },
    { "name": "Melber Line Travis County TX", "location": "Travis County, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/10/m.jpg" },
    { "name": "Covington Center – Lot Delivery Project", "location": "Covington Center", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/05/covington-center-new-2-2000.jpg" },
    { "name": "Bays Development Frisco TX", "location": "Frisco, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/09/64dd11f921a56.image_.jpg" }
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== UNIQUE HERO SECTION - Split Layout ===== */}
      <section className="service-hero">
        <div 
          className="hero-image-side"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${seniorLivingImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(30%) brightness(0.6)',
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, transparent 100%)',
              zIndex: 2,
            }}
          ></div>
        </div>
        <div className="hero-content-side">
          <div className="service-hero-content">
            <span className="hero-subtitle">Strategic Development Opportunities</span>
            <h1>LAND</h1>
            <p className="hero-description">
              Impex Capital Group strategically acquires and entitles land in high‑growth corridors, creating a pipeline of future development opportunities across residential, commercial, and mixed‑use projects.
            </p>
            <Link to="/" className="back-btn">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <div className="dynamic-stats reveal">
        <div className="stat-box">
          <span className="stat-number">2</span>
          <span className="stat-label">Active Land Positions</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">500+</span>
          <span className="stat-label">Acres Under Control</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">3</span>
          <span className="stat-label">High‑Growth States</span>
        </div>
      </div>

      {/* ===== CONTENT DESCRIPTION ===== */}
      <div className="content-description reveal">
        <p>
          Our land strategy focuses on irreplaceable sites in growth markets, positioned near emerging infrastructure, employment hubs, and future demand drivers.
        </p>
        <p>
          By securing and entitling land early in the cycle, we create optionality for build‑to‑core, merchant development, or joint‑venture partnerships tailored to market conditions.
        </p>
      </div>

      {/* ===== KEY FEATURES SECTION ===== */}
      <div className="key-features-section reveal">
        <h2 className="section-title">Key Features</h2>
        <div className="section-subtitle">What Sets Us Apart</div>
        <div className="key-features-grid">
          <div className="key-feature-block">
            <div className="key-feature-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3>Prime Land Corridors</h3>
            <p>
              Sites concentrated along major transportation routes, job centers, and population inflows to support future residential, commercial, and mixed‑use demand.
            </p>
          </div>
          <div className="key-feature-block">
            <div className="key-feature-icon">
              <i className="fas fa-drafting-compass"></i>
            </div>
            <h3>Entitlement Expertise</h3>
            <p>
              Disciplined underwriting and local relationships that streamline zoning, entitlements, and approvals, preserving time and value for future development.
            </p>
          </div>
          <div className="key-feature-block">
            <div className="key-feature-icon">
              <i className="fas fa-random"></i>
            </div>
            <h3>Flexible Exit Paths</h3>
            <p>
              Optionality to hold, develop, or dispose of land positions depending on market conditions and partner objectives.
            </p>
          </div>
        </div>
      </div>

      {/* ===== BENEFITS SECTION ===== */}
      <div className="info-section reveal">
        <h2 className="section-title">Investment Benefits</h2>
        <div className="section-subtitle">Why Choose This Asset Class</div>
        <div className="info-grid">
          <div className="info-card">
            <h3>Value Creation at Entry</h3>
            <p>
              Acquiring land ahead of full build‑out allows investors to capture entitlement upside and future density potential.
            </p>
          </div>
          <div className="info-card">
            <h3>Optionality Across Cycles</h3>
            <p>
              Land can be held, phased, or partnered to match capital objectives, providing flexibility through changing market conditions.
            </p>
          </div>
        </div>
      </div>

      {/* ===== PROPERTIES SECTION ===== */}
      <div className="properties-section reveal">
        <h2 className="properties-section-title">Land Portfolio</h2>
        <div className="properties-section-subtitle">Explore Our Properties</div>
        <div className="properties-grid">
          {properties.map((prop, index) => {
            const imageUrl = prop.image || "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&q=80";
            return (
              <div key={index} className="property-card">
                <div className="property-img-container">
                  <img src={imageUrl} className="property-img" alt={prop.name} />
                  <div className="property-overlay">
                    <h3>{prop.name}</h3>
                    <div className="property-location">{prop.location}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
};

export default Land;

