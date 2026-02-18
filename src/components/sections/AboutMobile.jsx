import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './AboutMobile.css';
import AboutParticles from '../backgrounds/AboutParticles';

import budImage from '../../assets/bud2.png';
import chessImage from '../../assets/chess.png';
import lotusImage from '../../assets/loctus.png';

const AboutMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const slides = [
        {
            id: 'about',
            bgImage: budImage,
            title: "Intelligence in Motion",
            subtitle: "Shaping What's Next",
            description: "Intelligence evolves beyond limits—driven by purpose, precision, and adaptability. Through innovation and human insight, we push boundaries, transform industries, and shape the future of well-being."
        },
        {
            id: 'mission',
            bgImage: chessImage,
            title: "Mission",
            subtitle: "Precision & Insight",
            description: "We pioneer precision-driven innovations that seamlessly integrate intelligence, technology, and human expertise—reshaping industries, redefining well-being, and driving a smarter, sustainable future."
        },
        {
            id: 'values',
            bgImage: lotusImage,
            title: "Values",
            subtitle: "Intelligence & Precision",
            description: "Excellence through precision. Intelligence that evolves. Every solution is built with accuracy, adaptability, and the highest level of expertise."
        }
    ];

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useGSAP(() => {
        gsap.from(['.about-mobile-title', '.about-mobile-subtitle', '.about-mobile-description'], {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, { scope: containerRef, dependencies: [currentIndex] });

    const currentSlide = slides[currentIndex];

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }
        if (isRightSwipe) {
            setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    return (
        <div
            className="about-mobile-container"
            ref={containerRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <AboutParticles count={50} />
            <div className="about-mobile-overlay"></div>
            <div className="about-image-container">
                <img
                    src={currentSlide.bgImage}
                    alt={currentSlide.title}
                    className="about-mobile-image"
                />
            </div>

            <div className="about-mobile-content">
                <div className="about-carousel-indicators">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
                <h1 className="about-mobile-title">
                    {currentSlide.title}
                </h1>
                <h2 className="about-mobile-subtitle">
                    {currentSlide.subtitle}
                </h2>
                <p className="about-mobile-description">
                    {currentSlide.description}
                </p>
            </div>
        </div>
    );
};

export default AboutMobile;
