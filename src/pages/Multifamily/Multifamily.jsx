import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Multifamily.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import multifamilyImg from "../../assets/images/multifamily.png";

const Multifamily = () => {
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
    { "name": "Pelican Greenhouse", "location": "Katy, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/09/rockefeller-katy_660xx1263-710-32-0.png" },
    { "name": "Rope House", "location": "Fishtown, Philadelphia, PA", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/09/90a1e24cb6c229e382cc4010acc45977-cc_ft_960.jpg" },
    { "name": "Veridian Place", "location": "Dallas, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/09/26de8f736376fef254fbb06a09ec1f56.jpg" },
    { "name": "Waterford Grove", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/05/waterford-grove-apartments-houston-tx-aerial-photo.avif" },
    { "name": "Prospect Ridge", "location": "Ft Collins, CO", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/05/Still-Photo-Alpha-High-Res-small-1024x512-1.jpg" },
    { "name": "Raintree Apartments", "location": "Pasadena, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/05/raintree.jpeg" },
    { "name": "Lehmann Street Apartments", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/05/LehmanStHoustonstreetview02.jpg" },
    { "name": "Vesper Apartments", "location": "Dallas, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/05/Vesper-29.jpg" },
    { "name": "Trailhead Apartments", "location": "Charlotte, NC", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/05/2.jpg" },
    { "name": "Janisch Road", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2025/05/1.jpg" },
    { "name": "Pasadena Twins", "location": "Pasadena, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/10/twin-oaks-pasadena-tx-primary-photo.jpg" },
    { "name": "Town East Mall", "location": "Mesquite, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/04/town-east.jpg" },
    { "name": "Katy Boardwalk MF", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/04/katy-boardwalk-district-2-1024x576-1.jpg" },
    { "name": "Casa Verde Apartments", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/04/slide1.jpg" },
    { "name": "Pine Arbor", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/03/pine-arbor-houston-tx-building-photo.jpg" },
    { "name": "Retreat at Barbers Hill", "location": "Mont Belvieu, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/03/the-retreat-at-barbers-hill-mont-belvieu-tx-primary-photo.jpg" },
    { "name": "Senderos Townhomes", "location": "Parker, CO", "image": "https://impexcapitalgroup.com/wp-content/uploads/2024/03/3352071_38KC.jpg" },
    { "name": "Parkside Place", "location": "Pasadena, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2023/04/parkside-place-pasadena-tx-building-photo.jpg" },
    { "name": "The Henry at Jones Road", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2023/01/the-henry-at-jones-road-houston-tx-building-photo.jpg" },
    { "name": "The Émile Apartments", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2023/01/mile-apartments-houston-tx-building-photo.jpg" },
    { "name": "Park at Spring Creek", "location": "Tomball, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2023/01/park-at-spring-creek-tomball-tx-leasing-office.jpg" },
    { "name": "Elan Memorial Park", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2022/10/Pool2-51dbab888abd0ce548b44d46110208ed.jpg" },
    { "name": "Harmony Apartments", "location": "Arlington, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2022/10/0017-scaled.jpg" },
    { "name": "City Heights", "location": "Oklahoma City, OK", "image": "https://impexcapitalgroup.com/wp-content/uploads/2022/04/city-heights.png" },
    { "name": "The Junction", "location": "Arlington, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2022/04/The-Junction-Pic.png" },
    { "name": "Valencia Grove", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2022/01/3.png" },
    { "name": "The Grand at Stone Creek", "location": "San Marcos, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2022/01/red_7134.webp" },
    { "name": "La Estancia Apartments", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2022/01/91287892.jpg" },
    { "name": "Trailside Oaks", "location": "Leander, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2022/01/trailside-oaks-008w.jpg" },
    { "name": "Terrace at 2602", "location": "Texas City, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2022/01/slide.jpg" },
    { "name": "Whitestone Crossing", "location": "Cedar Park, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2021/05/image.png" },
    { "name": "Bianca Apartments", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2021/05/g.jpg" },
    { "name": "Blanca Apartments", "location": "Houston, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2021/05/m.jpg" },
    { "name": "Porterwood Apartments", "location": "Porter, TX", "image": "https://impexcapitalgroup.com/wp-content/uploads/2021/05/porterwood-apartments.jpg" },
    { "name": "Cheslyn Townhomes", "location": "Spartanburg, SC", "image": "https://impexcapitalgroup.com/wp-content/uploads/2023/01/6191daa66dbcaba503a41cce5a0d999a-full.jpg" },
    { "name": "Northwest Corners Apartments", "location": "Various Locations", "image": "https://impexcapitalgroup.com/wp-content/uploads/2020/12/northwest.jpg" }
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== UNIQUE HERO SECTION ===== */}
      <section 
        className="multifamily-hero"
        style={{
          position: 'relative',
        }}
      >
        <div 
          className="service-hero-bg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${multifamilyImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            filter: 'grayscale(100%) brightness(0.3)',
            zIndex: 1,
          }}
        ></div>
        <div className="service-hero-content">
          <span className="hero-subtitle">Residential Communities</span>
          <h1>MULTIFAMILY</h1>
          <p className="hero-description">
            With over two decades of experience in multifamily real estate, Impex Capital Group has established itself as a leader in residential community development and management.
          </p>
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <div className="dynamic-stats reveal">
        <div className="stat-box">
          <span className="stat-number">40+</span>
          <span className="stat-label">Properties</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">10,000+</span>
          <span className="stat-label">Units Managed</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">15+</span>
          <span className="stat-label">States</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">$1.2B+</span>
          <span className="stat-label">Portfolio Value</span>
        </div>
      </div>

      {/* ===== CONTENT DESCRIPTION ===== */}
      <div className="content-description reveal">
        <p>
          Our portfolio spans across high-growth markets, delivering quality housing solutions that meet the evolving needs of modern residents.
        </p>
      </div>

      {/* ===== KEY FEATURES SECTION ===== */}
      <div className="key-features-section reveal">
        <h2 className="section-title">Key Features</h2>
        <div className="section-subtitle">What Sets Us Apart</div>
        <div className="key-features-grid">
          <div className="key-feature-block">
            <div className="key-feature-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Strategic Locations</h3>
            <p>
              Our multifamily properties are strategically located in high-growth markets with strong employment bases, excellent schools, and vibrant communities.
            </p>
          </div>
          <div className="key-feature-block">
            <div className="key-feature-icon">
              <i className="fas fa-building"></i>
            </div>
            <h3>Modern Amenities</h3>
            <p>
              We invest in properties with contemporary amenities including fitness centers, pools, community spaces, and smart home technology.
            </p>
          </div>
          <div className="key-feature-block">
            <div className="key-feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Value-Add Opportunities</h3>
            <p>
              We identify and execute value-add strategies including renovations, amenity upgrades, and operational improvements to maximize returns.
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
            <h3>Stable Cash Flow</h3>
            <p>
              Multifamily properties provide consistent rental income with lower vacancy risk compared to single-family investments.
            </p>
          </div>
          <div className="info-card">
            <h3>Appreciation Potential</h3>
            <p>
              Strategic improvements and market appreciation drive long-term value growth in our multifamily portfolio.
            </p>
          </div>
          <div className="info-card">
            <h3>Diversification</h3>
            <p>
              Our geographically diverse portfolio reduces risk while capturing opportunities across multiple markets.
            </p>
          </div>
          <div className="info-card">
            <h3>Tax Advantages</h3>
            <p>
              Multifamily investments offer significant tax benefits including depreciation deductions and 1031 exchange opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* ===== PROPERTIES SECTION ===== */}
      <div className="properties-section reveal">
        <h2 className="properties-section-title">Multifamily Portfolio</h2>
        <div className="properties-section-subtitle">Explore Our Properties</div>
        <div className="properties-grid">
          {properties.map((prop, index) => {
            const imageUrl = prop.image || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80";
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

export default Multifamily;

