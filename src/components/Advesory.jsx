import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import p1 from '../assets/1m.png';
import p2 from '../assets/2m.png';
import p3 from '../assets/3m.png';
import p4 from '../assets/4m.png';
import fullLogo from '../assets/full_logo.png';
import './Advesory.css';

const teamMembers = [
    {
        name: "S GANESH KUMAR",
        title: "Ex-Executive Director - RBI\nIndependent Director - IDFC Bank",
        image: p2,
        bio: "Mr. S. Ganesh Kumar holds an MBA, B.Sc., Diploma in Banking, B.G.L., and C.A.I.I.B. " +
                       "qualifications. He served as the Executive Director of the Reserve Bank of India (RBI) " +
                       "for over 30 years, overseeing key areas such as Payment and Settlement Systems, " +
                       "strategic planning, external investments, and foreign exchange reserves management. " +
                       "\n\n" +
                       "His contributions extended to the Institute for Development and Research in Banking " +
                       "Technology and the establishment of institutions like the National Payments Corporation " +
                       "of India (NPCI), Reserve Bank Information Technology Private Limited (ReBIT), and " +
                       "Indian Financial Technology and Allied Services (IFTAS). " +
                       "\n\n" +
                       "He also played a significant role in shaping the Payment and Settlement Systems Act " +
                       "and was actively involved with the National Cyber Security Council of India. " +
                       "\n\n" +
                       "Additionally, he contributed to the ideation, design, and development of technology-driven " +
                       "retail payment systems, many of which are now operated by NPCI.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "THAMPI SURESH KUMAR",
        title: "CEO, Sunrise Hospital\nCochin, Kerala",
        image: p3,
        bio: "Mr. Suresh Kumar Thampi is a result-oriented Cluster CEO with an exceptional legacy of over " +
                        "three decades in the healthcare industry. Renowned for his strategic acumen and business " +
                        "development expertise, Mr. Thampi has played a pivotal role in transforming and scaling " +
                        "numerous prestigious hospitals across Kerala. " +
                        "\n\n" +
                        "With over three decades of unparalleled experience, he has been able to redefine strategic " +
                        "business development, leaving an indelible mark on some of Kerala's most renowned hospitals, " +
                        "including Amrita, Aster, Meitra Hospital, Baby Memorial Hospital, PK Das, and now " +
                        "Sunrise Group of Hospitals. " +
                        "\n\n" +
                        "A prominent figure in the healthcare sector in Kerala, Mr. Thampi's career is defined by " +
                        "a relentless commitment to excellence, innovation, and impactful results. His ability to " +
                        "navigate complex challenges and implement forward-thinking strategies has earned him " +
                        "widespread recognition and respect in the healthcare industry. " +
                        "\n\n" +
                        "As he continues to shape the future of healthcare delivery, Mr. Suresh Kumar Thampi " +
                        "aspires to become a beacon of inspiration and excellence in the industry.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "VINOD GEETHA SASIKUMAR",
        title: "West Market Unit Solutions lead for Data & AI\nAccenture, United States",
        image: p4,
        bio: "Vinod Geetha Sasikumar is a seasoned IT advisor with 27 years of experience. Having " +
                 "worked with global organizations like Accenture, EDS, and Cognizant, he brings a " +
                 "wealth of expertise to guide startup firms in navigating the complexities of technology. " +
                 "\n\n" +
                 "With a proven track record of driving innovation, improving efficiency, and reducing " +
                 "costs, Vinod helps entrepreneurs and founders make informed decisions on IT strategy, " +
                 "infrastructure, and operations. " +
                 "\n\n" +
                 "His extensive experience spans multiple domains, technologies, and industries, enabling " +
                 "him to provide actionable insights, pragmatic solutions, and hands-on guidance to " +
                 "startups. This ensures they leverage technology to achieve their business goals and " +
                 "stay competitive in the market.",
        social: { facebook: "#", linkedin: "#", twitter: "#", instagram: "#" }
    }
];

const Advesory = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2 }
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
        if (selectedMember) setSelectedMember(teamMembers[newIndex]);
    };

    const prevMember = () => {
        const newIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        setCurrentIndex(newIndex);
        if (selectedMember) setSelectedMember(teamMembers[newIndex]);
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
           <h1 className="network-title">
             Wisdom That Leads. <span>Action That Transforms</span>
           </h1>
   
           <div className="team-wrapper desktop-view-wrapper">
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
                   <img src={member.image} alt={member.name} />
                 </div>
               </motion.div>
             ))}
           </div>
   
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
                     alt={teamMembers[currentIndex].name}
                   />
                 </div>
   
                 {/* <div className="info-box">
                   <div className="name">
                     {teamMembers[currentIndex].name}
                   </div>
                   <div className="role">
                     {teamMembers[currentIndex].title}
                   </div>
                 </div> */}
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
       <AnimatePresence>
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
               <button className="modal-close" onClick={closeModal}>
                 ×
               </button>
   
               <div className="modal-body">
                 <div className="modal-left">
                   <img
                     src={selectedMember.image}
                     alt={selectedMember.name}
                     className="modal-image"
                   />
                 </div>
   
                 <div className="modal-right">
                   <h2 className="modal-name">
                     {selectedMember.name}
                   </h2>
   
                   <p className="modal-title">
                     {selectedMember.title}
                   </p>
   
                   <p className="modal-bio">
                     {selectedMember.bio}
                   </p>
                 </div>
               </div>
   
             <button className="side-arrow left" onClick={prevMember}>←</button>
   <button className="side-arrow right" onClick={nextMember}>→</button>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
};

export default Advesory;
