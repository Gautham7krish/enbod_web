import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './HealthcareMobile.css';
import scopeImage from '../../assets/04-scope.jpg';

const HealthcareMobile = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(['.healthcare-mobile-title', '.healthcare-mobile-subtitle', '.healthcare-mobile-description'], {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, { scope: containerRef });

    return (
        <div
            className="healthcare-mobile-container"
            ref={containerRef}
            style={{ backgroundImage: `url(${scopeImage})` }}
        >
            <div className="healthcare-mobile-overlay"></div>

            <div className="healthcare-mobile-content">
                <h1 className="healthcare-mobile-title">
                    AI That Cares
                </h1>
                <h2 className="healthcare-mobile-subtitle">
                    Healthcare, Reimagined
                </h2>
                <p className="healthcare-mobile-description">
                    Scope is a Synergistic Cognition Observing Predictive Ecosystem, designed to
                    seamlessly blend Al intelligence with human expertise. It analyzes, learns, and
                    predicts to deliver precision-driven insights, empowering professionals with
                    real-time, proactive, and adaptive healthcare solutions.
                </p>
            </div>
        </div>
    );
};

export default HealthcareMobile;
