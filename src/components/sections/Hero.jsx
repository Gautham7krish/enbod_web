import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="hero-title">A Touch of Innovation</h1>
                <h2 className="hero-subtitle">The Future of Well-being</h2>

                <p className="hero-description">
                    Shaping industries, enhancing lives, and driving the next era of progress.
                    From breakthrough technologies to transformative solutions, we create
                    what's next.
                </p>
            </motion.div>
        </div>
    );
};

export default Hero;
