import React from 'react';
import { motion } from 'framer-motion';
import './BottomNav.css';
import homeIcon from '../../assets/home-blk.png';
import aboutIcon from '../../assets/about-blk.png';
import scopeIcon from '../../assets/scope-blk.png';
import teamIcon from '../../assets/team-blk.png';
import boardIcon from '../../assets/board-blk.png';
import contactIcon from '../../assets/contact-blk.png';

const BottomNav = ({ activeTab, onTabChange }) => {
    const navItems = [
        { id: 'HOME', icon: homeIcon, label: 'Home' },
        { id: 'ABOUT US', icon: aboutIcon, label: 'About' },
        { id: 'SCOPE', icon: scopeIcon, label: 'Ideas' },
        { id: 'TEAM', icon: teamIcon, label: 'Network' },
        { id: 'ADVISORY BOARD', icon: boardIcon, label: 'Advisory' },
        { id: 'CONTACT US', icon: contactIcon, label: 'Contact' },
    ];

    return (
        <nav className="bottom-nav">
            <div className="bottom-nav-container">
                {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                        <button
                            key={item.id}
                            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
                            onClick={() => onTabChange(item.id)}
                            aria-label={item.label}
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="bottom-nav-custom-icon"
                            />
                            {isActive && <motion.div className="active-indicator" layoutId="bubble" />}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
