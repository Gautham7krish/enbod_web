import React from 'react';
import { motion } from 'framer-motion';
import GlowingSun from '../backgrounds/GlowingSun';
import './Healthcare.css';

const Healthcare = () => {
    return (
        <div className="healthcare-container">
            <motion.div
                className="healthcare-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
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

                <motion.div
                    className="healthcare-features"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >


                </motion.div>
            </motion.div>

            <motion.div
                className="healthcare-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="sun-container">
                    <GlowingSun />
                </div>
            </motion.div>
        </div>
    );
};

export default Healthcare;
