import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GlowingSun from '../backgrounds/GlowingSun';
import './Healthcare.css';

const Healthcare = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(['.healthcare-title', '.healthcare-subtitle', '.healthcare-description'], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        })
            .from('.healthcare-visual', {
                opacity: 0,
                scale: 0.8,
                duration: 1.5,
                ease: "power3.out"
            }, "-=0.8");

    }, { scope: containerRef });

    return (
        <div className="healthcare-container" ref={containerRef}>
            <div className="healthcare-content">
                <div className="healthcare-header">
                    <h1 className="healthcare-title">AI That Cares</h1>
                </div>

                <h2 className="healthcare-subtitle">Healthcare, Reimagined</h2>

                <p className="healthcare-description">
                    Scope is a Synergistic Cognition Observing Predictive Ecosystem, designed to
                    seamlessly blend Al intelligence with human expertise. It analyzes, learns, and
                    predicts to deliver precision-driven insights, empowering professionals with
                    real-time, proactive, and adaptive healthcare solutions. By continuously
                    observing and evolving, Scope ensures smarter decision-making, enhanced
                    efficiency, and a revolutionized approach to patient care.
                </p>

                <div className="healthcare-features">
                </div>
            </div>

            <div className="healthcare-visual">
                <div className="sun-container">
                    <GlowingSun />
                </div>
            </div>
        </div>
    );
};

export default Healthcare;
