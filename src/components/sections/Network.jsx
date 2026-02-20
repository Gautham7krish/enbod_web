import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import p1 from '../../assets/04team-01.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import fullLogo from '../../assets/full_logo.png';
import './Network.css';

const teamMembers = [
  {
    name: "VISHNU SURENDRANATH",
    title: "Founder & CEO",
    image: p4,
    bio: "Vishnu Surendranath, an inventive and insighful entrepreneur with a background in"
      + "  engineering and business administration, is on a transformative journey brings over 10 years"
      + " of professional experience to his role. Armed with a Bachelor’s degree in Engineering (B.E.) "
      + " and a Master’s in Business Administration (MBA), he sets his sights on revolutionizing the"
      + "  healthcare sector. As the founder and CEO of Enbod Technologies Private Limited, Vishnu’s"
      + "            indomitable determination and perseverance drive him forward. Even amidst challenges of"
      + "            any depth, he remains resolute, committed to building a future by enabling AI-integrated"
      + "            solutions to healthcare segment. His trailblazing spirit extends beyond Enbod previously, as"
      + "           the visionary behind Cinemaclubby Business Solutions Private Limited, he connected"
      + "          creatives globally, empowering them to become creativepreneurs. Notably, Cinemaclubby"
      + "            was validated and incubated by KSIDC and accelerated by India Accelerator. Now, with"
      + "            Enbod, Vishnu aims to leave a lasting impact, transforming healthcare through innovation"
      + "            and unwavering resolve.",
    social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
  },
  {
    name: "JISHNU PRASAD B",
    title: "CO-FOUNDER & COO",
    image: p3,
    bio: "Jishnu Prasad is the Co-Founder and Chief Operating Officer of Enbod Technologies Private Limited, " +
      "an AI-driven healthcare startup. With a strong Engineering background and extensive project " +
      "management experience, Jishnu is well-equipped to lead Enbod’s operations. " +
      "\n\n" +
      "Before Enbod, Jishnu spent seven years as a Senior Project Engineer at Weatherford, a global " +
      "oil and gas company. There, he oversaw well testing team operations, managed client " +
      "interactions, and provided pre-sales support, handling projects across Qatar, Oman, UAE, " +
      "and India. " +
      "\n\n" +
      "Prior to Weatherford, Jishnu was a Project Manager at Texas Oil Fields Equipment for four " +
      "years, where he managed all operational aspects of the business. " +
      "\n\n" +
      "At Enbod, Jishnu is dedicated to driving operational excellence and fostering innovation. He " +
      "ensures the delivery of high-quality AI-integrated healthcare solutions, positioning Enbod at " +
      "the forefront of the industry. His strategic vision and leadership are pivotal to Enbod’s " +
      "mission to revolutionize healthcare.",
    social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
  },
  {
    name: "DR. GEORGE V ANTONY",
    title: "CO-FOUNDER &\nCHIEF STRATEGY OFFICER",
    image: p1,
    bio: "Dr. George V Antony, an enterprising academic entrepreneur, brings over 28 years of " +
      "professional exposure in industry, academia, research, and consulting. His visionary " +
      "leadership and innovative initiatives have garnered prestigious recognitions, including the " +
      "Asia Pacific Educationist of the Year award (2016) and the Commonwealth Innovation Forum " +
      "award for Academic Entrepreneurship (2021). " +
      "\n\n" +
      "Armed with a Post Doctoral Fellowship in Information Security Governance, PhD in " +
      "Information Security Management, an MBA in Finance, and a wealth of certifications, " +
      "Dr. George’s expertise spans banking, corporate training, and SAP consulting. " +
      "\n\n" +
      "As a practicing Financial Wellness and Risk Mitigation professional, he serves as an " +
      "advisor and mentor to decision-makers, entrepreneurs, and business owners. Now, with Enbod, " +
      "Dr. George is poised to redefine the healthcare landscape. " +
      "\n\n" +
      "His unwavering commitment and innovative spirit drive Enbod’s mission, aiming to transform " +
      "patient care through cutting-edge AI-integrated solutions. As an academic entrepreneur, " +
      "Dr. George’s vision extends beyond conventional boundaries, and he continues to inspire " +
      "others to embrace innovation and excellence.",
    social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
  },
  {
    name: "AJAY KUMAR P P",
    title: "CTO",
    image: p2,
    bio: "More than 20 years experience in software development, software consulting and Business " +
      "Process Re-engineering. " +
      "\n\n" +
      "I am a proud member of IAMCP (International Association of Microsoft Certified Partners) " +
      "Mumbai West Chapter, www.iamcp.org " +
      "\n\n" +
      "Specialties: Software Consulting, Business Process Design, ReEngineering Business Process, " +
      "Software Development in Microsoft Dot Net Platform, Dynamic Software Development, " +
      "Open Source ERP, SAP Business One, Android, iOS, Python, Flutter, QGIS Plugin, React.JS, " +
      "Experience with AWS, Microsoft Azure, and Google Cloud for deploying and managing " +
      "cloud-based solutions, AI Based Custom Software Development etc.",
    social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
  }
];

const Network = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedMember(teamMembers[index]);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const nextMember = () => {
    const newIndex = (currentIndex + 1) % teamMembers.length;
    setCurrentIndex(newIndex);
    setSelectedMember(teamMembers[newIndex]);
  };

  const prevMember = () => {
    const newIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    setCurrentIndex(newIndex);
    setSelectedMember(teamMembers[newIndex]);
  };

  const goToMember = (index) => {
    setCurrentIndex(index);
    setSelectedMember(teamMembers[index]);
  };

  return (
    <>
      <section className="network-section">
        <div className="network-overlay" />

        <div className="network-inner">
          <motion.h1
            className="network-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            The Thinkers & <span>The Builders</span>
          </motion.h1>

          <motion.div
            className="team-wrapper desktop-view-wrapper"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                onClick={() => openModal(index)}
              >
                <div className="image-box">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mobile-slider">
            <button
              className="slider-arrow left"
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? teamMembers.length - 1 : prev - 1
                )
              }
            >
              ‹
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="team-card mobile-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(currentIndex)}
              >
                <div className="image-box">
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={`${teamMembers[currentIndex].name} - ${teamMembers[currentIndex].title}`}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              className="slider-arrow right"
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === teamMembers.length - 1 ? 0 : prev + 1
                )
              }
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      < AnimatePresence >
        {selectedMember && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>×</button>

              <div className="modal-body">
                <div className="modal-left">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="modal-image"
                    loading="lazy"
                  />
                </div>

                <div className="modal-right">
                  <h2 className="modal-name">{selectedMember.name}</h2>
                  <p className="modal-title">{selectedMember.title}</p>

                  <div className="modal-social">
                    <span style={{ cursor: 'default' }}><FaFacebookF /></span>
                    <span className="social-sep">|</span>
                    <span style={{ cursor: 'default' }}><FaLinkedinIn /></span>
                    <span className="social-sep">|</span>
                    <span style={{ cursor: 'default' }}><FaTwitter /></span>
                    <span className="social-sep">|</span>
                    <span style={{ cursor: 'default' }}><FaInstagram /></span>
                  </div>

                  <p className="modal-bio">{selectedMember.bio}</p>
                </div>
              </div>

              <div className="modal-footer-nav">
                <button className="nav-arrow" onClick={prevMember}>←</button>
                <div className="nav-dots">
                  {teamMembers.map((_, idx) => (
                    <span
                      key={idx}
                      className={`nav-dot ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => goToMember(idx)}
                    />
                  ))}
                </div>
                <button className="nav-arrow" onClick={nextMember}>→</button>
              </div>
            </motion.div>
          </motion.div>
        )
        }
      </AnimatePresence >
    </>
  );
};

export default Network;
