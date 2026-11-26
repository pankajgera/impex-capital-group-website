import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Consortium.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO";
import StructuredData from "../../components/StructuredData";

const img = (id, w = 1200) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&fit=crop&auto=format&q=75`;

const OFFERINGS = [
    {
        num: "01",
        title: "CRE Insurance",
        icon: "fa-solid fa-shield-halved",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1400&auto=format&fit=crop",
        points: [
            "Top global insurance brokerage house",
            "Excellent coverage and fewer exclusions",
            "Competitive premiums",
        ],
        size: "wide",
    },
    {
        num: "02",
        title: "Internet Fiber",
        icon: "fa-solid fa-wifi",
        image: img("1558494949-ef010cbdcc31"),
        points: [
            "High-speed fiber, 1 Gig",
            "24/7 local US support",
            "Flawless rollout in TX, FL and GA",
        ],
        size: "medium",
    },
    {
        num: "03",
        title: "Property Tax Solutions",
        icon: "fa-solid fa-file-invoice-dollar",
        image: img("1450101499163-c8848c66ca85", 800),
        points: [
            "Expert assessment",
            "Appeal and save",
            "Commercial & multifamily focused",
        ],
        size: "third",
    },
    {
        num: "04",
        title: "Water Savings",
        icon: "fa-solid fa-droplet",
        image: img("1585704032915-c3400ca199e7", 800),
        points: [
            "Zero upfront cost to owners",
            "Guaranteed savings, shared with owners",
            "Zero maintenance",
        ],
        size: "third",
    },
    {
        num: "05",
        title: "Renters Insurance Compliance",
        icon: "fa-solid fa-house",
        image: img("1545324418-cc1a3fa10c00", 800),
        points: [
            "Compliance tracking",
            "Safety for renters and owners",
            "Easy enrollment for every resident",
        ],
        size: "third",
    },
    {
        num: "06",
        title: "Energy & Gas",
        icon: "fa-solid fa-bolt",
        image: img("1509391366360-2e959784a276"),
        points: [
            "Best rates on the market",
            "No fees, just savings",
            "Forward contracts lock in the rate",
        ],
        size: "full",
    },
];

const REASONS = [
    {
        icon: "fa-regular fa-building",
        title: "Built for Commercial Real Estate",
        text: "Designed for asset owners and operators.",
    },
    {
        icon: "fa-solid fa-user-group",
        title: "Backed by Expert Partners",
        text: "A vetted network of leading experts in every vertical we offer.",
    },
    {
        icon: "fa-solid fa-table-cells-large",
        title: "Flexible by Design",
        text: "Pick one vertical or all six. One team manages the rest.",
    },
];

const SECTORS = ["Multifamily", "Retail", "Office", "Industrial"];

const Consortium = () => {
    useEffect(() => {
        const reveal = () => {
            document.querySelectorAll(".reveal").forEach((el) => {
                if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                    el.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", reveal);
        reveal();

        return () => window.removeEventListener("scroll", reveal);
    }, []);

    const scrollToOfferings = () => {
        document
            .getElementById("consortium-offerings")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <SEO
                title="The Impex Consortium | Lower Costs, Stronger NOI"
                description="The Impex Consortium connects commercial real estate owners with expert partners in insurance, fiber, property tax, water, renters insurance compliance and energy to reduce operating expenses."
                canonical="https://impexcapitalgroup.com/consortium"
            />
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: "https://impexcapitalgroup.com" },
                    { name: "Consortium", url: "https://impexcapitalgroup.com/consortium" },
                ]}
            />

            <Navbar />

            <main className="consortium-page">
                {/* Hero */}
                <section className="cons-hero">
                    <div
                        className="cons-hero-bg"
                        style={{ backgroundImage: `url(${img("1486406146926-c627a92ad1ab", 1920)})` }}
                    />
                    <div className="cons-hero-overlay" />
                    <div className="cons-container cons-hero-content">
                        <p className="cons-kicker">Impex Capital Group Presents</p>
                        <h1 className="cons-hero-title">
                            The Impex
                            <br />
                            Consortium
                        </h1>
                        <p className="cons-hero-tagline">
                            Lower Costs. <span className="cons-gold">Stronger NOI.</span>
                        </p>
                        <p className="cons-hero-text">
                            Impex Capital Group deploys a network of expert Consortium
                            partners to reduce operating expenses across utilities and
                            services, so you can manage smarter across your portfolio.
                        </p>
                        <ul className="cons-sectors">
                            {SECTORS.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            className="cons-btn"
                            onClick={scrollToOfferings}
                        >
                            Explore Our Offerings <span aria-hidden="true">&mdash;</span>
                        </button>
                    </div>
                </section>

                {/* Offerings */}
                <section className="cons-section cons-offerings" id="consortium-offerings">
                    <div className="cons-container">
                        <div className="cons-offerings-header reveal">
                            <div>
                                <p className="cons-kicker">Our Offerings</p>
                                <h2 className="cons-title">
                                    Six Ways to Improve
                                    <br />
                                    Your Bottom Line
                                </h2>
                            </div>
                            <p className="cons-header-note">
                                Choose the verticals that fit your portfolio.
                            </p>
                        </div>

                        <div className="cons-grid">
                            {OFFERINGS.map((o) => (
                                <article
                                    key={o.num}
                                    className={`cons-card cons-card--${o.size} reveal`}
                                >
                                    <div
                                        className="cons-card-img"
                                        style={{ backgroundImage: `url(${o.image})` }}
                                        role="img"
                                        aria-label={o.title}
                                    />
                                    <div className="cons-card-shade" />
                                    <span className="cons-card-num">{o.num}</span>
                                    <i className={`${o.icon} cons-card-icon`} aria-hidden="true" />
                                    <div className="cons-card-body">
                                        <h3 className="cons-card-title">{o.title}</h3>
                                        <ul className="cons-card-points">
                                            {o.points.map((p) => (
                                                <li key={p}>{p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why */}
                <section className="cons-section cons-why">
                    <div className="cons-container cons-why-grid">
                        <div className="reveal">
                            <p className="cons-kicker">Why the Consortium</p>
                            <h2 className="cons-title">
                                One network.
                                <br />
                                <span className="cons-muted">Every operating line.</span>
                            </h2>
                            <p className="cons-body">
                                The Consortium brings specialized partners under a single
                                relationship, so savings compound across your entire
                                portfolio instead of arriving one contract at a time.
                            </p>
                        </div>
                        <ul className="cons-reasons reveal">
                            {REASONS.map((r) => (
                                <li key={r.title} className="cons-reason">
                                    <span className="cons-reason-icon">
                                        <i className={r.icon} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <h3>{r.title}</h3>
                                        <p>{r.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="cons-cta">
                    <div
                        className="cons-cta-bg"
                        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=2200&auto=format&fit=crop)" }}
                    />
                    <div className="cons-cta-overlay" />
                    <div className="cons-container cons-cta-content reveal">
                        <p className="cons-kicker cons-kicker--center">Get in Touch</p>
                        <h2 className="cons-title">Let&rsquo;s Find Your Savings.</h2>
                        <p className="cons-body">
                            See what the Consortium can do for your portfolio.
                        </p>
                        <Link to="/contact" className="cons-btn">
                            Contact the Consortium <span aria-hidden="true">&mdash;</span>
                        </Link>
                        <div className="cons-cta-links">
                            <a href="mailto:savings@impexcapitalgroup.com">
                                <i className="fa-regular fa-envelope" aria-hidden="true" />
                                savings@impexcapitalgroup.com
                            </a>
                            <a href="https://impexcapitalgroup.com">
                                <i className="fa-solid fa-globe" aria-hidden="true" />
                                www.impexcapitalgroup.com
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Consortium;
