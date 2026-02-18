import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(['.hero-title', '.hero-subtitle', '.hero-description'], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

    }, { scope: containerRef });

    return (
        <div className="hero-container" ref={containerRef}>
            <div className="hero-content">
                <h1 className="hero-title">A Touch of Innovation</h1>
                <h2 className="hero-subtitle">The Future of Well-being</h2>

                <p className="hero-description">
                    Shaping industries, enhancing lives, and driving the next era of progress.
                    From breakthrough technologies to transformative solutions, we create
                    what's next.
                </p>
            </div>
        </div>
    );
};

export default Hero;
