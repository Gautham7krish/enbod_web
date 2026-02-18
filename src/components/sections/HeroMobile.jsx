import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './HeroMobile.css';

const HeroMobile = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(['.hero-mobile-title', '.hero-mobile-subtitle', '.hero-mobile-description'], {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <div className="hero-mobile-container" ref={containerRef}>
            <div className="hero-mobile-overlay"></div>
            <div className="hero-mobile-content">
                <h1 className="hero-mobile-title">
                    A Touch of<br />Innovation
                </h1>
                <h2 className="hero-mobile-subtitle">
                    The Future of<br />Well-being
                </h2>
                <p className="hero-mobile-description">
                    Shaping industries, enhancing lives, and driving the next era of progress.
                    From breakthrough technologies to transformative solutions.
                </p>
            </div>
        </div>
    );
};

export default HeroMobile;
