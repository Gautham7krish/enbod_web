import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AboutParticles from '../backgrounds/AboutParticles';
import budImage from '../../assets/bud2.png';
import './About.css';

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(['.hero-subtitle', '.hero-title', '.hero-description'], {
            y: 30,
            opacity: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: 'power2.out'
        });
    }, { scope: containerRef });

    return (
        <div className="hero-section about-section" ref={containerRef}>
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
            <div className="hero-right" style={{ zIndex: 2, position: 'relative' }}>
                <img src={budImage} alt="AI figure" />
            </div>
        </div>
    );
};

export default About;
