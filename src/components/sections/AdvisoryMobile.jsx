import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import './AdvisoryMobile.css';

import p1 from '../../assets/1m.png';
import p2 from '../../assets/2m.png';
import p3 from '../../assets/3m.png';
import p4 from '../../assets/4m.png';

const teamMembers = [
    {
        name: "S GANESH KUMAR",
        title: "Ex-Executive Director - RBI\nIndependent Director - IDFC Bank",
        image: p2,
        bio: "Mr. S. Ganesh Kumar holds an MBA, B.Sc., Diploma in Banking, B.G.L., and C.A.I.I.B. qualifications. He served as the Executive Director of the Reserve Bank of India (RBI) for over 30 years, overseeing key areas such as Payment and Settlement Systems, strategic planning, external investments, and foreign exchange reserves management.\n\nHis contributions extended to the Institute for Development and Research in Banking Technology and the establishment of institutions like the National Payments Corporation of India (NPCI), Reserve Bank Information Technology Private Limited (ReBIT), and Indian Financial Technology and Allied Services (IFTAS).\n\nHe also played a significant role in shaping the Payment and Settlement Systems Act and was actively involved with the National Cyber Security Council of India.\n\nAdditionally, he contributed to the ideation, design, and development of technology-driven retail payment systems, many of which are now operated by NPCI.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "THAMPI SURESH KUMAR",
        title: "CEO, Sunrise Hospital\nCochin, Kerala",
        image: p3,
        bio: "Mr. Suresh Kumar Thampi is a result-oriented Cluster CEO with an exceptional legacy of over three decades in the healthcare industry. Renowned for his strategic acumen and business development expertise, Mr. Thampi has played a pivotal role in transforming and scaling numerous prestigious hospitals across Kerala.\n\nWith over three decades of unparalleled experience, he has been able to redefine strategic business development, leaving an indelible mark on some of Kerala's most renowned hospitals, including Amrita, Aster, Meitra Hospital, Baby Memorial Hospital, PK Das, and now Sunrise Group of Hospitals.\n\nA prominent figure in the healthcare sector in Kerala, Mr. Thampi's career is defined by a relentless commitment to excellence, innovation, and impactful results. His ability to navigate complex challenges and implement forward-thinking strategies has earned him widespread recognition and respect in the healthcare industry.\n\nAs he continues to shape the future of healthcare delivery, Mr. Suresh Kumar Thampi aspires to become a beacon of inspiration and excellence in the industry.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "VINOD GEETHA SASIKUMAR",
        title: "West Market Unit Solutions lead for Data & AI\nAccenture, United States",
        image: p4,
        bio: "Vinod Geetha Sasikumar is a seasoned IT advisor with 27 years of experience. Having worked with global organizations like Accenture, EDS, and Cognizant, he brings a wealth of expertise to guide startup firms in navigating the complexities of technology.\n\nWith a proven track record of driving innovation, improving efficiency, and reducing costs, Vinod helps entrepreneurs and founders make informed decisions on IT strategy, infrastructure, and operations.\n\nHis extensive experience spans multiple domains, technologies, and industries, enabling him to provide actionable insights, pragmatic solutions, and hands-on guidance to startups. This ensures they leverage technology to achieve their business goals and stay competitive in the market.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    }
];

const AdvisoryMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedMember, setSelectedMember] = useState(null);
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
        <div className="advisory-mobile-container" ref={containerRef} {...handlers}>
            <div className="advisory-mobile-overlay"></div>

            <div className="advisory-mobile-content">
                <h1 className="advisory-mobile-title">
                    Wisdom That Leads <br />
                    <span>Action That Transforms</span>
                </h1>

                <div className="mobile-advisory-card" ref={cardRef} onClick={() => setSelectedMember(currentMember)}>
                    <div className="mobile-advisory-image-container">
                        <img
                            src={currentMember.image}
                            alt={currentMember.name}
                            className="mobile-advisory-image"
                        />
                    </div>
                </div>

                <div className="mobile-advisory-dots">
                    {teamMembers.map((_, idx) => (
                        <div
                            key={idx}
                            className={`mobile-advisory-dot ${idx === currentIndex ? 'active' : ''}`}
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
                                    <p className="mobile-modal-title" style={{ whiteSpace: 'pre-line' }}>{selectedMember.title}</p>
                                    <div className="mobile-modal-social">
                                        <span style={{ cursor: 'default' }}><FaFacebookF /></span>
                                        <span style={{ cursor: 'default' }}><FaLinkedinIn /></span>
                                        <span style={{ cursor: 'default' }}><FaTwitter /></span>
                                        <span style={{ cursor: 'default' }}><FaInstagram /></span>
                                    </div>
                                </div>
                                <div className="mobile-modal-body">
                                    <p style={{ whiteSpace: 'pre-line' }}>{selectedMember.bio}</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdvisoryMobile;
