import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
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
        bio: "Vishnu Surendranath, an inventive and insighful entrepreneur with a background in engineering and business administration, is on a transformative journey brings over 10 years of professional experience to his role. Armed with a Bachelor’s degree in Engineering (B.E.) and a Master’s in Business Administration (MBA), he sets his sights on revolutionizing the healthcare sector. As the founder and CEO of Enbod Technologies Private Limited, Vishnu’s indomitable determination and perseverance drive him forward. Even amidst challenges of any depth, he remains resolute, committed to building a future by enabling AI-integrated solutions to healthcare segment.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "JISHNU PRASAD B",
        title: "CO-FOUNDER & COO",
        image: p3,
        bio: "Jishnu Prasad is the Co-Founder and Chief Operating Officer of Enbod Technologies Private Limited, an AI-driven healthcare startup. With a strong Engineering background and extensive project management experience, Jishnu is well-equipped to lead Enbod’s operations. Before Enbod, Jishnu spent seven years as a Senior Project Engineer at Weatherford, a global oil and gas company.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "DR. GEORGE V ANTONY",
        title: "CO-FOUNDER & CSO",
        image: p1,
        bio: "Dr. George V Antony, an enterprising academic entrepreneur, brings over 28 years of professional exposure in industry, academia, research, and consulting. His visionary leadership and innovative initiatives have garnered prestigious recognitions. Armed with a Post Doctoral Fellowship in Information Security Governance, PhD in Information Security Management, an MBA in Finance.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "AJAY KUMAR P P",
        title: "CTO",
        image: p2,
        bio: "More than 20 years experience in software development, software consulting and Business Process Re-engineering. Specialties: Software Consulting, Business Process Design, ReEngineering Business Process, Software Development in Microsoft Dot Net Platform, Dynamic Software Development, Open Source ERP, SAP Business One, Android, iOS, Python, Flutter, QGIS Plugin, React.JS.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    }
];

const NetworkMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedMember, setSelectedMember] = useState(null);
    const containerRef = useRef(null);
    const cardRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(cardRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "power2.out" }
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

                <div className="mobile-team-card" ref={cardRef} onClick={() => setSelectedMember(currentMember)}>
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

            <AnimatePresence>
                {selectedMember && (
                    <>
                        <motion.div
                            className="mobile-modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                        />
                        <motion.div
                            className="mobile-modal-container"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <div className="mobile-modal-scrollable">
                                <div className="mobile-modal-image-wrapper">
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="mobile-modal-image"
                                    />
                                </div>
                                <div className="mobile-modal-header">
                                    <h2 className="mobile-modal-name">{selectedMember.name}</h2>
                                    <p className="mobile-modal-title">{selectedMember.title}</p>
                                    <div className="mobile-modal-social">
                                        <span style={{ cursor: 'default' }}><FaFacebookF /></span>
                                        <span style={{ cursor: 'default' }}><FaLinkedinIn /></span>
                                        <span style={{ cursor: 'default' }}><FaTwitter /></span>
                                        <span style={{ cursor: 'default' }}><FaInstagram /></span>
                                    </div>
                                </div>
                                <div className="mobile-modal-body">
                                    <p>{selectedMember.bio}</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NetworkMobile;
