import React from 'react';
import AboutParticles from '../backgrounds/AboutParticles';
import './About.css';

const About = () => {
    return (
        <div className="hero-section about-section">
            <AboutParticles />
            <div className="hero-left" style={{ zIndex: 2, position: 'relative' }}>
                <h2 className="hero-subtitle">Intelligence in Motion</h2>
                <h2 className="hero-title" style={{ color: '#5f7cff' }}>
                    Shaping What's Next
                </h2>
                <p className="hero-description">
                    Intelligence evolves beyond limits—driven by purpose, precision,
                    and adaptability. Through innovation and human insight, we push
                    boundaries, transform industries, and shape the future of well-being.
                </p>
            </div>
        </div>
    );
};

export default About;
