import { useEffect, useState } from "react";

import "./Portfolio.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Portfolio items data
  const portfolioItems = [
    // Self Storage
    { id: 1, category: "self-storage", title: "Latrobe Storage El Dorado Hills CA", location: "El Dorado Hills, CA", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/09/1061571-1-4.jpg" },
    
    // Land
    { id: 2, category: "land", title: "Bays Development Frisco TX", location: "Frisco, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/09/64dd11f921a56.image_.jpg" },
    { id: 3, category: "land", title: "Cimarron Hills Georgetown TX", location: "Georgetown, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/09/828ab293c8ffeeb93bce7bfb7e5d85cc-cc_ft_960.jpg" },
    
    // Industrial
    { id: 4, category: "industrial", title: "2121 Brittmoore Business Park Houston TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/09/2121-Brittmoore-Rd-Houston-TX-Primary-Photo-1-Large.avif" },
    
    // Build-To-Rent
    { id: 5, category: "build-to-rent", title: "Morton Ranch Katy TX", location: "Katy, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/09/morton-ranch-high-school-katy-tx-primaryphoto.avif" },
    
    // Multifamily
    { id: 6, category: "multifamily", title: "Pelican Greenhouse Katy TX", location: "Katy, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/09/rockefeller-katy_660xx1263-710-32-0.png" },
    { id: 7, category: "multifamily", title: "Rope House Fishtown Philladelphia PA", location: "Fishtown, Philadelphia, PA", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/09/90a1e24cb6c229e382cc4010acc45977-cc_ft_960.jpg" },
    { id: 8, category: "multifamily", title: "Veridian Place Dallas TX", location: "Dallas, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/09/26de8f736376fef254fbb06a09ec1f56.jpg" },
    { id: 9, category: "multifamily", title: "Waterford Grove, Houston – TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/waterford-grove-apartments-houston-tx-aerial-photo.avif" },
    
    // Land
    { id: 10, category: "land", title: "Covington Center – Lot Delivery Project", location: "Lot Delivery Project", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/covington-center-new-2-2000.jpg" },
    
    // Build-To-Rent
    { id: 11, category: "build-to-rent", title: "Audubon, Magnolia – TX", location: "Magnolia, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/audun-scaled.jpeg" },
    { id: 12, category: "build-to-rent", title: "The Arden, Austin – TX", location: "Austin, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/arden.jpeg" },
    
    // Affordable Housing
    { id: 13, category: "affordable-housing", title: "Blue Oval, Stanton – TN", location: "Stanton, TN", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/Ford-Blue-Oval-City-Stanton-TN.webp" },
    
    // Multifamily
    { id: 14, category: "multifamily", title: "Prospect Ridge, Ft Collins – CO", location: "Ft Collins, CO", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/Still-Photo-Alpha-High-Res-small-1024x512-1.jpg" },
    { id: 15, category: "multifamily", title: "Raintree Apartments, Pasadena – TX", location: "Pasadena, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/raintree.jpeg" },
    { id: 16, category: "multifamily", title: "Lehmann Street Apartments, Houston – TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/LehmanStHoustonstreetview02.jpg" },
    { id: 17, category: "multifamily", title: "Vesper Apartments, Dallas – TX", location: "Dallas, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/Vesper-29.jpg" },
    { id: 18, category: "multifamily", title: "Trailhead Apartments , Charlotte – NC", location: "Charlotte, NC", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/2.jpg" },
    { id: 19, category: "multifamily", title: "Janisch Road, Houston TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2025/05/1.jpg" },
    
    // Land
    { id: 20, category: "land", title: "Melber Line Travis County tx", location: "Travis County, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/10/m.jpg" },
    { id: 21, category: "land", title: "Lakeside Estates Georgetown, TX", location: "Georgetown, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/10/images.jpeg" },
    
    // Multifamily
    { id: 22, category: "multifamily", title: "Pasadena Twins Pasadena, TX", location: "Pasadena, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/10/twin-oaks-pasadena-tx-primary-photo.jpg" },
    
    // Exited Portfolio
    { id: 23, category: "exited-portfolio", title: "Springwood Apartments Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/10/springwood.jpg" },
    
    // Office
    { id: 24, category: "office", title: "M-Street Washington DC", location: "Washington DC", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/06/M-Street.png" },
    
    // Hotel
    { id: 25, category: "hotel", title: "Suburban Studios Macon North Macon, GA", location: "North Macon, GA", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/06/Suburban-Studios-Macon-North-Exterior.webp" },
    { id: 26, category: "hotel", title: "Suburban Studios Columbus Bradley Park Columbus, GA", location: "Bradley Park Columbus, GA", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/06/e8214e35d2577dc90404c87542f77a80.webp" },
    
    // Office
    { id: 27, category: "office", title: "DPEG Galleria Park, Houston Texas", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/06/0-1-524x354-1.png" },
    { id: 28, category: "office", title: "DPEG Imperial Valley Office , Houston Texas", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/06/IMPERIAL-VALLEY-OFFICE.png" },
    
    // Multifamily
    { id: 29, category: "multifamily", title: "Town East Mall Mesquite – TX", location: "Mesquite, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/town-east.jpg" },
    { id: 30, category: "multifamily", title: "Katy Boardwalk MF, Houston -TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/katy-boardwalk-district-2-1024x576-1.jpg" },
    { id: 31, category: "multifamily", title: "Casa Verde Apartments, Houston -TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/slide1.jpg" },
    
    // Industrial
    { id: 32, category: "industrial", title: "Britt 290 Business Park, Houston TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/1500-Britt-Grade-Street-061-FULL-600x600-1.jpg" },
    
    // Hotel
    { id: 33, category: "hotel", title: "Red Roof Inn, San Antonio TX", location: "San Antonio, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/248-exterior-night.webp" },
    
    // Exited Portfolio
    { id: 34, category: "exited-portfolio", title: "Lucciola at Midtwon Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/thimg_144053520_800x500.jpg" },
    { id: 35, category: "exited-portfolio", title: "Costa Mesa Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/costa.jpg" },
    { id: 36, category: "exited-portfolio", title: "Sueba MF Portfolio, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/SanTierra0344-scaled-1.jpg" },
    { id: 37, category: "exited-portfolio", title: "Ascension Starcrest RE", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/04/603abf542f793ed8ab3a3118f51e4337.webp" },
    
    // Industrial
    { id: 38, category: "industrial", title: "Georgibelle Business Park, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/03/f2204dc5e1b2478ab102e1492b2800bb_3000x2000_resize-scaled.jpg" },
    
    // Land
    { id: 39, category: "land", title: "Cimarron, Georgetown, Tx", location: "Georgetown, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/03/801597818-0377d1ffeb6588c54a0a05b5c53fd56dbd599d92bc63672ae0d07175d175cb25-d.webp" },
    
    // Multifamily
    { id: 40, category: "multifamily", title: "Pine Arbor, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/03/pine-arbor-houston-tx-building-photo.jpg" },
    { id: 41, category: "multifamily", title: "Retreat at Barbers Hill, Mont Belvieu, TX", location: "Mont Belvieu, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/03/the-retreat-at-barbers-hill-mont-belvieu-tx-primary-photo.jpg" },
    { id: 42, category: "multifamily", title: "Senderos Townhomes, Parker, CO", location: "Parker, CO", image: "https://impexcapitalgroup.com/wp-content/uploads/2024/03/3352071_38KC.jpg" },
    
    // Exited Portfolio
    { id: 43, category: "exited-portfolio", title: "Century Business Park, Houston, Texas", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/09/CenturyPlaza1.jpg" },
    { id: 44, category: "exited-portfolio", title: "Britmore Park Industrial, Houston, Texas", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/09/LargeHighDefinition.jpg" },
    
    // Multifamily
    { id: 45, category: "multifamily", title: "Parkside Place, Pasadena, TX", location: "Pasadena, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/04/parkside-place-pasadena-tx-building-photo.jpg" },
    
    // Medical Office Building
    { id: 46, category: "medical-office-building", title: "Hedgwig Place, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/08/Picture-Hedwig.jpg" },
    
    // Hotel
    { id: 47, category: "hotel", title: "Springhill Suites Marriott, Galveston, Texas", location: "Galveston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/07/springhill-suites.png" },
    
    // Self Storage
    { id: 48, category: "self-storage", title: "Storage Plus of Forney, Forney, TX", location: "Forney, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/02/unnamed2-1.png" },
    
    // Multifamily
    { id: 49, category: "multifamily", title: "Cheslyn Townhomes, Spartanburg, SC", location: "Spartanburg, SC", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/01/6191daa66dbcaba503a41cce5a0d999a-full.jpg" },
    { id: 50, category: "multifamily", title: "The Henry at Jones Road, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/01/the-henry-at-jones-road-houston-tx-building-photo.jpg" },
    { id: 51, category: "multifamily", title: "The Émile Apartments, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/01/mile-apartments-houston-tx-building-photo.jpg" },
    { id: 52, category: "multifamily", title: "Park at Spring Creek, Tomball, TX", location: "Tomball, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2023/01/park-at-spring-creek-tomball-tx-leasing-office.jpg" },
    { id: 53, category: "multifamily", title: "Elan Memorial Park, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/10/Pool2-51dbab888abd0ce548b44d46110208ed.jpg" },
    { id: 54, category: "multifamily", title: "Harmony Apartments, Arlington, TX", location: "Arlington, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/10/0017-scaled.jpg" },
    { id: 55, category: "multifamily", title: "City Heights, Oklahoma City, OK", location: "Oklahoma City, OK", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/04/city-heights.png" },
    { id: 56, category: "multifamily", title: "The Junction, Arlington, TX", location: "Arlington, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/04/The-Junction-Pic.png" },
    
    // Exited Portfolio
    { id: 57, category: "exited-portfolio", title: "Lucciola Midtown, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/04/Lucciola-Pic.jpg" },
    
    // Multifamily
    { id: 58, category: "multifamily", title: "Valencia Grove, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/01/3.png" },
    { id: 59, category: "multifamily", title: "The Grand at Stone Creek, San Marcos, TX", location: "San Marcos, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/01/red_7134.webp" },
    { id: 60, category: "multifamily", title: "La Estancia Apartments, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/01/91287892.jpg" },
    { id: 61, category: "multifamily", title: "Trailside Oaks, Leander, TX", location: "Leander, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/01/trailside-oaks-008w.jpg" },
    { id: 62, category: "multifamily", title: "Terrace at 2602, Texas City, TX", location: "Texas City, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2022/01/slide.jpg" },
    { id: 63, category: "multifamily", title: "Whitestone Crossing, Cedar Park, TX", location: "Cedar Park, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2021/05/image.png" },
    { id: 64, category: "multifamily", title: "Bianca Apartments, Houston TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2021/05/g.jpg" },
    { id: 65, category: "multifamily", title: "Blanca Apartments, Houston, TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2021/05/m.jpg" },
    
    // Exited Portfolio
    { id: 66, category: "exited-portfolio", title: "Ventana Garden Apartments, Houston TX", location: "Houston, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2021/05/20210419_161253.jpg" },
    
    // Multifamily
    { id: 67, category: "multifamily", title: "Porterwood Apartments, Porter, TX", location: "Porter, TX", image: "https://impexcapitalgroup.com/wp-content/uploads/2021/05/porterwood-apartments.jpg" },
    
    // Exited Portfolio
    { id: 68, category: "exited-portfolio", title: "Oaktree", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-12-at-06.34.08.jpeg" },
    { id: 69, category: "exited-portfolio", title: "Ascension Starcrest – Oaks of Marymount", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2021/02/image-1.png" },
    
    // Industrial
    { id: 70, category: "industrial", title: "Impex Capital Group", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-13-at-21.16.40.jpeg" },
    { id: 71, category: "industrial", title: "Trecap Houston Parkway Partners", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2021/01/27012801-West-Sam-Houston-Parkway-North_JT.jpg" },
    
    // Multifamily
    { id: 72, category: "multifamily", title: "Costa Mesa", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/costa.jpg" },
    
    // Commercial
    { id: 73, category: "commercial", title: "Water Park II", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/waterpark.jpg" },
    
    // Exited Portfolio
    { id: 74, category: "exited-portfolio", title: "Village at Uvalde", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/uvalde.jpg" },
    { id: 75, category: "exited-portfolio", title: "Avalon at Royal Oaks", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/avalon.jpg" },
    
    // Hotel
    { id: 76, category: "hotel", title: "Sheraton, FL", location: "FL", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/shel.jpg" },
    
    // Exited Portfolio
    { id: 77, category: "exited-portfolio", title: "San Remo Apartments", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/san-remo.jpg" },
    { id: 78, category: "exited-portfolio", title: "Pineforest Apartments", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/pineforest.jpg" },
    
    // Senior Living
    { id: 79, category: "senior-living", title: "Ogden Senior Development", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/ogden.png" },
    
    // Office
    { id: 80, category: "office", title: "Kirkwood Office Atrium", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/Kirkwood-Office-Atrium.png" },
    
    // Multifamily
    { id: 81, category: "multifamily", title: "Northwest Corners Apartments", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/northwest.jpg" },
    
    // Office
    { id: 82, category: "office", title: "Midway Plaza", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/Midway-Pictures-1.jpg" },
    
    // Hotel
    { id: 83, category: "hotel", title: "Katy Boardwalk Hotel", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/katy-boardwalk-sueba-hotel.jpg" },
    
    // Land
    { id: 84, category: "land", title: "Katy Boardwalk", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/boardwalk-web.jpg" },
    { id: 85, category: "land", title: "Grand Parkway Land", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/grand-parkway.jpg" },
    
    // Exited Portfolio
    { id: 86, category: "exited-portfolio", title: "Dallas Office Grove", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/Hidden-Grove-Dallas-570x422-1.jpg" },
    
    // Commercial
    { id: 87, category: "commercial", title: "Cy-Fair Retail", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/Cy-Fair-Retail.jpg" },
    
    // Exited Portfolio
    { id: 88, category: "exited-portfolio", title: "Crestdale", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/Crestdale.jpg" },
    { id: 89, category: "exited-portfolio", title: "Casa Verde Apartments", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/casa-vrdi.jpg" },
    { id: 90, category: "exited-portfolio", title: "Block at Montrose", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/montrose.jpeg" },
    { id: 91, category: "exited-portfolio", title: "Toll Tag Plaza", location: "", image: "https://impexcapitalgroup.com/wp-content/uploads/2020/12/toll_plaza.jpg" },
  ];

  const filterCategories = [
    { value: "all", label: "All" },
    { value: "affordable-housing", label: "Affordable Housing" },
    { value: "build-to-rent", label: "Build-To-Rent" },
    { value: "commercial", label: "Commercial" },
    { value: "exited-portfolio", label: "Exited Portfolio" },
    { value: "hotel", label: "Hotel" },
    { value: "industrial", label: "Industrial" },
    { value: "land", label: "Land" },
    { value: "medical-office-building", label: "Medical Office Building" },
    { value: "multifamily", label: "Multifamily" },
    { value: "office", label: "Office" },
    { value: "self-storage", label: "Self Storage" },
    { value: "senior-living", label: "Senior Living" },
  ];

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

  /* Navbar Scroll Effect */
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

  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  const getCategoryLabel = (category) => {
    const cat = filterCategories.find((c) => c.value === category);
    return cat ? cat.label : category;
  };

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <header className="page-header">
        <div className="header-content">
          <span className="header-subtitle">Our Investment Portfolio</span>
          <h1>PORTFOLIO</h1>
          <p className="header-description">
            With over two decades of experience ranging from Multi Family, Offices, Industrial, Assisted Living and New Developments, Impex Capital Group plays a key role in the profitability of our investors.
          </p>
        </div>
        <div className="scroll-indicator">Scroll</div>
      </header>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section reveal">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">60+</span>
            <span className="stat-label">Properties</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1.8B+</span>
            <span className="stat-label">Investments</span>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO INTRO ===== */}
      <section className="portfolio-intro reveal">
        <div className="intro-headline">
          <h2>
            With over two decades of experience ranging from Multi Family, Offices, Industrial, Assisted Living and New Developments, Impex Capital Group plays a key role in the profitability of our investors.
          </h2>
        </div>
        <div className="intro-text">
          <p>
            Our diverse portfolio spans multiple asset classes and geographic markets, reflecting our strategic approach to real estate investment. Each property in our portfolio represents a carefully selected opportunity aligned with our investment thesis and market fundamentals.
          </p>
        </div>
      </section>

      {/* ===== FILTER SECTION ===== */}
      <section className="filter-section reveal">
        <span className="section-label">Filter By Asset Class</span>

        <div className="filter-container">
          <div className="filter-list">
            {filterCategories.map((filter) => (
              <button
                key={filter.value}
                className={`filter-btn ${activeFilter === filter.value ? "active" : ""}`}
                onClick={() => handleFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO GRID ===== */}
      <section className="portfolio-section reveal">
        <div className="portfolio-grid">
          {filteredItems.map((item) => {
            const isExited = item.category === "exited-portfolio";
            return (
              <div
                key={item.id}
                className={`portfolio-item ${activeFilter !== "all" && activeFilter !== item.category ? "hidden" : ""}`}
                data-category={item.category}
              >
                <div className="p-img-container">
                  <img src={item.image} className="p-img" alt={item.title} />
                  <div className="p-overlay">
                    <span className="p-cat">
                      {isExited ? (
                        <span className="exited-badge">Exited Portfolio</span>
                      ) : (
                        getCategoryLabel(item.category)
                      )}
                    </span>
                    <h3 className="p-title">{item.title}</h3>
                    {item.location && <div className="p-loc">{item.location}</div>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer variant="portfolio" />
    </div>
  );
};

export default Portfolio;

