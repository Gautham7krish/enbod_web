import React from 'react';
import { motion } from 'framer-motion';
import SilhouetteCanvas from '../backgrounds/SilhouetteCanvas';
import budImage from '../../assets/bud1.png';
import './About.css';

const About = () => {
    return (
        <div className="hero-section">

            {/* LEFT TEXT */}
            <div className="hero-left">
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

            {/* RIGHT IMAGE/CANVAS */}
            <div className="hero-right">
                <img src={budImage} alt="AI figure" />
            </div>


        </div>
    );
};

export default About;
