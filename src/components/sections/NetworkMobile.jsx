import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './NetworkMobile.css';

import p1 from '../../assets/04team-01.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';

const teamMembers = [
    {
        name: "VISHNU SURENDRANATH",
        title: "Founder & CEO",
        image: p4,
    },
    {
        name: "JISHNU PRASAD B",
        title: "CO-FOUNDER & COO",
        image: p3,
    },
    {
        name: "DR. GEORGE V ANTONY",
        title: "CO-FOUNDER & CSO",
        image: p1,
    },
    {
        name: "AJAY KUMAR P P",
        title: "CTO",
        image: p2,
    }
];

const NetworkMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const cardRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(cardRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const currentMember = teamMembers[currentIndex];

    return (
        <div className="network-mobile-container" ref={containerRef} {...handlers}>
            <div className="network-mobile-overlay"></div>

            <div className="network-mobile-content">
                <h1 className="network-mobile-title">
                    The Thinkers & <br />
                    <span>The Builders</span>
                </h1>

                <div className="mobile-team-card" ref={cardRef}>
                    <div className="mobile-team-image-container">
                        <img
                            src={currentMember.image}
                            alt={currentMember.name}
                            className="mobile-team-image"
                        />
                    </div>
                </div>

                <div className="mobile-network-dots">
                    {teamMembers.map((_, idx) => (
                        <div
                            key={idx}
                            className={`mobile-network-dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NetworkMobile;
