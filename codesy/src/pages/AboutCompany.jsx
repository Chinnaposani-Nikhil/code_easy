import React from 'react';
import './AboutCompany.css';

const AboutCompany = () => {
    return (
        <div className="page-container fade-in">
            <h2 className="page-title">Welcome to Codesy</h2>
            <p className="page-subtitle">Empowering the next generation of tech leaders.</p>

            <section className="info-section">
                <h3>About Us</h3>
                <p>
                    Codesy is a premier training institute dedicated to bridging the gap between academic learning and industry requirements.
                    We specialize in providing high-quality training in cutting-edge technologies, ensuring our students are job-ready from day one.
                </p>
            </section>

            <section className="info-section">
                <h3>Our Offerings</h3>
                <div className="features-grid">
                    <div className="feature-card">
                        <h4>Expert Training</h4>
                        <p>Learn from industry veterans with years of hands-on experience in top tech companies.</p>
                    </div>
                    <div className="feature-card">
                        <h4>Internship Program</h4>
                        <p>Gain real-world experience through our intensive internship programs working on live projects.</p>
                    </div>
                    <div className="feature-card">
                        <h4>Placement Assistance</h4>
                        <p>We provide 100% placement support, including resume building, mock interviews, and direct referrals.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutCompany;
