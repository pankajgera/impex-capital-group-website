import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./ExitedPortfolio.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ExitedPortfolio = () => {
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
        if (
          subtitle &&
          subtitle.textContent.trim() === "Why Choose This Portfolio"
        ) {
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

  // Properties Data - Exited Portfolio items
  const properties = [
    {
      name: "Toll Tag Plaza",
      location: "Toll Tag Plaza",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/toll_plaza.jpg",
    },
    {
      name: "Block at Montrose",
      location: "Block at Montrose",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/montrose.jpeg",
    },
    {
      name: "Casa Verde Apartments",
      location: "Casa Verde Apartments",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/casa-vrdi.jpg",
    },
    {
      name: "Crestdale",
      location: "Crestdale",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/Crestdale.jpg",
    },
    {
      name: "Dallas Office Grove",
      location: "Dallas Office Grove",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/Hidden-Grove-Dallas-570x422-1.jpg",
    },
    {
      name: "Pineforest Apartments",
      location: "Pineforest Apartments",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/pineforest.jpg",
    },
    {
      name: "San Remo Apartments",
      location: "San Remo Apartments",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/san-remo.jpg",
    },
    {
      name: "Village at Uvalde",
      location: "Village at Uvalde",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/uvalde.jpg",
    },
    {
      name: "Avalon at Royal Oaks",
      location: "Avalon at Royal Oaks",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/avalon.jpg",
    },
    {
      name: "Oaktree",
      location: "Oaktree",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-12-at-06.34.08.jpeg",
    },
    {
      name: "Ventana Garden Apartments, Houston TX",
      location: "Ventana Garden Apartments, Houston TX",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2021/05/20210419_161253.jpg",
    },
    {
      name: "Lucciola Midtown, Houston, TX",
      location: "Lucciola Midtown, Houston, TX",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2022/04/Lucciola-Pic.jpg",
    },
    {
      name: "Britmore Park Industrial, Houston, Texas",
      location: "Britmore Park Industrial, Houston, Texas",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2023/09/LargeHighDefinition.jpg",
    },
    {
      name: "Century Business Park, Houston, Texas",
      location: "Century Business Park, Houston, Texas",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2023/09/CenturyPlaza1.jpg",
    },
    {
      name: "Sueba MF Portfolio, Houston, TX",
      location: "Sueba MF Portfolio, Houston, TX",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/SanTierra0344-scaled-1.jpg",
    },
    {
      name: "Costa Mesa Houston, TX",
      location: "Costa Mesa Houston, TX",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/costa.jpg",
    },
    {
      name: "Lucciola at Midtwon Houston, TX",
      location: "Lucciola at Midtwon Houston, TX",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/thimg_144053520_800x500.jpg",
    },
    {
      name: "Springwood Apartments Houston, TX",
      location: "Springwood Apartments Houston, TX",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2024/10/springwood.jpg",
    },
    {
      name: "Ascension Starcrest – Oaks of Marymount",
      location: "Ascension Starcrest – Oaks of Marymount",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2021/02/image-1.png",
    },
    {
      name: "Ascension Starcrest RE",
      location: "Ascension Starcrest RE",
      image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/603abf542f793ed8ab3a3118f51e4337.webp",
    },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== UNIQUE HERO SECTION - Full Width Image Background ===== */}
      <section className="exited-hero">
        <div className="exited-hero-content">
          <span className="hero-subtitle">Successfully Realized Investments</span>
          <h1>EXITED PORTFOLIO</h1>
          <p className="hero-description">
            A curated portfolio of destination assets across sectors, thoughtfully assembled to balance durable income with meaningful growth potential.
          </p>
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <div className="dynamic-stats reveal">
        <div className="stat-box">
          <span className="stat-number">3</span>
          <span className="stat-label">Properties</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">500K+</span>
          <span className="stat-label">Sq. Ft.</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">100+</span>
          <span className="stat-label">Tenants</span>
        </div>
      </div>

      {/* ===== CONTENT DESCRIPTION ===== */}
      <div className="content-description reveal">
        <p>
          The Exited Portfolio spans multifamily, land, retail, hotel, and commercial assets that complement one another across geographies and cycles.
        </p>
        <p>
          By combining income‑oriented holdings with value‑add and development opportunities, we seek to deliver a refined risk‑adjusted return profile for long‑term investors.
        </p>
      </div>

      {/* ===== KEY FEATURES SECTION ===== */}
      <div className="key-features-section reveal">
        <h2 className="section-title">Key Features</h2>
        <div className="section-subtitle">What Sets Us Apart</div>
        <div className="key-features-grid">
          <div className="key-feature-block">
            <div className="key-feature-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3>Multi‑Sector Balance</h3>
            <p>
              A deliberate blend of multifamily, land, hotel, retail, and commercial holdings designed to smooth volatility while capturing upside.
            </p>
          </div>
          <div className="key-feature-block">
            <div className="key-feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Active Portfolio Management</h3>
            <p>
              Dynamic capital allocation between core, value‑add, and development strategies based on evolving market signals.
            </p>
          </div>
          <div className="key-feature-block">
            <div className="key-feature-icon">
              <i className="fas fa-globe-americas"></i>
            </div>
            <h3>Geographic Diversification</h3>
            <p>
              Exposure to multiple high‑growth U.S. markets, reducing concentration risk while targeting compelling local fundamentals.
            </p>
          </div>
        </div>
      </div>

      {/* ===== BENEFITS SECTION ===== */}
      <div className="info-section reveal">
        <h2 className="section-title">Investment Benefits</h2>
        <div className="section-subtitle">Why Choose This Portfolio</div>
        <div className="info-grid">
          <div className="info-card">
            <h3>Diversified Cash Flows</h3>
            <p>
              Income sourced from multiple asset types, tenancy structures, and markets, reducing reliance on any single property or cycle.
            </p>
          </div>
          <div className="info-card">
            <h3>Embedded Growth</h3>
            <p>
              Value‑add, development, and land positions provide a pipeline of future appreciation alongside current yield.
            </p>
          </div>
        </div>
      </div>

      {/* ===== PROPERTIES SECTION ===== */}
      <div className="properties-section reveal">
        <h2 className="properties-section-title">Exited Portfolio</h2>
        <div className="properties-section-subtitle">Explore Our Properties</div>
        <div className="properties-grid">
          {properties.map((prop, index) => {
            const imageUrl =
              prop.image ||
              "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&q=80";
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

export default ExitedPortfolio;


